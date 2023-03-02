import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Tasks from './data/Tasks';
import AllTasks from './components/AllTasks/AllTasks';
import PinnedTasks from './components/PinnedTasks/PinnedTasks';

const tasks = new Tasks();

tasks.add('Проснуться');
tasks.add('Позавтракать');
tasks.add('Взломать сайт Пентагона');

const allTasks = new AllTasks();
const pinnedTasks = new PinnedTasks();

const app = document.querySelector('.app');

const blocks = [
  new Header('TOP Tasks'),
  new Filter('task-control', pinnedTasks, allTasks, tasks),
  pinnedTasks,
  allTasks,
];

((container, components) => {
  components.forEach((item) => {
    container.appendChild(item.element);
  });
})(
  app,
  blocks,
);
