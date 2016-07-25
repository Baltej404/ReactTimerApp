var React = require('react');

var Controls = React.createClass({
  propTypes: {
    //collets the props, located in other class
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function () {
    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      //if started then do this
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        //it is paused so do this
    } else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return (
      //function is also being rendered
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Reset</button>
      </div>
    )
  }
});

module.exports = Controls;
