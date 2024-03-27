const nameForm = document.querySelector(".js-nameForm"),
    nameInput = nameForm.querySelector("input"),
    sayHello = document.querySelector(".js-sayHello");

const SAVE_NAME = "userName",
    SHOWING_CLASS = "showing";

function saveName(text){
    sessionStorage.setItem(SAVE_NAME, text);
}

function loadName(){
    const currentUser = sessionStorage.getItem(SAVE_NAME);
    if (currentUser){
        sayHello.innerText = 'Hi, ${currentUser}';
        sayHello.classList.add(SHOWING_CLASS);
    }
}

nameForm.addEventListener("submit",function(event){
    event.preventDefault();
    saveName(nameInput.value);
    loadName();
});

loadName();