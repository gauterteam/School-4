<template>
  <footer>
		<div class="container">
			<div class="sep-first">
				<div class="f-logo"></div>
				<div class="f-list">
					<ul>
						<li>Sahifalar</li>
						<li><router-link to="/">Bosh sahifa</router-link></li>
						<li><router-link to="/">Maktab haqida</router-link></li>
						<li><router-link to="/">Yangiliklar</router-link></li>
						<li><router-link to="/">O’qituvchilar</router-link></li>
						<li><router-link to="/">O’quvchilar</router-link></li>
						<li><router-link to="/">Bog’lanish</router-link></li>
					</ul>
				</div>
				<div class="f-social">
					<ul>
						<li>Ijtimoiy tarmoqlar</li>
						<li><router-link to="/">Facebook</router-link></li>
						<li><router-link to="/">Twitter</router-link></li>
						<li><router-link to="/">Linkedin</router-link></li>
						<li><router-link to="/">Instagram</router-link></li>
					</ul>
				</div>
				<div class="f-location">
					<ul>
						<li>Bizning manzil</li>
						<li>Surxondaryo viloyati, Denov tumani, Tortuvli QFY, Chambil mahallasi, Qumqishloq ko'chasi, 1-uy</li>
						<li>Tel: +998 97 244 80 14 </li>
					</ul>
				</div>
			</div>
			<div class="sep-second">
			<div class="copy-right">© Denov tuman 4-son Kasb-hunar maktab - 2022.</div>
			</div>
		</div>
	</footer>
</template>

<script>

export default {
  name: 'TheFooter',
  components: {}
}
</script>

<style lang="scss" scoped>
	footer {
		width: 100%;
		height: 420px;
		background: rgba(17, 31, 80, 0.8);;
		color: white;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		.container {
			width: 1200px;
			display: flex;
			flex-direction: column;

			.sep-first {
				display: flex;
				justify-content: space-between;
				margin-bottom: 65px;

				.f-logo {
					width: 200px;
					height: 200px;
					background: url(../assets/logo.png) center / cover no-repeat;
				}

				.f-list {

					ul {
						list-style-type: none;

						li {
							margin-top: 8px;
							font-weight: 400;
							font-size: 14px;

							a {
								text-decoration: none;
								color: #fff;
							}
						}

						li:nth-child(1) {
							margin-top: 0px;
							margin-bottom: 25px;
							font-size: 18px;
							font-weight: 700;
						}
					}
				}

				.f-social {

					ul {
						list-style-type: none;

						li {
							margin: 8px 0 0 20px;
							font-weight: 400;
							font-size: 14px;

							a {
								text-decoration: none;
								color: #fff;
							}
						}

						li:nth-child(1) {
							margin: 0;
							margin-bottom: 25px;
							font-size: 18px;
							font-weight: 700;
						}
					}
				}

				.f-location {

					ul {
						list-style-type: none;
						font-weight: 400;
						font-size: 14px;

						li:nth-child(1) {
							font-size: 18px;
							font-weight: 700;
						}

						li:nth-child(2) {
							width: 260px;
							margin: 20px 0;
						}
					}
				}
			}

			.sep-second {
				display: flex;
				justify-content: center;
				font-size: 14px;
				font-weight: 400;
			}
		}
	}
</style>