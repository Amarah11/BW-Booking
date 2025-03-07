const btn = document.querySelectorAll('button');
btn.forEach((element) => {
  // const img = btn.querySelector('img');
  element.onmouseover = function() {
    element.querySelector('img').src = "images/btn-icon-active.svg";
  }
  element.onmouseout = function() {
    element.querySelector('img').src = "images/cover-btn-icon.svg";
  }
});