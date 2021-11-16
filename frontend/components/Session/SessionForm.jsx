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
      <div className="session-container">
        {/* <div className="image">
          <img src="https://firebasestorage.googleapis.com/v0/b/gallery-23854.appspot.com/o/A895F86A-7A7B-48DD-89BA-D3E5F9735CA3.jpeg?alt=media&token=91a3a606-171b-4dbf-a673-5b032651f4c8" />
        </div> */}

        <div className="session-form-container">
          <div className="form">
            <form onSubmit={this.handleSubmit}>

              <h1 className="session-title">
                {/* {this.props.formType}. */}
                Sign in using your email and the passcode provided to you by email or return <Link to="/">home</Link>.
              </h1>
              <br />
              <div className="session-errors">
                {this.renderErrors()}
              </div>

              <label>
                {/* <p></p> */}
                <input
                  type="text"
                  value={this.state.email}
                  placeholder="Email"
                  onChange={this.update('email')} />
              </label>

              <label>
                {/* <p></p> */}
                <input
                  type="password"
                  value={this.state.password}
                  placeholder="Passcode"
                  onChange={this.update('password')} />
              </label>
              <br />
              <div className="session-actions">
                {/* <p>Sign in using your email and the passcode provided to you by email or return <Link to="/">home</Link>.</p> */}
                <button><i class="fas fa-arrow-right"></i></button>
              </div>
              <br />
              {/* <p>Forgot your email or password?</p>
              <p>Do you want to demo the site?</p> */}

            </form>
            <br />
            {/* <form onSubmit={this.logInDemo}>
                            <button>Demo</button>
                        </form> */}
          </div>

        </div>
      </div>


      // <div className="session-form-container">
      //     <div className="arch">
      //         <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/terracotta-abstract-29-modern-contemporary-art-abstract-organic-shapes-brown-arches-minimal-studio-grafiikka.jpg" />
      //     </div>
      //     <div className="session-content">
      //         <form onSubmit={this.handleSubmit}>
      // <h2 className="session-title">
      //     Please {this.props.formType} or {this.props.navLink}.
      // </h2>
      // <div className="session-errors">
      //     {this.renderErrors()}
      // </div>
      // <br />

      //             <div className="session-input-div email">
      //                 <div className="i">
      //                     <i className="fas fa-user"></i>
      //                 </div>
      //                 <div className="session-header">
      //                     <h5>
      //                         Email
      //                     </h5>
      //                         <input type="text"
      //                             value={this.state.email}
      //                             onChange={this.update('email')}
      //                             className="session-input"
      //                         />
      //                 </div>
      //             </div>

      //             <div className="session-input-div password focus">
      //                 <div className="i">
      //                     <i className="fas fa-lock"></i>
      //                 </div>
      //                 <div className="session-header">
      //                     <h5>
      //                         Password
      //                     </h5>
      //                     <input type="password"
      //                         value={this.state.password}
      //                         onChange={this.update('password')}
      //                         className="session-input"
      //                     />
      //                 </div>
      //             </div>
      //             <a href="#" className="forgot">Forgot Password?</a>
      //             <br />
      //             <input className="session-submit" type="submit" value={this.props.formType} />
      //         </form>
      //     </div>
      // </div>
    );
  }
}

export default SessionForm;
