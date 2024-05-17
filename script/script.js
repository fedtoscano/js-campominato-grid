
const startBtn = document.querySelector("button")

function gameStart(){
    const mainEl = document.querySelector("main");

    const gridEl = document.createElement("div");
    gridEl.id = "grid";

    mainEl.appendChild(gridEl);
    for (let index = 0; index < 100; index++) {
        const newSquare = document.createElement("article");
        newSquare.classList.add("square")
    
        newSquare.addEventListener('click', function(){
            this.classList.add("bg-light-blue")
            console.log(this.innerText)
        })
    
        const textContent = document.createElement("span")
        textContent.append(index+1)
    
        newSquare.appendChild(textContent)
        gridEl.appendChild(newSquare)
    }
}
startBtn.addEventListener('click', gameStart)