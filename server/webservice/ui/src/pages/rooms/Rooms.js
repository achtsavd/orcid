import React from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/navigation/Navigation";
import './rooms.css';
import doorIcon from '../../assets/images/open-door.png';

class Rooms extends React.Component {
    constructor( props ) {
        super( props );
    }

    redirectToMonitor = () =>{
        this.props.history.push('/monitor');
    }
    render() {
        return (
            <div>
                <Navigation history={this.props.history}/>
                <div className="box">
                    <section className="card-container">

                        <div className="card" onClick={this.redirectToMonitor}>
                            <img height={100} src={doorIcon}/>
                            <h1>Room #1</h1>
                        </div>

                        <div className="card" onClick={this.redirectToMonitor}>
                            <img height={100} src={doorIcon}/>
                            <h1>Room #2</h1>
                        </div>

                        <div className="card" onClick={this.redirectToMonitor}>
                            <img height={100} src={doorIcon}/>
                            <h1>Room #3</h1>
                        </div>

                        <div className="card" onClick={this.redirectToMonitor}>
                            <img height={100} src={doorIcon}/>
                            <h1>Room #4</h1>
                        </div>

                        <div className="card" onClick={this.redirectToMonitor}>
                            <img height={100} src={doorIcon}/>
                            <h1>Room #5</h1>
                        </div>

                        <div className="card" onClick={this.redirectToMonitor}>
                            <img height={100} src={doorIcon}/>
                            <h1>Room #6</h1>
                        </div>

                    </section>
                </div>
            </div>
        );
    }
}

Rooms.propTypes = {
    // this provides route info, will cause lint error
    match: PropTypes.object,
};

Rooms.defaultProps = {
    match: {},
};

export default Rooms;