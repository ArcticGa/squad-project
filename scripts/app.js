import { freaks } from '../arrayFreaks.js'

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
