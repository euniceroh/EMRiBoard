var app = angular.module("ideaboard", ["firebase"]);

app.controller("ideaCtrl", function($scope, $firebase){
	var x = new Firebase("https://emriboard.firebaseio.com/");
	var sync = $firebase(x);
	$scope.posts = sync.$asArray();

/////////////////////////////////////////////////////////NG REPEAT
	$scope.addPin = function (a, b, c, d, e){
		if(a===undefined||a===null){
			ablank="";}
		  else{
		  	ablank=a;}

		if(b===undefined||b===null){
			bblank="";}
		  else{
		  	bblank=b;}

		if(c===undefined||c===null){
			cblank="";}
		  else{
		  	cblank=c;}

		if(d===undefined||d===null){
			dblank="";}
		  else{
		  	dblank=d;}

		if(e===undefined||e===null){
			eblank="";}
		  else{
		  	eblank=e;}

		
		$scope.posts.$add({image_url: ablank, video: bblank, audio: cblank, words: dblank, hashtags: eblank, like: false});
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








