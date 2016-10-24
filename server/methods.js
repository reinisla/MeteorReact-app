Meteor.methods ({
  addResolution(resolution) {
    check(resolution, String);
    if(!Meteor.userId()) { //access to content
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.insert ({
      text: resolution,
      complete: false,
      createdAt: new Date(),
      user: Meteor.userId()
    });
  },
  toggleResolution (resolution) {
    check(resolution, Object);
    if(Meteor.userId() !== resolution.user) { //check user access
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.update (resolution._id, {
      $set: {
        complete: !resolution.complete //opposite of current status
      }
    });
  },
  deleteResolution(resolution){
    check(resolution, Object);
    if(Meteor.userId() !== resolution.user) {
      throw new Meteor.Error('not-authorized');
    }
    Resolutions.remove(resolution._id);
  }
});
