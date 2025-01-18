const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const allAnswers = document.querySelectorAll(".faq-answer");
    const currentAnswer = question.nextElementSibling;
    const allQuestionIcons = document.querySelectorAll(".faq-question img");
    const currentQuestionIcon = question.querySelector("img");
    if (currentAnswer.style.display === "block") {
      currentAnswer.style.display = "none";
      currentQuestionIcon.src = "./assets/images/icon-plus.svg";
      currentQuestionIcon.alt = "plus icon";
    } else {
      allAnswers.forEach((answer) => (answer.style.display = "none"));
      allQuestionIcons.forEach((icon) => {
        icon.src = "./assets/images/icon-plus.svg";
        icon.alt = "plus icon";
      });
      currentAnswer.style.display = "block";
      currentQuestionIcon.src = "./assets/images/icon-minus.svg";
      currentQuestionIcon.alt = "minus icon";
    }
  });
});
