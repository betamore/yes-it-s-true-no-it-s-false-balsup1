function boolToWord( bool ){
  // Write your code here
  if (bool == true) {
    return "Yes";
  } 
  else if (bool == false) {
    return "No";
  }
  else {
    return "Input must be a boolean value - true or false";
  }
}


module.exports = boolToWord;
