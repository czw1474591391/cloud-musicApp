function remSize() {
  let devicewidth = document.documentElement.clientWidth || window.innerHeight;
  if (devicewidth >= 750) {
    //固定手机端
    devicewidth = 750;
  }
  if (devicewidth <= 320) {
    devicewidth = 320;
  }
  document.documentElement.style.fontSize = devicewidth / 7.5 + "px";
  document.querySelector("body").style.fontSize = 0.3 + "rem";
  //1rem = 100px
}
remSize();
window.onresize = function () {
  remSize();
};
