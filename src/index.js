const React = require('react');
const ReactDOM = require('react-dom');
const TrendsBox = require('./components/TrendsBox');
const request = require('superagent');
const Navbar = require('./components/Navbar');
const Profile = require('./components/Profile');
const Feed = require('./components/Feed');
const WhoBox = require('./components/WhoBox');
const App = React.createClass({

  getInitialState: function (){
    return {
      trends:[]
    }
  },

  componentWillMount: function () {
    request
    .get('https://protected-oasis-31937.herokuapp.com/trends')
    .end(function(error, response) {
      if(error) {
        console.log(error);
      }
    this.setState({
        trends:response.body.tweetData.trends[0].trends
    });
      console.log(response.body.tweetData.trends[0].trends);
    }.bind(this));

  },

  render: function () {
    return (
      <div>
      <Navbar />
        <div className ="columns">
          <div className="column is-3">
              <Profile />
              <TrendsBox trends = {this.state.trends}/>
          </div>
          <div className="column is-6">
              <Feed />
          </div>
          <div className="column is-3">
              <WhoBox />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
