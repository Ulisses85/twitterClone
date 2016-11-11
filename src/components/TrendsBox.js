const React = require('react');

const TrendsBox = React.createClass({
  render: function () {
    return (
      <div className="container is-clearfix">
      <div className="box">
        <p className="trends">Worldwide trends</p>
        <ul className="trendList">
          {this.props.trends.slice(0,10).map(function(trend, i) {
            return (
              <li className="trend" key={i}><a href ={trend.url}> {trend.name}</a></li>
            )
          })
          }
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = TrendsBox;
