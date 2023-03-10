import './ErrorMessage.css';

export default class ErrorMessage {
  constructor(container, message) {
    this.container = document.querySelector(container);

    if (!this.container) {
      throw new Error('Bad container!');
    }

    this.message = message;
  }

  show() {
    const errEl = document.createElement('div');
    errEl.classList.add('error-message');

    errEl.textContent = this.message;
    this.container.insertAdjacentElement('afterbegin', errEl);

    setTimeout(() => {
      errEl.style.top = '-40px';
    }, 600);

    setTimeout(() => {
      errEl.remove();
    }, 1000);
  }
}
