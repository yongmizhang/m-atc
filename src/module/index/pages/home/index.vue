<template>
	<div class="home-page">
		<top-bar activePage="home">
		</top-bar>
		<div class="header">
			<div class="header-content">
				<h1 class="title">{{$t("l.1")}}</h1>
				<p class="msg" v-html="$t('l.2')"></p>
				<a href="//www.attchain.com/ATT Africa-Trading Token-中-Eng.pdf" target="_blank"  class="download">{{$t('l.3')}}</a>
			</div>
		</div>
		<div class="introduction">
			<p class="intro-txt font-gray" v-html="$t('l.4')"></p>
		</div>
		<div class="main">
			<div class="bgg">
				<div class="security w990 center-h">
					<div class="text-wrap center-v position-l">
						<h3 class="h3">{{$t('l.5')}}</h3>
						<p class="font-black w611">{{$t('l.6')}}</p>
					</div>
					<div class="center-v position-r icon_intro_1">
						<img src="../../assets/imgs/intro_1.png" alt="">
					</div>
				</div>
			</div>
			<div class="trusty w990 center-h">
				<div class="center-v position-l icon_intro_2">
					<img src="../../assets/imgs/intro_2.png" alt="">
				</div>
				<div class="text-wrap center-v position-r">
					<h3 class="h3">{{$t('l.7')}}</h3>
					<p class="font-grey w611">{{$t('l.8')}}</p>
				</div>
			</div>
			<div class="bgg">
				<div class="flow w990 center-h">
					<div class="text-wrap center-v position-l">
						<h3 class="h3">{{$t('l.9')}}</h3>
						<p class="font-black w611">{{$t('l.10')}}
						</p>
					</div>
					<div class="center-v position-r icon_intro_3">
						<img src="../../assets/imgs/intro_3.png" alt="">
					</div>
				</div>
			</div>
			<div class="media w990 center-h">
				<div class="media-title">
					<h2>{{$t('l.11')}}</h2>
				</div>
				<ul class="media-content clear">
					<li>
						<a href="#">
							<img class="agency-img" src="../../assets/imgs/media_1.png" alt="Lykke">
						</a>
					</li>
					<li>
						<a href="#">
							<img class="agency-img" src="../../assets/imgs/media_2.png" alt="Brink Asset">
						</a>
					</li>
					<li>
						<a href="#">
							<img class="agency-img" src="../../assets/imgs/media_3.png" alt="Huobi">
						</a>
					</li>
					<li>
						<a href="#">
							<img class="agency-img" src="../../assets/imgs/media_4.png" alt="">
						</a>
					</li>
					<li>
						<a href="#">
							<img class="agency-img" src="../../assets/imgs/media_5.png" alt="">
						</a>
					</li>
					<li>
						<a href="#">
							<img class="agency-img last" src="../../assets/imgs/media_6.png" alt="">
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="timeline">
			<div class="media-title">
				<h2>{{$t('l.12')}}</h2>
			</div>
			<div class="main_pic">
				<img src="../../assets/imgs/time_line.png" alt="">
				<ul>
					<li>2018</li>
					<li>2018</li>
					<li>2019</li>
					<li>2019</li>
					<li>2019</li>
				</ul>
			</div>
			<ul class="timeline-intro">
				<li class="intro_item">
					<p class="tit">Q3</p>
					<p class="txt">{{$t('r.1')}}</p>
				</li>
				<li class="intro_item">
					<p class="tit">Q4</p>
					<p class="txt">{{$t('r.2')}}</p>
				</li>
				<li class="intro_item">
					<p class="tit">Q1</p>
					<p class="txt">{{$t('r.3')}}</p>
				</li>
				<li class="intro_item">
					<p class="tit">Q2</p>
					<p class="txt">{{$t('r.4')}}</p>
				</li>
				<li class="intro_item">
					<p class="tit">Q3</p>
					<p class="txt">{{$t('r.5')}}</p>
				</li>
				<li class="intro_item">
					<p class="tit">Q4</p>
					<p class="txt">{{$t('r.6')}}</p>
				</li>
			</ul>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import topBar from '../../../../components/header';
import footerBar from '../../../../components/footer';
export default {
	components: {
		topBar,
		footerBar
	}
};
</script>

<style lang="scss">
@import './index.scss';
</style>
