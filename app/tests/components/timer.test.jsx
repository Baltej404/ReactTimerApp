var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', ()=>{
  it('should exist', ()=>{
    expect(Timer).toExist();
  });
  it('should start timer on started status', (done) => {
    var Timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChnage('started');
    expect(timer.state.count).toBe(0);

    setTimer(()=>{
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001)
  });
  it('should pause timer on paused status', (done) => {
    var Timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChnage('started');
    timer.handleStatusChnage('paused');

    setTimer(()=>{
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001)
  });

  it('should clear count on stopped status', (done) => {
    var Timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChnage('started');
    timer.handleStatusChnage('stopped');

    expect(timer.state.count).toBe(0);

    setTimer(()=>{
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
    }, 1001)
  });

});
