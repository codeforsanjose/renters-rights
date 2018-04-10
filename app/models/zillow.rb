class Zillow
  include HTTParty
  format :xml
  base_uri 'http://www.zillow.com/webservice'

  attr_accessor :zws_id, :http_timeout

# useCode, yearBuilt

  def initialize(zws_id="X1-ZWz18q9c4vs1e3_af1tq", http_timeout = nil)
    self.zws_id = zws_id
    self.http_timeout = http_timeout
    self.class.default_params "zws-id" => zws_id
  end

  def query(address="1609+Alum+Rock+Ave", citystatezip="SanJose%2C+CA")
    options = { query: { address: address, citystatezip: citystatezip } }
    results = self.class.get("/GetDeepSearchResults.htm", options)
    puts results
  end

end

zillow = Zillow.new("zillow")
puts zillow.query 
