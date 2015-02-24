angular.module("picoCreator", []).controller("picoController", function($scope){
		$scope.trueFalse = [
			{name:"true"},
			{name:"false"}
		];
		$scope.autogen = $scope.trueFalse[0];
		$scope.baseScore = "20";
		$scope.description = "<p>Hello World</p>";
		$scope.displayName = "";
		$scope.grader = "";
		$scope.hint = "";
		$scope.pid = "";
		$scope.threshold = "";
		$scope.weightmap = "{}";
});