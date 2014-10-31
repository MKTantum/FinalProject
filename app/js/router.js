Final.Router.map(function () {
  this.route('signUp');
  this.route('login');
  this.route('chat');
});

Final.ChatRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('message');
  }
});
