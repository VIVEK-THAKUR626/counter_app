window.onload = function () {
    let counter = document.getElementById("number");
    counter.textContent = 0;

    let decrement = document.getElementById("subtract");
    let increment = document.getElementById("add");
    let reset = document.getElementById("zero");

    decrement.addEventListener("click",() => {
        if(counter.textContent === 0){
            counter.textContent = 0;
        }else{
            counter.textContent -= 1;
        }
    })
    increment.addEventListener("click",() => {
        counter.textContent = Number(counter.textContent) + 1;
    })
    reset.addEventListener("click",() => {
        counter.textContent = 0;
    })
};
