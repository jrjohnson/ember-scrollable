import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['currentUser'],
  currentUser: Ember.computed.oneWay('controllers.currentUser'),
  showTeamSelect: false,
  selectedTeam: null,
  teamSelectChanged: false,
  multipleTeamsAvailable: Ember.computed.gt('model.length', 1),
  model: Ember.computed.alias('currentUser.teams'),

  pistachioUrl: Ember.computed(function() {
    return `${EmberENV.pistachioUrl}/whiteboard`;
  }),

  onTeamSelectChange: function() {
    this.get('controller').set('teamSelectChanged', true);
  },

  selectedTeamDidChange: Ember.observer('selectedTeam', function() {
    if (this.get('teamSelectChanged')) {
      this.set('teamSelectChanged', false);
      this.set('showTeamSelect', false);
      this.transitionToRoute('whiteboards.whiteboard', this.get('selectedTeam.id'));
    }
  }),

  actions: {
    toggleTeamSelect: function() {
      this.toggleProperty('showTeamSelect');
    },

    submitFeedback: function() {
      /* jshint newcap: false */
      Intercom('showNewMessage');
      /* jshint newcap: true */
    }
  }
});
