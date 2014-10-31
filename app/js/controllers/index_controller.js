Final.IndexController = Ember.ArrayController.extend({
  needs:['application'],

  actions: {
    logout: function () {
      Final.ref.unauth();
      this.transitionToRoute('login');
    }
  }
})
