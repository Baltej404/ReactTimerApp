var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <IndexLink to="/stopwatch" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>stopwatch</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Made With</li>
            <li>
              <a href="https://facebook.github.io/react">React</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
module.exports = Nav;
