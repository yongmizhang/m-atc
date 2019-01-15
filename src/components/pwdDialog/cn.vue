<template>
	<el-dialog v-if="show" title="提示" :visible.sync="show" width="500px" :show-close="showCloseBtn" :close-on-click-modal="showCloseBtn" @close="closeBox" center autofocus>
		<span slot="title" class="dialog-title">{{title}}</span>
		<div class="closeBtn" @click="closeBox">
			<i class="el-icon-close"></i>
		</div>
		<el-form :model="pageForm" :rules="rules" ref="pageForm" label-width="95px" class="page-form">
			<el-form-item label="交易密码：" prop="transPass">
				<el-input type="password" v-model="pageForm.transPass" placeholder="请输入交易密码" maxlength='100'></el-input>
				<p class="input-tip">
					<span class="link-span" @click="gotoSetPwd">设置密码</span>
				</p>
			</el-form-item>
			<el-form-item label="验 证 码：" prop="veriCode">
				<el-input type="text" maxlength="6" v-model="pageForm.veriCode" />
				<span class="suffix-btn" :class="{disabled: hasSend}" @click="sendCheckcode">{{sendCodeText}}</span>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<div class="submit-btn" @click="submit('pageForm')">{{submitBtnText}}</div>
		</span>
	</el-dialog>
</template>
<script>
import Api from '../../module/coins/api';
import rsaEncrypt from '../../util/rsaEncrypt'; //密码rsa加密
export default {
	props: {
		value: Boolean,
		submitBtnText: String
	},
	data() {
		return {
			showCloseBtn: false,
			title: '交易密码',
			show: this.value,
			sendCodeText: '获取验证码',
			pageForm: {
				transPass: '',
				veriCode: ''
			},
			rules: {
				transPass: [
					{
						required: true,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
						message: '请输入正确的资金密码',
						trigger: 'blur'
					}
				],
				veriCode: [
					{
						required: true,
						pattern: /^\d{6}$/,
						message: '请输入正确的短信验证码',
						trigger: 'blur'
					}
				]
			},
			hasSend: false,
			duration: 1500
		};
	},
	watch: {
		value(val) {
			if (val) {
				Api.getVeriStatus().then(res => {
					if (res.code == 200) {
						let veriStatus = res.data;
						if (veriStatus == '1') {
							this.closeBox();
							this.$emit('submit');
							return false;
						}
					}
					this.show = val;
					this.pageForm = {
						transPass: '',
						veriCode: ''
					};
				});
			}
		}
	},
	methods: {
		closeBox() {
			this.show = false;
			this.$emit('closeBox');
		},
		gotoSetPwd() {
			window.open('//' + location.host + '/userCenter#/security/cn');
		},
		async sendCheckcode() {
			if (!this.hasSend) {
				let getCheckCodeRes = await Api.getCheckcode();
				if ((getCheckCodeRes.code = 200)) {
					this.$message({
						message: '验证码发送成功',
						type: 'success',
						duration: this.duration
					});
					this.countDown();
				} else {
					this.$message.error({
						message: '验证码发送失败',
						duration: this.duration
					});
				}
			}
		},
		// 按钮倒计时
		countDown(wait = 60) {
			if (wait === 0) {
				this.sendCodeText = '重新获取';
				this.hasSend = false;
			} else {
				this.hasSend = true;
				this.sendCodeText = '已发送' + wait + 's';
				wait--;
				this.timer = setTimeout(() => {
					this.countDown(wait);
				}, 1000);
			}
		},
		submit(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					Api.veriPass({
						transPass: rsaEncrypt(this.pageForm.transPass),
						veriCode: this.pageForm.veriCode
					}).then(res => {
						if (res.code == 200) {
							this.closeBox();
							this.$emit('submit');
						} else {
							let errInfo = res.message || '密码或验证码有误';
							this.$message.error({
								message: errInfo,
								duration: this.duration
							});
						}
					});
				} else {
					this.$message.error({
						message: '请正确填写所有必填项',
						duration: this.duration
					});
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>