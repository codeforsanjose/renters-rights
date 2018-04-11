module RentersRightsHelper

  def getInfo(address,citystatezip,key="X1-ZWz1fxpmkxyvij_8l13j")
    url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}"
    puts url
    page=HTTParty.get(url)
    if (page.parsed_response["searchresults"]["message"]["code"] == "0")
          binding.pry

      # if it only returns one address, this works  

      if page.parsed_response["searchresults"]["response"]["results"]
      type=page.parsed_response["searchresults"]["response"]["results"]["result"]["localRealEstate"]["region"]["type"]
      #
      page.parsed_response["searchresults"]["response"]["results"]["result"][0]["localRealEstate"]["region"]["type"]

      useCode=page.parsed_response["searchresults"]["response"]["results"]["result"]["useCode"]
      yearBuilt=page.parsed_response["searchresults"]["response"]["results"]["result"]["yearBuilt"]
      street=page.parsed_response["searchresults"]["response"]["results"]["result"]["address"]["street"]
      return [type,useCode,yearBuilt,street]
    else 
      redirect_to '/renters-policies-general'
    end
  end

end 
