const cardItems = document.querySelectorAll(".card-item");
const badge = document.querySelector(".badge");
const readAllBtn = document.getElementById("btnAll");

function updateBadge() {
    const countUnread = document.querySelectorAll(".unread").length;

    badge.textContent = countUnread;
    if (countUnread === 0) {
        badge.style.display = "none";
    } else {
        badge.style.display = "inline-block";
    }
}

function removeDot(cardItem) {
    const dot = cardItem.querySelector(".dot");
    if (dot) {
        dot.remove();
    }
}

cardItems.forEach((cardItem) => {
    cardItem.addEventListener("click", () => {
        cardItem.classList.remove("unread");
        removeDot(cardItem);
        updateBadge();
    });
});

readAllBtn.addEventListener("click", () => {
    cardItems.forEach((cardItem) => {
        cardItem.classList.remove("unread");
        removeDot(cardItem);
    });
    updateBadge();
});
