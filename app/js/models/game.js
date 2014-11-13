Final.Game = DS.Model.extend({
  timeLeft:DS.attr('string'),
  url:DS.attr('string'),
  messages:DS.hasMany('message', {async:true}),
  teamOne:DS.belongsTo('team', {embedded:true}),
  teamTwo:DS.belongsTo('team', {embedded:true})
});

Final.Team = DS.Model.extend({
  teamName:DS.attr('string'),
  rank:DS.attr('string'),
  quarterOneScore:DS.attr('string'),
  quarterTwoScore:DS.attr('string'),
  quarterThreeScore:DS.attr('string'),
  quarterFourScore:DS.attr('string'),
  totalScore:DS.attr('string'),
  logo:DS.attr('string')
})
