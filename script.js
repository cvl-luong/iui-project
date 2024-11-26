let ai = false;

document.querySelectorAll('.test-button').forEach(button => {
    button.addEventListener('click', function () {
        console.log(this.innerText);
        if (this.innerText == "TEST APPLICATION WITH AI") {
            ai = true;
        }
        console.log(ai)
        document.getElementById("button-container").style.display = "none";
        document.getElementById("main").style.display = "block";
    });
});

document.querySelectorAll('.category-card').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle("highlight");
    });
});

document.querySelectorAll('.search-button').forEach(button => {
    button.addEventListener('click', function () {
        document.getElementsByClassName("recipe-categories")[0].style.display = "none";
        console.log(document.getElementsByClassName("recipe-display")[0])
        document.getElementsByClassName("recipe-display")[0].style.display = "block";
    });
});

