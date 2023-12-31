function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    controller: function($scope) {
      $scope.getSkills = function() {
        return $scope.member.skills.join(', ');
      };
    }
  };
}
