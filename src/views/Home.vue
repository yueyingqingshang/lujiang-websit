
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
			<div class="product-top">
				<p class="product-title">部分产品展示</p>
				<el-button>全部产品</el-button>
			</div>
			<div class="product-list">
				<div class="product-item" v-for="item in viewData.productList" :key="item.id">
					<div class="product-img">
						<img src="../assets/images/project01.png" alt="">
					</div>
					<div class="product-info">
						<p class="product-name">{{item.name}}</p>
						<p class="product-desc">{{item.description}}</p>
					</div>
				</div>
				<!--eslint-disable-->
				<div class="product-compatible" v-for="(compatible,index) in (viewData.rowNum-viewData.productList.length%viewData.rowNum)" v-if="viewData.productList.length%viewData.rowNum > 0" :key="index+viewData.productList.length+1"></div>
				<!--eslint-disable-->
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
				}],
				awesomeList: [{
					title:'功能齐全',
					icon: 'el-icon-s-grid',
					desc: '提供一般信息化企业必备产品，功能覆盖全面，使用组件化开发，企业可按需定制。'
				},{
					title:'开箱即用',
					icon: 'el-icon-goods',
					desc: '简单使用场景下只需要5分钟时间简单调整配置，一键部署。真正做到开箱即用。'
				},{
					title:'支持上云',
					icon: 'el-icon-upload',
					desc: '支持阿里云及腾讯云服务器部署，把产品包交给云运维吧，省下昂贵的运维成本。'
				},{
					title:'高效',
					icon: 'el-icon-refresh',
					desc: '免费不减配，所有产品在单机情况下均保证良好的性能。在集群部署下可以应对中小电商日常流量。'
				},{
					title:'免费支持',
					icon: 'el-icon-setting',
					desc: '提供工单支持，免费工单48小时内响应；付费工单1~12小时解决问题。'
				},{
					title:'永久开源',
					icon: 'el-icon-time',
					desc: '基于GPL(>=3)开源协议。'
				}],
				rowNum: 4
			}
		}
	}
}
</script>
<style lang="scss">
.page-home {
	.header-area {
		text-align: center;
		padding: 100px;
		font-size: 18px;
		.header-tips {
			font-size: 32px;
		}
	}
	.product-area {
		background: #F5F5F5;
		padding: 50px 15px;

		.product-top {
			text-align: center;
			.product-title {
				font-size: 28px;
			}
		}
		.product-list {
			display: flex;
			justify-content: space-around;
			flex-flow:row wrap;
			.product-item {
				// display: inline-block;
				width: calc(100%/4.2);
				height: 405px;
				margin: 0 10px;
				margin-top: 40px;
				border: 1px solid #666;
				border-radius: 4px;
				background: #fff;
				box-sizing: border-box;
				text-align: center;
				.product-img {
					width: 100%;
					height: 250px;
					border-bottom: 1px solid #ccc
				}
				.product-info {
					text-align: left;
					padding: 10px;
					img {
						width: 100%;
						max-height: 100%;
					}
				}
			}
			.product-compatible {
				width: calc(100%/4.2);
				content: '';
				border:1px solid transparent;
				margin: 0 10px;
				overflow: hidden;
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
				border: 1px solid #fff;
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

		.awesome-item:hover {
			border-color: #0099FF;
		}
	}
}
</style>

