const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const allAnswers = document.querySelectorAll(".faq-answer");
    const currentAnswer = question.nextElementSibling;
    allAnswers.forEach((answer) => {
      if (answer !== currentAnswer) {
        answer.style.display = "none";
      }
    });
    currentAnswer.style.display = "block";
  });
});
