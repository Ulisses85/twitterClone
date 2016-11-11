const React = require('react');
const request = require('superagent');


const Tweet = React.createClass({
  getInitialState: function () {
    return {
      tweets: null
    }
  },
  componentWillMount: function () {
    var that = this;
    request
    .get('https://protected-oasis-31937.herokuapp.com/tweets')
    .end(function (error, response) {
      if(error) {
        console.log(error);
      } else {

        let tweets = [];
        response.body.forEach(function (item) {
          if (!item.tweets || !item.tweets.length || !item.tweets[0].text) return;
          var handle = item.handle;
          item.tweets.forEach(function (tweet) {
            tweets.push({
              handle: handle,
              text: tweet.text,
              userInfo: tweet.user,
              tweetCount:tweet.retweet_count,
              favoriteCount: tweet.favorite_count,
              tweetDate: tweet.created_at
            })
          })
        });
        console.log(tweets);
        that.setState({
          tweets: tweets
        })
      }
    })


  },
  render: function () {
    if (!this.state.tweets) {
      return <p>Loading...</p>
    }
    var sortedArray = this.state.tweets.sort(function (a, b) {
       return new Date(a.tweetDate) - new Date(b.tweetDate)
       console.log(sortedArray);
    });
    return(
      <div>
      {

        sortedArray.map(function (tweet) {

          return (
          <div className = "clearfix">
            <div className = "profile-pic">
              <img src = {tweet.userInfo.profile_image_url} />
            </div>
            <div className = "tweet-box">
                <div className = "tweet-user-info">
                  <p className="lead"> {tweet.userInfo.name} </p><span>{'@'+tweet.userInfo.screen_name}</span>
                  <p> {tweet.text}</p>
                </div>
            <div className = "tweet-media"> </div>
            <div className = "tweet-footer">
              <ul className = "tweet-share-list">
                  <li><i className = "fa fa-reply"></i></li>
                  <li><i className = "fa fa-retweet"></i><span>{tweet.tweetCount}</span></li>
                  <li><i className = "fa fa-heart"></i><span>{tweet.favoriteCount}</span></li>
                  <li><i className = "fa fa-ellipsis-h"></i></li>

              </ul>
            </div>
            </div>
          </div>
        )

        })
      }
    </div>
  )
  }
});

module.exports = Tweet;
