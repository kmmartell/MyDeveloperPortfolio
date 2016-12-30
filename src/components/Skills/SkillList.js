/*
*  Author: Kayla Martell
*  Display a formatted list of all skills
*  Container. Requires access to skills
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SkillListItem from './SkillListItem';

class SkillList extends Component{
  render() {
    <div className="skill-list">

    </div>
  }
}

function mapStateToProps(state){
  return{
    skills: state.skills
  }
}

export default connect (mapStateToProps)(SkillList);
