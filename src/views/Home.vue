
<template>
  <section class="page-home">
		<div class="header-area">
			<p class="header-tips">
				{{viewData.headerTipsInfo.title}}
			</p>
			<p>
				{{viewData.headerTipsInfo.description}}
			</p>
			<el-button @click="gotoProject('www.baidu.com')">GET STARTED</el-button>
		</div>
		<div class="product-area">
			<div class="product-top">
				<p class="product-title">部分产品展示</p>
				<el-button @click="goAllProduct">全部产品</el-button>
			</div>
			<div class="product-list">
				<div class="product-item" v-for="item in viewData.productList" :key="item.id">
					<div class="product-img">
						<img :src="item.imgUrl" alt="" @click="gotoProject(item.hrefUrl)">
					</div>
					<div class="product-info">
						<p class="product-name">{{item.name}}</p>
						<p class="product-desc" :title="item.description">{{item.description}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="awesome-area">
			<p class="awesome-area-title">Awesome Features</p>
			<div class="awesome-list">
				<div class="awesome-item" v-for="item in viewData.awesomeList" :key="item.title">
					<div class="awesome-icon">
						<i :class="item.icon"></i>
					</div>
					<p class="awesome-title">{{item.title}}</p>
					<p class="awesome-desc">
						{{item.desc}}
					</p>
				</div>
			</div>
		</div>
  </section>
</template>
<script>
import CONSTS from '@/utils/consts'
export default {
	name: 'home',
	data() {
		return {
			viewData: {
				productList: CONSTS.productList,
				awesomeList: CONSTS.awesomeList,
				headerTipsInfo: CONSTS.headerTipsInfo
			}
		}
	},
	methods:{
		goAllProduct() {
			this.$router.push({
				name: 'productList'
			})
		},
		gotoProject(url) {
			window.open(`https://${url}`);
		}
	}
}
</script>
<style lang="scss">
.page-home {
	.header-area {
		text-align: center;
		padding: 170px 0;
		font-size: 18px;
		color: #222;
		background: #fff;
		background: linear-gradient(to bottom,#fff,#ccc);
		.header-tips {
			font-size: 32px;
		}
	}
	.product-area {
		background: #F5F5F5;
		padding: 50px 0;
		.product-top {
			text-align: center;
			.product-title {
				font-size: 28px;
			}
		}
		.product-list {
			width: 85%;
			margin: 0 auto;
			.product-item {
				display: inline-block;
				width: calc(100%/4.15);
				height: 405px;
				margin: 0 5px;
				margin-top: 40px;
				border: 1px solid #666;
				border-radius: 4px;
				background: #fff;
				box-sizing: border-box;
				text-align: center;
				.product-img {
					width: 100%;
					height: 250px;
					img {
						display: block;
						cursor: pointer;
						width: 100%;
						max-height: 100%;
					}
				}
				.product-info {
					text-align: left;
					padding: 10px;
					.product-desc {
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
	.awesome-area {
		padding: 90px 40px;
		.awesome-area-title {
			text-align: center;
			font-size: 28px;
			padding-bottom: 55px;
		}
		.awesome-list {
			display: flex;
			flex-flow:row wrap;
			.awesome-item {
				text-align: center;
				width: calc(100%/3);
				height: 220px;
				padding: 15px;
				box-sizing: border-box;
				.awesome-icon {
					i{
						color: #0099FF;
						font-size: 48px;
					}
				}
				.awesome-title{
					font-size: 18px;
				}
				.awesome-desc {
					padding: 0 95px;
				}
			}
		}
		// .awesome-item:hover {
		// 	border-color: #0099FF;
		// }
	}
}
</style>

