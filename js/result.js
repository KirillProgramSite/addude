let resCon = document.querySelector(".res");
let nrl = localStorage.getItem("reslet");

let resArr = [
  {
    id: 0,
    img:'./img/ii.jpg',
    title: "Искусственный интеллект и Большие данные",
    nameOrg: "IT-куб.Мичуринск",
    link: "https://it-cube-m.68edu.ru/iskusstvennyj-intellekt-i-bolshie-dannye/",
    type: "tech",
  },
  {
    id: 1,
    img:'./img/vr.png',
    title: "Разработка VR/AR приложений",
    nameOrg: "IT-куб.Мичуринск",
    link: "https://it-cube-m.68edu.ru/razrabotka-prilozhenij-vr-ar/",
    type: "tech",
  },
  {
    id: 2,
    img:'./img/web.jpg',
    title: "Web-разработка",
    nameOrg: "IT-куб.Мичуринск",
    link: "https://it-cube-m.68edu.ru/web-razrabotka/",
    type: "tech",
  },
  {
    id: 3,
    img:'./img/hi-tech.png',
    title: "Хайтек-квантум",
    nameOrg: "Детский технопарк «Кванториум»",
    link: "https://michschool1.68edu.ru/%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b/",
    type: "tech",
  },
  {
    id: 4,
    img:'./img/robot.png',
    title: "Робототехника и мехатроника",
    nameOrg: "Детский технопарк «Кванториум»",
    link: "https://michschool1.68edu.ru/%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b/",
    type: "tech",
  },
  {
    id: 5,
    img:'./img/biolog.jpg',
    title: "Биология и здоровье человека",
    nameOrg: "Центр развития современных компетенций детей",
    link: "https://xn--d1alrex.xn--p1ai/edu9.php",
    type: "bio",
  },
  {
    id: 6,
    img:'./img/python.jpg',
    title: "Программирование на языке Python",
    nameOrg: "Детский технопарк «Кванториум»",
    link: "https://michschool1.68edu.ru/%d0%be%d0%b1%d1%80%d0%b0%d0%b7%d0%be%d0%b2%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b/",
    type: "tech",
  },
  {
    id: 7,
    img:'./img/biolog.jpg',
    title: "Химия в природе и жизни человека",
    nameOrg: "Центр развития современных компетенций детей",
    link: "https://xn--d1alrex.xn--p1ai/",
    type: "bio",
  },
  {
    id: 8,
    img:'./img/bird.jfif',
    title: "Хищные птицы",
    nameOrg: "IT-куб.Мичуринск",
    link: "https://xn--d1alrex.xn--p1ai/",
    type: "bio",
  },
];

let newResArr = resArr.filter(function(res) {
    return res.type === nrl
})


newResArr.map(res => {
    let card = document.createElement('div')
    card.classList.add('card', 'mb-3')
    card.style.maxWidth = "540px"

    card.innerHTML = `
    <div class="row g-0">
        <div class="img-slider col-md-4">
            <img src="${res.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${res.title}</h5>
                <!-- <p class="card-text truncate">Направление "Искусственный интеллект и Большие данные"
                            объединяет две технологические области, которые сейчас активно развиваются.
                            Искусственный интеллект (ИИ) - это совокупность технологий и методов,
                            позволяющих компьютерам обучаться на данных и принимать решения, которые
                            ранее могли бы принимать только люди. Большие данные (Big Data) - это
                            огромные объемы данных, которые не могут быть обработаны с помощью
                            традиционных методов.
                        </p> -->
                <p class="card-text">${res.nameOrg} | <a
                        href="${res.link}">Узнать
                        больше</a></p>
            </div>
        </div>
    </div>
    `

    resCon.appendChild(card)
})

