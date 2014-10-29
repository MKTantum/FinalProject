Final.LoginController = Ember.Controller.extend({
  needs:['application'],

  actions: {
    login: function () {
      var self=this;
      Final.ref.authWithPassword({
        email:this.get('email'),
        password:this.get('password')
      }, function (error, authData) {
        if (error===null) {
          $('input').val('');
          $('[type=text]').val('');
          console.log("Successfully logged in as", authData.uid);
          self.transitionToRoute('index');
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
