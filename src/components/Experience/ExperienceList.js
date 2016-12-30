/*
*  Author: Kayla Martell
*  A list of all relevant experience via experience objects
*  Container: Must have access to current state to display experience object
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExperienceList extends Component {
  render() {
    return(
      <div className="experience-list">List of Experience</div>
    )
  }

}

function mapStateToProps(state){
  return {
    experience: state.experience
  }
}

export default connect(mapStateToProps)(ExperienceList);
