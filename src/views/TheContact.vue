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
				<GmapMap
					:center="{lat:10, lng:10}"
					:zoom="7"
					style="width: 100%; height: 100%"
				></GmapMap>
			</div>
			<div class="adress"></div>
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
				border: 2px solid #111F50;
				height: 0;
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

		.container {
			max-width: 1200px;
			display: flex;
			justify-content: space-between;
			margin: auto;

			.map {
				width: 600px;
				height: 450px;
			}

			.adress {
				width: 400px;
				height: 450px;
			}
		}
	}
</style>
