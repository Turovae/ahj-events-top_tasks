import TasksContainer from '../TasksContainer/TasksContainer';

export default class AllTasks extends TasksContainer {
  constructor() {
    super();
    this.noTasksMessage = 'No tasks found';
    this.taskTitle = 'All Tasks:';

    this.create();
  }
}
