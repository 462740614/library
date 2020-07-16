app.controller('loginController',function($scope,$controller,loginService){
	
	$controller('baseController',{$scope:$scope});//继承
	
	//获取用户名
	$scope.getName=function(){
		loginService.getName().success(function(response){
			$scope.loginName=response.loginName;
		})
	}
	
	
	
	
	
	
})