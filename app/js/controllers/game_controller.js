Final.GameController = Ember.ObjectController.extend({
  needs:['application'],
  newMessage:'',

  actions: {
    post: function () {
      var text = localStorage.getItem('firebase:session::sportsproject');
      var parsed = JSON.parse(text);
      var user = parsed.uid;
      var self = this;
      if (this.get('newMessage').length > 0) {
        this.store.find('user', user).then(function(user){
          var message = self.store.createRecord('message', {
            createdAt: new Date(),
            content:self.get('newMessage'),
            user:user
          });
          message.save();
          self.get('model.messages').addObject(message);
          self.get('model').save();
          self.set('newMessage','');
        })
      }
    }
  }
})
