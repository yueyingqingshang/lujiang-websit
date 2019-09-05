<template>
	<section class="page-product">
		<p class="page-title">全部产品</p>
		<div class="product-list">
			<div class="product-item" v-for="item in viewData.productList" :key="item.id">
				<div class="product-image">
					<div class="images-area">
						<img :src="item.imgUrl" alt="" @click="gotoProject(item.hrefUrl)">
					</div>
					<p class="product-name">{{item.name}}</p>
					<div class="btn-area">
						<el-button size="small" @click="gotoProject(item.hrefUrl)">手册</el-button>
						<el-button size="small" @click="gotoProject(item.hrefUrl)">GtiHub</el-button>
					</div>
				</div>
				<div class="product-info">
					<div class="product-introduce">
						<p>介绍</p>
						<p class="introduce-area">{{item.description}}</p>
					</div>
					<p>演示</p>
					<el-button  @click="gotoProject(item.hrefUrl)">DEMO</el-button>
					<P>下载最新版本</P>
					<el-button  @click="gotoProject(item.hrefUrl)">点击下载</el-button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import CONSTS from '@/utils/consts'
export default {
	name: 'productList',
	data(){
		return {
			viewData: {
				productList: CONSTS.productList
			}
		}
	},
	methods: {
		gotoProject(url) {
			window.open(`https://${url}`);
		}
	}
}
</script>

<style lang="scss">
.page-product {
	.page-title {
		text-align: center;
		padding-top: 60px;
		font-size: 28px;
	}
	.product-list {
		padding: 15px 50px;
		.product-item {
			display: flex;
			margin: 30px 0;
			.product-image {
				border: 1px solid #333;
				border-radius: 4px;
				.images-area {

				}
				.product-name {
					padding-left: 20px;
				}
				.btn-area {
					display: flex;
					justify-content: space-evenly;
					padding-top: 10px;
					padding-bottom: 40px;
					button {
					}
				}
			}
			.product-info {
				padding: 20px 25px;
				font-size: 32px;
				color: #666;
				p {
					margin: 10px 0;
				}
				.product-introduce {
					.introduce-area {
						font-size: 16px;
					}
				}
			}
		}
	}
}
</style>
