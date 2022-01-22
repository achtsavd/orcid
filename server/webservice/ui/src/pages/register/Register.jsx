import React from "react";
import PropTypes from "prop-types";
import './register.css';

class Register extends React.Component {
  constructor( props ) {
    super( props );
  }

  registerAndRedirect = ()=>{
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <form className="box">
          <h1>Register</h1>
          <input type="text" name="" placeholder="Username"/>
          <input type="password" name="" placeholder="Password"/>
          <input type="text" name="" placeholder="Firstname"/>
          <input type="text" name="" placeholder="Lastname"/>
          <input type="text" name="" placeholder="Phone"/>
          <div style={{marginTop: '18px'}}><a href={'/'}>Do you have already account?</a></div>
          <input type="submit" value="Enter" onClick={this.registerAndRedirect}/>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  // this provides route info, will cause lint error
  match: PropTypes.object,
};

Register.defaultProps = {
  match: {},
};

export default Register;
