import React, {Component} from 'react';

export default class ResolutionsForm extends Component {
  resolutions() {
    return Resolutions.find().fetch();
  }
  addResolution(event) {
    event.preventDefault(); // prevents refreshing
    var text = this.refs.resolution.value.trim(); //gets the value and inserts it in text
    //insert input field
    Resolutions.insert ({
      text: text,
      complete: false,
      createdAt: new Date()
    });
    this.refs.resolution.value = ""; //sets empty after submit
  }
  render () {
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input
           type="text"
           ref="resolution"
           placeholder="Finish React Meteor Series" />
      </form>
    )
  }
}
