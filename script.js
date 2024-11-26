let ai = false;

function uncheckAll() {
    let input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == 'checkbox') {
            input[i].checked = false;
        }
    }
}

uncheckAll();



document.querySelectorAll('.test-button').forEach(button => {
    button.addEventListener('click', function () {
        if (this.innerText == "TEST APPLICATION WITH AI") {
            ai = true;
            checkCheckBoxes();
            selectDinner();
        }
        console.log(ai)
        document.getElementById("button-container").style.display = "none";
        document.getElementById("main").style.display = "block";
        listenerRecipes();
    });
});

function checkCheckBoxes() {
    document.querySelectorAll(".checkbox-ai").forEach(el => {
        el.checked = true;
    })
}

function selectDinner() {
    document.querySelectorAll(".category-ai").forEach(el => {
        el.click();
    })
}

document.querySelectorAll('.category-card').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle("highlight");
    });
});

function listenerRecipes() {

    document.querySelectorAll('.search-button').forEach(button => {
        if (ai) {
            button.addEventListener('click', function () {
                document.getElementsByClassName("recipe-categories")[0].style.display = "none";
                document.getElementsByClassName("recipe-display-ai")[0].style.display = "block";
            });
        } else {
            button.addEventListener('click', function () {
                document.getElementsByClassName("recipe-categories")[0].style.display = "none";
                document.getElementsByClassName("recipe-display")[0].style.display = "block";
            });

        }
    });


}