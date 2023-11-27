// Slide through images every 20 minutes

// Dynamic question display
// JavaScript to control the quiz

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".climateQuestion");
  let currentQuestion = 0;
  let correctAnswers = 0;

  function showQuestion(index) {
    questions.forEach((question) => (question.style.display = "none"));
    questions[index].style.display = "block";
  }

  function validateAnswers() {
    const userAnswers = [];

    for (let i = 0; i < questions.length; i++) {
      const radios = questions[i].querySelectorAll('input[type="radio"]');
      let answered = false;

      radios.forEach((radio) => {
        if (radio.checked) {
          answered = true;
          userAnswers.push(radio.value);
          if (radio.value === getCorrectAnswer(i)) {
            correctAnswers++;
          }
        }
        radio.disabled = true;
      });

      if (!answered) {
        userAnswers.push(null);
      }
    }

    return userAnswers;
  }

  function getCorrectAnswer(questionIndex) {
    const correctAnswersMap = {
      0: "b",
      1: "c",
      2: "b",
      3: "c",
      4: "c",
    };
    return correctAnswersMap[questionIndex];
  }

  function showResultPage() {
    const userAnswers = validateAnswers();
    if (correctAnswers === questions.length) {
      alert("Congratulations! You answered all questions correctly!");
    } else {
      alert(
        "Oops! You did not answer all questions correctly. Please retake the quiz."
      );
      currentQuestion = 0;
      correctAnswers = 0;
      showQuestion(currentQuestion);
    }
  }

  document.querySelectorAll(".climateNext").forEach((button) => {
    button.addEventListener("click", function () {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
      }
    });
  });

  document.querySelectorAll(".climatePrev").forEach((button) => {
    button.addEventListener("click", function () {
      if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
      }
    });
  });

  document
    .getElementById("climateForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      showResultPage();
    });

  showQuestion(currentQuestion);
});
