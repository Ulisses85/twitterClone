const React = require('react');
const request = require('superagent');
const Tweet = require('./Tweet');

const Feed = React.createClass({

  render: function () {
    return (
      <div className = "box feed-box clearfix" >
      <Tweet />
      </div>

    );
  }
});

module.exports =Feed;
