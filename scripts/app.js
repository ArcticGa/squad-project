import { guys } from '../arrayGuys.js'

const toHtml = (guy) => `
  <div class="card" style="background-image: url('${guy.imageCard}')">
    <p>${guy.title}</p>
    <div class="bg-shadow" data-open="1" data-id="${guy.id}">
      <div class="fade">
        <div class="shadow"></div>
      </div>
    </div>
  </div>
`

function render() {
  const html = guys.map(toHtml).join('')
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
    const guy = guys.find((f) => f.id === id)

    infoPopup.setContent(`
      <h2>${guy.title} </h2>
      <div class="usual" id="usual">   
        <div class="age">${guy.age}</div>
        <i class="fa-solid fa-${guy.idol}"></i>
      </div>
      <p>${guy.description}</p>
      <img src="${guy.imageInfo}">
    `)

    const usual = document.querySelector('#usual')
    guy.usual.map((item) => {
      const el = document.createElement('div')
      el.innerHTML = item
      usual.append(el)
    })

    infoPopup.open()
  }
})
