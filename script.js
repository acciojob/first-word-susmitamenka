function firstWord(str) {
  // your code here
	 // Trim leading and trailing spaces
    str = str.trim();
    
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');
    
    // If no space is found, return the entire string
    return spaceIndex === -1 ? str : str.substring(0, spaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
