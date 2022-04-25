/*
The Quiz file consists of two functions:

quizChecker and stickerLoader
quizChecker is loaded only in the point pages while stickerLoader is loaded only on the route main page

quizChecker contains the element IDs for the correct answer in the releveant point.html file
If the radial button for that element is selected, the relevant localStorage variable is set to be 1 and a modal is opened telling the user that they are correct + showing them the sticker. 
If the wrong radial button is selected, it is removed from localStorage and the "incorrect" modal is shown.

stickerLoader then checks to see the status of all the localStorage variables for that route and for each variable that is a 1, it will display the associated sticker as a background image inside the previously blank sticker slot

*key is just used to differentiate the objects - mostly used for the quizChecker as the key number listed here should be used for the button onClick function inside each point file.
*id is the id found in the route.html sticker section for each point
*background is a link to the picture found in the assets folder
*correct is the local storage item. When the correct radial is selected on the corresponding point page, this will be 1

*/

// this is where new point information is added
// use camelCase for "id" and "correct"
const quizPoints = [
  {
    key: 0,
    id: "routeX-sticker-pointA",
    background: "url(../../assets/Picture1.png)",
    correct: "routeX-pointA-correct",
  },
  {
    key: 1,
    id: "routeX-sticker-pointB",
    background: "url(../../assets/Picture2.png)",
    correct: "routeX-pointB-correct",
  },
  {
    key: 2,
    id: "routeX-sticker-pointC",
    background: "url(../../assets/Picture1.png)",
    correct: "routeX-pointC-correct",
  },
  {
    key: 3,
    id: "routeX-sticker-pointD",
    background: "url(../../assets/Picture2.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 4,
    id: "routeX-sticker-pointE",
    background: "url(../../assets/Picture1.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 5,
    id: "routeX-sticker-pointF",
    background: "url(../../assets/Picture2.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 6,
    id: "routeX-sticker-pointG",
    background: "url(../../assets/Picture1.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 7,
    id: "routeX-sticker-pointH",
    background: "url(../../assets/Picture2.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 8,
    id: "routeX-sticker-pointI",
    background: "url(../../assets/Picture1.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 9,
    id: "routeX-sticker-pointJ",
    background: "url(../../assets/Picture2.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 10,
    id: "routeX-sticker-pointK",
    background: "url(../../assets/Picture1.png)",
    correct: "routeName-pointName-correct",
  },
  {
    key: 11,
    id: "routeX-sticker-pointL",
    background: "url(../../assets/Picture2.png)",
    correct: "routeName-pointName-correct",
  },
];

// Everything after here can be ignored and shouldn't need editing.

// Essentially, the stickerLoader function is called on page load.
// Then, it loops through the above array of items and if the "correct" variable for a point is 1,
// it adds the listed background from the relative url path as a sticker image
stickerLoader = () => {
  for (let i = 0; i < quizPoints.length; i++) {
    const point = document.getElementById(quizPoints[i].id);
    console.log(quizPoints[i]);

    if (localStorage.getItem(quizPoints[i].correct) == "1") {
      point.style.backgroundImage = quizPoints[i].background;
    }
  }
};

// This is where using unique, numbered IDs for the array comes in handy.
// quizChecker is loaded on each point html page and will check for the associated "correct" and "background" tags

// So, if you are on point-1, quizChecker(x) will be quizChecker(0) - the first item in the points list array

// quizChecker then checks if the user has checked the button with a class of "correct" and if they have,
// sets the quizPoints[0].correct variable to be 1 and displays the "correct" modal and presents the user with a sticker

// If instead the user has checked any of the 3 buttons with a class of "incorrect",
// it removes the item from localStorage instead and displays the "incorrect" modal
quizChecker = (q) => {
  const quizCorrectModal = document.getElementById("quiz-correct-modal");
  const quizIncorrectModal = document.getElementById("quiz-incorrect-modal");
  const quizClose = document.getElementsByClassName("quiz-modal-close");
  const quizCorrectAnswer = document.getElementsByClassName("correct");
  const quizIncorrectAnswer = document.getElementsByClassName("incorrect");

  const sticker = document.getElementById("collectableSticker");

  // If the correct answer is selected, show correct modal
  // If any of the incorrect answers are selected, show the incorrect modal
  // If nothing has been selected, send an alert telling the user to select something before submitting
  if (quizCorrectAnswer[0].checked) {
    console.log("correct");
    localStorage.setItem(quizPoints[q].correct, 1);
    console.log(localStorage.getItem(quizPoints[q].correct));
    sticker.style.backgroundImage = quizPoints[q].background;
    quizCorrectModal.style.display = "block";
  } else if (quizIncorrectAnswer[0].checked) {
    console.log("incorrect");
    localStorage.removeItem(quizPoints[q].correct);
    console.log(localStorage.getItem(quizPoints[q].correct));
    quizIncorrectModal.style.display = "block";
  } else if (quizIncorrectAnswer[1].checked) {
    console.log("incorrect");
    localStorage.removeItem(quizPoints[q].correct);
    console.log(localStorage.getItem(quizPoints[q].correct));
    quizIncorrectModal.style.display = "block";
  } else if (quizIncorrectAnswer[2].checked) {
    console.log("incorrect");
    localStorage.removeItem(quizPoints[q].correct);
    console.log(localStorage.getItem(quizPoints[q].correct));
    quizIncorrectModal.style.display = "block";
  } else {
    alert("Please select an answer before submitting");
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
