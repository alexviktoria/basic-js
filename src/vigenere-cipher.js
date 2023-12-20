const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
     if(message === "" || key === ""){
      throw new Error();
    }

    const upperCaseMessage = message.toUpperCase();
    const upperCaseKey = key.toUpperCase();
    const encryptedChars = [];

    let keyIndex = 0;
    for (let i = 0; i < upperCaseMessage.length; i++) {
      const messageChar = upperCaseMessage[i];
      if (/^[A-Z]$/.test(messageChar)) {
        const keyChar = upperCaseKey[keyIndex % upperCaseKey.length];

        const messageCharCode = messageChar.charCodeAt(0) - 65;
        const keyCharCode = keyChar.charCodeAt(0) - 65;

        const encryptedCharCode = (messageCharCode + keyCharCode) % 26 + 65;
        const encryptedChar = String.fromCharCode(encryptedCharCode);
        encryptedChars.push(encryptedChar);

        keyIndex++;
      } else {
        encryptedChars.push(messageChar);
      }
    }

    return this.isDirect ? encryptedChars.join('') : encryptedChars.reverse().join('');
  };

    decrypt(message, key) {
        if(message === "" || key === ""){
        throw new Error();
      }

      const upperCaseMessage = message.toUpperCase();
      const upperCaseKey = key.toUpperCase();
      const decryptedChars = [];

      let keyIndex = 0;
      for (let i = 0; i < upperCaseMessage.length; i++) {
        const messageChar = upperCaseMessage[i];
        if (/^[A-Z]$/.test(messageChar)) {
          const keyChar = upperCaseKey[keyIndex % upperCaseKey.length];

          const messageCharCode = messageChar.charCodeAt(0) - 65;
          const keyCharCode = keyChar.charCodeAt(0) - 65;

          const decryptedCharCode = (messageCharCode - keyCharCode + 26) % 26 + 65;
          const decryptedChar = String.fromCharCode(decryptedCharCode);
          decryptedChars.push(decryptedChar);

          keyIndex++;
        } else {
          decryptedChars.push(messageChar);
        }
      }

      return this.isDirect ? decryptedChars.join('') : decryptedChars.reverse().join('');
    }
  };

module.exports = {
  VigenereCipheringMachine
};
