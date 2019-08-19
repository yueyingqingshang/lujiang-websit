<template>
  <section class="page-home">
		<div class="header-area">
			<p class="header-tips">
				Mr.Wednesday's Free Business Frameworker
			</p>
			<p>
				One stop for Free, Professional and Open Source basic system solutions for Internet companies
			</p>
			<el-button>GET STARTED</el-button>
		</div>
		<div class="product-area">
			<p class="product-title">部分产品展示</p>
			<el-button>全部产品</el-button>
			<div class="product-list">
				<div class="product-item" v-for="item in viewData.productList" :key="item.id">
					<div class="product-img">
						<span>项目图片</span>
					</div>
					<div class="product-info">
						<p class="product-name">{{item.name}}</p>
						<p class="product-desc">{{item.description}}</p>
					</div>
				</div>
			</div>
		</div>
  </section>
</template>

<script>

export default {
	name: 'home',
	data() {
		return {
			viewData: {
				productList: [{
					id: 1,
					name: '项目1',
					description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
				},{
					id: 2,
					name: '项目1',
					description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
				},{
					id: 3,
					name: '项目1',
					description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
				},{
					id: 4,
					name: '项目1',
					description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
				},{
					id: 5,
					name: '项目1',
					description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
				}]
			}
		}
	}
}
</script>
<style lang="scss">
.page-home {
	margin-top: 60px;
	.header-area {
		text-align: center;
		padding: 100px;
		font-size: 18px;
		.header-tips {
			font-size: 32px;
		}
	}
	.product-area {
		text-align: center;
		background: #F5F5F5;
		padding: 15px;
		.product-title {
			font-size: 28px;
		}
		.product-list {
			display: flex;
			justify-content: space-between;
			flex-flow:row wrap;

			.product-item {
				width: 330px;
				height: 405px;
				margin-top: 30px;
				border: 1px solid #000;
				border-radius: 4px;
				background: #fff;
				.product-img {
					width: 100%;
					height: 250px;
					border-bottom: 1px solid #ccc
				}
				.product-info {
					text-align: left;
					padding: 5px;
				}
			}
		}
	}
}
</style>

