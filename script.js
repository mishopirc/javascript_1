const form = document.querySelector("#form1");
const input = document.querySelector("#username");
const error = document.querySelector("#error");
const ul = document.querySelector(".ul");

form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent linkze gadasvla
    error.textContent = "";

    //shevqmnat axali elementi 'li' da davamatot 'ul'-shi tu igi carieli araa;
    // trim() punqcia spacebs ashorebs strings
    if (input.value.trim()) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        const li = document.createElement("li");

        checkbox.addEventListener("change", (event) => {
            //toggle punqcia iseve mushaobs rogorc qvemot mocemuli punqcia tu monishnulia amatebs class-s tu ara aklebs.
            //span.classList.toggle("line");

            if (event.target.checked) {
                event.target.parentNode.classList.add("line"); //parentNode-it vwvdebit mshobels;
            } else {
                event.target.parentNode.classList.remove("line");
            }
        });

        span.textContent = input.value;

        li.appendChild(checkbox);
        li.appendChild(span);
        ul.appendChild(li);

        input.value = "";
        input.focus();
    } else {
        error.textContent = "empty value try again";
    }
});
