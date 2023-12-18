import scrapy

class QuoteSpider(scrapy.Spider):
    name = "quote"
    allowed_domains = ["quotes.toscrape.com"]
    start_urls = ["https://quotes.toscrape.com"]

    custom_settings = {
        'FEED_FORMAT': 'json',
        'FEED_URI': 'output.json',
    }

    quotes_list = []  # Initialize an empty list to store quotes

    def parse(self, response):
        quotes = response.css('span.text')

        for index, quote in enumerate(quotes):
            current_quote = quote.css('span.text::text').get()
            current_tags = quote.css('.tags a.tag::text').getall()

            # Append the current quote and tags to the lists
            self.quotes_list.append(current_quote)

            # Print until the 8th element
            if index < 8:
                print(f"Element {index + 1}: {current_quote}")

            # Yield the current data
            yield {
                'quote': current_quote,
                'tags': current_tags,
            }

    def closed(self, reason):
        # After the spider is closed, you can print or further process the collected data
        print("Quotes List:", self.quotes_list)
