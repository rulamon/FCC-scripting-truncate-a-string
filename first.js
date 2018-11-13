function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
  	let newStr = `${str.slice(0, num)}...`;
  	return newStr;
  } else {
  	return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));