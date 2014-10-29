Final.SignUpController = Ember.Controller.extend({
  needs:['application'],

  actions: {
    signUp: function () {
      var self=this;
      Final.ref.createUser({
        email: this.get('email'),
        password:this.get('password')
      }, function (error) {
        if (error===null) {
          $('input').val('');
          self.transitionToRoute('index');
          console.log('Created User');
        } else {
          $('.error').empty();
          $('.error').append('<p>' + error.message + '</p>');
          console.log(error);
        }
      })
    }
  }
})
