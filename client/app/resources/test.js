// import React from "react";
// import { resources } from './resources.js';

export const tsvParse = (str) => {
  const lines = str.split("\n");
  let resourceKeys = lines[1].split("\t");
	let result = [];

	for (let i = 2; i < lines.length; i++) {
	  let obj = {};
		let currentLine = lines[i].split("\t");

		for (let j = 0; j < resourceKeys.length; j++) {
		  obj[resourceKeys[j]] = currentLine[j];
		}

		result.push(obj);
	}

	return result;
}
