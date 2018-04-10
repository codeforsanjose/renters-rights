module RentersRightsHelper

  def getInfo(address,citystatezip,key=kws_id)
    url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}"
    puts url
    page=HTTParty.get(url)
    if (page.parsed_response["searchresults"]["message"]["code"] == "0")
      type=page.parsed_response["searchresults"]["response"]["results"]["result"]["localRealEstate"]["region"]["type"]
      useCode=page.parsed_response["searchresults"]["response"]["results"]["result"]["useCode"]
      yearBuilt=page.parsed_response["searchresults"]["response"]["results"]["result"]["yearBuilt"]
      return [type,useCode,yearBuilt]
    else
      # Handle error here 
    end
  end

end 
