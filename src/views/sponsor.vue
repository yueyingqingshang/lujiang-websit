<template>
	<div class="page-sponsor">
		<p class="page-title">成为赞助商</p>
		<div class="sponsor-list">
			<div class="sponsor-item" v-for="item in viewData.sponsorList" :key="item.icon">
				<div class="sponsor-icon">
					<i :class="item.icon"></i>
				</div>
				<div class="sponsor-desc">
					<p>{{item.desc}}</p>
				</div>
			</div>
		</div>
		<div class="page-btn">
			<el-button>点此联系我</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sponsor',
	data() {
		return {
			viewData: {
				sponsorList: [{
					icon: 'el-icon-s-grid',
					desc: '享受全部产品二次开发指导。'
				},{
					icon: 'el-icon-s-custom',
					desc: '享受全部产品5*24小时远程支持。'
				},{
					icon: 'el-icon-s-opportunity',
					desc: '首页轮播展示您的企业以获得更好的宣传，停止支持后不会取消您的宣传位。'
				},{
					icon: 'el-icon-alarm-clock',
					desc: '享受每月4人/日个性化需求定制，节约开发成本。'
				}]
			}
		}
	}

}
</script>

<style lang="scss">
	.page-sponsor {
		.page-title {
			text-align: center;
			font-size: 32px;
			padding-top: 40px;
			padding-bottom: 20px;
		}
		.sponsor-list {
			display: flex;
			flex-flow:row wrap;
			.sponsor-item {
				text-align: center;
				width: calc(100%/4);
				height: 220px;
				padding: 15px;
				box-sizing: border-box;
				.sponsor-icon {
					i{
						color: #0099FF;
						font-size: 50px;
					}
				}
				.sponsor-desc {
					padding: 0 30px;
				}
			}
		}
		.page-btn {
			text-align: center;
			padding-bottom: 40px;
		}
	}
</style>
