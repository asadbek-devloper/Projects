/* "use strict";

const logoFunc = () => {
  const loadText = document.querySelector(".loading-text");
  const logoCon = document.querySelector(".logo-container");
  let load = 0;

  let int = setInterval(blurring, 100);

  function blurring() {
    load++;
    if (load > 99) {
      clearInterval(int);
      logoCon.classList.add("display-none");
    }
    loadText.textContent = `${load}%`;
  }
};

(() => {
  //   logoFunc();
})();
 */
