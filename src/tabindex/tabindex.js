angular.module('ui.bootstrap.tabindex', [])

.directive('uibTabindexToggle', function() {
  return {
    restrict: 'A',
    scope: {
      tabindexDisabled: '=?'
    },
    link: function(scope, elem, attrs) {
      attrs.$observe('disabled', function(disabled) {
        attrs.$set('tabindex', disabled ? -1 : null);
      });

      scope.$watch('tabindexDisabled', function(value) {
        attrs.$set('tabindex', value ? -1 : null);
      });
    }
  };
});
