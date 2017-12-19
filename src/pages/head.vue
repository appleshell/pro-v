<template>
	<div class="container">
		<crop :action="action" :on-success="cropSuccess" :img-size="imgSize" :img-type="imgType">
			<img class="headPic" v-if="imgUrl" :src="imgUrl" alt="" >
			<i v-else></i>
		</crop>
	</div>
</template>

<script>
	import crop from '@/components/crop'
	export default{
		data(){
			return {
				action:'http://172.16.36.234:8889/file/upload',
				imgUrl:'',
				imgSize:'10mb',
				imgType:'image/jpg,image/jpeg'
			}
		},
		components:{
			crop
		},
		methods:{
			cropSuccess(res,url){
				console.log(res)
				this.imgUrl = url;
				console.log(this.imgUrl)
			},
		}
	}
</script>

<style>
	.container{
		margin:0 auto;
		width:60%;
	}
	.headPic{
		width:100%;
		vertical-align: middle;
	} 
	i {
    display: inline-block;
    width:50px;
    height: 50px;
    background: url(../assets/add.svg) no-repeat center center;
    background-size: contain;
  }
</style>