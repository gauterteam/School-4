<template>
  <div class="section-first">
		<div class="container">
			<div class="line"></div>
			<div class="text">Bog'lanish</div>
			<div class="line"></div>
		</div>
	</div>
	<div class="section-second">
		<div class="container">
			<div class="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17708.987350068204!2d67.91666327754672!3d38.31341085995518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5118f1f83ccc5%3A0x501ed355b57358fa!2sDenov%20yengil%20sanoat%20kasb-hunar%20kolleji!5e0!3m2!1sru!2s!4v1648098514315!5m2!1sru!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			</div>
			<div class="adress">
				<div class="title">Biz bilan bog'lanish</div>
				<div class="c-location">
					<div class="loc"></div>
					<div class="text">Surxondaryo viloyati, Denov tumani, Tortuvli QFY, Chambil mahallasi, Qumqishloq ko'chasi, 1-uy</div>
				</div>
				<div class="c-mail">
					<div class="mail"></div>
					<div class="text">absalom@umail.uz</div>
				</div>
				<div class="c-phone">
					<div class="phone"></div>
					<div class="text">+ (998 97) 244-80-14</div>
				</div>
				<div class="c-web">
					<div class="web"></div>
					<div class="text">kasbhunar-4.uz</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
name: 'TheContact',
components: {}
}
</script>

<style lang="scss" scoped>
	.section-first {
		width: 100%;
		margin: 60px 0;

		.container {
			max-width: 1200px;
			display: flex;
			align-items: center;
			margin: auto;
			justify-content: space-between;
			padding: 0 15px;
			box-sizing: content-box;

			.line {
				width: 425px;
				background: #111F50;
				height: 3px;
			}

			.text {
				font-weight: 400;
				font-size: 40px;
				color: #111F50;
				margin: 0 30px;
			}
		}
	}

	.section-second {
		margin-bottom: 70px;

		.container {
			max-width: 1200px;
			display: flex;
			justify-content: space-between;
			margin: auto;

			.map {
				width: 700px;
				height: 500px;
				border: 1px solid #111F50;
			}

			.adress {
				width: 400px;
				height: 500px;
				border: 1px solid #111F50;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;

				.title {
					display: flex;
					align-self: center;
					color: #111F50;
					font-weight: 400;
					font-size: 28px;
				}

				.c-location {
					display: flex;
					align-items: center;

					.loc {
						width: 32px;
						height: 45px;
						margin: 0 45px 0 30px;
						background: url(../assets/location.svg) center / cover no-repeat;
					}

					.text {
						width: 300px;
					}
				}

				.c-mail {
					display: flex;
					align-items: center;

					.mail {
						width: 45px;
						height: 36px;
						margin: 0 32px 0 30px;
						background: url(../assets/mail.svg) center / cover no-repeat;
					}
				}

				.c-phone {
					display: flex;
					align-items: center;

					.phone {
						width: 40px;
						height: 40px;
						margin: 0 37px 0 30px;
						background: url(../assets/c-phone.svg) center / cover no-repeat;
					}
				}

				.c-web {
					display: flex;
					align-items: center;

					.web {
						width: 45px;
						height: 45px;
						margin: 0 32px 0 30px;
						background: url(../assets/web.svg) center / cover no-repeat;
					}
				}
			}
		}
	}
</style>
