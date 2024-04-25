let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let hiden = document.querySelector(".winner");

let turnO = true;
let count = 0;

let winnigpats = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let disable = () => {
    for(let box of boxes) {
    box.disabled = true;
    count = 0;
    }
};

let enable = () => {
    for(let box of boxes) {
    box.disabled = false;
    count = 0;
    }
};


let check = () => {
    for(let pats of winnigpats){
        let pos1Val = boxes[pats[0]].innerText;
        let pos2Val = boxes[pats[1]].innerText;
        let pos3Val = boxes[pats[2]].innerText;

     if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            hiden.classList.remove("hide");
            hiden.innerText = `Congratulation! player  ${pos1Val} winner`;
            disable();
          
        }

     }
    } 
};

let draw = () => {
    if(count===9 && !iswinner){
        hiden.innerText = "Game Draw!";
        hiden.classList.remove("hide");
        disable();

    }
}


boxes.forEach((box)  => {
     box.addEventListener("click", () => {
       if(turnO){
        box.innerText = "O";
        turnO = false;
       } else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       
       count++;     
       iswinner = check();
       if(count===9 && !iswinner){
        draw();
       }
     });
});


resetbtn.addEventListener ("click", () => {
    for(let box of boxes){
      box.innerText = "";
      hiden.classList.add("hide");
      turnO = true;
      enable();
    }
  });

