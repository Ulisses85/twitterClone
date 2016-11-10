const React = require('react');
const ReactDOM = require('react-dom');
const TrendsBox = require('./components/TrendsBox');
const request = require('superagent');


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
        <h1 className="title is-1">Northwitter</h1>
        <TrendsBox trends = {this.state.trends}/>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
