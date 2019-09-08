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
			<a :href="`mailto:${viewData.authorInfo.email}`" class="conact-btn">点此联系我</a>
		</div>
	</div>
</template>

<script>
import CONSTS from '@/utils/consts'
export default {
	name: 'sponsor',
	data() {
		return {
			viewData: {
				sponsorList: CONSTS.sponsorList,
				authorInfo:  CONSTS.authorInfo
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
			.conact-btn {
				text-decoration: none;
				display: block;
				width: 98px;
				margin: 0 auto;
				border: 1px solid #ccc;
				padding: 10px 18px;
				color: #606266;
				outline: none;
				border-radius: 4px;
			}
			.conact-btn:hover {
				color: #409EFF;
				border-color: #c6e2ff;
				background-color: #ecf5ff;
			}
		}
	}
</style>
