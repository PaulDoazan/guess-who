import "../assets/style.css"

const areas = document.querySelectorAll(".click-area")
const questions = document.querySelectorAll(".question-label")
const answer = document.querySelector(".final-double-face")

areas.forEach(card => card.addEventListener("pointerdown", flipACard))
questions.forEach(question => question.addEventListener("pointerdown", revealAnswer))
if (answer) answer.addEventListener("pointerdown", onAnswerDown)

function flipACard(e: any) {
    if (e.target.parentElement.children[1].classList.contains("hidden")) {
        e.target.parentElement.children[1].classList.remove("hidden")
        e.target.parentElement.children[0].classList.add("onTop");
    } else {
        e.target.parentElement.children[1].classList.add("hidden");
        e.target.parentElement.children[0].classList.remove("onTop");
    }

    let count: number = 0;
    areas.forEach(area => {
        if (area.parentElement && area.parentElement.children[1].classList.contains("hidden")) {
            count++
        }
    })

    if (count >= areas.length - 1) {
        if (answer) {
            answer.parentElement?.classList.remove("unclickable")
            answer.classList.remove("invisible");
        }
    } else {
        if (answer) {
            answer.parentElement?.classList.add("unclickable")
            answer.classList.add("invisible");
        }
    }
}

function revealAnswer(e: any) {
    e.target.parentElement.children[1].classList.remove("invisible");
}

function onAnswerDown(e: any) {
    console.log(e.target.parentElement);

    if (e.target.parentElement.children[0].classList.contains("final-hidden")) {
        e.target.parentElement.children[0].classList.remove("final-hidden")
    } else {
        e.target.parentElement.children[0].classList.add("final-hidden");
    }
}