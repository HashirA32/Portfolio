let images = document.querySelectorAll(".image");
let Usercount = document.querySelector("#Your-count");
let Compcount = document.querySelector("#Copm-count");
let note = document.querySelector(".notice");

let myCount = 0;
let computerCount = 0;

// computer Choice Section

let genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];

    let comp = Math.floor(Math.random() * 3);

    return options[comp];
}

// User Choice Section

images.forEach((img) => {
 img.addEventListener("click" , ()=>{
   
    const UChoice = img.getAttribute("id");
    
    playGame(UChoice);
    genCompChoice();
 }) 
});

// Comparison Section

let playGame = (UChoice) => {
    let CChoice = genCompChoice();


    if(UChoice === CChoice){
        note.style.backgroundColor = "#0A111F";
        note.innerText = "Match Tie! Choice was same.";
    }

    else if(UChoice === "Rock"){
        if(CChoice === "Paper"){
            note.style.backgroundColor = "#C51B26";
            note.innerText = `Computer Win!  ${CChoice} beats your ${UChoice}`;
            computerCount++;
            Compcount.innerText = `${computerCount}`;
            
        }
        else{
            note.style.backgroundColor = "#008000";
            note.innerText = `User Win!  your ${UChoice} beats ${CChoice}`;
            myCount++;
            Usercount.innerText = `${myCount}`;
        }
    }

    else if(UChoice === "Paper"){
        if(CChoice === "Scissor"){
            note.style.backgroundColor = "#C51B26";
            note.innerText = `Computer Win!  ${CChoice} beats your ${UChoice}`;
            computerCount++;
            Compcount.innerText = `${computerCount}`;
        }
        else{
            note.style.backgroundColor = "#008000";
            note.innerText = `User Win!  your ${UChoice} beats ${CChoice}`;
            myCount++;
            Usercount.innerText = `${myCount}`;
        }
    }

    else if(UChoice === "Scissor"){
        if(CChoice === "Rock"){
            note.style.backgroundColor = "#C51B26";
            note.innerText = `Computer Win!  ${CChoice} beats your ${UChoice}`;
            computerCount++;
            Compcount.innerText = `${computerCount}`;
        }
        else{
            note.style.backgroundColor = "#008000";
            note.innerText = `User Win!  your ${UChoice} beats ${CChoice}`;
            myCount++;
            Usercount.innerText = `${myCount}`;
        }
    }
    

}
