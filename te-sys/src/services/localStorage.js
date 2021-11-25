import * as crypto from "./cryp";
const keyTesys = "tesys";

// Estructura jason con la información del usuario en el local storage
// {
//   id: data.id,
//   userName: data.userName,
//   role: {
//     id: data.role._id,
//     roleName: data.role.roleName,
//   },
//   person: {
//     id: data.person?.id,
//     fullName: data.person?.fullName,
//   },
//   access_token: data.token.access_token,
//   expires_in: data.token.expires_in,
// }

const setLocalStorage = (key, value) => {
  const cipher = crypto.encrypt(JSON.stringify(value));
  localStorage.setItem(key, cipher);
};

const getLocalStorage = (key) => {
  const cipher = localStorage.getItem(key);
  if (cipher) {
    return JSON.parse(crypto.decrypt(cipher));
  }
  return null;
};

const getToken = () => {
  const ls = getLocalStorage(keyTesys);
  if (ls) {
    return ls.access_token;
  }
};

const getWorkerName = () => {
  const ls = getLocalStorage(keyTesys);
  if (ls) {
    return ls.person?.fullName;
  }
};

const getRoleName = () => {
  const ls = getLocalStorage(keyTesys);
  if (ls) {
    return ls.user?.roleName;
  }
}


export default { setLocalStorage, getToken, getWorkerName, getRoleName };
