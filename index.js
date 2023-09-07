const areas = document.querySelectorAll(".click-area")
areas.forEach(card => card.addEventListener("click", flipACard))

function flipACard(e) {
    if (e.target.parentElement.children[1].classList.contains("hidden")) {
        e.target.parentElement.children[1].classList.remove("hidden")
        e.target.parentElement.children[0].classList.add("onTop");

    } else {
        e.target.parentElement.children[1].classList.add("hidden");
        e.target.parentElement.children[0].classList.remove("onTop");
    }
}