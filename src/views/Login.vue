<template>
	<div class="wrapper">
		<div class="login">
			<ul class="login__languages">
				<li class="login__language">
					<a
						@click="changeLanguage('ru')"
						class="login__flag login__flag--ru"
						:class="{'login__flag--active' : currentLanguage === 'ru'}"
					>Русский</a>
				</li>
				<li class="login__language">
					<a
						@click="changeLanguage('en')"
						class="login__flag  login__flag--en"
						:class="{'login__flag--active' : currentLanguage === 'en'}"
					>English</a>
				</li>
			</ul>
			<form v-if="!register" class="login__form">
				<h1 class="login__heading">{{ login[0] }}</h1>
				<input v-model="currentLogin" class="login__input" type="text" name="login" :placeholder="login[1]">
				<input v-model="currentPassword" class="login__input" type="password" name="password" :placeholder="login[2]">
				<button @click="signIn()" class="login__submit" type="button">{{ login[3] }}</button>
			</form>
			<form v-if="register" class="login__form">
				<h1 class="login__heading">{{ login[6] }}</h1>
				<input v-model="currentLogin" class="login__input" type="text" name="login" :placeholder="login[1]">
				<input v-model="currentPassword" class="login__input" type="password" name="password" :placeholder="login[2]">
				<input v-model="currentPassConfirmation" class="login__input" type="password" name="password" :placeholder="login[8]">
				<button @click="signUp()" class="login__submit" type="button">{{ login[7] }}</button>
			</form>
			<span class="login__or">{{ login[4] }}</span>
			<!--<ul class="login__socials">-->
				<!--<li class="login__social">-->
					<!--<a class="login__social-icon login__social-icon&#45;&#45;vk">VK</a>-->
				<!--</li>-->
				<!--<li class="login__social">-->
					<!--<a class="login__social-icon login__social-icon&#45;&#45;google">Google Plus</a>-->
				<!--</li>-->
				<!--<li class="login__social">-->
					<!--<a class="login__social-icon login__social-icon&#45;&#45;fb">Facebook</a>-->
				<!--</li>-->
			<!--</ul>-->
			<button @click="register = !register" class="login__toggle">{{ register ? login[0] : login[6] }}</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "../scss/mixins";
	
	.wrapper {
		padding-top: .1px;
		background-color: #1C236E;
		background-repeat: no-repeat;
		background-image: url('../assets/wave-blue.svg'),
		url('../assets/istok-white.png');
		background-position: 0 14%,
		50% 6%;
		background-size: contain,
		40%;
	}
	
	.login {
		color: #fff;
		&__languages {
			@include list-reboot();
			margin-top: get-vw(120px);
			text-align: center;
		}
		
		&__language {
			display: inline-block;
			vertical-align: top;
			margin: 0 get-vw(12px);
		}
		
		&__flag {
			display: block;
			font-size: 0;
			width: get-vw(28px);
			height: get-vw(28px);
			border-radius: 50%;
			background-size: contain;
			background-repeat: no-repeat;
			opacity: .45;
			
			&--ru {
				background-image: url('../assets/flag-russia.svg');
			}
			
			&--en {
				background-image: url('../assets/flag-us.svg');
			}
			
			&--active {
				opacity: 1;
			}
			
		}
		
		&__heading {
			text-align: center;
			font-family: 'Geometria';
			font-size: get-vw(28px);
			margin-top: get-vw(21px);
			margin-bottom: get-vw(30px);
		}
		
		&__input {
			display: block;
			text-align: center;
			border-radius: get-vw(7px);
			padding: get-vw(10px) get-vw(10px) get-vw(10px);
			border: none;
			background: rgba($color: #fff, $alpha: .1);
			color: rgba($color: #fff, $alpha: .3);
			font-size: get-vw(14px);
			margin: get-vw(20px) auto 0;
			width: get-vw(200px);
			border: get-vw(1px) solid transparent;
			
			&:focus {
				outline: none;
				border: get-vw(1px) solid #1C236E;
				background-color: #fff;
				color: #000;
			}
			
			&::placeholder {
				color: rgba($color: #fff, $alpha: .3);
				font-size: get-vw(14px);
			}
		}
		
		&__submit {
			display: block;
			margin: get-vw(20px) auto 0;
			padding: get-vw(10px) get-vw(42px) get-vw(9px);
			border-radius: get-vw(20px);
			background: none;
			border: get-vw(1px) solid #fff;
			color: #fff;
			font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
			font-size: get-vw(12px);
		}
		
		&__or {
			margin: get-vw(25px) auto 0;
			width: get-vw(200px);
			display: flex;
			justify-content: center;
			text-transform: uppercase;
			font-family: 'Geometria', Arial, Helvetica, sans-serif;
			opacity: .3;
			font-size: get-vw(10px);
			
			&::before,
			&::after {
				position: relative;
				top: get-vw(6px);
				content: "";
				flex-grow: 1;
				background-color: #fff;
				height: get-vw(1px);
			}
			
			&::before {
				margin-right: get-vw(10px);
			}
			&::after {
				margin-left: get-vw(10px);
			}
		}
		
		&__socials {
			@include list-reboot();
			text-align: center;
			margin-top: get-vw(8px);
		}
		
		&__social {
			display: inline-block;
			vertical-align: top;
			margin: get-vw(5px);
		}
		
		&__social-icon {
			display: block;
			font-size: 0;
			width: get-vw(25px);
			height: get-vw(25px);
			border-radius: 50%;
			background-color: #fff;
			background-size: initial;
			background-repeat: no-repeat;
			background-position: 50% 50%;
			
			&--vk {
				background-image: url('../assets/vk.svg');
				background-size: get-vw(15px);
			}
			
			&--google {
				background-image: url('../assets/google.svg');
				background-size: get-vw(11px);
			}
			
			&--fb {
				background-image: url('../assets/fb.svg');
				background-size: get-vw(8px);
			}
		}
		
		&__toggle {
			display: block;
			margin: get-vw(13px) auto;
			background: none;
			/*border: get-vw(1px) solid #fff;*/
			border: none;
			color: #fff;
			font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
			font-size: get-vw(12px);
		}
	}

</style>

<script>
	import { mapState } from 'vuex';
	
	export default {
		data() {
			return {
				currentLanguage: localStorage.getItem('Lan-gua-ge') || 'ru',
				register: false,
				currentLogin: '',
				currentPassword: '',
				currentPassConfirmation: '',
			}
		},
		computed: mapState([
			'login'
		]),
		methods: {
			goToDisclaimer() {
				const lang = localStorage.getItem('Lan-gua-ge');
				if (!lang) this.changeLanguage('ru');
				this.$router.push('disclaimer');
			},
			changeLanguage(lang) {
				localStorage.setItem('Lan-gua-ge', lang);
				this.currentLanguage = lang;
				this.$store.dispatch('getLogin', lang);
				this.$store.dispatch('getQuestions', lang);
				this.$store.dispatch('getDisclaimer', lang);
				this.$store.dispatch('getAbout', lang);
				this.$store.dispatch('getCard', lang);
				this.$store.dispatch('getMenu', lang);
				this.$store.dispatch('getSettings', lang);
				this.$store.dispatch('getTodoText', lang);
				this.$store.dispatch('getOrderDeck', lang);
			},
			async signIn() {
				const loginUrl = 'https://istok.hiddenpool.tech/login';
				const loginData = {
					login: this.currentLogin,
					password: this.currentPassword,
				};
				const response = await this.$http.post(loginUrl, loginData);
				if (!response.data.body.error) {
					const authKey = response.data.body.authKey;
					localStorage.setItem('Istok-Auth-Key', authKey);
					this.$store.dispatch('getSettingsData');
					this.goToDisclaimer();
				} else {
					// todo: Make error view
					alert(JSON.stringify(response));
				}
			},
			async signUp() {
				const regUrl = 'https://istok.hiddenpool.tech/register';
				const regData = {
					login: this.currentLogin,
					password: this.currentPassword,
					password_confirmation: this.currentPassConfirmation
				};
				const response = await this.$http.post(regUrl, regData);
				if (!response.data.body.error) {
					const authKey = response.data.body.authKey;
					localStorage.setItem('Istok-Auth-Key', authKey);
					this.goToDisclaimer();
				} else {
					// todo: Make error view
					alert(JSON.stringify(response));
				}
			}
		},
	}
</script>