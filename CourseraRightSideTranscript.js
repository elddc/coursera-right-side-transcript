// ==UserScript==
// @name         Coursera Right-Side Transcript
// @namespace    elddc
// @version      1.0
// @description  Place the transcript on the right side of the screen.
// @author       Elddc
// @match        https://www.coursera.org/learn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coursera.org
// @grant        none
// ==/UserScript==

/* reposition transcript */
const styles = document.createElement('style');
styles.innerHTML = `
#video-player-row {
  position: fixed;
  left: 0;
  width: 60vw;
  top: 24vh;
}
#video-player-row > div {
  height: 100%;
}
#video-player-row + div {
  position: relative;
  left: 58vw;
  width: 40vw;
}
div[data-testid="tabs-root"] {
  position: relative;
  top: 0;
  z-index: 1;
}
div[data-testid="silent-select-field"] {
  position: fixed;
  top: calc(25vh + 400px);
  left: 65px;
}
`;
document.head.appendChild(styles);
