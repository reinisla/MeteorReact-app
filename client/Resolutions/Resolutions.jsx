import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx'
import Resolution from './Resolution.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


Resolutions = new Mongo.Collection("resolutions");

class App extends TrackerReact(React.Component) {
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
  resolutions() {
    return Resolutions.find().fetch();
  }
  render() {
    let res = this.resolutions();
    // if(res.length < 1){
    //   return (<div>Loading</div>)
    // }
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>My Resolutions </h1>
        <ResolutionsForm />

        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}>
          {this.resolutions().map((resolution) => {
            return   <Resolution resolution={resolution} key={resolution._id}/>
          })}
          </ReactCSSTransitionGroup>

     </ReactCSSTransitionGroup>
    )
  }
}

export default App
