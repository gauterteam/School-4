<template>
	<div>
		<GmapMap
			:center="{lat:10, lng:10}"
			:zoom="7"
			style="width: 600px; height: 450px"
		></GmapMap>
	</div>
</template>

<script>
export default {
	name: 'Map',

}
</script>

<style>

</style>