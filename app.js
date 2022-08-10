const freaks = [
  {
    id: 1,
    title: 'Никита Жуков',
    age: 18,
    description: 'Мальчик молодой на девяточке(поло) летает тупа по дорогам',
    imageInfo:
      'https://sun9-west.userapi.com/sun9-47/s/v1/ig2/l4DjIOl6rnlx6xWzGwb5FsAhfFu40vdOogiw9eTgHECG4FunuVCCIvCTDP0n87cGsiH5vasAMONFxAOR7m95y_uo.jpg?size=1200x1600&quality=96&type=album',
    imageCard:
      'https://sun9-north.userapi.com/sun9-79/s/v1/ig2/2GEjKgJUPqXICpxM4EaQ5Pp138zwc17tGAjkSlldbiPoCjCxFTKg3w56_hGV_pAQYPayFqr7F_XoDEy-1nb-7swm.jpg?size=1280x960&quality=96&type=album',
    usual: ['Малолетка', 'Чртшник', 'Водила', 'ИС', 'Чуть-чуть обезьяна', 'Модняк', 'Думает что самый умный', 'Самый умный', 'Лигер'],
    idol: 'burger',
  },
  {
    id: 2,
    title: 'Амир Баймухаметов',
    age: 19,
    description: 'криНж',
    imageInfo:
      'https://sun9-east.userapi.com/sun9-33/s/v1/ig2/OUz7nQX4ccBTbtleW1GUKQUd4jdZKjI6yoAYKxuE930gdNYQi_LBra-iem5kcpCNZhU6qVid7QkUqhz_nYACqIST.jpg?size=1620x2160&quality=96&type=album',
    imageCard:
      'https://sun9-west.userapi.com/sun9-45/s/v1/ig2/NKtdSNEHNzN5wGnIreYDmckG_jIHMGg6r1tez8VsFXbQXlxx300_EeWvpIuIJwYu4wi6cxq41nB1oszQGBiGYW6X.jpg?size=810x1080&quality=95&type=album',
    usual: ['Байранов', 'Чртшник', 'Боже упаси САшник', 'Не водила', '2/3 обезьяна', 'Башкир', 'Лигер'],
    idol: 'bong',
  },
  {
    id: 3,
    title: 'Стас Кутырев',
    age: 18,
    description: 'ахахахахах',
    imageInfo:
      'https://sun9-north.userapi.com/sun9-80/s/v1/ig2/y4Mm6mHk2jVE95sMlH7xoAfPieKxyV7kyjr5JE0uVmQV6DqFDFTmZl5GegLiuhA0H2NhX8gyiep7c1nwl0a-syed.jpg?size=2560x1920&quality=96&type=album',
    imageCard:
      'https://sun9-west.userapi.com/sun9-72/s/v1/ig2/tyg3SLBOJYYne_VBkaS9YcefwhLn8ZjM9bg5mMxBhmFyaJwzMFU0SECbqE908_PQDI1XHiy1h6xDdsIsrH7-AaGU.jpg?size=1620x2160&quality=96&type=album',
    usual: ['кУУУтерев (пиздец...)', 'Универяга', 'Не водила', 'Фулл обезьяна', 'Работник месяца', 'Лигер'],
    idol: 'pizza-slice',
  },
]
const toHtml = (freak) => `
  <div class="card" style="background-image: url('${freak.imageCard}')">
    <p>${freak.title}</p>
    <div class="bg-shadow" data-open="1" data-id="${freak.id}">
      <div class="fade">
        <div class="shadow"></div>
      </div>
    </div>
  </div>
`

function render() {
  const html = freaks.map(toHtml).join('')
  document.querySelector('#cards').innerHTML = html
}
render()

const infoPopup = $.modal({
  title: 'popup',
})

document.addEventListener('click', (event) => {
  const openType = event.target.dataset.open
  const id = +event.target.dataset.id

  if (openType) {
    const freak = freaks.find((f) => f.id === id)

    infoPopup.setContent(`
      <h2>${freak.title} </h2>
      <div class="usual" id="usual">   
        <div class="age">${freak.age}</div>
        <i class="fa-solid fa-${freak.idol}"></i>
      </div>
      <p>${freak.description}</p>
      <img src="${freak.imageInfo}">
    `)

    const usual = document.querySelector('#usual')
    freak.usual.map((item) => {
      const el = document.createElement('div')
      el.innerHTML = item
      usual.append(el)
    })

    infoPopup.open()
  }
})
