import './Filter.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class Filter {
  constructor(name, pinnedBlock, tasksBlock, tasks) {
    this.element = null;
    this.name = name;
    this.inputEl = null;

    this.pinnedBlock = pinnedBlock;
    this.tasksBlock = tasksBlock;
    this.tasks = tasks;
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
    this.element.classList.add('task-control');
    document.documentElement.addEventListener('change', this.changePin);

    this.inputEl = document.createElement('input');
    this.inputEl.classList.add('task-control-input');
    this.element.appendChild(this.inputEl);
    this.inputEl.addEventListener('input', this.filterTasks);
  }

  addTask(event) {
    event.preventDefault();

    if (this.inputEl.value.length === 0) {
      const errmsg = new ErrorMessage('.app', 'Error! Empty task');
      errmsg.show();
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
