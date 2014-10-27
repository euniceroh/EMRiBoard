var app = angular.module("ideaboard", ["firebase"]);

app.controller("ideaCtrl", function($scope, $firebase){
	var x = new Firebase("https://emriboard.firebaseio.com/");
	var sync = $firebase(x);
	$scope.posts = sync.$asArray();

/////////////////////////////////////////////////////////NG REPEAT
	$scope.addPin = function (a, b, c, d, e){
		$scope.posts.$add({image_url: a, video: b, audio: c, words: d, hashtags: e, like: false});
		$scope.image_url="";
		$scope.video="";
		$scope.audio="";
		$scope.words="";
		$scope.hashtags="";
	}

/////////////////////////////////////////////////////////ADD & DELETE
	$scope.deletePin = function (entry){
		var check= confirm("are you sure you want to delete?");
		if (check == true){
			$scope.posts.$remove(entry);
		}
	}

/////////////////////////////////////////////////////////LIKE
	$scope.likePin = function(entry){
		entry.like = (!entry.like);

		$scope.posts.$save(entry);
	}


/////////////////////////////////////////////////////////ADD TOGGLE
	$(document).ready(function(){
	  $("#addbutton").click(function(){
	    $("#formpanel").slideDown("slow");
	  });
	});
	$(document).ready(function(){
	  $("#doneadd").click(function(){
	    $("#formpanel").slideUp("slow");
	  });
	});



});








