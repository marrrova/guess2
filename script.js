let sound = new Audio;
sound.src = "sound.mp3"
sound.volume = 0.05
sound.play()

let n =  rand(); let s = 1; let flag = false; function get() {return document.getElementById('r')}
function guess() {
  let a = document.getElementById('v').value; d = parseInt(a, 10);
  if (s <= 3) {
    if (d === n) {get().innerText = "Ура! Ви перемогли!"; s = 4; flag = true;
    p.style.visibility = "visible"
    p.src = "img/win.gif";
  }
    else if (d < n) {get().innerText = "Число більше";
    document.getElementById('v').innerText='';
    }
    else if (d > n) {get().innerText = "Число менше";
    document.getElementById('v').innerText='';
    }
    s++; if (s > 3 && flag !== true) {get().innerText = n + ", Ви програли!"
    p.style.visibility = "visible"
}
  }
}
function rand(){return Math.floor(Math.random()*10)}
function game(){window.location.reload()}

let p = document.getElementById("picture");
console.log(p);
p.style.visibility = "hidden";