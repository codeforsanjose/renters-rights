module RentersRightsHelper

  def getInfo(address,citystatezip,key=$zws_id)
    url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}"
    puts url
    page=HTTParty.get(url)
    if (page.parsed_response["searchresults"]["message"]["code"] == "0")
      type=page.parsed_response["searchresults"]["response"]["results"]["result"]["localRealEstate"]["region"]["type"]
      useCode=page.parsed_response["searchresults"]["response"]["results"]["result"]["useCode"]
      yearBuilt=page.parsed_response["searchresults"]["response"]["results"]["result"]["yearBuilt"]
      street=page.parsed_response["searchresults"]["response"]["results"]["result"]["address"]["street"]
      return [type,useCode,yearBuilt,street]
    else 
      redirect_to '/renters-policies-general'
    end
  end

end 
