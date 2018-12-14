<template>
	<div class="wrapper">
		<app-header :heading="about.heading"></app-header>
		<main class="about">
			<!-- <small class="about__caption">{{ about.business }}</small> -->
			<h2 class="about__heading">{{ about.history }}</h2>
			<!-- <p class="about__text">{{ about.about }}</p> -->
			<div class="about__services services">
				<h2 class="services__heading">
					{{ about.services }}
				</h2>
				<ul class="services__list">
					<li class="services__item">
						<a href="http://www.tc-i.ru/treningi" class="services__link">
							{{ about.training }}</a>
					</li>
					<li class="services__item">
						<a href="http://www.tc-i.ru/kouching" class="services__link">
							{{ about.coaching }}
						</a>
					</li>
					<li class="services__item">
						<a href="http://www.tc-i.ru/povyshenie-kvalifikatsii" class="services__link">
							{{ about.facilitation }}
						</a>
					</li>
				</ul>
			</div>
			<a class="about__link" href="http://www.coachistok.ru">www.coachistok.ru</a>
			<br>
			<a class="about__tel" href="tel:+79141593113">+7 (914) 159-31-13</a>
			<br>
			<a class="about__email" href="mailto:info@coachistok.ru">info@coachistok.ru</a>
			<!-- <img class="about__logo" src="../assets/istok-blue.png" alt='Бизнес-тренинги "Исток"'> -->

			<div class="about__map">
				<yandex-map
					:coords="[48.471545, 135.069701]"
					:scroll-zoom="false"
					zoom="14"
					style="width: 100%; height: 100%;"
				>
					<ymap-marker
						markerId="1"
						marker-type="placemark"
						:coords="[48.471545, 135.069701]"
						:properties="{iconCaption: 'ул. Фрунзе 22'}"
					></ymap-marker>
				</yandex-map>
			</div>
			<!-- <p class="about__text" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos aliquam optio quibusdam sapiente fuga, officiis quidem quam saepe debitis.</p> -->
		</main>
	</div>
</template>

<style lang="scss" scoped>
	@import "../scss/mixins";
	
	.wrapper {
		font-family: "Geometria", Arial, Helvetica, sans-serif;
	}
	
	.about {
		&__caption {
			display: block;
			margin-top: get-vw(30px);
			font-size: get-vw(12px);
			color: #000000;
			opacity: 0.3;
		}
		
		&__heading {
			font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
			text-align: center;
			font-size: get-vw(26px);
			margin-top: 0;
			margin-bottom: get-vw(15px);
			margin-top: get-vw(20px);		
			padding: 0 get-vw(15px);
		}
		
		&__text {
			font-size: get-vw(14px);
			padding: 0 get-vw(35px);
			margin-bottom: 0;
			text-align: left;
		}
		
		&__logo {
			display: block;
			margin: 0 auto;
			vertical-align: top;
			margin-top: get-vw(25px);
			margin-bottom: get-vw(20px);
			width: 35%;
		}
		
		&__map {
			width: get-vw(320px);
			height: get-vw(180px);
		}
		
		&__link,
		&__tel,
		&__email {
			position: relative;
			margin-top: get-vw(25px);
			text-decoration: none;
			display: inline-block;
			color: darken(#00bec1, 10%);;
			font-family: "Geometria Medium", Arial, Helvetica, sans-serif;
			line-height: normal;
			font-size: get-vw(14px);
			margin-left: get-vw(45px);
			
			&::before {
				position: absolute;
				content: "";
				top: get-vw(0px);
				left: get-vw(-25px);
				width: get-vw(20px);
				height: get-vw(20px);
				background-repeat: no-repeat;
				background-size: contain;
				background-image: url("../assets/chain.svg");
			}
		}
		
		&__email {
			margin-top: get-vw(15px);
			margin-bottom: get-vw(30px);
			
			&::before {
				background-image: url("../assets/mail.svg");
				top: get-vw(1px);
				left: get-vw(-27px);
			}
		}
		
		&__tel {
			margin-top: get-vw(15px);
			
			&::before {
				background-image: url("../assets/telephone.svg");
			}
		}
	}
	
	.services {
		&__heading {
			font-size: get-vw(18px);
			font-family: "Geometria Bold", Arial, Helvetica, sans-serif;
			text-align: left;
			margin-left: get-vw(18px);
			margin-bottom: get-vw(5px);
		}
		
		&__list {
			@include list-reboot;
      text-align: left;
			width: get-vw(260px);
			margin-left: get-vw(30px);
		}
		
		&__item {
		}
		
		&__link {
			position: relative;
			text-decoration: none;
			color: darken(#00bec1, 10%);
			font-size: get-vw(14px);
			
			font-family: Arial, Helvetica, sans-serif;
			&::before {
				position: absolute;
				content: "";
				width: get-vw(6px);
				height: get-vw(6px);
				background-color: #EA7D00;
				top: get-vw(6px);
				left: get-vw(-12px);
				border-radius: 50%;
			}
			
		}
	}

</style>

<script>
	import Header from '../components/Header';
	import {yandexMap, ymapMarker} from 'vue-yandex-maps';
	import {mapState} from 'vuex';
	
	export default {
		computed: mapState([
			'about'
		]),
		components: {
			'app-header': Header,
			yandexMap,
			ymapMarker
		},
	}
</script>