export default class Task {
  constructor(taskName) {
    this.name = taskName;
    this.pinned = false;
    this.element = null;

    this.checkbox = null;
    this.changePin = this.changePin.bind(this);

    this.create();
  }

  create() {
    this.element = document.createElement('div');
    this.element.classList.add('task');
    this.element.textContent = this.name;

    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.classList.add('task-pin');
    this.checkbox.addEventListener('change', this.changePin);
    this.element.appendChild(this.checkbox);
  }

  changePin() {
    this.pinned = this.checkbox.checked;
  }
}
