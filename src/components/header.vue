<template>
	<section class="page-header">
		<div class="main-area">
			<div class="page-nav">
				<p class="page-title" @click="goHome">WED-ludashi</p>
				<div class="operate-list">
					<ul class="list-area">
						<router-link v-for="item in viewData.operationList" :key="item.routeName" :to='item.routeName' active-class="active">{{item.label}}</router-link>
						<!-- <li v-for="item in viewData.operationList" :key="item.routeName" :class="viewData.activeNav === item.routeName ? 'active':''" @click="goPage(item)">
							<p>{{item.label}}</p>
						</li> -->
					</ul>
				</div>
			</div>
		</div>
		<div class="header-area">
			<p class="header-tips">
				Mr.Wednesday's Free Business Frameworker
			</p>
			<p>
				One stop for Free, Professional and Open Source basic system solutions for Internet companies
			</p>
			<el-button>GET STARTED</el-button>
		</div>
	</section>
</template>
<script>
export default {
	name: 'pageHeader',
	data() {
		return {
			viewData: {
				operationList: [{
					label: '首页',
					routeName: 'home'
				},{
					label: '产品列表',
					routeName: 'productList'
				},{
					label: '用户讨论组',
					routeName: 'user'
				},{
					label: '技术支持',
					routeName: 'support'
				},{
					label: '赞助',
					routeName: 'sponsor'
				}],
				activeNav: ''
			}
		}
	},
	created() {
	},
	methods: {
		goHome() {
			this.$router.push({
				name: 'home'
			})
		}
	}
}
</script>

<style lang="scss">
	.page-header {
		width: 100%;
		height: 550px;
		color: #fff;
		// background: #F5F5F5;
		.main-area {
			position: fixed;
			background: #0593d3;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
			.page-nav {
				max-width: 70%;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 18px;
				.page-title {
					font-weight: 400;
					cursor: pointer;
				}
				.operate-list {
					height: 100%;
					.list-area {
						display: flex;
						height: 100%;
						margin: 0;
						a {
							display: block;
							padding: 18px 15px;
							color: #fff;
							cursor: pointer;
							transition: all .3s;
							text-decoration: none;
							outline: none;
						}
						a:hover {
							background-color: #0482ba;
							color: #ffffff;
							border-left-color: rgba(0, 0, 0, 0.1);
							border-right-color: rgba(0, 0, 0, 0.1);
							border-top-color: rgba(0, 0, 0, 0.1);
						}
						.active {
							// background: #ccc;
							background-color: #0482ba;
							color: #ffffff;
							border-left-color: rgba(0, 0, 0, 0.1);
							border-right-color: rgba(0, 0, 0, 0.1);
							border-top-color: rgba(0, 0, 0, 0.1);
						}
					}
				}
			}
		}
		.header-area {
			text-align: center;
			padding: 100px;
			padding-top: 175px;
			font-size: 18px;
			color: #222;
			.header-tips {
				font-size: 32px;
			}
		}
	}
</style>
