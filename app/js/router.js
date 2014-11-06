Final.Router.map(function () {
  this.route('signUp');
  this.route('login');
  this.route('game', {path:'/game/:game_id'});
});

Final.GameRoute = Ember.Route.extend({
  model: function (params) {
      return this.store.find('game',params.game_id)
  }
});
