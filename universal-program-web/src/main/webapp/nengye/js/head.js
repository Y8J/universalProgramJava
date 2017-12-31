function ucenter(userId){
	if(userId == null) {
		alert("请先登陆");	
		window.location.href = rootPath + "/pchome/index.do";
		return false;
	}
	var url = rootPath + "/pcuserelse/index.do?userId=" + userId;
	window.location.href = url;	
}

function bscenter(userId){
	if(userId == null) {
		alert("请先登陆");	
		window.location.href = rootPath + "/pchome/index.do";
		return false;
	}
	//判断用户是否为供应商
	$.ajax({
	        type: "get",
	        url: rootPath+"/pcbusiness/isBussiness.do?userId="+userId,
	        success: function(data){
	           if(data=='true'){
	     	       alert("你还不是平台认证的商家！请联系020-435264");
	     	      return false;
	           }else{
	        	   var url = rootPath + "/pcbusiness/gysindex.do?userId="+userId;
	        		window.location.href = url;	
	           }
	        }
	}); 
	
}

function getShopCartList(userId){
	if(userId == null) {
		alert("请先登陆");	
		window.location.href = rootPath + "/pchome/index.do";
		return false;
	}
	var url = rootPath + "/pcshopCart/getShopCartList.do?userId="+userId;
	window.location.href = url;	
}



function getCollectList(userId){
	if(userId == null) {
		alert("请先登陆");	
		window.location.href = rootPath + "/pchome/index.do";
		return false;
	}
	var url = rootPath + "/pcuserelse/getCollectList.do?userId="+userId;
	window.location.href = url;	
}

function pcindex(){
	var url = rootPath + "/pchome/index.do";
	window.location.href = url;	
}

function toLoginPage(){
	window.location.href = rootPath + "/pchome/index.do";
	return false;
}