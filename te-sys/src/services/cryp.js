import crypto from "crypto-js";

function getKey() {
  return process.env.REACT_APP_ENCRYPTKEY;
}

export function encrypt(value) {
  const passKey = getKey();
  const result = crypto.AES.encrypt(value, passKey).toString();
  const result1 = crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(result));
  return result1;
}

export function decrypt(value) {
  const passKey = getKey();
  try {
    const result1 = crypto.enc.Base64.parse(value).toString(crypto.enc.Utf8);
    const result = crypto.AES.decrypt(result1, passKey).toString(
      crypto.enc.Utf8
    );
    return result;
  } catch (error) {
    return error.message;
  }
}
