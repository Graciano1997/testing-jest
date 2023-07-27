const reverseString = string => string.split('').reverse().toString().replaceAll(',', '');

module.exports = reverseString;