<template>
	<ul class="tab-bar">
		<router-link to="/" tag="li" class="index">首页</router-link>	
		<router-link to="/order" tag="li" class="order">订单</router-link>	
		<router-link to="/mine" tag="li" class="mine">我的</router-link>	
	</ul>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.tab-bar{
		width:100%;
		height: 50px;
		border-top:1px solid #ddd;
		position: fixed;
		bottom:0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tab-bar li{
		flex:1;
		font-size: 12px;
		color:#666;
	}
	.tab-bar li:before{
		content: '';
		display:block;
		width:20px;
		height: 20px;
		margin:0 auto;
	}
	.tab-bar li.router-link-exact-active{
		color:#e98f36;
	}
	.tab-bar li.index:before{
		background: url('../assets/img/icon/index.svg') no-repeat center center;
		background-size: contain;
	}
	.tab-bar li.order:before{
		background: url('../assets/img/icon/order.svg') no-repeat center center;
		background-size: contain;
	}
	.tab-bar li.mine:before{
		background: url('../assets/img/icon/mine.svg') no-repeat center center;
		background-size: contain;
	}
	.tab-bar li.index.router-link-exact-active:before{
		background: url('../assets/img/icon/indexAct.svg') no-repeat center center;
		background-size: contain;
	}
	.tab-bar li.order.router-link-exact-active:before{
		background: url('../assets/img/icon/orderAct.svg') no-repeat center center;
		background-size: contain;
	}
	.tab-bar li.mine.router-link-exact-active:before{
		background: url('../assets/img/icon/mineAct.svg') no-repeat center center;
		background-size: contain;
	}
</style>