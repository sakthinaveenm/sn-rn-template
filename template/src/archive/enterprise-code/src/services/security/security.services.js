const CryptoJS = require('crypto-js');
// Encrypt
const EncryptData = (key = 'SDDSA', data) => {
  const ciphertext = CryptoJS.AES.encrypt(data, key).toString();
  return ciphertext;
};

// Decrypt
const DecryptData = (key = 'SDDSA', data) => {
  const bytes = CryptoJS.AES.decrypt(data, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

module.exports = {
  EncryptData,
  DecryptData,
};
