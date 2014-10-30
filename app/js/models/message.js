Final.Message = DS.Model.extend({
  content:DS.attr('string'),
  user:DS.attr('string'),
  game:DS.attr('string'),
  createdAt:DS.attr('date')
})
