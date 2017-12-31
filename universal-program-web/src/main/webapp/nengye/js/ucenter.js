function index(userId) {
	var url = rootPath + "/pcuserelse/index.do?userId=" + userId;
	window.location.href = url;
}

function getUserBaseInfo(userId) {
	if(userId == null) {
		alert("请先登陆");		
		toLoginPage();
	}
	var url = rootPath + "/pcuserelse/getUserBaseInfo.do?userId=" + userId;
	window.location.href = url;
}

function gotoChat(userId,phone) {
	if(userId == null) {
		alert("请先登陆");
		toLoginPage();
		return;
	}
	if(phone==null){
		phone="";
	}
	objWin = window.open( rootPath + "/pcuser/gotoChat.do?phone=" + phone, "apwcChat", '', true);
	objWin.focus();
}

function getReceiveList(userId) {
	if(userId == null) {
		alert("请先登陆");		
		toLoginPage();
	}
	var url = rootPath + "/pcuserelse/getReceiveList.do?userId=" + userId;
	window.location.href = url;
}

function getIndentList2(userId, isBusiness, indentType, state,pageNo,pageSize) {
	if(userId == null) {
		alert("请先登陆");		
		toLoginPage();
		return false;
	}
	var url = rootPath + "/pcuserelse/getIndentList.do?userId=" + userId
	+ "&indentType="+indentType + "&state="+state + "&isBusiness="+isBusiness
		+ "&pageNo="+pageNo+ "&pageSize="+pageSize;
	window.location.href = url;
}

function getIndentList(userId, type) {
	getIndentList2(userId, 0, 1,0,1,20);
}

function getAttentionList(userId) {
	if(userId == null) {
		alert("请先登陆");		
		toLoginPage();
		return false;
	}
	var url = rootPath + "/pcuserelse/getAttentionList.do?userId=" + userId;
	window.location.href = url;
}
function gotoIndentPay(indentId) {
	var url = rootPath + "/pcuserelse/gotoIndentPay.do?indentId=" + indentId;
	window.location.href = url;
}
function getRecordList(userId) {
	if(userId == null) {
		alert("请先登陆");			
		toLoginPage();
		return false;
	}
	var url = rootPath + "/pcuserelse/getRecordList.do?userId=" + userId;
	window.location.href = url;
}
function deleteIndentById(intentId) {
	var url = rootPath + "/pcuserelse/getRecordList.do?intentId=" + intentId;
	window.location.href = url;
}
function uaboutUs() {
	var url = rootPath + "/pcuserelse/aboutUs.do";
	window.location.href = url;
}
//订单详情
function indentDetail(userId, isBusiness, indentId, state){
	var url = rootPath + "/pcuserelse/getIndentDetail.do?userId=" +userId+ "&indentId=" + indentId +
		"&state=" + state +
		"&isBusiness=" + isBusiness;
	window.location.href=url;
}
// function goDetails(goodsId) {
// 	var url = rootPath + "/pchome/goodsDetail.do?goodsId=" + goodsId;
// 	window.location.href = url;
// }