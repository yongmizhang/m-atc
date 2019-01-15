<template>
	<el-dialog :visible.sync="value" width="525px" center :show-close="showCloseBtn" :close-on-click-modal="showCloseBtn" @close="closeBox">
		<span slot="title" class="dialog-title">{{title}}</span>
		<div class="closeBtn" @click="closeBox">
			<i class="el-icon-close"></i>
		</div>
		<p class="subtitle">您正在进行{{coinNameList[item.coinCode]}}充值操作</p>
		<div class="page-form">
			<div class="form-item">
				<span class="item-title">{{coinNameList[item.coinCode]}}钱包地址：</span>
				<div class="item-value">
					<span class="charge">
						{{item.walletAddr}}
					</span>
					<span class="link-btn" v-clipboard:copy="item.walletAddr" v-clipboard:success="onCopy">复制</span>
				</div>
			</div>
		</div>
		<!-- <div class="qrcode">
      <img class="qrcode-img" :src="chargeQrcode" />
    </div> -->
		<div class="form-submit">
			<div class="submit-btn" @click="closeBox">确定</div>
		</div>
	</el-dialog>
</template>
<script>
import Util from '../../util';
export default {
	props: {
		value: Boolean,
		item: Object
	},
	data() {
		return {
			showCloseBtn: false,
			title: '充值操作',
			coinNameList: Util.coinNameList
		};
	},
	methods: {
		closeBox() {
			this.$emit('input', false);
		},
		onCopy() {
			this.$message({
				message: '复制成功',
				type: 'success',
				duration: 1000
			});
		}
	}
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>