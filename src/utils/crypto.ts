import CryptoJS from "crypto-js";

const generateSecretKey = (secretKey: any) => {
  // Genera la chiave segreta utilizzando SHA-256 di CryptoJS
  const hashedKey: any = CryptoJS.SHA256(secretKey);

  return hashedKey;
};

export const decrypt = (encryptedData: any, secretKey: any): any => {
  secretKey = generateSecretKey(secretKey);
  const decrypted = CryptoJS.AES.decrypt(
    encryptedData.encryptedText,
    secretKey,
    { iv: CryptoJS.enc.Hex.parse(encryptedData.iv) }
  );
  const originalString = decrypted.toString(CryptoJS.enc.Utf8);
  return originalString;
};
