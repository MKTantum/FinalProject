Final.IndexController = Ember.Controller.extend({
  needs:['application'],

  actions: {
    logout: function () {
      Final.ref.unauth();
      this.transitionToRoute('login');
    }
  }
})
