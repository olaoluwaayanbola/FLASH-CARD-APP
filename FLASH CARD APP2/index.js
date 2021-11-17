const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
contentArray.forEach(divMaker);
function divMaker(text){
    var div = document.createElement("div")
    var h2_question = document.createElement("h2")
    var h2_answer = document.createElement("h2")

    div.className = 'flashcard'
    h2_question.setAttribute('style','padding:15px; margin-top:30px;   ')
    h2_question.innerHTML = text.my_question
    div.setAttribute("style","width: 370px;height:200px;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5); float:left;")
    flashcards.setAttribute("style","margin-left:70px; margin-top:20px; background:red;")
    h2_answer.setAttribute('stye','text-align:center;color = "green" ');

    h2_answer.setAttribute('id','f')
    h2_answer.innerHTML = text.my_answer;
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.setAttribute("id", 'a')
    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none"){
            h2_answer.style.display = 'block'   
        }else{
            h2_answer.style.display = 'none'
            
        }
    })
    flashcards.appendChild(div)
}
function delFlashcards() { 
    localStorage.clear();
    flashcards.innerHTML = " ";
    contentArray = [];
}
function hidecreateBox() {
    createBox.style.display = "none";
}
function showCreateCardBox() {
    createBox.style.display = "block";
}
function addFlashcard() {
    var flashcard_info = {
        'my_question':question.value,
        'my_answer':answer.value
    }
    contentArray.push(flashcard_info);
    localStorage.setItem('items',JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length - 1])
    question.value = " "
    answer.value = " "
}
alert("Please")