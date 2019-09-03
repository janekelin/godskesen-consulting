function makeKey(seed){
  const key = seed && removeWhitespace(seed).toLowerCase();

  function removeWhitespace(str){
    const result = str && str.toString().split(' ').join(''); //typecheck, put seperate words in array, join words back in one string
    return result;
  }

  return key || Date.now().toString();
}

export default makeKey;