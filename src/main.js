import './css/common.css';

import './css/style.css';
import { fillTasksListFromDB } from './js/taskListTemplate.js';
import { refs } from './js/consts.js';
import { handleFormSubmit, handleTaskClick } from './js/handlers.js';

// load tasks from database
fillTasksListFromDB();

refs.mainForm.addEventListener('submit', handleFormSubmit);
refs.list.addEventListener('click', handleTaskClick);
