function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('popup')
  modal.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="popup-overlay" data-close="true">
        <div class="popup-window">
          <div class="popup-header">
            <div class="popup-nav">
              <ul class="popup-links">
                <li class="active">О челе</li>
                <li>Фоточки</li>
              </ul>
              <div class="close-icon">
                <img src="images/xmark.svg" data-close="true" />
              </div>
            </div>
          </div>
          <div class="popup-info" data-content>
            ${options.content || ''}
          </div>
        </div>
      </div>
    `
  )
  document.body.appendChild(modal)
  return modal
}

$.modal = function (options) {
  const ANIMATION_SPEED = 300
  const $modal = _createModal(options)
  let closing = false

  const modal = {
    open() {
      !closing && $modal.classList.add('open')
    },

    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')
      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false
      }, ANIMATION_SPEED)
    },
  }

  const listener = (event) => {
    if (event.target.dataset.close) {
      modal.close()
    }
  }

  $modal.addEventListener('click', listener)

  return Object.assign(modal, {
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html
    },
  })
}
