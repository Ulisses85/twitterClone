const React = require('react');
const request = require('superagent');
const TWEET_FEED = require('./data');

const Profile = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      username: '',
      tweets: '',
      followers: '',
      following: '',
      profileImage: '',
      backgroundImage: ''
    }
  },
  componentWillMount: function () {
    request
    .get('https://protected-oasis-31937.herokuapp.com/tweets/northcoders')
    .end(function(error, response) {
      if(error) {
        console.log(error);
      }
    this.setState({
          name: response.body.tweetData[0].user.name,
          username: response.body.tweetData[0].user.screen_name,
          tweets: response.body.tweetData[0].user.statuses_count,
          followers: response.body.tweetData[0].user.followers_count,
          following: response.body.tweetData[0].user.friends_count,
          profileImage: response.body.tweetData[0].user.profile_image_url,
          backgroundImage: response.body.tweetData[0].user.profile_background_image_url

    });
      console.log(response);
    }.bind(this));

  },

  render: function () {
    return (
      <div className = "box profile-box" >
        <div className = "profile-background">
          <img src={this.state.backgroundImage} />
        </div>
        <a className="user-data"><img src={this.state.profileImage} /></a>
      </div>
    );
  }

});

module.exports = Profile;
