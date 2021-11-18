import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div id="session-container">
        <form onSubmit={this.handleSubmit}>

          <h1 className="session-title">
            Sign in using your email and the passcode which was provided to you by email or return <Link to="/">home</Link>.
          </h1>

          <div className="session-errors">
            {this.renderErrors()}
          </div>

          <label>
            <input
              type="text"
              value={this.state.email}
              placeholder="Email"
              onChange={this.update('email')} />
          </label>

          <label>
            <input
              type="password"
              value={this.state.password}
              placeholder="Passcode"
              onChange={this.update('password')} />
          </label>

          <div className="session-actions">
            <button id="arrow-btn"><i className="fas fa-arrow-right"></i></button>
          </div>

          {/* <p>Do you want to demo the site?</p> */}

        </form>
      </div>
      // <div className="session-container">

      //   {/* <div className="session-form-container"> */}
      //     {/* <div className="form"> */}
      //       <form onSubmit={this.handleSubmit}>

      //         <h1 className="session-title">
      //           {/* {this.props.formType}. */}
      //           Sign in using your email and the passcode provided to you by email or return <Link to="/">home</Link>.
      //         </h1>
      //         <div className="session-errors">
      //           {this.renderErrors()}
      //         </div>

      //         <label>
      //           {/* <p></p> */}
      //           <input
      //             type="text"
      //             value={this.state.email}
      //             placeholder="Email"
      //             onChange={this.update('email')} />
      //         </label>

      //         <label>
      //           {/* <p></p> */}
      //           <input
      //             type="password"
      //             value={this.state.password}
      //             placeholder="Passcode"
      //             onChange={this.update('password')} />
      //         </label>
      //         <div className="session-actions">
      //           {/* <p>Sign in using your email and the passcode provided to you by email or return <Link to="/">home</Link>.</p> */}
      //           <button><i class="fas fa-arrow-right"></i></button>
      //         </div>
      //         {/* <p>Forgot your email or password?</p>
      //         <p>Do you want to demo the site?</p> */}

      //       </form>
      //       {/* <form onSubmit={this.logInDemo}>
      //                       <button>Demo</button>
      //                   </form> */}
      //     {/* </div> */}

      //   {/* </div> */}
      // </div>
    );
  }
}

export default SessionForm;
