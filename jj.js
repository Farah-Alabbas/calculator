let b = "";
let nb = 0;
input = document.querySelector(".inp")

function display(num) {
    input.value += num;

}
function Clear() {
    input.value = "";
}
function Undoo() {

    input.value = input.value.slice(0, -1);
}
function operator(op) {
    b = op;
    nb = parseInt(input.value);
    Clear();

}
function calc() {
    if (b === '+') {
        nb += parseInt(input.value);
        input.value = nb;
    }
    else if (b === '*') {
        nb *= parseInt(input.value);
        input.value = nb;
    }
    else if (b === '-') {
        nb -= parseInt(input.value);
        input.value = nb;
    }
    else if (b === '/') {
        nb /= parseInt(input.value);
        input.value = nb;
    }

}