import CryptoJS from "crypto-js";

const generateSecretKey = (secretKey: any) => {
  // Genera la chiave segreta utilizzando SHA-256 di CryptoJS
  const hashedKey: any = CryptoJS.SHA256(secretKey);

  return hashedKey;
};

export const decrypt = (encryptedData: any, secretKey: any): string => {
  secretKey = generateSecretKey(secretKey);

  console.log(secretKey);

  const iv = CryptoJS.enc.Hex.parse(encryptedData.iv);

  // Decrittografia con CryptoJS
  const decryptedText = CryptoJS.AES.decrypt(
    encryptedData.encryptedText,
    secretKey,
    { iv: iv }
  ); //.toString(CryptoJS.enc.Utf8);
  const wordArray = CryptoJS.lib.WordArray.create(decryptedText.words);

  // Converte il WordArray in una stringa
  const stringData = wordArray.toString(CryptoJS.enc.Utf8);
  console.log(stringData);

  return decryptedText;
};
