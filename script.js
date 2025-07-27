window.onload = function () {
    let counter = document.getElementById("number");
    counter.value = 0;

    let decrement = document.getElementById("subtract");
    let increment = document.getElementById("add");
    let reset = document.getElementById("zero");

    decrement.addEventListener("click",() => {
        if(counter.value == 0){
            counter.value = 0;
        }else{
            counter.value -= 1;
        }
    })
    increment.addEventListener("click",() => {
        counter.value = Number(counter.value) + 1;
    })
    reset.addEventListener("click",() => {
        counter.value = 0;
    })
};
