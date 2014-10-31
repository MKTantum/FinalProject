Final.ChatController = Ember.ArrayController.extend({
  needs:['application'],
  newMessage:'',

  actions: {
    post: function () {
      console.log(this);
      var username = '<Final.User:ember406:simplelogin:2>';
      var message = this.store.createRecord('message', {
        createdAt: new Date(),
        content:this.get('newMessage'),
        // user:{username:'Someone not so important'},

      });
      message.save();
      this.set('newMessage','');
    }
  }
})
