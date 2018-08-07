<template>
	<div id="app">
		<!-- <transition name="component-fade" mode="out-in"> -->
		<router-view/>
		<!-- </transition> -->
	</div>
</template>

<style lang="scss">
	
	.component-fade-enter-active, .component-fade-leave-active {
		transition: opacity .17s ease;
	}
	
	.component-fade-enter, .component-fade-leave-to {
		opacity: 0;
	}
	
	#nav {
		position: absolute;
	}
	
	html {
		box-sizing: border-box;
	}
	
	*, *::after, *::before {
		box-sizing: inherit;
		outline: none;
	}
	
	html, body {
		margin: 0;
		padding: 0;
		height: 100%;
	}
	
	@font-face {
		font-family: 'Geometria';
		src: url('./assets/fonts/Geometria.woff2');
		// url('./assets/fonts/Geometria.eot'),
		// url('./assets/fonts/Geometria.ttf');
	}
	
	@font-face {
		font-family: 'Geometria Light';
		src: url('./assets/fonts/Geometria-Light.woff2');
		// url('./assets/fonts/Geometria-Light.eot'),
		// url('./assets/fonts/Geometria-Light.ttf');
	}
	
	@font-face {
		font-family: 'Geometria Bold';
		src: url('./assets/fonts/Geometria-Bold.woff2');
		// url('./assets/fonts/Geometria-Bold.eot'),
		// url('./assets/fonts/Geometria-Bold.ttf');
	}
	
	@font-face {
		font-family: 'Geometria Extrabold';
		src: url('./assets/fonts/Geometria-ExtraBold.woff2');
		// url('./assets/fonts/Geometria-ExtraBold.eot'),
		// url('./assets/fonts/Geometria-ExtraBold.ttf');
	}
	
	@font-face {
		font-family: 'Geometria Heavy';
		src: url('./assets/fonts/Geometria-Heavy.woff2');
		// url('./assets/fonts/Geometria-Heavy.eot'),
		// url('./assets/fonts/Geometria-Heavy.ttf');
	}
	
	@font-face {
		font-family: 'Geometria Medium';
		src: url('./assets/fonts/Geometria-Medium.woff2');
		// url('./assets/fonts/Geometria-Medium.eot'),
		// url('./assets/fonts/Geometria-Medium.ttf');
	}
	
	@font-face {
		font-family: 'SF Ultralight';
		src: url('./assets/fonts/SFUIDisplay-Ultralight.woff');
		// /* url('./assets/fonts/Geometria-Light.eot'),
		// url('./assets/fonts/Geometria-Light.ttf'); */
	}
	
	#app {
		// font-family: 'Geometria', Helvetica, Arial, sans-serif;
		font-family: serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-height: 100%;
	}
	
	.wrapper {
		min-height: 100vh;
		padding: .1px 0 20px;
	}
</style>

<script>
	import store from './store';
	
	export default {
		data() {
			return {
				transitionDirection: 1,
			}
		},
		mounted() {
			window.onerror = (msg, url, lineNo, columnNo, error) => {
				var string = msg.toLowerCase();
				var substring = "script error";
				var message;
				if (string.indexOf(substring) > -1) {
					message = '';
				} else {
					message = [
						'Message: ' + msg,
						'URL: ' + url,
						'Line: ' + lineNo,
						'Column: ' + columnNo,
						'Error object: ' + JSON.stringify(error)
					].join(' - ');
				}

				this.$http.post();

				return false;
			};

			const lang = localStorage.getItem('Lan-gua-ge');
			if (lang) {
				store.dispatch('getQuestions', lang);
				store.dispatch('getDisclaimer', lang);
				store.dispatch('getAbout', lang);
				store.dispatch('getCard', lang);
				store.dispatch('getMenu', lang);
				store.dispatch('getSettings', lang);
				store.dispatch('getTodoText', lang);
				store.dispatch('getOrderDeck', lang);
				store.dispatch('getLogin', lang);
			} else {
				store.dispatch('getLogin', 'ru');
			}
			
			const authKey = localStorage.getItem('Istok-Auth-Key');
			if (authKey) {
				this.$router.push('disclaimer');
			} else {
				this.$router.push('login');
			}
			
		}
	}
</script>