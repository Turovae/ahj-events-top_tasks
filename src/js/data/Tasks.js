import Task from '../components/Task/Task';

export default class Tasks {
  constructor() {
    this.tasks = [];
  }

  add(taskName) {
    this.tasks.push(new Task(taskName));
  }

  filter(taskName) {
    return this.notPinnedTasks().filter((task) => (
      task.name.toLowerCase().startsWith(taskName.toLowerCase())
    ));
  }

  pinnedTasks() {
    return this.tasks.filter((task) => task.pinned);
  }

  notPinnedTasks() {
    return this.tasks.filter((task) => !task.pinned);
  }
}
