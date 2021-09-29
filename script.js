let time = 10;
const h1 = document.querySelector(".countdown");

const counter = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time > 0) resolve(time--);
      else resolve("HAPPY INDEPENDENCE DAY");
    }, 1000);
  });
  return promise;
};
counter()
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  })
  .then((data) => {
    h1.textContent = data;
    return counter();
  });
