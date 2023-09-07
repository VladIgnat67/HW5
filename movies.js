// Акбар
let movies = [
    {
        id: 1,
        image: 'https://www.webmancer.org/media/book/5/54/45400.jpg',
        title: 'Дура',
        year: 2006,
        genre: 'Драма',
    },
    {
        id: 2,
        image: 'https://www.webmancer.org/media/book/4/98/39860.jpg',
        title: 'Мартин Иден',
        year: 1909,
        genre: 'Драма',
    },
    {
        id: 3,
        image: 'https://books.google.kg/books/publisher/content?id=KMVTEAAAQBAJ&hl=ru&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1xzD52gTcdM7gnc_uRsmT301BdpA&w=1280',
        title: 'Обжигающая тишина',
        year:2021,
        genre: 'Драма',
    },
    {
        id: 4,
        image: 'https://books.google.kg/books/publisher/content?id=J2IhEAAAQBAJ&hl=ru&pg=PA2&img=1&zoom=3&bul=1&sig=ACfU3U3hM8Q0hHIzRzZy-xiDpXjZfsnq-w&w=1280',
        title: 'Поворот ключа',
        year: 2020,
        genre: 'Драма',
    },
    {
        id: 5,
        image: 'https://books.google.kg/books/publisher/content?id=cd88DwAAQBAJ&hl=ru&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3XS5E7eqkz0LgD-hCvh36_twJKfA&w=1280',
        title: 'Воссоединение',
        year: 2017,
        genre: 'Драма',
    },
    {
        id: 6,
        image: 'https://books.google.kg/books/publisher/content?id=vzdpDwAAQBAJ&hl=ru&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1sTyVzyzBWUMUnSKLMAMqDBoInpQ&w=1280',
        title: 'Игра в ложь',
        year: 2018,
        genre: 'Драма',
    },
    {
        id: 7,
        image: 'https://img3.labirint.ru/rc/3ec5dfb32d9f84277e4f5b2ce58ab4d3/363x561q80/books71/703719/cover.jpg?1686678287',
        title: 'Дочь',
        year: 2016,
        genre: 'Драма',
    },
    {
        id: 8,
        image: 'https://img3.labirint.ru/rc/59a0b50a7f46425e4aaa38c72341ff94/363x561q80/books33/329745/cover.jpg?1568395548',
        title: 'Расстрелять',
        year: 2015,
        genre: 'Проза',
    },
    {
        id: 9,
        image: 'https://cv4.litres.ru/pub/c/cover_415/36314248.webp',
        title: 'Норд, Норд и немного вест',
        year: 2018,
        genre: 'Проза',
    },
    {
        id: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrDM1VRswaraIyaJHGUvB1U8S5bfE9rF85g&usqp=CAU',
        title: 'Женщина в белом',
        year: 2015,
        genre: 'Проза',
    },
    {
        id: 11,
        image: 'https://img4.labirint.ru/rc/2a035c35080b761c22f1b88ee9e208a4/363x561q80/books4/36286/cover.jpg?1686223510',
        title: 'Иностранка',
        year: 1990,
        genre: 'Проза',
    },
    {
        id: 12,
        image: 'https://cv4.litres.ru/pub/c/cover_415/40285244.webp',
        title: 'Человек сидящий',
        year: 2019,
        genre: 'Проза',
    },
    {
        id: 13,
        image: 'https://knigogid.ru/storage/books/f0/c4/d9/3415b3cbc3d942665c31de6e6a451298.jpg',
        title: 'Соляный бунт',
        year: 1982,
        genre: 'Поэзия',
    },
    {
        id: 14,
        image: 'https://s1.livelib.ru/boocover/1000479764/200x305/6c8c/Kozma_Prutkov__Plody_razdumya.jpg',
        title: 'Плоды раздумья',
        year: 2017,
        genre: 'Поэзия',
    },
    {
        id: 15,
        image: 'https://royallib.com/data/images/166/cover_166146.jpg',
        title: 'Кобзар',
        year: 2007,
        genre: 'Поэзия',
    },
    {
        id: 16,
        image: 'https://cv3.litres.ru/pub/c/cover_max1500/22563938.jpg',
        title: 'Если нет',
        year: 2014,
        genre: 'Поэзия',
    },
    {
        id: 17,
        image: 'https://cv0.litres.ru/pub/c/cover_max1500/8868101.jpg',
        title: 'Ясно. Новые стихи и письма счастья',
        year: 2014,
        genre: 'Поэзия',
    },
    {
        id: 18,
        image: 'https://cdn.ast.ru/v2/ASE000000000832181/COVER/cover1__w220.jpg',
        title: 'Триумфальная Арка',
        year: 2014,
        genre: 'Классика',
    },
    {
        id: 19,
        image: 'https://img3.labirint.ru/rc/4b87679e29d41bcfafddbf94e78aa6e4/363x561q80/books74/739743/cover.jpg?1582698350',
        title: 'Таинственный Сад',
        year: 2014,
        genre: 'Классика',
    },
    {
        id: 20,
        image: 'https://book24.ua/upload/iblock/d29/d29010fde54cc6f087d91aee35cfb1e3.jpg',
        title: 'Любовь во время Чумы',
        year: 2014,
        genre: 'Классика',
    },
    {
        id: 21,
        image: 'https://cdn.respublica.ru/uploads/01/00/00/33/k9/b82943cf614e310c.jpg?1473844460',
        title: 'Джейн Эйр',
        year: 2014,
        genre: 'Классика',
    },
    {
        id: 22,
        image: 'https://cdn.book24.ru/v2/ASE000000000845725/COVER/cover13d__w220.jpg',
        title: 'Маленькие Женщины',
        year: 2014,
        genre: 'Классика',
    },
    {
        id: 23,
        image: 'https://lib.social/uploads/cover/naruto/cover/zYymN7Pz3Gxz_250x350.jpg',
        title: 'Наруто',
        year: 0000,
        genre: 'Манга',
    },
    {
        id: 24,
        image: 'https://lib.social/uploads/cover/one-piece/cover/uMCCmCC0lkwu_250x350.jpg',
        title: 'Ван Пис',
        year: 0000,
        genre: 'Манга',
    },
    {
        id: 25,
        image: 'https://upload.wikimedia.org/wikipedia/ru/a/a5/Bleach_fan.jpg',
        title: 'Блич',
        year: 0000,
        genre: 'Манга',
    },
    {
        id: 26,
        image: 'https://upload.wikimedia.org/wikipedia/ru/f/f7/Dragonball_cvr1.jpg',
        title: 'Драгон Бол',
        year: 0000,
        genre: 'Манга',
    },
    {
        id: 27,
        image: 'https://lib.social/uploads/cover/kimetsu-no-yaiba/cover/4KagQthKA49B_250x350.jpg',
        title: 'Клинок Рассекающего демона',
        year: 0000,
        genre: 'Манга',
    },
];
// Акбар


// Влад
let row = document.querySelector('.row')
let menuItems = document.querySelectorAll('.menu-item')
let status = 'Все'

const addMovieRow = () => {
    Array.from(menuItems).forEach((item) => {
        item.style.color = 'grey';
        if(item.textContent === status) {
            item.style.color = 'blue';
        }
        item.addEventListener('click', () => {
            status = item.textContent;
            addMovieRow();
        });
    });
    row.innerHTML = ''

    movies.filter ((item) => {
        if(status !== 'Все') {
            return item.genre === status
        }
        return item;

    }).forEach((item) => {
        row.innerHTML += `
        <div class="card">
        <img class="card-img"  src="${item.image}" alt="movie"/>
        <h2 class="card-title">${item.title}</h2>
        <p class="card-year">${item.year}</p>
        <h3 class="card-genre">${item.genre}</h3>
        </div>`
    });
    
};

addMovieRow();

// Влад


// Элина
let body = document.querySelector('body')
let lightBtn = document.querySelector('.light-theme')
let barktBtn = document.querySelector('.dark-theme')

function lightTheme() {
    body.className = ''
}
function darkTheme() {
    body.classList.add('dark')
}

lightBtn.addEventListener('click', lightTheme)
darkBtn.addEventListener('click', darkTheme)

//  Элина

var objectsArray = [
    {
      selector: ".fog1",
      effect: "FOG",
      options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x6d1ff,
        midtoneColor: 0x94ff,
        lowlightColor: 0x4aff,
        baseColor: 0xe0e0e0,
        blurFactor: 0.52,
        zoom: 2.10
      }
    },
    {
      selector: ".fog2",
      effect: "MATERIAL",
      options: {
        color: 0x3498db,
        backgroundColor: 0x111111
        // Другие параметры для эффекта MATERIAL
      }
    },
    // Добавьте остальные объекты с разными эффектами и параметрами
  ];
  
  // Функция для применения Vanta.js эффектов к объектам
  var applyVantaEffects = () => {
    objectsArray.forEach(object => {
      if (body.VANTA && object.effect && object.selector) {
        body.VANTA[object.effect](object.selector, object.options);
      }
    });
  };
  
  // Вызываем функцию для применения эффектов к объектам
  applyVantaEffects();