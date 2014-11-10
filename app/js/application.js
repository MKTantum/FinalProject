window.Final = Ember.Application.create();

Final.ref = new Firebase("https://sportsproject.firebaseio.com/");

Final.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase:Final.ref
});

moment.locale('en', {
    calendar : {
        lastDay : 'MMM Do LT',
        sameDay : 'LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : 'MMM Do LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'MMM Do LT'
    }
});

Final.GameView = Ember.View.extend({
  didInsertElement: function () {
    console.log('didInsertElement fired');
    console.log($('.messages div').last().offset(top));
    console.log("Length", this.get('controller.messages.length'));

    // this.$('.messages').animate({scrollTop: this.$('.messages div').last().offset().top }, 1000);
  },

  messagesWereFetched: function(){
    console.log("Messages fetched", this.get('controller.content.messages.isFulfilled'))
    if(this.get('controller.content.messages.isFulfilled')){
      Ember.run.next(this, function(){
        var offset = this.$('.messages div').last().offset();
        if (offset) {
        this.$('.messages').animate({scrollTop: this.$('.messages div').last().offset().top }, 0);
        }
      });
    }
  }.observes('controller.content.messages.isFulfilled')
})

Ember.Handlebars.helper('date-format', function (date) {
      return moment(date).calendar();;
});
