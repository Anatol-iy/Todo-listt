import './css/common.css';

import './css/style.css';
import { fillTasksListFromDB } from './js/taskListTemplate';
import { refs } from './js/consts';
import { handleFormSubmit, handleTaskClick } from './js/handlers';

// load tasks from database
fillTasksListFromDB();

refs.mainForm.addEventListener('submit', handleFormSubmit);
refs.list.addEventListener('click', handleTaskClick);
