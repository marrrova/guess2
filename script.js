let sound = new Audio();
sound.src = "sound.mp3"
sound.volume = 0.05
sound.play()

let n = rand();
//створюємо випадкове число
let s = 1;
//ми фіксуємо скільки разів гравець натискав
let flag = false;
//флажок для фіксації виграшу чи поразки
function get() {
return document.getElementById('r')
}
//взяли текст відповіді
function guess() {
//основна функція гри
  let a = document.getElementById('v').value;
  //записую відповідь гравця 
  d = parseInt(a, 10);
//збереження відповідей як числа (10-десяткова система числення можна просто написати Number(a))
  if (s <= 3) {
    //якщо кількість відповідей менша рівна трьом
    if (d === n) {
      get().innerText = "Ура! Ви перемогли!";
      //якщо співпадає
      s = 4;
      //вихід
      flag = true;
      //флажок піднято
      p.style.visibility = "visible"
      //показуєм картинку
      p.src = "img/win.gif";
      //підтягуємо картинку
    }
    else if (d < n){
      get().innerText = "Число більше";
      //підказка
      document.getElementById('v').innerText = '';
      //відповідь витераеться
    }
    else if (d > n) {
      get().innerText = "Число менше";
      //підказка
      document.getElementById('v').innerText = '';
      //відповідь витераеться
    }
    s++;
    //нарощуємо 
    if (s > 3 && flag !== true) {
      get().innerText = n + ", Ви програли!"
      p.style.visibility = "visible"
      //програш
    }
  }
}
function rand() {
  return Math.floor(Math.random() * 10)
  //викідання випадкового числа
}

function game() {
  window.location.reload()
  //перезавантаження сторінки
}


let p = document.getElementById("picture");

p.style.visibility = "hidden";
//захоплюєм картинку і робимо її не видимою