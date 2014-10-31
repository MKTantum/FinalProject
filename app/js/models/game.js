Final.Game = DS.Model.extend({
  messages:DS.hasMany('message'),
  teamOne:DS.belongsTo('team'),
  teamTwo:DS.belongsTo('team'),
})
