var React = require('react');
var createReactClass = require('create-react-class')
var {Link, IndexLink} = require('react-router');
import * as Redux from 'react-redux';
import * as actions from 'actions'


var Login = createReactClass({
  onLogin: function () {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render: function () {
    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with Github account below</p>
              <button className="button expanded" onClick={this.onLogin}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Redux.connect()(Login);
