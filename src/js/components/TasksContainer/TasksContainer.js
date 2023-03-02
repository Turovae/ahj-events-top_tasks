export default class TasksContainer {
  constructor() {
    this.element = null;
    this.tasksContainer = null;

    this.noTasksMessage = '';
    this.taskTitle = '';

    this.create();
  }

  create() {
    this.element = document.createElement('div');
    this.element.classList.add('tasks-container');

    const header = document.createElement('h2');
    header.textContent = this.taskTitle;
    this.element.appendChild(header);

    this.tasksContainer = document.createElement('div');
    this.tasksContainer.classList.add('tasks');
    this.element.appendChild(this.tasksContainer);
  }

  draw(elements) {
    this.tasksContainer.innerHTML = '';
    if (elements.length === 0) {
      this.tasksContainer.textContent = this.noTasksMessage;
    }
    elements.forEach((item) => {
      this.tasksContainer.appendChild(item.element);
    });
  }
}
