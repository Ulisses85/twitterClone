const React = require('react');
const request = require('superagent');


const Feed = React.createClass({

  componentWillMount: function () {
    request
    .get('https://protected-oasis-31937.herokuapp.com/tweets')
    .end(function (error, response) {
      if(error) {
        console.log(error);
      }

      console.log(response);
    }.bind(this));

  },

  render: function () {
    return (
      <div className = "box feed-box" >
        <div className = "tweet-box">
          <div className = "user-pic"></div>
          <div className="tweet-body">
            <div className="tweet-info"></div>
            <div className="tweet-media"></div>
            <div className="tweet-share"></div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports =Feed;
