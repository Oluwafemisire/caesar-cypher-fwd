 import constant from "./constant.js";

export default {
  
  encode: function encode(message, offset) {
    if (offset < 0){
      return "Please select a positive offset number";
    }
    let encodedMessage = "";
    for (let digit in message) {
      if (constant.charList.includes(message[digit])) {
        let Char = constant.charDict[message[digit]];
        let remainder = offset % constant.charList.length;
        let newCharCode = Char + remainder;
        if (newCharCode >= constant.charList.length) {
          newCharCode = newCharCode - constant.charList.length;
        }
        let newChar = constant.charList[newCharCode];
        encodedMessage = encodedMessage + newChar;
      } else {
        let errorMessage =
          "The character " + message[digit] + " is not supported";
        return errorMessage;
      }
    }
    return encodedMessage;
  },
  decode: function decode(message, offset) {
    if (offset < 0){
      return 'Please select a positive offset number'
    }
    let decodedMessage = "";
    for (let digit in message) {
      if (constant.charList.includes(message[digit])) {
        let Char = constant.charDict[message[digit]];
        let remainder = offset % constant.charList.length;
        let newCharCode = Char - remainder;
        if (newCharCode < 0) {
          newCharCode = constant.charList.length + newCharCode;
        }
        let newChar = constant.charList[newCharCode];
        decodedMessage = decodedMessage + newChar;
      } else {
        let errorMessage =
          "The character " + message[digit] + " is not supported";
        return errorMessage;
      }
    }
    return decodedMessage;
  },
};
