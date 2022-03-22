<template>
	<div class="top-header">
		<div class="container">
			<div class="box-clock">
				<div class="clock"><img class="svg-clock" src="../assets/clock.svg" alt=""></div>
				<div class="text">
					<div class="title">Dushanba-Shanba</div>
					<div class="subtitle">8:00-18:00</div>
				</div>
			</div>
			<div class="box-email">
				<div class="email"></div>
				<div class="text">
					<div class="title">Electron pochta</div>
					<div class="subtitle">info@kasb-hunar-4.uz </div>
				</div>
			</div>
			<div class="box-phone">
				<div class="phone"></div>
				<div class="text">
					<div class="title">Telefon raqam</div>
					<div class="subtitle">+998912345678</div>
				</div>
			</div>
			<div class="box-social">
				<div class="facebook"></div>
				<div class="telegram"></div>
				<div class="instagram"></div>
			</div>
		</div>
	</div>
  <nav>
    <div class="container">
			<div class="brand">
				<div class="logo"></div>
				<div class="brand-text">
					<div class="brand-title">Denov tuman 4-son</div>
					<div class="brand-subtitle">Kasb-hunar maktabi</div>
				</div>
			</div>
			<div class="navbar">
				<ul v-show="!mobile" class="navigation">
					<li>
						<router-link
						v-bind:class="{ active: isActive[0] }"
						@click="handleClick(0)"
						to="/"><span>Bosh Sahifa</span></router-link>
					</li>
					<li>
						<router-link
						v-bind:class="{ active: isActive[1] }"
						@click="handleClick(1)"
						to="/about"><span></span>Biz Haqimizda</router-link>
					</li>
					<li>
						<router-link
						v-bind:class="{ active: isActive[2] }"
						@click="handleClick(2)"
						to="/news"><span></span>Yangiliklar</router-link>
					</li>
					<li>
						<router-link
						v-bind:class="{ active: isActive[3] }"
						@click="handleClick(3)"
						to="/student"><span></span>Talabalar</router-link>
					</li>
					<li>
						<router-link
						v-bind:class="{ active: isActive[4] }"
						@click="handleClick(4)"
						to="/teacher"><span></span>O'qutuvchilar</router-link>
					</li>
					<li>
						<router-link
						v-bind:class="{ active: isActive[5] }"
						@click="handleClick(5)"
						to="/contact"><span></span>Bog'lanish</router-link>
					</li>
				</ul>
				<div @click="toggleMobileNav" v-show="mobile" class="burger" :class="{'icon-active': mobileNav}">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" 	fill="none" viewBox="0 0 24 24" stroke="currentColor" 	stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</div>
			</div>
			<transition name="mobile-nav">
				<ul v-show="mobileNav" class="dropdawn-nav">
					<li>
						<router-link class="link"
						v-bind:class="{ active: isActive[0] }"
						@click="handleClick(0)"
						to="/">Bosh Sahifa</router-link>
					</li>
					<li>
						<router-link class="link"
						v-bind:class="{ active: isActive[1] }"
						@click="handleClick(1)"
						to="/about">Biz Haqimizda</router-link>
					</li>
					<li>
						<router-link class="link"
						v-bind:class="{ active: isActive[2] }"
						@click="handleClick(2)"
						to="/teacher">Yangiliklar</router-link>
					</li>
					<li>
						<router-link class="link"
						v-bind:class="{ active: isActive[3] }"
						@click="handleClick(3)"
						to="/student">Talabalar</router-link>
					</li>
					<li>
						<router-link class="link"
						v-bind:class="{ active: isActive[4] }"
						@click="handleClick(4)"
						to="/teacher">O'qutuvchilar</router-link>
					</li>
					<li>
						<router-link class="link"
						v-bind:class="{ active: isActive[5] }"
						@click="handleClick(5)"
						to="/contact">Aloqa</router-link>
					</li>
				</ul>
			</transition>
		</div>
  </nav>
</template>

<script>

export default {
  name: 'TheNavbar',
  components: {},
	data () {
		return {
			isActive: [0, 0, 0, 0, 0],
			mobile: 0,
			mobileNav: 1,
			windowWidth: null,
		}
	},
	created () {
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  },
	methods: {
    handleClick (numb) {
			for (let index = 0; index < 6; index++) {
				this.isActive[index] = 0
			}
			this.isActive[numb] = 1
    },
		updateWidth () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth < 992) {
        this.mobile = 1
        return
      }
      this.mobile = 0
			this.mobileNav = 0
    },
		toggleMobileNav () {
			this.mobileNav = !this.mobileNav
		}
  }
}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: none;
		font-weight: 500;
		color: #111f50;
	}

	.container {
		width: 1200px;
		display: flex;
		justify-content: space-between;
		padding: 0 15px;
		box-sizing: content-box;
	}

	.top-header {
		height: 60px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		background: rgba(17, 31, 80, 0.8);

		@media (max-width: 1200px) {
			height: 50px;
		}

		.container {
			max-width: 800px;

			@media (max-width: 1200px) {
				max-width: 600px;
			}

			.box-clock {
				display: flex;
				align-items: center;

				.clock {
					width: 30px;
					height: 30px;

					@media (max-width: 1200px) {
						transform: scale(80%);
					}

				}

				.text {
					margin-left: 20px;
					color: white;
					display: flex;
					flex-direction: column;
					align-items: center;

					@media (max-width: 1200px) {
						margin-left: 10px;
					}

					.title {
						font-weight: 700;
						font-size: 15px;

						@media (max-width: 1200px) {
							font-weight: 700;
							font-size: 10px;
						}
					}

					.subtitle {
						font-weight: 400;
						font-size: 12px;

						@media (max-width: 1200px) {
							font-weight: 400;
							font-size: 7px;
						}
					}
				}
			}

			.box-email {
				display: flex;
				align-items: center;

				.email {
					width: 35px;
					height: 28px;
					background: url(../assets/email.svg) center / cover no-repeat;

					@media (max-width: 1200px) {
						transform: scale(80%);
					}
				}

				.text {
					margin-left: 20px;
					color: white;
					display: flex;
					flex-direction: column;
					align-items: center;

					@media (max-width: 1200px) {
						margin-left: 10px;
					}

					.title {
						font-weight: 700;
						font-size: 15px;

						@media (max-width: 1200px) {
							font-weight: 700;
							font-size: 10px;
						}
					}

					.subtitle {
						font-weight: 400;
						font-size: 12px;

						@media (max-width: 1200px) {
							font-weight: 400;
							font-size: 7px;
						}
					}
				}
			}

			.box-phone {
				display: flex;
				align-items: center;

				.phone {
					width: 27px;
					height: 27px;
					background: url(../assets/phone.svg) center / cover no-repeat;

					@media (max-width: 1200px) {
						transform: scale(80%);
					}
				}

				.text {
					margin-left: 20px;
					color: white;
					display: flex;
					flex-direction: column;
					align-items: center;

					@media (max-width: 1200px) {
						margin-left: 10px;
					}

					.title {
						font-weight: 700;
						font-size: 15px;

						@media (max-width: 1200px) {
							font-weight: 700;
							font-size: 10px;
						}
					}

					.subtitle {
						font-weight: 400;
						font-size: 12px;

						@media (max-width: 1200px) {
							font-weight: 400;
							font-size: 7px;
						}
					}
				}

			}

			.box-social {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 90px;

				@media (max-width: 1200px) {
					width: 70px;
				}

				.facebook {
					width: 25px;
					height: 25px;
					background: url(../assets/Facebook.svg) center / cover no-repeat;

					@media (max-width: 1200px) {
						width: 20px;
						height: 20px;
					}

					&:hover {
						background: url(../assets/FacebookOrg.svg) center / cover no-repeat;
					}
				}

				.telegram {
					width: 25px;
					height: 25px;
					background: url(../assets/Telegram.svg) center / cover no-repeat;

					@media (max-width: 1200px) {
						width: 20px;
						height: 20px;
					}

					&:hover {
						background: url(../assets/TelegramOrg.svg) center / cover no-repeat;
					}
				}

				.instagram {
					width: 25px;
					height: 25px;
					background: url(../assets/Instagram.svg) center / cover no-repeat;

					@media (max-width: 1200px) {
						width: 20px;
						height: 20px;
					}

					&:hover {
						background: url(../assets/InstagramOrg.svg) center / cover no-repeat;
					}
				}
			}
		}
	}

	nav {
		height: 90px;
		background: rgba(255, 255, 255, 0.85);
		// background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (max-width: 1200px) {
			height: 80px;
		}

		.container {

			@media (max-width: 1200px) {
				width: 1000px;
			}

			@media (max-width: 992px) {
				width: 900px;
			}

			.brand {
				display: flex;

				.logo {
					width: 70px;
					height: 70px;
					background: url(../assets/logo.png) center / cover no-repeat;

					@media (max-width: 1200px) {
						width: 60px;
						height: 60px;
					}
				}

				.brand-text {
					display: flex;
					justify-content: center;
					flex-direction: column;
					font-size: 16px;
					font-weight: 700;
					margin-left: 15px;
					color: #111f50;

					@media (max-width: 1200px) {
						font-size: 16px;
						margin-left: 10px;
					}
				}
			}

			.navbar {
				display: flex;
				align-items: center;

				.navigation {
					display: flex;
					list-style-type: none;

					li {
						position: relative;
						margin-left: 50px;
						font-size: 14px;
						padding: 10px 0px;

						@media (max-width: 1200px) {
							margin-left: 35px;
							font-size: 12px;
						}

						a {
							padding: 10px 15px;
						}

						a:before,
						a:after,
						span:before,
						span:after {
							content: '';
							position: absolute;
							width: 3px;
							height: 3px;
							background: #111f50;
							transition: 1s ease;
						}

						a:before {
							top: -1px;
							left: -1px;
						}

						a:after {
							top: -1px;
							right: -1px;
						}

						span:before {
							bottom: -1px;
							left: -1px;
						}

						span:after {
							bottom: -1px;
							right: -1px;
						}

						a:hover:before {
							width: 100%
						}

						a:hover:after {
							height: 100%;
						}

						a:hover span:before {
							height: 100%;
						}

						a:hover span:after {
							width: 100%;
						}

						a.active:before,
						a.active span:after {
							width: 100%
						}

						a.active:after,
						a.active span:before {
							height: 100%
						}


					}

					li:nth-child(1) {
						margin-left: 0px;
					}


				}

				.burger {
					width: 24px;
					height: 24px;
					transition: 0.8s ease all;


				}

				.icon-active {
					transform: rotate(180deg);
				}
			}



			.dropdawn-nav {
				display: flex;
				flex-direction: column;
				position: fixed;
				// width: 100%;
				// max-width: 250px;
				height: 100%;
				background: #fff;
				top: 0;
				left: 0;
				padding: 30px 60px;
				list-style-type: none;

				li {
					margin-left: 0;
					margin-bottom: 30px;
					font-size: 14px;


					.link {
						list-style-type: none;
						color: #111f50;
						padding: 10px;
						border-radius: 5px;

						&:hover {
							background: rgba(17, 31, 80, 0.2);
						}

						&.active {
							background: rgba(17, 31, 80, 0.2);
						}
					}


				}

			}
		}
	}
</style>
