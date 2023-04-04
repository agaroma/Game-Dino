const dino = document.getElementById("dino"); // отримуємо елементи посилання типу
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});  // нажаття кнопки не важливо якої

function jump () {
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")  
    }, 300)
}  // якщо класу нема він видаляє і добавляє обновляє через та створює через 300 мілісекунд

let isAlive = setInterval (function() {  // setInterval визиває функцію через інтервал часу
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));   // парсить з строкового елемента і отримуємо числом
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 20 && cactusLeft > 0 && dinoTop >= 150){
        alert("GAME OVER!!!")  // алерт виводить іконку
    }
}, 10)