Final.GameController = Ember.ObjectController.extend({
  needs:['application'],
  newMessage:'',

  actions: {
    post: function () {
      console.log($('.messages div').last());
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
            user:user,
            reputation:0
          });
          message.save();
          self.get('model.messages').addObject(message);
            var offset = this.$('.messages div').last().offset();
            if (offset) {
            this.$('.messages').animate({scrollTop: this.$('.messages div').last().offset().top }, 0);
          }
          console.log(self.get('model.messages').length);
          self.get('model').save()
          self.set('newMessage','');
        })
      }
    },

    like: function (message) {
      var messageref = new Firebase("https://sportsproject.firebaseio.com/messages/" + message.id + '/reputation');
      messageref.transaction(function (reputation) {
        return reputation + 1;
      });
    },

    dislike: function (message) {
      var messageref = new Firebase("https://sportsproject.firebaseio.com/messages/" + message.id + '/reputation');
      messageref.transaction(function (reputation) {
        return reputation - 1;
      });
    }
  }
})
