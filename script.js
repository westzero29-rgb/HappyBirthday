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

    if(window.innerWidth <= 768) return;


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

     if(window.innerWidth <= 768) return;

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

     if(window.innerWidth <= 768) return;

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

    if(window.innerWidth <= 768) return;

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

TO. 세상에서 제일 소중한 시원이

시원아 안녕! 놀랐지??
시원이가 좋아했으면 하는 마음으로 열심히 만들어봤어. 어때??

20대 첫 생일을 함께 보낸 것도 나에게는 너무나도 소중한 추억 중 하나였는데,
시원이의 21번째 생일도 내가 함께 축하해줄 수 있어서 너무 기뻐!!

원래였으면 만나서 하루 종일 재밌게 놀고 맛있는 것도 먹고,
이것저것 하면서 보냈을 텐데 시원이가 지금은 군대에 있으니까
같이 보내지 못한다는 게 내심 조금 아쉽더라.

그래서 괜히 생일을 그냥 평범하게 보내지는 않을까 하는 마음에,
군대에서도 시원이가 충분히 행복한 생일을 보낼 수 있는 방법이 없을까 계속 생각하다가
이 사이트를 만들게 됐어.

만들면서 정말 우리 추억이 1년 사이에 이렇게나 많이 쌓였다는 걸 새삼 또 느끼게 됐어.
사진 하나하나를 보는데 시원이 옆에서 전보다 훨씬 밝아지고 행복하게 웃고 있는
내 모습이 너무 보기 좋더라.

항상 고마운 게 너무 많아, 시원아.

작년이 어쩌면 내가 가장 많이 무너지고 힘들었던 시기였는데,
늘 내 옆에서 내가 시들지 않게 예쁜 꽃처럼 다시 피어날 수 있게 해줘서 고마워.

시원이를 만난 후로는 내 자신을 사랑하는 법도 조금씩 알게 된 것 같아.
평생 남들을 위해 주기만 했지, 나를 사랑해 본 적은 거의 없었는데
시원이 덕분에 처음으로 그런 마음을 배운 것 같아.

그래서 내가 받은 사랑만큼 앞으로는 늘 시원이 옆에서
변함없이 행복만 주는 사람이 될게.

앞으로 우리 둘이 함께 보내는 시간 속에는 여러 우여곡절도 분명 생기겠지만,
그때마다 그 위기들을 새로운 기회로 바꿔 나갈 수 있게
내가 항상 옆에서 함께할게.

우리 둘 다 꼭 멋지게 성장해서 각자가 이루고 싶은 꿈도 다 이루고,
더없이 행복하게 살자.

그리고 나도 시원이 옆에서 언제나 떳떳한 버팀목이 되어줄 수 있는 사람이 되도록
더 많이 노력할게.

내 가장 큰 행복이 되어줘서 정말 고마워, 시원아.

오래오래 함께하자. 🤍

앞으로도 힘든 일이 생기면 혼자 다 이겨내려고만 하지 않았으면 좋겠어.
가끔은 영락없는 애처럼 찡찡대도 괜찮아.

나는 힘듦을 나눈다고 해서 슬픔이 두 배가 된다고 생각하지 않아.
오히려 함께 나누면 같이 해결할 방법을 찾을 수 있고,
다시 일어설 수 있는 힘도 생긴다고 믿어.

그러니까 늘 다른 사람들의 버팀목만 되어주려고 하지 말고,
가끔은 내게도 기대 줬으면 좋겠어.

언제나 시원이 편인 사람,
그리고 누구보다 시원이를 사랑하는 사람이 옆에 있다는 걸 잊지 않았으면 좋겠다.

그리고 마지막으로...

21번째 생일 진심으로 너무너무 축하해.

태어나줘서 정말 고마워, 시원아.

앞으로도 내 가장 큰 행복으로 오래오래 내 옆에 있어줘.

사랑해, 시원아. 🤍

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

   let speed = 60;

   if(i > letterText.length - 80){
    speed = 90;
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

        document.body.style.overflow = "hidden";

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");
    document.body.style.overflow = "";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");
        document.body.style.overflow = "";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");
        document.body.style.overflow = "";

    }

});

const finalMessage = document.getElementById("finalMessage");

window.addEventListener("scroll", () => {

    const rect = finalMessage.getBoundingClientRect();

    if(rect.top < window.innerHeight - 100){

        finalMessage.classList.add("show");

    }

});

function setRealVh(){

    document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
    );

}

setRealVh();

window.addEventListener("resize", setRealVh);