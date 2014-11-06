Final.Game = DS.Model.extend({
  messages:DS.hasMany('message', {async:true}),
  teamOne:DS.attr('string'),
  teamTwo:DS.attr('string')
})
