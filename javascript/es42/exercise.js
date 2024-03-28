const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

saveInLocalStorage("user", user)