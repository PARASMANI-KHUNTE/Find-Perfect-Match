const img1 =
  "anime-girl-katana-demon-horn-8k-wallpaper-uhdpaper.com-227@3@a.jpg";
const img2 = "anime-girl-red-eye-tattoo-8k-wallpaper-uhdpaper.com-733@3@a.jpg";
const img3 =
  "assassins-creed-shadows-yasuke-samurai-naoe-shinobi-8k-wallpaper-uhdpaper.com-9@3@c.jpg";
const img4 =
  "pokemon-ball-house-anime-digital-art-4k-wallpaper-uhdpaper.com-68@1@o.jpg";
const img5 = "gundam-anime-4k-wallpaper-uhdpaper.com-724@3@a.jpg";
const img6 =
  "devil-anime-girl-wings-horn-8k-wallpaper-uhdpaper.com-732@3@a.jpg";

const img7 = "yasuke-assassins-creed-shadows-samurai-4k-wallpaper-uhdpaper.com-16@3@c.jpg"
const img8 = "pascal-debrunner-43rqnV_ZfC4-unsplash.jpg"
const img9 = "ac5ee27f3963171192724286dfda7e8e.jpg"
const img10 = "bd890313e4124d64040e528c43e2dd95.jpg"



const winner = "Victory - Sound Effect (Download) (192).mp3"
const looser = "The Price is Right Losing Horn - Sound Effect (HD) (192).mp3"







const images = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10];

let bt1 = "";
let bt2 = "";
let bt3 = "";
let bt4 = "";
let bt5 = "";
let bt6 = "";

let test = document.getElementById("btn1");
let test1 = document.getElementById("btn2");
let test2 = document.getElementById("btn3");
let test3 = document.getElementById("btn4");
let test4 = document.getElementById("btn5");
let test5 = document.getElementById("btn6");



let x = ''

function prevset(){
    let array = [bt1,bt2,bt3,bt4,bt5,bt6]
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    x = array[0]
    let prev = document.getElementsByClassName("prev")[0]
    let setimg =  document.createElement("img")
    setimg.className = "m-4  rounded-xl"
    setimg.style.width = "300px"
    setimg.src = `./Assest/${x}`
    prev.appendChild(setimg)
    
    return x
}




function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
    bt1 = array[0]
    bt2 = array[1]
    bt3 = array[2]
    bt4 = array[3]
    bt5 = array[4]
    bt6 = array[5]
  return {
    bt1,bt2,bt3,bt4,bt5,bt6
  };
}

let score = document.getElementById("score")
let i = 0 ;

let wonbtn = document.getElementById("wonbtn").addEventListener("click",()=>{
    location.reload()
})
let lostbtn = document.getElementById("lostbtn").addEventListener("click",()=>{
    location.reload()
})

// Get the audio element and its source element
const audio = document.getElementById("backgroundMusic");
const source = document.getElementById("audioSource");

// Function to change the source of the audio
function changeBackgroundMusic(newSource) {
  source.src = `./Assest/${newSource}`; // Set the new source
  audio.load(); // Reload the audio element to apply changes
}




function check(a){
    let won = document.querySelector(".won")
    let lost = document.querySelector(".lost")
    if(a == x ){
        console.log("Yessss")
        setTimeout(() => {
            
            won.style.display = "block"; 
            changeBackgroundMusic(winner)
        }, 1000);
        
        
    }else{
        console.log("Nooo")
        setTimeout(() => {
            lost.style.display = "block"; 
            changeBackgroundMusic(looser)
            
        }, 1000);
        
    }
}

function start(){

}
shuffleArray(images)
prevset()

test.addEventListener("click", () => {
    test.innerHTML = ''
    test.className = " w-24 h-24 rounded   hover:shadow-xl ";
    test.style.backgroundImage =
    `url('./Assest/${bt1}')`;
    disableBtn()
    check(bt1)
});

test1.addEventListener("click", () => {
    test1.innerHTML = ''
    test1.className = " w-24 h-24 rounded   hover:shadow-xl ";
    test1.style.backgroundImage =
    `url('./Assest/${bt2}')`;
    disableBtn()
    check(bt2)
});

test2.addEventListener("click", () => {
    test2.innerHTML = ''
    test2.className = " w-24 h-24 rounded   hover:shadow-xl ";
    test2.style.backgroundImage =
    `url('./Assest/${bt3}')`;
    disableBtn()

    check(bt3)
});

test3.addEventListener("click", () => {
    test3.innerHTML = ''
    test3.className = " w-24 h-24 rounded   hover:shadow-xl ";
    test3.style.backgroundImage =
    `url('./Assest/${bt4}')`;
    disableBtn()

    check(bt4)
});

test4.addEventListener("click", () => {
    test4.innerHTML = ''
    test4.className = " w-24 h-24 rounded   hover:shadow-xl ";
    test4.style.backgroundImage =
    `url('./Assest/${bt5}')`;
    disableBtn()

    check(bt5)
});

test5.addEventListener("click", () => {
    test5.innerHTML = ''
    test5.className = " w-24 h-24 rounded   hover:shadow-xl ";
    test5.style.backgroundImage =
    `url('./Assest/${bt6}')`;
    disableBtn()

    check(bt6)
});

function disableBtn(){
    let buttons = document.getElementsByTagName("button")
    buttons.disabled = true
}