import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx'
import Resolution from './Resolution.jsx'


Resolutions = new Mongo.Collection("resolutions")

class App extends TrackerReact(React.Component) {

  resolutions() {
    return Resolutions.find().fetch();
  }
  render() {
    let res = this.resolutions();
    if(res.length < 1){
      return (<div>Loading</div>)
    }
    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionsForm />
        <ul className="resolutions">
          {this.resolutions().map((resolution) => {
            return   <Resolution resolution={resolution} key={resolution._id}/>
          })}

        </ul>
     </div>
    )
  }
}

export default App
