import scrapy

class WorldcupSpider(scrapy.Spider):
    name = "worldcup"
    allowed_domains = ["footballia.eu"]
    start_urls = ["https://footballia.eu/competitions/world-cup",
                  "https://footballia.eu/competitions/euro",
                  "https://footballia.eu/competitions/olympic-games"
                  ]

    def parse(self, response):
        # Loop through each match row
        for match_row in response.css('tr'):
            yield {
                'date': match_row.css('td.playing_date::text').get(),
                'match': match_row.css('td.match div.row span[itemprop="name"]::text').getall(),
                'competition': match_row.css('td.competition::text').get(),
                'stage': match_row.css('td.stage::text').get(),
            }
        # Extract the next page URL
        next_page = response.css('li.next a::attr(href)').get()

        # Check if there is a next page
        if next_page is not None:
            next_page_url = response.urljoin(next_page)
            yield scrapy.Request(next_page_url, callback=self.parse)