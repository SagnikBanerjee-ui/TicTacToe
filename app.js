let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".message");
let newGameBtn = document.querySelector("#new-btn");
let turn0= true;
let clickCount=0;

const winPatterns = [
    // Rows
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    
    // Columns
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    
    // Diagonals
    [0, 4, 8], 
    [2, 4, 6]  
];  

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked ");
        clickCount++;
        if(turn0){
            box.innerText="O";
            box.setAttribute("id","color0");
            turn0=false;
        }
        else{
            box.innerText="X";
            box.setAttribute("id","colorX");
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        if(clickCount===9 && msg.innerText===""){
            msg.innerText="Draw";
        }
    });
});



const resetGame=()=>{
    turn0=true;
    clickCount=0;
    //enable all boxes
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }

    //remove the winner 
    msg.innerText="";
};


const checkwinner = ()=>{
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                msg.innerText=`Winner : ${pos1Val}`;

                // after finding the winner disable all the boxes
                for(box of boxes){
                    box.disabled=true;
                }
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);