<template>
	<div class="footer">
		<div class="footer-content">
			<h5 class="footer-title">Join the conversation </h5>
			<ul class="footer-links clear">
				<li>
					<el-tooltip content="QQ：2679058425" placement="top">
						<div>
							<a href="javascript:void(0)" class="link QQ"></a>
							<span class="link-name">QQ</span>
						</div>
					</el-tooltip>
				</li>
				<li>
					<!-- <el-popover placement="bottom" width="150">
						<div class="wechat-qrcode"></div>
						<div slot="reference"> -->
							<a href="javascript:void(0)" class="link wechat"></a>
							<span class="link-name">Wechat</span>
						<!-- </div>
					</el-popover> -->
				</li>
				<li>
					<a href="http://weibo.com/" class="link weibo" target="_blank"></a>
					<span class="link-name">Microblog</span>

				</li>
				<!-- <li>
					<a href="mailto:team@aoabank.com" class="link mail" target="_blank"></a>
					<span class="link-name">Email</span>
				</li> -->
				<li>
					<a href="https://t.me/" class="link telegram" target="_blank"></a>
					<span class="link-name">Twitter</span>

				</li>
			</ul>
			<!-- <p class="company">克班克集团 </p>
			<p class="copyright">Copyright © KOOBANK | All Rights Reserved. </p> -->
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
