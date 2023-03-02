import TasksContainer from '../TasksContainer/TasksContainer';

export default class PinnedTasks extends TasksContainer {
  constructor() {
    super();
    this.noTasksMessage = 'No pinned tasks';
    this.taskTitle = 'Pinned:';

    this.create();
  }
}
