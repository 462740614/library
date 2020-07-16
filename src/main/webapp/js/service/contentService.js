app.service('contentService',function($http){
	
	this.findAll=function(){
		
	return	$http.get('../content/findAll.do');
	}
	
		    	
		
	
	
})