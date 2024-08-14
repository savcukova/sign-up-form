const form = document.querySelector("form");

form.addEventListener("submit", (event)=> {
    event.preventDefault();

    const inputContainer = document.querySelectorAll(".input-container");
    
    inputContainer.forEach(input => {
        const textInput = input.querySelector("input");
        const errorIcon = input.querySelector("img");
        const errorMsg = input.querySelector(".error");

        if (textInput.value.trim() === ""){
            errorIcon.classList.remove("none");
            errorMsg.classList.remove("none");
        } else {
            errorIcon.classList.add("none");
            errorMsg.classList.add("none");
        };
    });
});

const inputs = document.querySelectorAll(".input-container input");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        const container = input.closest(".input-container");
        const errorIcon = container.querySelector("img");
        const errorMsg = container.querySelector(".error");

        if (input.value.trim() === "") {
            errorIcon.classList.remove("none");
            errorMsg.classList.remove("none");
        } else {
            errorIcon.classList.add("none");
            errorMsg.classList.add("none");
        }
    });
});

