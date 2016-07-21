var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

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
    if(this.state.countdownStatus!== prevState.countdownStatus){
      switch(this.state.countdownStatus){
        case 'started':
        this.startTimer();
        break;
      }
    }
  },
  startTimer: function(){
    this.timer = setInterval(()=>{
      // new countdown is -1
      var newCount = this.state.count - 1;
      this.setState({
        //if the count is negative it goes back to zero
        count: newCount >= 0 ? newCount: 0
      })
      //the count is refreshed every second
    }, 1000);
  },
  render: function(){
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}></CountdownForm>
      </div>
    );
  }
});

module.exports = Countdown;
