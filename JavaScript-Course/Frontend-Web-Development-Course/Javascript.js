/* 1.1 Javascript 


*/




const htmlBody = document.querySelector('body');

const randomClickFunction = () => {

    const colors = ["green", "red", "purple", "orange", "yellow", "blue", "black", "white", "pink", "grey", "lime", "gold"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    
    htmlBody.style.backgroundColor = randomColor;
    console.log('The user clicked and set the background color to: ' + randomColor);
}

randomClickFunction();
htmlBody.onclick = randomClickFunction;

// JavaScript Variables 



