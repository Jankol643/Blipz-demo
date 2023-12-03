import * as utils from "./utils.js";
import * as player from "./player.js";

function setup() {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    utils.makeMenuResponsive();
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      utils.makeNavBarSticky();
    };
  });
  player.initPlayer();
}

setup();