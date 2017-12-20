<template>
	<div class="scoreStar">
		<!-- <i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i> -->
		<i v-for="i in 5" :class="{'noStar':score<i-0.5,'halfStar':score>=i-0.5 && score<i}"></i>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:{
			score:{
				type:Number,
				default:4
			}
		}
	}
</script>

<style scoped>
	.scoreStar i{
		display: inline-block;
		width:10px;
		height: 10px;
		background: url('../assets/img/icon/star.png') no-repeat;
		background-size: cover;
		margin-right: 4px;
	}
	.scoreStar i.halfStar{
		background-position: -13px;
	}
	.scoreStar i.noStar{
		background-position: -26px;
	}
</style>