/*
*  Author: Kayla Martell
*  Test the launching component app
*/

import { renderComponent , expect } from '../test_helper.js'; //From Stephen Grider
import App from '../../src/components/app';

describe('App', () => {
  let component;
  beforeEach(() =>{
    component = renderComponent(App);
  })


  it('contains navigation menu', () => {
    expect(component.find('.top-navigation')).to.exist;
  });


});
