app.controller('contentController',function($scope,$controller,contentService){
	
	$controller('baseController',{$scope:$scope});//继承
	
	$scope.findAll=function(){
		contentService.findAll().success(
			function(response){
				$scope.entity=response;
			}			
		);
	}    
	
	

 });
	

	


