module RentersRightsHelper

  def getInfo(address,citystatezip,key="X1-ZWz18q9c4vs1e3_af1tq")
    url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}"
    puts url
    page=HTTParty.get(url)
    if (page.parsed_response["searchresults"]["message"]["code"] == "0")
      useCode=page.parsed_response["searchresults"]["response"]["results"]["result"]["useCode"]
      yearBuilt=page.parsed_response["searchresults"]["response"]["results"]["result"]["yearBuilt"]
      bedrooms=page.parsed_response["searchresults"]["response"]["results"]["result"]["bedrooms"]
      return [useCode,yearBuilt,bedrooms]
    else
      # Handle error here 
    end
  end

end 