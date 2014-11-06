Final.GameController = Ember.ObjectController.extend({
  needs:['application'],
  newMessage:'',

  actions: {
    post: function () {
      console.log($('.messages div').last());
      $('.messages').animate({scrollTop: $('.messages div').last().offset().top }, 500);
      var text = localStorage.getItem('firebase:session::sportsproject');
      if (text===null) {
        throw new Error('You must be logged in to chat');
      }
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
