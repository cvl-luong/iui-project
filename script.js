document.querySelectorAll('.test-button').forEach(button => {
    button.addEventListener('click', function () {
        console.log(this.innerText);
        document.getElementById("button-container").style.display = "none";
    });
});