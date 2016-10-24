import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

  addResolution(event) {
    event.preventDefault(); // prevents refreshing

    var text = this.refs.resolution.value.trim(); //gets the value and inserts it in text
    if (text) {
      //insert input field
      //Call metheor method because removed insecure / methods stored on server file methods.js
      Meteor.call ('addResolution', text, (error,data)=> { // => allows to use "this"
      if(error) {
        Bert.alert('Please login before submitting', 'danger','fixed-top', 'fa-frown-o'  );
      } else {
        this.refs.resolution.value = ""; //sets empty after submit
    }}); }



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
