/*
*  Author: Kayla Martell
*  Return the combined state for all components
*/

import { combineReducers } from 'redux';
import { ProjectsReducer } from './reducer_projects';
import { ActiveProject } from './reducer_active_project';
import { SkillsReducer } from './reducer_skills';

const rootReducer = combineReducers({
  projects: ProjectsReducer,
  activeProject: ActiveProject,
  skills: SkillsReducer

});

export default rootReducer;
