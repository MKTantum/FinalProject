window.Final = Ember.Application.create();

Final.ref = new Firebase("https://sportsproject.firebaseio.com/");

Final.ApplicationAdadpter = DS.FirebaseAdapter.extend({
  firebase:Final.ref
})
