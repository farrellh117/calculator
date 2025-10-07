/*
    1. Ambil input ekspresi matematika dan tampilkan ke layar
    2. Buat fungsi operasi matematika:
        - Tambah
        - Kurang
        - Kali
        - Bagi
    3. Tampilkan hasil perhitungan di bagian bawah ekspresi matematika yang telah diinputkan
    4. Ketika tombol "=" diklik maka hasil perhitungan akan ditampilkan di bagian layar ekspresi matematika yang kemudian bisa dilanjutkan untuk operasi ekspresi matematika yang berikutnya
*/

const btn = document.querySelectorAll("button");
const calc = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const delBtn = document.querySelector("#delete")
const calcDisplay = document.querySelector("#calc-display");
const resultDisplay = document.querySelector("#result-display");

function appendToDisplay(input) {
    calcDisplay.innerHTML += input;
    const regex = /(\d+)\s*([+\-*/])\s*(\d+)$/;

    if (regex.test(calcDisplay.innerHTML)) {
        calculate();
    }
}

function calculate() {
    try {
        const expression = calcDisplay.innerHTML;

        if (expression) {
            resultDisplay.innerHTML = eval(expression);
        } else {
            resultDisplay.innerHTML = "0";
        }
    } catch (error) {
        resultDisplay.innerHTML = "Error";
    }
}

function backspace() {
    calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0,-1);
    calculate();
}

function clearDisplay() {
    calcDisplay.innerHTML = "";
    resultDisplay.innerHTML = "0"
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        const btnValue = btn[i].value;
        if (btnValue === "=") return;
        appendToDisplay(btnValue);
    })
}

calc.addEventListener("click", () => {
    try {
        calcDisplay.innerHTML = resultDisplay.innerHTML;
        resultDisplay.innerHTML = "";
    } catch (error) {
        resultDisplay.innerHTML = "Error"
    }
})

clearBtn.addEventListener("click", clearDisplay);
delBtn.addEventListener("click", backspace);