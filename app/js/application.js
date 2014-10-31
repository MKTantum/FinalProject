window.Final = Ember.Application.create();

Final.ref = new Firebase("https://sportsproject.firebaseio.com/");

Final.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase:Final.ref
});

Ember.Handlebars.helper('date-format', function (date) {
  return moment(date).format('h:mm a');
});

// This is an attempt at connecting to the messages of game_id_1

//
// Final.ChatAdapter = Final.ApplicationAdapter.extend({
//   pathForType: function (type) {
//     return 'games/game_id_1/messages';
//   }
// })
