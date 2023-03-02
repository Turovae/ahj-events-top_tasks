export default class Header {
  constructor(text) {
    this.element = null;
    this.text = text;

    this.create();
  }

  create() {
    this.element = document.createElement('header');
    this.element.classList.add('header');

    const title = document.createElement('h1');
    title.textContent = this.text;

    this.element.appendChild(title);
  }
}
