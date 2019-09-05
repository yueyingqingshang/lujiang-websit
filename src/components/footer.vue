<template>
	<section class="page-footer">
		<div class="footer-top">
			<div class="carousel-area">
				<el-carousel>
					<el-carousel-item v-for="item in viewData.bannerList" :key="item.imgUrl">
						<img :src="item.imgUrl" alt="" @click="gotoProject(item.hrefUrl)"/>
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="author-area">
				<p class="author-title">支持作者</p>
				<p class="author-desc">
					{{viewData.authorInfo.description}}
				</p>
				<el-button @click="goSponsor">我要赞助</el-button>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="author-area">
				<p class="author-title">作者简介（About me）</p>
				<p class="author-desc">
					{{viewData.authorInfo.description}}
				</p>
			</div>
			<div class="author-link">
				<p class="link-title">
					更多链接（More links）
				</p>
				<div class="link-list">
					<p class="link-item" v-for="item in  viewData.linkList" :key="item.name">
						<a :href="`https://${item.link}`" target="_black">{{item.name}}</a>
					</p>
				</div>
			</div>
			<div class="contact-area">
				<p class="contact-title">联系我（Contact me）</p>
				<div class="contact-item">
					<div class="item-icon">
						<i class="el-icon-s-promotion"></i>
					</div>
					<p><a :href="`mailto:${viewData.authorInfo.email}`">{{viewData.authorInfo.email}}</a></p>
				</div>
				<div class="contact-item">
					<div class="item-icon">
						<i class="el-icon-s-comment"></i>
					</div>
					<div class="wechat-img">
						<img :src="viewData.authorInfo.QRCodeUrl" alt="">
					</div>
				</div>
			</div>
		</div>
		<p class="copyright-area">Copyright {{viewData.nowDate}}-present, lujiang.io.</p>
	</section>
</template>

<script>
import CONSTS from '@/utils/consts'
export default {
	name: 'pageFooter',
	data() {
		return {
			viewData: {
				// 轮播图列表
				bannerList: CONSTS.bannerList,
				// 链接列表
				linkList:  CONSTS.linkList,
				// 作者信息
				authorInfo: CONSTS.authorInfo,
				nowDate: new Date().getFullYear()
			}
		}
	},
	methods: {
		goSponsor() {
			this.$router.push({
				name: 'sponsor'
			})
		},
		gotoProject(url) {
			window.open(`https://${url}`);
		}
	}
}
</script>

<style lang="scss">
.page-footer {

	.footer-top {
		background: #fff;
		display: flex;
		.carousel-area {
			width: 700px;
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.author-area {
			padding: 0 60px;
			.author-title {
				font-size: 32px;
				margin: 0;
				margin-top: 20px;
			}
			.author-desc {
				width: 600px;
				font-size: 16px;
				line-height: 30px;
			}
		}
	}
	.footer-bottom {
		display: flex;
		justify-content: space-between;
		padding: 30px 80px;
		padding-bottom: 0;
		color: #333;
		background: #F5F5F5;
		font-size: 20px;
		.author-area {
			width: calc(100%/3);
			font-size: 18px;
			.author-title {
				font-size: 20px;
			}
			.author-desc {
				width: 100%;
			}
		}
		.author-link {
			.link-list {
				.link-item {
					margin: 10px 0;
					font-size: 16px;
					a {
						color: #111;
					}
				}
			}
		}
		.contact-area {
			.contact-title {
			}
			.contact-item {
				display: flex;
				.item-icon {
					font-size: 40px;
				}
				p {
					margin: 15px;
					font-size: 16px;
					a {
						color: #111;
					}
				}
				.wechat-img {
					padding: 5px 15px;
					img {
						width: 150px;
						height: 150px;
					}
				}
			}
		}
	}
	.copyright-area {
		text-align: center;
		font-size: 12px;
		margin: 0;
		margin-bottom: 20px;
	}
}
</style>
