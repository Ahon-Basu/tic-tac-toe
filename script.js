let box = document.querySelectorAll("button");
box[2].style.borderRight = "none";
box[5].style.borderRight = "none";
box[8].style.borderRight = "none";
box[8].style.borderBottom = "none";
box[7].style.borderBottom = "none";
box[6].style.borderBottom = "none";

box[3].style.marginTop = "-15px";
box[4].style.marginTop = "-15px";
box[5].style.marginTop = "-15px";

box[6].style.marginTop = "-15px";
box[7].style.marginTop = "-15px";
box[8].style.marginTop = "-15px";

const enable = () => {
  for (var btn of box) {
    btn.disabled = false;
  }
}

let playerO = true;
let winning_turn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
box.forEach((btn) => {
  btn.addEventListener("click", function() {
    if(playerO) {
      btn.innerHTML = "O";
      playerO = false;
    } else {
      btn.innerHTML = "X";
      playerO = true;
    }
    
    btn.disabled = true;
    
    checkwinner();
  })
})

const disable = () => {
  for (var btn of box) {
    btn.disabled = true;
  }
}

let span = document.querySelector("span");
let msg = document.querySelector(".msg");

const checkwinner = () => {
  for (var each of winning_turn) {
    let a = box[each[0]].innerText;
    let b = box[each[1]].innerText;
    let c = box[each[2]].innerText;
    
    if (a != "", b != "", c != "") {
      if(a === b && b === c) {
        console.log('winner');
        msg.style.visibility = "visible";
        disable();
        if(playerO) {
          span.innerText = "Player X";
        } else if(playerO == false) {
          span.innerText = "Player O";
        }
      }
    }
  }
}


document.querySelector(".close").addEventListener("click", function() {
  msg.style.display = "none";
})