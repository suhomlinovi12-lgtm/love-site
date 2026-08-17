const startDate = new Date("2025-07-08T20:00:00+03:00");

function updateTimer() {

    const now = new Date();

    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateTimer();

setInterval(updateTimer, 1000);

const photos = document.querySelectorAll(".photos img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.body.appendChild(lightbox);

const closeButton = document.querySelector(".close-lightbox");

if (photos.length && lightbox && lightboxImg) {

    photos.forEach(photo => {

        photo.addEventListener("click", function () {

            lightboxImg.src = this.src;

            lightbox.classList.add("show");

        });

    });

    function closeLightbox() {

        lightbox.classList.remove("show");

    }

    if (closeButton) {
        closeButton.addEventListener("click", closeLightbox);
    }

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    lightboxImg.addEventListener("click", function (event) {

        event.stopPropagation();

    });

}

const hearts = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["❤️","💕","💖","💗","💘","❤️‍🔥"];

    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 35) + "px";
    heart.style.animationDuration = (3 + Math.random() * 5) + "s";
    heart.style.transform = "rotate(" + (Math.random() * 360) + "deg)";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 400);

// MUSIC

const music = document.getElementById("music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicBtn.textContent = "⏸️ Выключить музыку";
        musicBtn.classList.add("playing");

    } else {

        music.pause();

        musicBtn.textContent = "🎵 Включить нашу песню";
        musicBtn.classList.remove("playing");

    }

});

// MEMORY BUTTON

const memoryBtn = document.getElementById("memory-btn");
const story = document.getElementById("story");

memoryBtn.addEventListener("click", function () {

    story.scrollIntoView({
        behavior: "smooth"
    });

});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

const intro = document.getElementById("intro");
const site = document.getElementById("site-content");
const startBtn = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");

if (startBtn && intro && quiz) {

    startBtn.addEventListener("click", () => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";
            quiz.style.display = "flex";

        }, 800);

    });

}

const title = document.getElementById("typing-title");

const text = "Для моей любимой ❤️";

let index = 0;

function typeTitle() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeTitle, 180);

    } else {

    document
        .getElementById("header-text")
        .classList.add("show");

}

}

const openLetter = document.getElementById("open-letter");
const letterWindow = document.getElementById("letter-window");

console.log("openLetter:", openLetter);
console.log("letterWindow:", letterWindow);

openLetter.addEventListener("click", function () {

    openLetter.style.display = "none";

    /*
     * Переносим окно непосредственно в body.
     * Это полностью убирает влияние родителей:
     * transform, position, filter, flex, overflow и т.д.
     */
    if (letterWindow.parentElement !== document.body) {
        document.body.appendChild(letterWindow);
    }

    letterWindow.style.display = "flex";
    letterWindow.classList.add("show");

});

const closeLetterButton = document.getElementById("close-letter");

closeLetterButton.addEventListener("click", function () {

    letterWindow.classList.remove("show");

    setTimeout(() => {
        openLetter.style.display = "inline-block";
    }, 500);

});

const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    timelineItems.forEach(item => {

        const position = item.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            item.classList.add("show");
        }

    });

});

const timeline = document.querySelector(".timeline");

window.addEventListener("scroll", () => {

    const position = timeline.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 200) {
        timeline.classList.add("line-show");
    }

});

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        const meteors = document.querySelectorAll(".meteor");

        meteors.forEach(meteor => {

            meteor.classList.remove("active");

        });


        setTimeout(() => {

            meteors.forEach(meteor => {

                meteor.classList.add("active");

            });

        }, 100);

    }

});

const quizTitle = document.getElementById("quiz-title");
const quizQuestion = document.getElementById("quiz-question");
const quizMessage = document.getElementById("quiz-message");
const quizBox = document.getElementById("quiz");
const questionContent = document.querySelector(".question-content");

const answerButtons = document.querySelectorAll(".answer");


const questions = [

    {
        question: "Когда началась наша история?",

        answers: [
            "8 июля 2025",
            "7 июня 2025",
            "24 мая 2025"
        ],

        correct: 0
    },


    {
        question: "Какого цвета у меня глаза?",

        answers: [
            "Голубые",
            "Зелёные",
            "Карие"
        ],

        correct: 2
    },


    {
        question: "Где мы мечтаем жить?",

        answers: [
            "В Париже",
            "В Никополе",
            "В Испании"
        ],

        correct: 2
    },


    {
        question: "Как мы хотим назвать нашего сына?",

        answers: [
            "Евгений",
            "Пётр",
            "Андрей"
        ],

        correct: 1
    },


    {
        question: "Что мы хотим приобрести в будущем?",

        answers: [
            "Автодом",
            "Яхту",
            "Змею"
        ],

        correct: 0
    }

];


let currentQuestion = 0;

function showQuestion() {

    questionContent.classList.add("hide");

    setTimeout(() => {

        const q = questions[currentQuestion];

        quizTitle.textContent =
            "❤️ Вопрос " + (currentQuestion + 1) + " из " + questions.length;

        quizQuestion.textContent = q.question;

        answerButtons.forEach((button, index) => {

            button.textContent = q.answers[index];

        });

        quizMessage.textContent = "";

        questionContent.classList.remove("hide");

    }, 350);

}


answerButtons.forEach((button,index)=>{


    button.addEventListener("click",()=>{


        if(index === questions[currentQuestion].correct){


            quizMessage.textContent =
            "❤️ Именно так...";


            quizMessage.className="success";

            setTimeout(() => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();

    }

}, 1000);

} else {


            quizMessage.textContent =
            "✨ Нет... Попробуй ещё раз.";


            quizMessage.className="error";


            quizBox.classList.add("shake");


            setTimeout(()=>{

                quizBox.classList.remove("shake");

            },450);


        }


    });


});


function finishQuiz(){

    quizBox.innerHTML = `

        <div class="quiz-success">

            <div class="success-heart">❤️</div>

            <h2>Ответы верны</h2>

            <p>
                Теперь я уверен...
                <br><br>
                Это действительно ты ❤️
            </p>

        </div>

    `;

    setTimeout(() => {

        const success = document.querySelector(".quiz-success");

        success.classList.add("leaving");

    }, 1800);


    setTimeout(() => {

        quiz.style.display = "none";

        site.style.display = "block";
        site.style.opacity = "1";

        typeTitle();

    }, 2500);

}


showQuestion();

const nextPage = document.getElementById("next-page");
const backPage = document.getElementById("back-page");

const coverPage = document.querySelector(".cover-page");
const letterPage = document.getElementById("letter-page");

nextPage.addEventListener("click", function () {

    coverPage.style.display = "none";
    letterPage.classList.add("active");

});

backPage.addEventListener("click", function () {

    letterPage.classList.remove("active");
    coverPage.style.display = "block";

});

// =========================================================
// СЕКРЕТНЫЕ ВИДЕО
// =========================================================

const secretCards = document.querySelectorAll(".video-secret-card");

secretCards.forEach(card => {

    const content = card.querySelector(".secret-card-content");
    const videoBox = card.querySelector(".secret-video");
    const video = card.querySelector("video");
    const close = card.querySelector(".secret-close");

    // Открываем секрет
    if (content && videoBox) {

        content.addEventListener("click", () => {

            videoBox.style.display = "flex";

            // Если внутри обычное видео — запускаем его
            if (video) {
                video.play();
            }

        });

    }

    // Закрываем секрет
    if (close && videoBox) {

        close.addEventListener("click", (event) => {

            event.stopPropagation();

            // Если внутри обычное видео — останавливаем его
            if (video) {
                video.pause();
                video.currentTime = 0;
            }

            videoBox.style.display = "none";

        });

    }

});


// =========================================================
// БОНУС
// =========================================================

const bonus = document.querySelector(".video-secret-bonus");

if (bonus) {

    const bonusButton = bonus.querySelector(".bonus-open");
    const bonusVideoBox = bonus.querySelector(".bonus-video");
    const bonusVideo = bonus.querySelector("video");
    const bonusClose = bonus.querySelector(".bonus-close");


    if (bonusButton && bonusVideoBox) {

        bonusButton.addEventListener("click", () => {

            bonusVideoBox.style.display = "flex";

            if (bonusVideo) {
                bonusVideo.play();
            }

        });

    }


    if (bonusClose && bonusVideoBox) {

        bonusClose.addEventListener("click", (event) => {

            event.stopPropagation();

            if (bonusVideo) {
                bonusVideo.pause();
                bonusVideo.currentTime = 0;
            }

            bonusVideoBox.style.display = "none";

        });

    }

}