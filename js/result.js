let resCon = document.querySelector('.res')
let tech = localStorage.getItem("techBall");
let guman = localStorage.getItem("gumanBall");
let bis = localStorage.getItem("bisBall");

let textRes = document.querySelector('.textRes')
let textResMobile = document.querySelector('.textResMobile')

let resArr = [
  {
    id: 0,
    title: "Искусственный интеллект и Большие данные",
    nameOrg: "IT-куб.Мичуринск",
    link: "https://it-cube-m.68edu.ru/iskusstvennyj-intellekt-i-bolshie-dannye/",
    type: "tech",
  },

  {
    id: 1,

    title: "Робототехника и мехатроника",
    nameOrg: "Детский технопарк «Кванториум»",
    link: "https://michschool1.68edu.ru/%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b/",
    type: "tech",
  },
  {
    id: 2,
    title: "Программирование на языке Python",
    nameOrg: "Детский технопарк «Кванториум»",
    link: "https://michschool1.68edu.ru/%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b/",
    type: "tech",
  },

  {
    id: 3,
    title: "Журналистика",
    nameOrg: "Центр развития современных компетенций детей",
    link: "https://xn--d1alrex.xn--p1ai/index.php",
    type: "guman",
  },

  {
    id: 4,
    title: "Актерское мастерство",
    nameOrg: "МБОУ ДО «Центр детского творчества»",
    link: "https://cdt.68edu.ru/",
    type: "guman",
  },

  {
    id: 5,
    title: "Творческая мастерская",
    nameOrg: "МБОУ ДО «Центр детского творчества»",
    link: "https://cdt.68edu.ru/",
    type: "guman",
  },

  {
    id: 6,
    title: "Детский университет экономики",
    nameOrg: "Центр развития современных компетенций детей",
    link: "https://xn--d1alrex.xn--p1ai/index.php",
    type: "bis",
  },

  {
    id: 7,
    title: "К оммуникативный английский",
    nameOrg: "Центр развития современных компетенций детей",
    link: "https://xn--d1alrex.xn--p1ai/index.php",
    type: "bis",
  },

  {
    id: 8,
    title: "Основы банковского дела",
    nameOrg: "Центр развития современных компетенций детей",
    link: "https://xn--d1alrex.xn--p1ai/index.php",
    type: "bis",
  },
];

let totalArr = [
  {
    name: "Техническая",
    type: 'tech',
    score: tech
  },

  {
    name: "Гуманитарная",
    type: 'guman',
    score: guman
  },

  {
    name: "Бизнес",
    type: 'bis',
    score: bis
  },
];

totalArr.sort((a, b) => b.score - a.score )



let h1 = document.createElement('h1')
h1.textContent = `Вам больше подходит ${totalArr[0].name} направленость`

textRes.appendChild(h1)


let h1mob = document.createElement('h1')
h1mob.textContent = `Вам больше подходит ${totalArr[0].name} направленость`

textResMobile.appendChild(h1mob)

let newArrRes = resArr.filter(function(res) {
  return res.type == totalArr[0].type
})


console.log(newArrRes);



newArrRes.map((res) => {
  let card = document.createElement("div");
  card.classList.add("card", "mb-3", 'm-2');
  card.style.maxWidth = "540px";

  card.innerHTML = `
    <div class="row g-0">
        
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${res.title}</h5>
                <p class="card-text">${res.nameOrg} | <a
                        href="${res.link}">Узнать
                        больше</a></p>
            </div>
        </div>
    </div>
    `;

  resCon.appendChild(card);
});
