/*
*  Author: Kayla Martell
*  Reducer must return the object:project which is the active project
*/

export default function(state = null, action){ // Default state to null
  switch(action.type) {
    case 'PROJECT_SELECTED': // User has selected a project
      return action.payload; // action.payload = { project object }
    default: return state; // If no project is selected just return the current state
  }
}
