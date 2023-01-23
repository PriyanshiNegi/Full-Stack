// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const StringOriginal = "    Hello , I am Priyanshi I am a Salesforce Developer    ";
console.log("String without leading and preceeding spaces removed : \n", StringOriginal);
console.log("String with leading and preceeding spaces removed : \n", StringOriginal.trim());