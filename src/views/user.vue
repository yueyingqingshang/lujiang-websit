<template>
	<section class="page-user">
		<p class="page-title">用户讨论组</p>
		<div class="user-list">
			<div class="user-item" v-for="item in viewData.userList" :key="item.id">
				<div class="user-image">
					<div class="images-area">
						<img src="@/assets/images/project01.png" alt="">
					</div>
					<p class="user-name">{{item.name}}:{{item.userNo}} <span v-show="item.status">（{{item.status}}）</span></p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'userList',
	data(){
		return {
			viewData: {
				userList: [{
					id: 1,
					name: 'QQ-1群',
					userNo: '112112113',
					status: '已满'
				},{
					id: 2,
					name: 'QQ-2群',
					userNo: '112112113',
					status: '已满'
				},{
					id: 3,
					name: 'QQ-3群',
					userNo: '112112113',
					status: '已满'
				},{
					id: 4,
					name: 'QQ-4群',
					userNo: '112112113',
					status: ''
				},]
			}
		}
	}
}
</script>

<style lang="scss">
.page-user {
	.page-title {
		text-align: center;
		padding-top: 60px;
		font-size: 28px;
	}
	.user-list {
		padding: 15px 50px;
		.user-item {
			margin: 30px 10px;
			display: inline-block;
			width: calc(100%/4.3);
			.user-image {
				border: 1px solid #333;
				border-radius: 4px;
				width: 100%;
				.images-area {
					img {
						display: block;
						width: 100%;
						max-height: 100%;
					}
				}
				.user-name {
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
		}
	}
}
</style>
