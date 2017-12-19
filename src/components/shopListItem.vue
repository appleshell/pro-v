<template>
	<div class="shopList">
		<div class="shopLogo">
			<img :src="shopList.pic_url" alt="">
		</div>
		<div class="shopContent">
			<h3 v-text="shopList.name"></h3>
			<div class="shopMid">
				<div class="shopStatus clear">
					<div class="shopstar">*****</div>
					<div class="shopsold">月售666</div>
				</div>
				<div class="delivery">
					<span class="deliveryTime">30min</span>
					<span>|</span>
					<span class="deliveryInstance">157m</span>
				</div>
			</div>
			<div class="shopBottom">
				<div class="delivery clear">
					<span class="prodPrice">￥20</span>
					<span>|</span>
					<span class="deliveryPrice">￥5</span>
				</div>
				<div class="deliveryWay">美团专送</div>
			</div>
			<ul class="shopDiscount">
				<li>
					<p>本店新客可领5元代金券</p>
				</li>
				<li>
					<p>本店支持开发票，开票金额0元起</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				dict:{
					typeDict:{
						0:'',
						1:'新店',
						2:'品牌',
					}
				},
				shopList:{
			        "id": 1000,//id
			        "type":1,//1代表新店、2代表品牌店、0代表都不是
			        "name": "你的名字",//店名
			        "delivery_type": 1,//1代表美团专送，0代表不是
			        "pic_url": "http://p0.meituan.net/0.84.63/xianfu/54c60749841a6612df373dc259e8da73108176.jpg",//图片地址
			        "avg_delivery_time": 30,//平均送达时间
			        "delivery_distance": 2032,//平均送达距离(单位为米，超过一千米要转化成千米)
			        "min_price": 20,//起送价
			        "delivery_price": 3,//配送费
			        "wm_poi_score": 4.7,//评分
			        "month_sale_num": 33,//月售
			        "shop_discount": {
			            "code":0,//是否能领代金券
			            "dis_money":[2,4]//返回的代金券(多张)
			        },
			        "shop_return_price": {
			            "code":0,//是否返券
			            "min_price":20,//返券起始价格
			            "dis_money":4//商家返券数
			        },
			        "shop_return_invoice": {
			            "code":0,//是否开发票
			            "min_price":0,//开票起始价格
			        },   
			    },
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
		padding-bottom: 10px;
		border-bottom: 1px solid #ddd;
	}
	.shopLogo{
		flex: 1;
	}
	.shopLogo img{
		width:100%;
		border:1px solid #ddd;
	}
	.shopContent{
		flex:3;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.shopContent h3{
		font-weight: normal;
		text-align: left;
		font-size: 18px;
	}
	.shopMid,.shopBottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
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
		font-size: 14px;
		text-align: left;
		color:#999;
	}
</style>