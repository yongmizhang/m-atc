import 'whatwg-fetch';
import Cookie from 'js-cookie';
/**
 * [post]
 * @param  {[String]} url              [资源路径]
 * @param  {[String]} data             [发送数据]
 * @return {[Promise]}                  [description]
 */
// 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
function post(url, data) {
	const token = Cookie.get('token');
	let headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json;charset=UTF-8'
	};
	if (token) {
		headers['token'] = token
	}
	return fetch(url, {
		headers,
		// credentials: 'include',
		mode: 'cors',
		method: 'POST',
		// body: _urlEncode(data)
		body: JSON.stringify(data)
	}).then(function (response) {
		return _formatData(response);
	});
}
/**
 * [get]
 * @param  {[String]} url              [资源路径]
 * @return {[Promise]}                  [description]
 */
function get(url) {
	const token = Cookie.get('token');
	let options = {
		method: 'GET',
		mode: 'cors'
		// credentials: 'include'
	};
	if (token) {
		options.headers = {
			'token': token
		}
	}
	return fetch(url, options).then(function (response) {
		return _formatData(response);
	});
}
/**
 * [_formatData 格式化response]&[检测登录状态]
 */
function _formatData(response) {
	const responseData = response.json();
	return responseData.then(data => {
		if (data.code === 401) {
			window.location.href = window.location.protocol + '//' + window.location.host + '/userEntry';
		}
		return data;
	}).catch(err => {
		console.log(err);
	})
}

export default {
	post,
	get
};
