container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++)
{
    square = document.createElement('div');
    square.classList.add("square");
    square.style.width = '40px';
    square.style.height = '40px';
    square.style.backgroundColor = "white";
    container.appendChild(square);
}

number = document.querySelector(".number");
number.textContent = "Number of squares per side: 16";

squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        if (square.style.backgroundColor === "white")
        {
            r = Math.floor(Math.random() * (256));
            g = Math.floor(Math.random() * (256));
            b = Math.floor(Math.random() * (256));
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        else if (square.style.backgroundColor !== "rgb(0, 0, 0)")
        {
            console.log(square.style.backgroundColor);
            back = square.style.backgroundColor;
            let r = "";
            let g = "";
            let b = "";
            let i = 4;
            while (back[i] != ',')
            {
                r += back[i++];
            }  
            r *= 1; 
            i++;
            while (back[i] != ',')
            {
                g += back[i++];
            }  
            g *= 1; 
            i++;
            while (back[i] != ')')
            {
                b += back[i++];
            }  
            b *= 1; 
            r -= (10 / 100) * r;
            g -= (10 / 100) * g;
            b -= (10 / 100) * b;
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    })
})

function change_squares()
{
    container = document.querySelector(".container");
    container.innerHTML = "";
    let value;
    while (true)
    {
        value = prompt("PLease enter the number (<= 100)");
        value = value * 1;
        if (isNaN(value))
        {
            alert("Please enter a number");
        }
        else if (value < 1 || value > 100)
        {
            alert("Please enter a number from 1 to 100");
        }
        else
        {
            break;
        }
    }

    for (let i = 0; i < value * value; i++)
    {
        square = document.createElement('div');
        square.classList.add("square");
        let num = 640 / value;
        square.style.width = `${num}px`;
        square.style.height = `${num}px`;
        square.style.backgroundColor = "white";
        container.appendChild(square);
    }

    squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            if (square.style.backgroundColor === "white")
            {
                r = Math.floor(Math.random() * (256));
                g = Math.floor(Math.random() * (256));
                b = Math.floor(Math.random() * (256));
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            else if (square.style.backgroundColor !== "rgb(0, 0, 0)")
            {
                console.log(square.style.backgroundColor);
                back = square.style.backgroundColor;
                let r = "";
                let g = "";
                let b = "";
                let i = 4;
                while (back[i] != ',')
                {
                    r += back[i++];
                }  
                r *= 1; 
                i++;
                while (back[i] != ',')
                {
                    g += back[i++];
                }  
                g *= 1; 
                i++;
                while (back[i] != ')')
                {
                    b += back[i++];
                }  
                b *= 1; 
                r -= (10 / 100) * r;
                g -= (10 / 100) * g;
                b -= (10 / 100) * b;
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        })
    })

    number = document.querySelector(".number");
number.textContent = `Number of squares per side: ${value}`;
}

function clear_screen()
{
    squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        if (square.style.backgroundColor !== "white")
        {
            square.style.backgroundColor = "white";
        }
    })
}

grid_change = document.querySelector(".grid");

grid_change.addEventListener('click', change_squares);

clear = document.querySelector(".clear");
clear.addEventListener('click', clear_screen);
