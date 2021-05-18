const button = document.getElementById("genNew")

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    colorID.innerHTML = "#" + randomColor;
  }
  
  button.addEventListener("click", setBg);
console.log("button", button);