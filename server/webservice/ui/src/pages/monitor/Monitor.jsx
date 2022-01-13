import React from "react";
import PropTypes from "prop-types";
import CameraFeed from "../../features/camera-feed/CameraFeed";
import ConnectedLog from "../../features/stats/ConnectedStats";
import Navigation from "../../components/navigation/Navigation";
import ConnectedStats from "../../features/stats/ConnectedStats";

class Monitor extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
        <div>
          <Navigation history={this.props.history}/>
          <ConnectedLog />
          <CameraFeed />
          <ConnectedStats />
        </div>
    );
  }
}

Monitor.propTypes = {
  // this provides route info, will cause lint error
  match: PropTypes.object,
};

Monitor.defaultProps = {
  match: {},
};

export default Monitor;