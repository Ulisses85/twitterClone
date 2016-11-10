
const React = require('react');
const mainMenu = ['Home', 'Moments', 'Notifications', 'Messages'];
const Navbar = React.createClass({

  menuRender: function () {
    return (
          mainMenu.map(function (menuItem, i) {
            return <a className="nav-item" key={i}>{mainMenu[i]}</a>
          })

    );
  },

  render: function () {
    return (
      <div className="container-fluid is-clearfix container-custom">
        <nav className="nav nav-custom has-shadow">
          <div className="nav-left nav-menu">
              {this.menuRender()}
          </div>
          <div className = "nav-center">
          <span className="nav-item">
            <i className="fa fa-twitter icon-twt"></i>
          </span>
          </div>

          <div className = "nav-right">
            <span className="nav-item custom-item">
              <input className="input custom-input" type="search" placeholder="Search Twitter" />
              <img src='https://pbs.twimg.com/profile_images/3400341852/8c04007773ebea843cdb39617ecd1bc0_bigger.jpeg' />

              <a className="button is-primary" href="#">
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span>Tweet</span>
              </a>
            </span>
          </div>
        </nav>
      </div>
    )
  }

});



module.exports = Navbar;
