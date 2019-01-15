import NodeRSA from 'node-rsa';

let clientKey = new NodeRSA();
var publicKey = '-----BEGIN PUBLIC KEY-----\n' +
	'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFGPwOnYasSfWNRHeE2Vlb/qmg\n' +
	'jV/XAWSueKHvEhSlrZXmHbKyCmcuCLvcEoo4AlurpKOR+v19uzU31sC88dGFUVSP\n' +
	'/jrBIuWbs/TwBY6BaxoJgsrFCsrV+KodLEclqMNeIWsxGdIEGrbtkkN/qpBsvKQb\n' +
	'yRxCui6Z+LiGOSh93QIDAQAB\n' +
	'-----END PUBLIC KEY-----';  //从服务端接收到的公钥，缓存到本地
clientKey.importKey(publicKey);
clientKey.setOptions({ encryptionScheme: 'pkcs1' });

export default function (password) {
	let encrypted = clientKey.encrypt(password, 'base64');
	return encrypted;
}
