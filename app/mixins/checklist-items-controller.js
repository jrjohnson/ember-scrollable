import Ember from 'ember';

export default Ember.Mixin.create({
  incompleteChecklistItems: Ember.computed.filterBy('model', 'completed', false),
  isChecklistComplete: Ember.computed.empty('incompleteChecklistItems'),

  checklistStatus: function() {
    if (this.get('isChecklistComplete')) {
      return 'Complete';
    }
    else {
      return 'Incomplete';
    }
  }.property('isChecklistComplete')
});
