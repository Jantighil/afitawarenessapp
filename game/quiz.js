let answerArray = ["c", "b", "c", "c"];

function checkAnswer(answer) {
  for (let i = 0; i < answerArray.length; i++) {
    if (answer === answerArray[i]) {
      alert("Correct!");
      document.getElementById("nextButton").disabled = false;
    } else {
      alert("Incorrect. Please try again.");
    }
  }
}

function submitBtn() {
  checkAnswer(["c", "b", "c", "c"]);
}

function nextQuestion() {
  window.location.href = "question2.html";
}
