import React from 'react';
import SignUp from '../SignUp';
import {mount} from 'enzyme';

let wrapped;

beforeEach(() => {
  wrapped = mount(<SignUp/>);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a name input field', () => {
  expect(wrapped.find('.name').length).toEqual(2);
});

it('has an email input field', () => {
  expect(wrapped.find('.email').length).toEqual(2);
});

it('has a password input field', () => {
  expect(wrapped.find('.password').length).toEqual(2);
});