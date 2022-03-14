/*
The Quiz file consists of two functions:

quizChecker and stickerLoader
quizChecker is loaded only in the point pages while stickerLoader is loaded only on the route main page

quizChecker contains the element IDs for the correct answer in the releveant point.html file
If the radial button for that element is selected, the relevant localStorage variable is set to be 1 and a modal is opened telling the user that they are correct + showing them the sticker. 
If the wrong radial button is selected, it is removed from localStorage and the "incorrect" modal is shown.

stickerLoader then checks to see the status of all the localStorage variables for that route and for each variable that is a 1, it will display the associated sticker as a background image inside the previously blank sticker slot



 key is just used to differentiate the objects - mostly used for the quizChecker as the key number listed here should be used for the button onClick function inside each point file.

 id is the id found in the route.html sticker section for each point

 background is a link to the picture found in the assets folder

 correct is the local storage item. When the correct radial is selected on the corresponding point page, this will be 1

*/

stickerLoader = () => {
  const points = [
    {
      key: 0,
      id: "hambrook-sticker-yShapedTree",
      background: "url(../../assets/Picture1.png)",
      correct: "hambrook-yShapedTree-correct",
    },
    {
      key: 1,
      id: "hambrook-sticker-worrellsOak",
      background: "url(../../assets/Picture2.png)",
      correct: "hambrook-worrellsOak-correct",
    },
  ];

  for (let i = 0; i < points.length; i++) {
    const point = document.getElementById(points[i].id);
    console.log(points[i]);

    if (localStorage.getItem(points[i].correct) == "1") {
      point.style.backgroundImage = points[i].background;
    }
  }
};

quizChecker = (q) => {
  const quizzes = [
    {
      key: 0,
      answer: "hambrook-yShapedTree-answers-A",
      correct: "hambrook-yShapedTree-correct",
      background: "url(../../../assets/Picture1.png)",
    },
    {
      key: 1,
      answer: "hambrook-worrellsOak-answers-D",
      correct: "hambrook-worrellsOak-correct",
      background: "url(../../../assets/Picture2.png)",
    },
  ];

  const quizCorrectModal = document.getElementById("quiz-correct-modal");
  const quizIncorrectModal = document.getElementById("quiz-incorrect-modal");
  const quizClose = document.getElementsByClassName("quiz-modal-close");
  const quizCorrectAnswer = document.getElementById(quizzes[q].answer);

  const sticker = document.getElementById("collectableSticker");

  if (quizCorrectAnswer.checked) {
    console.log("correct");
    localStorage.setItem(quizzes[q].correct, 1);
    console.log(localStorage.getItem(quizzes[q].correct));

    sticker.style.backgroundImage = quizzes[q].background;
    quizCorrectModal.style.display = "block";
  } else {
    console.log("incorrect");
    localStorage.removeItem(quizzes[q].correct);
    console.log(localStorage.getItem(quizzes[q].correct));

    quizIncorrectModal.style.display = "block";
  }

  quizClose[0].onclick = function () {
    quizCorrectModal.style.display = "none";
  };
  quizClose[1].onclick = function () {
    quizIncorrectModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == quizCorrectModal) {
      quizCorrectModal.style.display = "none";
    } else {
      if (event.target == quizIncorrectModal) {
        quizIncorrectModal.style.display = "none";
      }
    }
  };
};
