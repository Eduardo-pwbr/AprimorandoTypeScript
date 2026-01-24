const buttons = document.querySelector("button");

function handleClick(event: Event) {
    console.log(event);
} 

buttons?.addEventListener("pointerdown",handleClick);