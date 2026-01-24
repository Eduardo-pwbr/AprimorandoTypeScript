"use strict";
const buttons = document.querySelector("button");
function handleClick(event) {
    console.log(event);
}
buttons?.addEventListener("pointerdown", handleClick);
