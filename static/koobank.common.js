function goPAGE() {
	if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		if (window.location.pathname === '/') {
			window.location.href = window.location.protocol + "//" + window.location.host + '/m/home';
		} else if (!(window.location.pathname.indexOf('/m/') > -1))
			window.location.href = window.location.protocol + "//" + window.location.host + '/m' + window.location.pathname;  //跳转到wap端的网址
	}
}
goPAGE();
