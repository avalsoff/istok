<template>
	<header class="header">
		<h1 class="header__heading"> {{ heading }} </h1>
		<button @click="go" class="header__menu-btn"></button>
		<button @click="share" class="header__share-btn"></button>
	</header>
</template>

<style lang="scss" scoped>
	@import "../scss/mixins";
	
	.header {
		position: sticky;
		top: 0;
		z-index: 110;
		background: #1C236E;
		height: calc(13.75vw);
		
		&__heading {
			margin: 0;
			font-size: get-vw(17px);
			line-height: calc(13.75vw);
			font-family: 'SF Ultralight';
			color: #fff;
			text-align: center;
		}
		
		&__menu-btn {
			position: absolute;
			top: calc(4.6875vw);
			left: get-vw(15px);
			width: get-vw(20px);
			height: get-vw(14px);
			border: none;
			background: url('../assets/menu.svg');
			background-size: contain;
			background-repeat: no-repeat;
		}
		
		&__share-btn {
			position: absolute;
			top: calc(4.375vw);
			right: get-vw(12px);
			width: get-vw(20px);
			height: get-vw(18px);
			border: none;
			background: url('../assets/network.svg');
			background-size: contain;
			background-repeat: no-repeat;
		}
	}

</style>

<style lang="scss" scoped>

</style>

<script>
	export default {
		props: ['heading', 'back'],
		methods: {
			go() {
				if (this.back) {
					this.$router.go(-1);
				} else {
					this.$router.push('menu');
				}
			},
			share() {
				var options = {
					message: 'Международный центр коучинга ISTOK.\n Google Play: https://play.google.com/store/apps/details?id=tech.hiddenpool.istok\n Apple Store: https://itunes.apple.com/us/app/50-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2-%D0%B4%D0%BE%D1%81%D1%82%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D1%86%D0%B5%D0%BB%D0%B8/id1432291526?ls=1&mt=8', // not supported on some apps (Facebook, Instagram)
					subject: 'Приглашение', // fi. for email
					url: '',
					chooserTitle: 'Выберите приложение', // Android only, you can override the default share sheet title,
				};
				
				var onSuccess = function(result) {
				
				};
				
				var onError = function(msg) {
				
				};
				
				window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
			}
		}
	}

</script>

