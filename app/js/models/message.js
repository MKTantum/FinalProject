Final.Message = DS.Model.extend({
  content:DS.attr('string'),
  user:DS.belongsTo('user'),
  game:DS.belongsTo('game'),
  createdAt:DS.attr('date')
});


// Final.ChatAdapter = Final.ApplicationAdapter.extend({
//     pathForType: function (type) {
//       return 'messages';
//     }
// })
