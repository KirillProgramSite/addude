let container = document.querySelector(".container-questions");
let textQuestion = document.querySelector(".question");

// let totalBtn = document.querySelector(".total-btn");
// let total = document.querySelector(".total");
// let totalH1 = document.querySelector(".total-text");
// let totalP = document.querySelector(".total-content");

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let i = 0;

let programm = 0,
  himbio = 0,
  lingvist = 0,
  artist = 0;

let test = [
  {
    id: 0,
    question: "Ваш любимый предмет",
    answers: [
      {
        id: 0,
        type: "programm",
        answer: "Матиматика",
        selectAnswer: false,
      },
      {
        id: 1,
        type: "programm",
        answer: "Информатика",
        selectAnswer: false,
      },
      {
        id: 2,
        type: "himbio",
        answer: "Химия",
        selectAnswer: false,
      },
      {
        id: 3,
        type: "himbio",
        answer: "Биология",
        selectAnswer: false,
      },
      {
        id: 4,
        type: "lingvist",
        answer: "Русский",
        selectAnswer: false,
      },
      {
        id: 5,
        type: "lingvist",
        answer: "Литр",
        selectAnswer: false,
      },
      {
        id: 6,
        type: "artist",
        answer: "Изо",
        selectAnswer: false,
      },
      {
        id: 7,
        type: "artist",
        answer: "Музыка",
        selectAnswer: false,
      },
    ],
  },
  {
    id: 1,
    question: "Ваше хобби",
    answers: [
      {
        id: 0,
        type: "programm",
        answer: "Сидеть в компьюторе",
        selectAnswer: false,
      },
      {
        id: 1,
        type: "himbio",
        answer: "Наблюдать за природой",
        selectAnswer: false,
      },
      {
        id: 2,
        type: "lingvist",
        answer: "Изучения языков других стран",
        selectAnswer: false,
      },
      {
        id: 3,
        type: "artist",
        answer: "Что-то творить. Петь, рисовать, делать фигурки и т.д",
        selectAnswer: false,
      },
    ],
  },
];

function renderText(i) {
  textQuestion.innerHTML = `<h1>${test[i].question}</h1>`;
  textQuestion.classList.add("mb-5");
}

renderText(i);



function renderQuestions(i) {
  let question = test[i].answers;
  question.map((answer, i) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card cursor">
        <div class="anim card-body" data-id="${answer.id}" data-type="${answer.type}">
            ${answer.answer}
        </div>
    </div>
    `;
    div.classList.add("mt-2");
    container.appendChild(div);
  });

}

renderQuestions(i)

function compare(a, b) {
  if (a > b) return 1; // если первое значение больше второго
  if (a == b) return 0; // если равны
  if (a < b) return -1; // если первое значение меньше второго
}

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-body")) {
    let idAnswer = e.target.dataset.id;
    let typeAnswer = e.target.dataset.type;

    switch (typeAnswer) {
      case "programm":
        test[0].answers[idAnswer].selectAnswer =
          !test[0].answers[idAnswer].selectAnswer;
        if (test[0].answers[idAnswer].selectAnswer === true) {
          e.target.classList.add("text-bg-primary");
          programm += 1;
        } else {
          e.target.classList.remove("text-bg-primary");
          programm -= 1;
        }
        break;
      case "himbio":
        test[0].answers[idAnswer].selectAnswer =
          !test[0].answers[idAnswer].selectAnswer;
        if (test[0].answers[idAnswer].selectAnswer === true) {
          e.target.classList.add("text-bg-primary");
          himbio += 1;
        } else {
          e.target.classList.remove("text-bg-primary");
          himbio -= 1;
        }
        break;
      case "lingvist":
        test[0].answers[idAnswer].selectAnswer =
          !test[0].answers[idAnswer].selectAnswer;
        if (test[0].answers[idAnswer].selectAnswer === true) {
          e.target.classList.add("text-bg-primary");
          lingvist += 1;
        } else {
          e.target.classList.remove("text-bg-primary");
          lingvist -= 1;
        }
        break;
      case "artist":
        test[0].answers[idAnswer].selectAnswer =
          !test[0].answers[idAnswer].selectAnswer;
        if (test[0].answers[idAnswer].selectAnswer === true) {
          e.target.classList.add("text-bg-primary");
          artist += 1;
        } else {
          e.target.classList.remove("text-bg-primary");
          artist -= 1;
        }
      default:
        return;
    }
  }
});

// totalBtn.addEventListener("click", (e) => {
//   let typeArr = [
//     {
//       type: "programm",
//       score: programm,
//       title: "Програмимировние",
//       content: "Что-то про программирование",
//     },
//     {
//       type: "himbio",
//       score: himbio,
//       title: "Химбио",
//       content: "Что-то про химбиоз",
//     },
//     {
//       type: "lingvist",
//       score: lingvist,
//       title: "Лингвистика",
//       content: "Что-то про лингвистику",
//     },
//     {
//       type: "artist",
//       score: artist,
//       title: "Творчество",
//       content: "Что-то про творчество",
//     },
//   ];

//   typeArr.sort((a, b) => (a.score < b.score ? 1 : -1));

//   totalH1.textContent = `Вам подхоит ${typeArr[0].title}`;
//   totalP.textContent = typeArr[0].content;

//   total.classList.remove("hidden");

//   console.log(typeArr);
//   console.log(programm);
// });

nextBtn.addEventListener("click", (e) => {
  i += 1;
  renderText(i);
  renderQuestions(i)
});

prevBtn.addEventListener("click", (e) => {
    i -= 1;
    renderText(i);
});
  