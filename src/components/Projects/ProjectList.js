/*
* Author: Kayla MArtell
* Display list of projects that can be selected -> then display more details
* Container: Projects(reducer) | activeProject(action)
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProject } from '../../actions/index'; // Import the action in index file
import ProjectListItem from './ProjectListItem';

class ProjectList extends Component{
  render() {
    return (
      <div className="project-list"></div>
    )
  }
}

/* Pick off the states that this container needs and assign it to its props */
function mapStateToProps({ projects, activeProject}){ // Destructured ES6 syntax
  return {  projects,  activeProject }; // ES6 syntax
}

/* Pick off the actions that this container needs - will appear as props.actionName */
function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
