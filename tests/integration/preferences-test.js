import Ember from 'ember';
import { test } from 'ember-qunit';
import '../helpers/define-fixture';
import testHelper from '../test-helper';

module('Preferences', testHelper);

test('sidebarCollapsed is set to true when collapsing the sidebar', function(){
  if (window.localStorage != null) {
    window.localStorage.clear();
  }

  visit('/');
  click('.toggle-collapse button');

  andThen(function(){
    equal(window.Phoenix.__container__.lookup('controller:currentUser').get('preferences.sidebarCollapsed'), true);
  });
});
