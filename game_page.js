player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

number1;
number2;

document.getElementById("player1display").innerHTML = player1_name + ": ";
document.getElementById("player2display").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "Question Turn : "+ player1_name;
document.getElementById("playeranswer").innerHTML = "Answer Turn : "+ player2_name;
function send() {
    sign = document.getElementById("sign").value;
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    question= number1 + sign + number2
    get_answer = number1+sign+number2;
    console.log("question = " + question);

    question = "<h4 id= 'question'> Q. "+ question + "</h4>";
    answerinput = "<br>Answer: <input type='text' id='answerinput' placeholder='Your Answer'></input>"
    checkbutton = "<br><br><button id='checkbutton' class='btn btn-info'>Check</button>"
    row = question+ answerinput+ checkbutton;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
    document.getElementById("sign").value= "";
}