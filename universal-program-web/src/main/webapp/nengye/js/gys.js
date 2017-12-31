	function gysindex(userId) {
		if(userId == null) {
			alert("请先登陆");	
			window.location.href = rootPath + "/pchome/index.do";
			return false;
		}
		var url = rootPath + "/pcbusiness/gysindex.do?userId="+userId;
		window.location.href = url;
	}

	function getCollectedList(userId) {
		if(userId == null) {
			alert("请先登陆");	
			window.location.href = rootPath + "/pchome/index.do";
			return false;
		}
		var url = rootPath + "/pcbusiness/getCollectedList.do?userId="+userId;
		window.location.href = url;
	}

	function getAttentionedList(userId) {
		if(userId == null) {
			alert("请先登陆");	
			window.location.href = rootPath + "/pchome/index.do";
			return false;
		}
		var url = rootPath + "/pcbusiness/getAttentionedList.do?userId="+userId;
		window.location.href = url;
	}
	
	function getBusinessCompanyInfop(userId) {
		if(userId == null) {
			alert("请先登陆");	
			window.location.href = rootPath + "/pchome/index.do";
			return false;
		}
		var url = rootPath + "/pcbusiness/getBusinessCompanyInfop.do?userId="+userId;
		window.location.href = url;
	}
	
	// function getIndentList2(userId, isBusiness, indentType, state,pageNo,pageSize) {
	// 	if(userId == null) {
	// 		alert("请先登陆");	
	// 		window.location.href = rootPath + "/pchome/index.do";
	// 		return false;
	// 	}
	// 	var url = rootPath + "/pcbusiness/getIndentList2.do?state="+state+
	// 		"&indentType=" +indentType+"&isBusiness="+isBusiness+
	// 		"&pageNo=" +pageNo+"&pageSize="+pageSize
	// 		;
	// 	window.location.href = url;
	// }
	
	function reportFormList(userId) {
		if(userId == null) {
			alert("请先登陆");	
			window.location.href = rootPath + "/pchome/index.do";
			return false;
		}
		var url = rootPath + "/pcbusiness/reportFormList.do?userId="+userId;
		window.location.href = url;
	}
	
	function getDecorationList(userId) {
		if(userId == null) {
			alert("请先登陆");	
			window.location.href = rootPath + "/pchome/index.do";
			return false;
		}
		var url = rootPath + "/pcbusiness/getDecorationList.do?userId="+userId;
		window.location.href = url;
	}

	function getPlatformInfo() {
		var url = rootPath + "/pcbusiness/getPlatformInfo.do";
		window.location.href = url;
	}

	function aboutUs() {
		var url = rootPath + "/pcbusiness/aboutUs.do";
		window.location.href = url;
	}
