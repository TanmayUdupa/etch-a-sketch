container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++)
{
    square = document.createElement('div');
    square.classList.add("square");
    square.style.width = '40px';
    square.style.height = '40px';
    container.appendChild(square);
}

squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "black";
    })
})