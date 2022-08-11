var target = document.getElementById('target');
var targetBox = document.getElementById('target-box');
let pressed = 0;

// targetBox.addEventListener('click', mouseClicked);
// function mouseClicked (event)
// {
//     var xposition = (event.clientX - target.offsetLeft - target.offsetWidth/2);
//     var yposition = (event.clientY - target.offsetTop - target.offsetHeight/2);
//     target.style.transform = "translate("+ xposition + "px," + yposition + "px)";
//     console.log(event);
// }

if (targetBox)
{
    targetBox.addEventListener("click", (event)=>
    {
        var xposition = (event.clientX - target.offsetLeft - target.offsetWidth/2);
        var yposition = (event.clientY - target.offsetTop - target.offsetHeight/2);
        target.style.transform = "translate("+ xposition + "px," + yposition + "px)";
        
        console.log(event);
        setTimeout(function(){asd();},1000);
        
    })
    //target.style.transform = "translate("+ -0 + "%," + -0 + "%)";

    //target.style.transform = "translate("+ -50 + "%," + -60 + "%)";
}



function asd(){
    
        console.log("asdasd");
        pressed-0;
        target.style.transform = "translate("+ -50 + "%," + -60 + "%)";
    
}


var boxes= document.querySelectorAll('.box');


console.log(boxes)

boxes[0].addEventListener("click", ()=>{
    window.location.href="History.html";
})

boxes[1].addEventListener("click", ()=>{
    window.location.href="Modern.html";
})

boxes[2].addEventListener("click", ()=>{
    window.location.href="Rules.html";
})

boxes[3].addEventListener("click", ()=>{
    window.location.href="Minigame.html";
})

