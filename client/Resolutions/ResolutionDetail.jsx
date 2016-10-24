import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends TrackerReact(Component) {
  constructor () {
    super();
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }
  componentWillUnmount(){
    this.state.subscription.resolutions.stop(); //unsubscribe from data
  }
  resolution() {
    return Resolutions.findOne(this.props.id);
  }
  render() {
    let resolution = this.resolution();
    if (!resolution) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <h1>{resolution.text}</h1>
      </div>
    )
  }
}
