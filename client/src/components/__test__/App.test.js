import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import SignUp from '../SignUp';


let wrapped;

beforeEach(() => {
  wrapped = shallow(<App/>);
});

it('has an instance of SignUp', () => {
  expect(wrapped.find(SignUp).length).toEqual(1);
});