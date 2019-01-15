<template>
	<el-dialog :visible.sync="value" width="525px" :show-close="showCloseBtn" @close="closeBox" center autofocus>
		<span slot="title" class="dialog-title">身份认证</span>
		<div class="closeBtn" @click="closeBox">
			<i class="el-icon-close"></i>
		</div>
		<div class="dialog-body">
			<div class="sub-title">{{actionName}}前请先进行身份认证</div>
			<img src="//www.aoabank.com/user_head.png" class="user-head" />
		</div>
		<span slot="footer" class="dialog-footer">
			<div class="submit-btn" @click="submit">立即身份认证</div>
		</span>
	</el-dialog>
</template>
<script>
export default {
	props: {
		value: Boolean,
		actionName: String
	},
	data() {
		return {
			showCloseBtn: false
		};
	},
	methods: {
		closeBox() {
			this.$emit('input', false);
		},
		submit() {
			location.href =
				'//' + location.host + '/userCenter#/identification/cn';
		}
	}
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>