export default class Filter {
  constructor(name, pinnedBlock, tasksBlock, tasks) {
    this.element = null;
    this.name = name;
    this.inputEl = null;

    this.pinnedBlock = pinnedBlock;
    this.tasksBlock = tasksBlock;
    this.tasks = tasks;
    this.tasks.add('Поздороваться');
    this.tasks.add('Покушать');
    this.pinnedBlock.draw(this.tasks.pinnedTasks());
    this.tasksBlock.draw(this.tasks.notPinnedTasks());

    this.addTask = this.addTask.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.changePin = this.changePin.bind(this);

    this.create();
  }

  create() {
    this.element = document.createElement('form');
    this.element.name = this.name;
    this.element.addEventListener('submit', this.addTask);
    document.documentElement.addEventListener('change', this.changePin);

    this.inputEl = document.createElement('input');
    this.element.appendChild(this.inputEl);
    this.inputEl.addEventListener('input', this.filterTasks);
  }

  addTask(event) {
    event.preventDefault();

    if (this.inputEl.value.length === 0) {
      return;
    }

    this.tasks.add(this.inputEl.value);
    this.tasksBlock.draw(this.tasks.notPinnedTasks());
    this.inputEl.value = '';
  }

  filterTasks(event) {
    event.preventDefault();
    this.tasksBlock.draw(this.tasks.filter(this.inputEl.value));
  }

  changePin() {
    this.pinnedBlock.draw(this.tasks.pinnedTasks());
    this.tasksBlock.draw(this.tasks.filter(this.inputEl.value));
  }
}
