import React from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import "./Navigation.css";
const useHistory = require("react-router-dom").useHistory;
import historyLib from "react-router-dom";

// const icon = require( "assets/images/intel-people-counter.svg" );

const Navigation = ( { history } ) => {
    return(
        <nav className="navigation">
            <span className="logo-title" />
            <div className="navBtns">
                <a className={ `navBtn history` } onClick={ () => history.push("/") }><FontAwesome name="sign-out" size="2x" /></a>
            </div>
        </nav>
    );
}
export default Navigation;
