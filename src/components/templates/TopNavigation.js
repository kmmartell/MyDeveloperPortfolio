import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

export default ({ title }) => {
  return (
  <Toolbar className="top-navigation">
   <ToolbarGroup firstChild={true}>
     <ToolbarTitle text={ title } />
   </ToolbarGroup>
   <ToolbarGroup>
      <ToolbarTitle text="Portfolio" />
     <ToolbarTitle text="Blog" />

     <ToolbarSeparator />

     <RaisedButton label="Contact" primary={true} />

   </ToolbarGroup>
 </Toolbar>
 );
}
