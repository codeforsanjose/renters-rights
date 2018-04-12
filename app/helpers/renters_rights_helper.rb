module RentersRightsHelper

  def getInfo(address,citystatezip,key="X1-ZWz1fxpmkxyvij_8l13j")
    url="http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=#{key}&address=#{address}&citystatezip=#{citystatezip}"
    puts url
    page=HTTParty.get(url)
    binding.pry
    if (page.parsed_response["searchresults"]["message"]["code"] == "0")
      # if it only returns one address, do this 
      if page.parsed_response["searchresults"]["response"]["results"]["result"]["localRealEstate"]["region"]["type"]
        type=page.parsed_response["searchresults"]["response"]["results"]["result"]["localRealEstate"]["region"]["type"]
        useCode=page.parsed_response["searchresults"]["response"]["results"]["result"]["useCode"]
        yearBuilt=page.parsed_response["searchresults"]["response"]["results"]["result"]["yearBuilt"]
        street=page.parsed_response["searchresults"]["response"]["results"]["result"]["address"]["street"]
        return [type,useCode,yearBuilt,street]
      # if it returns multiple addresses 
      elsif page.parsed_response["searchresults"]["response"]["results"]["result"][0]["localRealEstate"]["region"]["type"]
        type=page.parsed_response["searchresults"]["response"]["results"]["result"][0]["localRealEstate"]["region"]["type"]
        useCode=page.parsed_response["searchresults"]["response"]["results"]["result"][0]["useCode"]
        yearBuilt=page.parsed_response["searchresults"]["response"]["results"]["result"][0]["yearBuilt"]
        street=page.parsed_response["searchresults"]["response"]["results"]["result"][0]["address"]["street"]
        return [type,useCode,yearBuilt,street]
      end 
    else 
      redirect_to '/renters-policies-general'
    end
  end

end 
