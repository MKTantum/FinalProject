Final.SignUpController = Ember.Controller.extend({
  needs:['application'],

  actions: {
    signUp: function () {
      var self=this;
      var email=this.get('email');
      var password = this.get('password');
      Final.ref.createUser({
        email: email,
        password:password
      }, function (error) {
        if (error===null) {
          $('input').val('');
          self.transitionToRoute('index');
          Final.ref.authWithPassword({
            email:email,
            password:password
          }, function (error, authData) {
            if (error===null) {
              var user = self.store.createRecord('user', {
                id:authData.uid,
                username:self.get('username')
              });
              user.save();
            } else {
              console.log(error.message);
            }
          }, {
            remember:"sessionOnly"
          })


          console.log('Created User')
        } else {
          var fadeout = function() {
            $('.error').fadeOut(1000, function () {
              $('.error').empty();
              $('.error').fadeIn();
            });
          }
          $('.error').empty();
          $('.error').append('<p>' + error.message + '</p>');
          setTimeout(fadeout,3000);
          console.log(error.message);
        }
      })


    }
  }
})
