import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import chai, { expect } from 'chai'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import chaiJquery from 'chai-jquery'
import reducers from '../src/reducers'

// set up testing environment to run like a browser in the command-line

// create a fake html document and assign to a global variable
// use 'global' instead of 'window'
const shellHTML = '<!doctype html><html><body></body></html>'
global.document = jsdom.jsdom(shellHTML)
global.window = global.document.defaultView;

// make our own jquery ($) which tells jquery the dom is global.window (from jsdom)
const $ = jquery(global.window)

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  // wrap component in providers for redux store
  // 
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )

  // this is what produces html (wrapped in jquery for helpful matchers from chai-jquery)
  return $(ReactDOM.findDOMNode(componentInstance))

}


// built helper for simulating events
// $.fn. means add this as a method to any jquery element
// can't use arrow function here: this!!
$.fn.simulate = function(eventName, value) {

  // jquery element calling the method is 'this'
  
  if (value) {
    this.val(value)
  }
  
  // 'this' is an array (always?); pick off first element
  TestUtils.Simulate[eventName](this[0])

}


// set up chai-jquery
chaiJquery(chai, chai.util, $)

module.exports = {
  renderComponent,
  expect
}