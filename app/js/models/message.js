Final.Message = DS.Model.extend({
  content:DS.attr('string'),
  user:DS.belongsTo('user', {async:true}),
  game:DS.belongsTo('game'),
  createdAt:DS.attr('date'),
  reputation:DS.attr('number')
});


// Final.ChatAdapter = Final.ApplicationAdapter.extend({
//     pathForType: function (type) {
//       return 'messages';
//     }
// })
