window.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", (ev) => {
        ev.preventDefault()

        let height = parseInt(document.getElementById("hight").value),
            weight = parseInt(document.getElementById("weight").value),
            result = document.getElementById("result");
        
        if (height === '' || weight <= 0 || height <= 0 || weight === '') {
            result.innerHTML = 'ОШИБКА';
            result.classList.add('error')
        } else {
               result.classList.remove("error");
            let calc = (weight / ((height * height) / 10000)).toFixed(2);
            result.innerHTML = `<span>${calc}</span>`
        }
    })


























})