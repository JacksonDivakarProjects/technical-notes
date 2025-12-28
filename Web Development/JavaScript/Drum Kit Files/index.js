
document.querySelector("h1").style.color="green";


var buttons=document.querySelectorAll("button");


var button_length=buttons.length;


// Setting sounds to click    
for(let i=0;i<button_length;i++){

    
    buttons[i].addEventListener('click',()=>{
        play_sound(buttons[i].innerHTML);
    })
    

}

//setting sound to keypress

for(let i=0;i<button_length;i++){

    
    buttons[i].addEventListener('keypress',(event)=>{
    play_sound(event.key);
    animateFunction(event.key);
    });
     
    

}

function animateFunction(key){
    var selectedButton=document.querySelector("."+key);
    selectedButton.classList.add("pressed");
    setTimeout(()=>{
        selectedButton.classList.remove("pressed");
    },100);

}



function play_sound(button_html){
    console.log(button_html);
    switch (button_html){
        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("Wrong Key");
    }

}