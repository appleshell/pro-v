<template>
	<div class="shopList">
		<div class="shopLogo">
			<img :src="shopList.pic_url" alt="">
			<span :class="['shopTap',{'shopBrand':shopList.type === 2,'shopNew':shopList.type === 1}]" v-text="dict.shopTypeDict[shopList.type]">品牌</span>
		</div>
		<div class="shopContent">
			<h3 v-text="shopList.name"></h3>
			<div class="shopMid">
				<div class="shopStatus clear">
					<Star :score="shopList.wm_poi_score"></Star>
					<div class="shopsold" v-text="'月售'+shopList.month_sale_num"></div>
				</div>
				<div class="delivery">
					<span class="deliveryTime" v-text="shopList.avg_delivery_time+'min'"></span>
					<span>|</span>
					<span class="deliveryInstance" v-text="deliveryDistance"></span>
				</div>
			</div>
			<div class="shopBottom">
				<div class="delivery clear">
					<span class="prodPrice" v-text="'起送价￥'+shopList.min_price"></span>
					<span>|</span>
					<span class="deliveryPrice" v-text="'配送￥'+shopList.delivery_price"></span>
				</div>
				<div class="deliveryWay" v-show="shopList.delivery_type">美团专送</div>
			</div>
			<ul class="shopDiscount">
				<li v-show="shopList.shop_discount.code">
					<p v-text="'本店新客可领'+shopList.shop_discount.dis_money[1]+'元代金券'"></p>
				</li>
				<li v-show="shopList.shop_return_invoice.code">
					<p v-text="'本店支持开发票，开票金额'+shopList.shop_return_invoice.min_price+'元起'"></p>
				</li>
				<li v-show="shopList.shop_return_price.code">
					<p v-text="'实际支付'+shopList.shop_return_price.min_price+'元返'+shopList.shop_return_price.dis_money+'元商家代金券'"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Star from './scoreStar.vue'
	export default {
		data(){
			return {
				
			}
		},
		components:{
			Star
		},
		props:{
			shopList:{
				type:Object,
				default:{}
			},
			dict:{
				type:Object,
				default:{}
			}
		},
		computed:{
			deliveryDistance(){
				if (this.shopList.delivery_distance<1000) {
					return this.shopList.delivery_distance + 'm'
				} else {
					return (this.shopList.delivery_distance/1000).toFixed(1) + 'km'
				}
			}
		}
	}
</script>

<style scoped>
	.clear:after{
		content:'';
		display: block;
		clear:both;
		overflow: auto;
	}
	.shopList{
		display: flex;
		margin:0 10px;
		padding:10px 0;
		border-bottom: 1px solid #ddd;
	}
	.shopLogo{
		flex: 1;
		position: relative;
	}
	.shopLogo img{
		width:100%;
		border:1px solid #ddd;
	}
	.shopLogo .shopTap{
		position: absolute;
		top:0;
		left: 0;
		font-size: 12px;
		color:#fff;
		padding:0 2px;
	}
	.shopLogo .shopBrand{
		background: #FFA627;
	}
	.shopLogo .shopNew{
		background: #21C56C;
	}
	.shopContent{
		flex:3;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.shopContent h3{
		font-weight: normal;
		text-align: left;
		font-size: 16px;
	}
	.shopMid,.shopBottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		color:#999;
	}
	.shopMid{
		padding:4px 0;
		box-sizing: border-box;
	}
	.shopStatus>div{
		float: left;
	}
	.deliveryWay{
		font-size: 12px;
		background: #FFD161;
		padding:2px 4px;
	}
	.shopDiscount{
		margin-top: 6px;
		font-size: 12px;
		text-align: left;
		color:#999;
	}
</style>