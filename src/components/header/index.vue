<template>
	<div class="topbar header-wrap">
		<div class="topbar-content">
			<a :href="'http://'+HOST" class="logo"><img src="../../assets/imgs/atc_logo.jpeg"  alt=""></a>
			<ul class="nav-menu">
				<li>
					<a :href="'http://'+HOST+'/home'" class="nav-menu-link" :class="{active: activePage == 'home'}">{{$t('_menu.home')}}</a>
				</li>
				<li class="nav-menu-link language" @mouseenter="showLanguageList" @mouseleave="hideLanguageList">
					{{$t('_menu.language')}}
					<ul class="head-language-list" :class="{hidden: !show}">
						<li>
							<a class="language-list-item" @click="switchLang('cn')">中文</a>
						</li>
						<li>
							<a @click="switchLang('en')" class="language-list-item">English</a>
						</li>
						<li>
							<a @click="switchLang('jp')" class="language-list-item">日本語</a>
						</li>
						<li>
							<a @click="switchLang('ko')" class="language-list-item">한국어</a>
						</li>
						<li>
							<a @click="switchLang('fr')" class="language-list-item">Français</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Cookie from 'js-cookie';
export default {
	name: 'topBar',
	props: {
		activePage: String
	},
	data() {
		return {
			show: false,
			HOST: window.location.host,
			isLog: !!Cookie.get('token')
		};
	},
	methods: {
		showLanguageList() {
			this.show = true;
		},
		hideLanguageList() {
			this.show = false;
		},
		// switchCn() {
		// 	let path = this.$route.path;
		// 	if (!this.endWith(path, '/cn')) {
		// 		this.changeLanguage('cn');
		// 	}
		// },
		switchLang(lang) {
			// let path = this.$route.path;
			// if (this.endWith(path, '/cn')) {
			// 	// let switchPath = path.substring(0, path.length - 2);
			// 	// this.$router.push(switchPath);
			// 	this.changeLanguage('en');
			// }
			this.$i18n.locale = lang;
			window.localStorage && window.localStorage.setItem('langChose', lang);
		},
		endWith(str, endWithStr) {
			if (
				endWithStr == null ||
				endWithStr == '' ||
				str.length == 0 ||
				endWithStr.length > str.length
			) {
				return false;
			}
			if (str.substring(str.length - endWithStr.length) == endWithStr) {
				return true;
			} else {
				return false;
			}
		},
		changeLanguage(lang) {
			if (lang === 'cn') {
				let path = this.$route.path;
				path += path.slice(-1) === '/' ? '' : '/';
				path += 'cn';
				this.$router.push(path);
			} else if (lang === 'en') {
				this.$router.push(this.$route.path.slice(0, -2));
			} else {
				return false;
			}
		},
		logout() {
			Cookie.remove('token');
			window.location.href =
				window.location.protocol +
				'//' +
				window.location.host +
				'/userEntry';
		}
	}
};
</script>

<style lang="scss">
@import './index.scss';
</style>
