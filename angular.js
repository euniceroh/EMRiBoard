var app = angular.module("ideaboard", ["firebase"]);

app.controller("ideaCtrl", function($scope, $firebase){
	var x = new Firebase("https://emriboard.firebaseio.com/");
	var sync = $firebase(x);
	$scope.posts = sync.$asArray();

	$scope.addPin = function (a, b, c, d, e){
		$scope.posts.$add({image_url: a, video: b, audio: c, words: d, hashtags: e});
		$scope.image_url="";
		$scope.video="";
		$scope.audio="";
		$scope.words="";
		$scope.hashtags="";
	}
	
	$scope.deletePin = function (entry){
		var check= confirm("are you sure you want to delete?");
		if (check == true){
			$scope.posts.$remove(entry);
		}
	}
/////////////////////////////////////////////////////////
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
})

//////////////////////////////////////////////////////////

// 	$(window).load(function(){
// 		$container.masonry({
// 		  // columnWidth: 25,
// 		  // itemSelector: '.columns',
// 	})
// });


