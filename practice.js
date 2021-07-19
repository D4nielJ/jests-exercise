const strLng = (str) => {
  strAr = str.split('');
  if (strAr.length > 10 || strAr.length < 1) {
    throw new Error('str doesnt meet the requirements');
  }
  return strAr.length;
}

const strReverse = (str) => {
  strAr = str.split('');
  reverseStr = strAr.reverse().join("");
  if (strAr.length > 10 || strAr.length < 1) {
    throw new Error('str doesnt meet the requirements');
  }
  return reverseStr;
}

const capitalize = (str) => {
  let capStr = [...str];
  capStr[0] = capStr[0].toUpperCase();
  if (capStr[0] === /[0-9]/) {
    throw new Error('Please enter a string that starts with a letter');
  }
  capStr = capStr.join('');
  return capStr;
}


exports.strLng = strLng;
exports.strReverse = strReverse;
exports.capitalize = capitalize;