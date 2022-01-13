import React from "react";
import PropTypes from "prop-types";
import './login.css';

class Login extends React.Component {
    constructor( props ) {
        super( props );
    }

    loginAndRedirect = ()=>{
        this.props.history.push('/rooms');
    }

    render() {
        return (
            <div>
                <form className="box">
                    <h1>Login</h1>
                    <input type="text" name="" placeholder="Username"/>
                    <input type="password" name="" placeholder="Password"/>
                    <input type="submit" value="Enter" onClick={this.loginAndRedirect}/>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    // this provides route info, will cause lint error
    match: PropTypes.object,
};

Login.defaultProps = {
    match: {},
};

export default Login;