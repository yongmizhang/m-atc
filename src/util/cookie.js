/**
 * @module cookie
 * @description cookie操作封装
 */

let defaultOpts = {
	expiresDay: 30,
	path: '/',
	domain: '.aoabank.com'
};

function trim(str) {
	if (typeof String.prototype.trim === 'function') {
		return String.prototype.trim.call(str);
	} else {
		return str.replace(/^\s+(.*?)\s+$/g, '$1');
	}
}

let cookie =  /** @alias module:cookie*/ {
	/**
	 * @alias module:cookie.get
	 * @description 从cookie中获取名字为name的cookie值返回的值。
	 * @param {String} name cookie的名字
	 * @param {Boolean} decode 返回的cookie值是否需要解码，默认为true
	 * @return {String} 返回的cookie值,默认是解码后的值，如果decode传false，返回没有解码的原始值;如果不存在返回null
	 * @example
	 * let val = cookie.get('ipcity');//bj|北京
	 * let val = cookie.get('ipcity',false);//bj%7C%u5317%u4EAC
	 */
	get: function(name, decode = true) {
		let cookieValue = null;
		if (!name) {
			return cookieValue;
		}
		//cookieNameLen:name+'='
		let cookieNameLen = name.length + 1;
		let strCookie = document.cookie;
		if (strCookie) {
			let arrCookies = strCookie.split(';');
			for (let i = 0, len = arrCookies.length; i < len; i++) {
				let cookie = trim(arrCookies[i]);
				if (cookie.substring(0, cookieNameLen) === (name + '=')) {
					cookieValue = cookie.substring(cookieNameLen);
					cookieValue = decode ? decodeURIComponent(cookieValue) : cookieValue;
					break;
				}
			}
		}
		return cookieValue;
	},
	/**
	 * @alias module:cookie.getname
	 * @description 从cookie中获取名字为cookieName的值中，通过&分割的名字name为属性值(这是个xx方法，不应该出现在cookie的方法中，应该是业务自己的事情，但是为了兼容老版本而保留)。
	 * @param {String} cookieName cookie的名字
	 * @param {String} name 查找的属性名
	 * @return {String} 返回符合要求的值
	 * @example
	 * let val = cookie.get('www58com');//"AutoLogin=false&UserID=22681205356295&UserName=qfwrw_f1&CityID=0&Email=&AllMsgTotal=0&CommentReadTotal=0&CommentUnReadTotal=0&MsgReadTotal=0&MsgUnReadTotal=0&RequireFriendReadTotal=0&RequireFriendUnReadTotal=0&SystemReadTotal=0&SystemUnReadTotal=0&UserCredit=0&UserScore=0&PurviewID=&IsAgency=false&Agencys=null&SiteKey=4E2D7FDC8FC5457587CDB008DB2CEE0FB5D2DC3B57E5C80AA&Phone=&WltUrl=&UserLoginVer=7A8AA9BF524FE05479145A84EF148AE27&LT=1440728380496"
	 * let val2 = cookie.getname('www58com','UserID');//22681205356295
	 *
	 */
	getname: function(cookieName, name) {
		let cookieVal = this.get(cookieName);
		if (!cookieVal) {
			return '';
		}
		let regex = new RegExp('[?&"]' + encodeURIComponent(name) + '\\=([^&#]+)');
		let value = (cookieVal.match(regex) || ['', ''])[1];
		return decodeURIComponent(value);
	},
	/**
	 * @alias module:cookie.set
	 * @description 设置cookie。
	 * @param {String} name cookie的名字
	 * @param {String} value cookie的值
	 * @param {Date | Number} expires cookie的过期时间，可以传一个数字，表示多少天后过期；如果穿一个Date类的值，过期时间设置为该值；如果不传采用默认过期时间,传null时设置为''
	 * @param {String} path cookie的路径值，如果不传采用默认path，传null时设置为''
	 * @param {String} domain cookie的域名，如果不传采用默认domain，传null时设置为''
	 * @param {Boolean} secure cookie是否设置为安全，值为true是，设置secure值，否则为''
	 *
	 * @example
	 * cookie.set('test','123');//设置一个名字为test值为123的cookie，域名，path和过期时间都是采用默认的值
	 * cookie.set('test','aaa',10);//设置一个10天后过期的cookie值
	 * cookie.set('test','bbb',10,'/xxx/','m.58.com');//在m.58.com域名的/xxx/路径下设置名字为test，值为bbb，过期时间为10天的cookie
	 */
	set: function(name, value, expires, path, domain, secure) {
		let undef;
		//过期时间设置
		if (value === null) {
			value = '';
			expires = -1; //过期日期设为前一天
		} else if (expires === undef) {
			expires = defaultOpts.expiresDay; //当没提供过期时间时，采用缺省过期时间
		}
		let setExpires = '';
		//如果过期时间是null或'',则cookie设置的过期时间为空，即设置session性质cookie
		if (expires) {
			let date;
			if (typeof expires === 'number') {
				date = new Date();
				date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
			} else if (expires.toUTCString) {
				date = expires;
			}
			setExpires = '; expires=' + date.toUTCString();
		}

		//path没传时，采用默认path设置；如果传null置''
		path = (path === undef) ? defaultOpts.path : path;
		let setPath = path ? '; path=' + path : '';

		//domain没传时，采用默认domain设置；如果传null置''
		domain = (domain === undef) ? defaultOpts.domain : domain;
		let setDomain = domain ? '; domain=' + domain : '';

		//secure
		let setSecure = (secure === true) ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), setExpires, setPath, setDomain, setSecure].join('');
	},
	/**
	 * @alias module:cookie.remove
	 * @description 清除名字为name的cookie。
	 * @param {String} name cookie的名字
	 * @example
	 * cookie.set('test','123');//设置一个名字为test值为123的cookie，域名，path和过期时间都是采用默认的值
	 * cookie.remove('test');//清除test cookie
	 * cookie.get('test');//null
	 */
	remove: function(name) {
		this.set(name, '', new Date(1970, 1, 1));
	}
};

export {cookie};
