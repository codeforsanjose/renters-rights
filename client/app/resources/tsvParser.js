export const tsvParse = (str) => {
  const lines = str.split("\n");
  let resourceKeys = lines[1].split("\t");
	let resourceList = [];

	for (let i = 2; i < lines.length; i++) {
	  let resource = {};
		let currentLine = lines[i].split("\t");

		for (let j = 0; j < resourceKeys.length; j++) {
		  resource[resourceKeys[j]] = currentLine[j];
		}

		resourceList.push(resource);
	}

	return resourceList;
}
