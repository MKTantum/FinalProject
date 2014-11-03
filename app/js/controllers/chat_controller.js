Final.ChatController = Ember.ArrayController.extend({
  needs:['application'],
  newMessage:'',

  actions: {
    post: function () {
      var text = localStorage.getItem('firebase:session::sportsproject');
      var parsed = JSON.parse(text);
      var user = parsed.uid;
      var self = this;
      console.log(this.get('newMessage'));
      this.store.find('user', user).then(function(user){
        console.log("The user",user);
        var message = self.store.createRecord('message', {
          createdAt: new Date(),
          content:self.get('newMessage'),
          user:user
        });
        message.save();
        self.set('newMessage','');
      })
    }
  }
})
