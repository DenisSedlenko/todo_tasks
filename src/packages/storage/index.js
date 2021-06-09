let storage;

async function setItem(name, value) {
  if (typeof storage.setItem !== "function") {
    throw 'Storage should have setItem method';
  }

  storage.setItem(name, value);
}

async function getItem(name) {
  if (typeof storage.getItem !== "function") {
    throw 'Storage should have getItem method';
  }

  return storage.getItem(name);
}

export default { setItem, getItem };

export const  setStorage = (instance) => {
  storage = instance;
}
