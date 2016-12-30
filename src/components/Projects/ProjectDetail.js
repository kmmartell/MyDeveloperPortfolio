/*
*  Author: Kayla Martell
*  Displays full details of project including languages etc
*  Container: Needs access to activeProject
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

//TODO: Use http://www.material-ui.com/#/components/chip CHIPS for tags
class ProjectDetail extends Component{
  render(){
    let { title, description, role_name, role_description } = this.props;
    return(
      <div className="project-detail">
        <h1>{title}</h1>
        <div className="area">
        <Paper zDepth={2}>
          <h3>About the Project</h3>
          <Divider />
          <p>{description}</p>
        </Paper>

        <Paper zDepth={2}>
          <h3>My Role</h3>
              <Divider />
          <h5>{role_name}</h5>
        </Paper>


        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeProject: state.activeProject
  };
}

export default connect(mapStateToProps)(ProjectDetail);
