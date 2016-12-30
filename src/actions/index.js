/*
*  Author: Kayla Martell
*  List of actions available for this portfolio
*/

// Returns action: User has selected a project. Payload = { project_object }
export function selectProject(project){
  return {
    type: 'PROJECT_SELECTED',
    payload: project
  }
}
