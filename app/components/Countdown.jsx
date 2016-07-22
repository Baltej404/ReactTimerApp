var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus) {
        //case starts timer
        case 'started':
        this.startTimer();
        break;
        //case brings timer back to zero
        case 'stopped':
        this.setState({count: 0});
        //case pauses timer what to do then
        case 'paused':
        clearInterval(this.timer)
        this.timer = undefined;
        break;
      }
    }
  },
  ComponentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
  //to start the timer function
  startTimer: function(){
    this.timer = setInterval(()=>{
      // new countdown is -1
      var newCount = this.state.count - 1;
      this.setState({
        //if the count is negative it goes back to zero
        count: newCount >= 0 ? newCount: 0
      });
      if(newCount ===0 ){
        this.setState({countdownStatus: 'stopped'});
      }

      //the count is refreshed every second
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    //sets state to new state
    this.setState({countdownStatus: newStatus});
  },
  render: function() {
    //collects the states to render
    var {count, countdownStatus} = this.state;
    var renderControlArea= () => {
      if (countdownStatus !== 'stopped'){
        //if stopped then do this
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        //if paused or start do this
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
