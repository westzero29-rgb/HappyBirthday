// =============================
// ELEMENTS
// =============================

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");
const bgm = document.getElementById("bgm");

const fadeSections = document.querySelectorAll(".fadeSection");


// =============================
// START
// =============================

startBtn.addEventListener("click", () => {

    clearInterval(fireworkInterval);
    fireworkInterval = null;
    fireworkStarted = false;
    particles = [];

    setTimeout(()=>{

    bgm.volume = 0.35;
    bgm.play();

    intro.style.opacity="0";

},500);
    setTimeout(() => {

        intro.style.display = "none";

        main.style.display = "block";

        document.getElementById("fireworks").style.display = "block";

        setTimeout(()=>{

    

  },300);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        showSections();

       

    },800);

});




// =============================
// SCROLL FADE
// =============================

function showSections(){

    fadeSections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",showSections);

showSections();




// =============================
// GALLERY PARALLAX
// =============================

const galleryImages = document.querySelectorAll(".gallery img");

window.addEventListener("scroll",()=>{

    const scroll = window.scrollY;

    galleryImages.forEach((img,index)=>{

        const speed = (index % 5) * 3;

        img.style.transform =
        `translateY(${scroll * (speed*0.02)}px)`;

    });

});




// =============================
// CINEMATIC ZOOM
// =============================

const memoryImages = document.querySelectorAll(".memory img");

window.addEventListener("scroll",()=>{

    memoryImages.forEach(img=>{

        const rect = img.getBoundingClientRect();

        const center = window.innerHeight / 2;

        const distance = Math.abs(center - rect.top);

        const scale = 1.08 - distance / 4000;

        img.style.transform = `scale(${scale})`;

    });

});




// =============================
// LETTER APPEAR
// =============================

const titles = document.querySelectorAll(
    ".ending h2, .credits h2, #finalMessage h2"
);

titles.forEach(title=>{

    const text = title.textContent;

    title.textContent = "";

    [...text].forEach(letter=>{

        const span = document.createElement("span");

        span.innerHTML = (letter === " ") ? "&nbsp;" : letter;
        span.style.opacity = 0;

        span.style.display = "inline";
        span.style.transform = "translateY(20px)";
        span.style.transition = ".5s";

        title.appendChild(span);

    });

});

function revealLetters(){

    titles.forEach(title=>{

        const rect = title.getBoundingClientRect();

        if(rect.top < window.innerHeight-150){

            [...title.children].forEach((span,index)=>{

                setTimeout(()=>{

                    span.style.opacity = 1;
                    span.style.transform = "translateY(0px)";

                },index*35);

            });

        }

    });

}

window.addEventListener("scroll",revealLetters);

revealLetters();




// =============================
// ENDING GLOW
// =============================

const ending = document.querySelector(".ending h2");

window.addEventListener("scroll",()=>{

    const rect = ending.getBoundingClientRect();

    if(rect.top < window.innerHeight){

        ending.style.textShadow =
        "0 0 25px rgba(255,255,255,.45)";
    }

});




// =============================
// PRELOAD
// =============================

const preload = [];

for(let i=1;i<=85;i++){

    const img = new Image();

    img.src = `images/photo${String(i).padStart(2,"0")}.jpg`;

    preload.push(img);

}
// =============================
// STORY SCROLL ANIMATION
// =============================

const storyImages = document.querySelectorAll(".storyGrid img");

function revealStoryImages() {

    storyImages.forEach((img, index) => {

        const rect = img.getBoundingClientRect();

        if (rect.top < window.innerHeight - 80) {

            setTimeout(() => {

                img.classList.add("show");

            }, index * 80);

        }

    });

}

window.addEventListener("scroll", revealStoryImages);

revealStoryImages();



// =============================
// STORY PARALLAX
// =============================

window.addEventListener("scroll", () => {

    storyImages.forEach((img, index) => {

        const speed = (index % 4 + 1) * 0.08;

        const rect = img.getBoundingClientRect();

        const offset = (window.innerHeight - rect.top) * speed;

        if (rect.top < window.innerHeight && rect.bottom > 0) {

            img.style.transform =
                `translateY(${offset * 0.12}px) scale(1)`;

        }

    });

});



// =============================
// STORY HOVER CINEMA
// =============================

storyImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = ".45s";
        img.style.transform += " scale(1.04)";
        img.style.filter = "brightness(1.15)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.filter = "brightness(1)";
        img.style.transform = img.style.transform.replace(" scale(1.04)", "");

    });

});
// =============================
// CHAPTER 3 ANIMATION
// =============================

const filmImages = document.querySelectorAll(".filmStrip img");

function revealFilmImages() {

    filmImages.forEach((img, index) => {

        const rect = img.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            setTimeout(() => {
                img.classList.add("show");
            }, index * 90);

        }

    });

}

window.addEventListener("scroll", revealFilmImages);

revealFilmImages();


// =============================
// FILM PARALLAX
// =============================

window.addEventListener("scroll", () => {

    filmImages.forEach((img, index) => {

        const rect = img.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {

            const speed = ((index % 3) + 1) * 0.06;
            const move = (window.innerHeight - rect.top) * speed;

            img.style.transform =
                `translateY(${move * 0.15}px) scale(1)`;

        }

    });

});


// =============================
// KEN BURNS EFFECT
// =============================

filmImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = "transform 6s ease";
        img.style.transform += " scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transition = "transform .5s";

        img.style.transform =
            img.style.transform.replace(" scale(1.08)", "");

    });

});
// =============================
// CHAPTER 4 ANIMATION
// =============================

const finalImages = document.querySelectorAll(".finalGrid img");

function revealFinalImages() {

    finalImages.forEach((img, index) => {

        const rect = img.getBoundingClientRect();

        if (rect.top < window.innerHeight - 120) {

            setTimeout(() => {

                img.classList.add("show");

            }, index * 100);

        }

    });

}

window.addEventListener("scroll", revealFinalImages);

revealFinalImages();


// =============================
// FINAL CINEMA EFFECT
// =============================

window.addEventListener("scroll", () => {

    finalImages.forEach((img, index) => {

        const rect = img.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {

            const move = (window.innerHeight - rect.top) * 0.08;

            img.style.transform =
                `translateY(${move}px) scale(1.02)`;

        }

    });

});


// =============================
// FINAL GLOW
// =============================

finalImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = ".5s";

        img.style.boxShadow =
            "0 0 60px rgba(255,255,255,.18)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.boxShadow =
            "0 25px 60px rgba(0,0,0,.5)";

    });

});
// =============================
// STARS
// =============================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random()*100+"%";

    star.style.top = Math.random()*100+"%";

    star.style.animationDuration =
        2+Math.random()*6+"s";

    star.style.animationDelay =
        Math.random()*5+"s";

    star.style.opacity =
        Math.random();

    star.style.width =
        Math.random()*3+1+"px";

    star.style.height =
        star.style.width;

    stars.appendChild(star);

}
// =============================
// LETTER TYPING
// =============================

const letterText = `

시원아.

생일 정말 축하해.

오늘이라는 하루가
세상 누구보다 행복한 하루였으면 좋겠어.

우리 함께했던 모든 순간들이
나에게는 평생 잊지 못할 소중한 추억이야.

앞으로도 지금처럼
많이 웃고,

많이 사랑하고,

오래오래 함께하자.

항상 내 가장 큰 행복이 되어줘서 고마워.

Happy Birthday.

I Love You.

Always with you.

- From. Seoyeong -

`;

const typingTarget = document.getElementById("typingText");
typingTarget.textContent = "";

let letterStarted = false;

function startTyping(){

    if(letterStarted) return;

    const rect = typingTarget.getBoundingClientRect();

    if(rect.top < window.innerHeight - 150){

        letterStarted = true;
        typingTarget.textContent = "";

        let i = 0;

        function typing(){

  
if(i < letterText.length){

    typingTarget.textContent += letterText.charAt(i);

    let speed = 55;

    if(i > letterText.length - 80){
        speed = 110;
    }

    i++;

    setTimeout(typing, speed);

}else{

    setTimeout(() => {

        document.querySelector(".creditsContent").style.animation =
            "credits 25s linear forwards";

    },0);

}
        }

        typing();

    }

}

window.addEventListener("scroll",startTyping);


// =============================
// CREDIT MUSIC FADE
// =============================

const credits = document.querySelector(".credits");

window.addEventListener("scroll",()=>{

    const rect = credits.getBoundingClientRect();

    if(rect.top < window.innerHeight){

        const volume = Math.max(
            0,
            (rect.bottom/window.innerHeight)/2
        );

        bgm.volume = Math.min(volume,.35);

    }

});
// =============================
// LOADER
// =============================

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
console.log(loader);
console.log(progressBar);
console.log(progressText);

let progress = 0;

const loading = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";

    if(progress >= 100){

        clearInterval(loading);

        setTimeout(()=>{

            loader.style.opacity = "0";

            setTimeout(()=>{
                loader.style.display = "none";
            },1000);

        },500);

    }

},25);
window.addEventListener("scroll", () => {

    if (fireworkStarted) return;

    const ending = document.querySelector(".ending");
    const rect = ending.getBoundingClientRect();

    if (rect.top < window.innerHeight / 2) {

        fireworkStarted = true;

        fireworkInterval = setInterval(() => {

            createFirework(
                Math.random() * canvas.width,
                Math.random() * canvas.height * 0.5
            );

        }, 500);

    }

});

// =============================
// REPLAY
// =============================

const replayBtn = document.getElementById("replayBtn");


window.addEventListener("scroll",()=>{

    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight-150){

        replayBtn.classList.add("show");

    }

});

replayBtn.addEventListener("click", () => {

    // 음악 처음부터
    bgm.pause();
    bgm.currentTime = 0;

    // 편지 초기화
    letterStarted = false;
    typingTarget.textContent = "";

    // 크레딧 초기화
    document.querySelector(".creditsContent").style.animation = "none";

    // 폭죽 초기화
    fireworkStarted = false;
    particles = [];

    clearInterval(fireworkInterval);
    fireworkInterval = null;

    // 메인 숨기기
    document.getElementById("fireworks").style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    main.style.display = "none";

    // 인트로 다시 표시
    intro.style.display = "block";
    intro.style.opacity = "1";

    // 영상 처음부터
    const introVideo = document.getElementById("introVideo");
    introVideo.currentTime = 0;
    introVideo.play();

    // 맨 위로
    window.scrollTo(0,0);

});

// =============================
// HEARTS (CINEMATIC)
// =============================

const heartBox = document.getElementById("heartContainer");

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-40px";

    // 더 작은 크기
    heart.style.fontSize = (10 + Math.random() * 12) + "px";

    // 훨씬 연한 색
    heart.style.color = "rgba(255, 210, 225, 0.28)";

    // 흐리게
    heart.style.filter = "blur(0.5px)";

    // 천천히
    heart.style.transition = "12s ease-in-out";

    heartBox.appendChild(heart);

    requestAnimationFrame(() => {

        const x = (Math.random() - 0.5) * 180;

        heart.style.transform =
            `translate(${x}px,-120vh) rotate(${Math.random()*40-20}deg)`;

        heart.style.opacity = "0";

    });

    setTimeout(() => heart.remove(), 12000);

}, 1800);

// =============================
// FIREWORKS
// =============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

let fireworkStarted = false;
let fireworkInterval = null;


function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function createFirework(x, y){

    for(let i=0;i<80;i++){

        particles.push({

            x,
            y,

            dx:(Math.random()-0.5)*8,
            dy:(Math.random()-0.5)*8,

            life:100,

            size:2+Math.random()*3

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        p.x += p.dx;
        p.y += p.dy;

        p.dy += 0.03;

        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${p.life/100})`;
        ctx.fill();

        if(p.life<=0){
            particles.splice(index,1);
        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

// =============================
// LIGHTBOX
// =============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

});

const finalMessage = document.getElementById("finalMessage");

window.addEventListener("scroll", () => {

    const rect = finalMessage.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){

        finalMessage.classList.add("show");

    }

});