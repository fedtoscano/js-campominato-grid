const gridEl = document.getElementById("grid")

for (let index = 0; index < 100; index++) {
    const newSquare = document.createElement("article");
    newSquare.classList.add("square")

    const textContent = document.createElement("span")
    textContent.append(index+1)

    newSquare.appendChild(textContent)
    gridEl.appendChild(newSquare)

}