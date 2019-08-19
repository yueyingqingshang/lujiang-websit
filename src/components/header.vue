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
		}
	}
}
</script>

<style lang="scss">
	.page-header {
		width: 100%;
		height: 60px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		background: #0593d3;
		color: #fff;
		.main-area {
			max-width: 70%;
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
	}
</style>
