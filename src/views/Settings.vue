<template>
	<div class="wrapper">
		<app-header :heading="settings[7]"></app-header>
		<h2 class="settings__heading">{{ settings[0]}}</h2>
		<ul class="settings">
			<li class="settings__item">
				<label class="settings__toggle">
					{{ isNotifications ? settings[1] : settings[2] }} {{ settings[3] }}
					<input v-model="isNotifications" type="checkbox" name="online">
				</label>
			</li>
			<!-- <li class="settings__item">
			  <button type="button" class="settings__button">
				  {{ settings[6] }}
			  </button>
			</li> -->
			<!-- <li class="settings__item">
			  <label class="settings__toggle">
				Местные уведомления
				<input type="checkbox" name="online">
			  </label>
			</li> -->
		</ul>
		<ul class="settings settings--danger">
			<li class="settings__item">
				<button @click="reset" class="settings__set">{{ settings[4] }}</button>
			</li>
			<li class="settings__item">
				<button @click="logOut" class="settings__set">{{ settings[5] }}</button>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	@import "../scss/mixins";
	
	.wrapper {
		padding-top: .1px;
		background-color: #FBFBFC;
		background-repeat: no-repeat;
		background-image: url('../assets/istok-blue.png');
		background-position: 50% 96%;
		background-size: 30%;
		font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
		font-size: get-vw(14px);
	}
	
	.settings {
		@include list-reboot();
		background-color: #fff;
		border-top: get-vw(1px) solid rgba($color: #000, $alpha: .05);
		border-bottom: get-vw(1px) solid rgba($color: #000, $alpha: .05);
		
		&__heading {
			opacity: 0.3;
			font-size: get-vw(14px);
			font-family: 'Geometria', Arial, Helvetica, sans-serif;
			margin: get-vw(20px) get-vw(15px) get-vw(10px);
		}
		
		&__item {
			display: block;
			margin: 0 get-vw(15px);
			
			&:last-child .settings__toggle {
				border-bottom: none;
			}
		}
		
		&__toggle {
			padding: get-vw(4px) 0;
			display: flex;
			align-items: center;
			border-bottom: get-vw(1px) solid rgba($color: #000, $alpha: .05);
		}
		
		&__set {
			display: block;
			width: 100%;
			text-align: left;
			padding: get-vw(13px) get-vw(15px) get-vw(14px);
			border: none;
			background-color: #fff;
			font-size: get-vw(14px);
			font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
		}
		
		&__button {
			padding: get-vw(12px) 0;
			border: none;
			background: 0;
			font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
			font-size: get-vw(14px);
		}
	}
	
	.settings--danger {
		background-color: #FBFBFC;
		border: none;
		.settings {
			&__item {
				margin: 0;
				margin-top: get-vw(25px);
				background-color: #fff;
				border-bottom: get-vw(1px) solid rgba($color: #000, $alpha: .05);
				border-top: get-vw(1px) solid rgba($color: #000, $alpha: .05);
			}
			
			&__set {
				color: #f00;
			}
		}
	}
	
	$white: #fff;
	$green: #53d76a;
	$grey: #d3d3d3;
	
	input[type="checkbox"] {
		margin-left: auto;
		margin-right: 0;
		outline: none;
		appearance: none;
		background-color: darken($white, 2%);
		border: get-vw(1px) solid $grey;
		border-radius: get-vw(26px);
		box-shadow: inset 0 0 0 get-vw(1px) $grey;
		cursor: pointer;
		height: get-vw(28px);
		position: relative;
		transition: border .25s .15s,
		box-shadow .25s .3s,
		padding .25s;
		width: get-vw(44px);
		vertical-align: top;
		
		&:after {
			background-color: $white;
			border: get-vw(1px) solid $grey;
			border-radius: get-vw(24px);
			box-shadow: inset 0 get-vw(-3px) get-vw(3px) hsla(0, 0%, 0%, .025),
			0 get-vw(1px) get-vw(4px) hsla(0, 0%, 0%, .15),
			0 get-vw(4px) get-vw(4px) hsla(0, 0%, 0%, .1);
			content: '';
			display: block;
			height: get-vw(24px);
			left: 0;
			position: absolute;
			right: get-vw(16px);
			top: 0;
			transition: border .25s .15s,
			left .25s .1s,
			right .15s .175s;
		}
		&:checked {
			border-color: $green;
			box-shadow: inset 0 0 0 get-vw(13px) $green;
			padding-left: get-vw(18px);
			transition: border .25s,
			box-shadow .25s,
			padding .25s .15s;
			
			&:after {
				border-color: $green;
				left: get-vw(16px);
				right: 0;
				transition: border .25s,
				left .15s .25s,
				right .25s .175s;
			}
		}
	}
</style>

<script>
	import Header from '../components/Header';
	import {mapState} from 'vuex';
	
	export default {
		computed: mapState([
			'settings'
		]),
		data() {
			return {
				isNotifications: true
			}
		},
		watch: {
			isNotifications: {
				handler(isNotifications) {
					if (isNotifications) {
						// cordova.plugins.notification.local.schedule({
						//   title: 'Тренинг центр "Исток"',
						//   text: 'Нажмите, чтобы просмотреть карточки',
						//   trigger: { every: { second: 30 } }
						// // trigger: { every: { hour: 18, minute: 0 } }
						// });
						cordova.plugins.notification.local.schedule({
							title: 'Тренинг-центр "Исток". Напоминание',
							trigger: { every: { hour: 20, minute: 0 } }
						});
					} else {
						cordova.plugins.notification.local.cancelAll();
					}
				}
			}
		},
		components: {
			'app-header': Header
		},
		methods: {
			reset() {
				const authKey = localStorage.getItem('Istok-Auth-Key');
				const lang = localStorage.getItem('Lan-gua-ge');
				localStorage.clear();
				localStorage.setItem('Istok-Auth-Key', authKey)
				localStorage.setItem('Lan-gua-ge', lang);
				this.resetSettings();
				location.reload();
			},
			logOut() {
				localStorage.setItem('Istok-Auth-Key', '');
				localStorage.setItem('q-history', '');
				location.reload();
			},
			async resetSettings() {
				const settingsUrl = 'https://istok.hiddenpool.tech/update-settings';
				let currentSettingsData = {settings: {}};
				const requestConfig = {
					params: {
						authKey: localStorage.getItem('Istok-Auth-Key')
					}
				};
				this.$http.post(settingsUrl, currentSettingsData, requestConfig);
			}
		},
	}
</script>