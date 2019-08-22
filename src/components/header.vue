<template>
	<section class="page-header">
		<div class="main-area">
			<p class="page-title">WED-ludashi</p>
			<div class="operate-list">
				<ul class="list-area">
					<li v-for="item in viewData.operationList" :key="item.routeName" :class="viewData.activeNav === item.routeName ? 'active':''" @click="goPage(item)">
						<p>{{item.label}}</p>
					</li>
				</ul>
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
					label: '用户讨论组',
					routeName: 'user'
				},{
					label: '产品列表',
					routeName: 'productList'
				},{
					label: '技术支持',
					routeName: 'support'
				}],
				activeNav: ''
			}
		}
	},
	methods: {
		goPage(nav) {
			this.viewData.activeNav = nav.routeName;
			this.$router.push({
				name: nav.routeName
			})
		}
	}
}
</script>

<style lang="scss">
	.page-header {
		width: 100%;
		height: 400px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		color: #fff;
		.main-area {
			max-width: 70%;
			background: #0593d3;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 18px;
			.page-title {
				font-weight: 400;
			}
			.operate-list {
				.list-area {
					display: flex;
					margin: 0;
					li {
						display: block;
						padding: 0 15px;
						cursor: pointer;
						transition: all .3s;
					}
					li:hover {
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
		.header-area {
			text-align: center;
			padding: 100px;
			font-size: 18px;
			.header-tips {
				font-size: 32px;
			}
		}
	}
</style>
