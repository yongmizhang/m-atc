<template>
  <el-dialog :title="title" :visible.sync="show" width="525px" center :show-close="showCloseBtn" @close="closeBox">
    <div class="closeBtn" @click="closeBox">
      <i class="el-icon-close"></i>
    </div>
    <p class="subtitle">You are in the process of USDT recharge</p>
    <div class="page-form">
      <div class="form-item">
        <span class="item-title">USDT Wallet Address:</span>
        <div class="item-value">
          <span class="charge">
            {{address}}
          </span>
          <span class="link-btn" v-clipboard:copy="address" v-clipboard:success="onCopy">Copy</span>
        </div>
      </div>
    </div>
    <div class="qrcode">
      <img class="qrcode-img" :src="chargeQrcode" />
    </div>
    <div class="form-submit">
      <div class="submit-btn" @click="onSubmit">Confirm</div>
    </div>
    </div>
    </div>
  </el-dialog>
</template>
<script>
export default {
	props: {
		value: Boolean,
		address: String
	},
	data() {
		return {
			showCloseBtn: false,
			show: false,
			title: 'Recharge',
			chargeQrcode: 'http://www.aoabank.com/qrcode.81bb422e.png'
		};
	},
	watch: {
		value(val) {
			this.show = val;
		}
	},
	methods: {
		closeBox() {
			this.show = false;
			this.$emit('closeBox');
		},
		onSubmit() {
			// this.pageForm.
			// this.$store.dispatch('withdrawCash', this.pageForm);
		},
		gotoSetPwd() {
			console.log('gotopwd');
		},
		onCopy() {
			this.$message({
				message: 'Copy Success',
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

