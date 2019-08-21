<template>
	<section class="page-footer">
		<div class="footer-top">
			<div class="carousel-area">
				<!-- <img src="../assets/images/700x400-0.png" alt="" /> -->
				<el-carousel>
					<el-carousel-item v-for="item in 4" :key="item">
						<img src="../assets/images/700x400-0.png" alt="" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="author-area">
				<p class="author-title">支持作者</p>
				<p class="author-desc">
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
				</p>
				<el-button>我要赞助</el-button>
			</div>
		</div>
		<div class="footer-bottom">
			<div class="author-area">
				<p class="author-title">作者简介（About me）</p>
				<p class="author-desc">
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
				</p>
			</div>
			<div class="author-link">
				<p class="link-title">
					更多链接（More links）
				</p>
				<div class="link-list">
					<p class="link-item" v-for="item in  viewData.linkList" :key="item.name">
						<a :href="item.link">{{item.name}}</a>
					</p>
				</div>
			</div>
			<div class="contact-area">
				<p class="contact-title">联系我（Contact me）</p>
				<div class="contact-item">
					<div class="item-icon">
						<i class="el-icon-s-promotion"></i>
					</div>
					<p>l890j817@126.com</p>
				</div>
				<div class="contact-item">
					<div class="item-icon">
						<i class="el-icon-s-comment"></i>
					</div>
					<div class="wechat-img">
						<img src="@/assets/images/wechat.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<p class="copyright-area">Copyright {{viewData.nowDate}}-present, lujiang.io.</p>
	</section>
</template>

<script>
export default {
	name: 'pageFooter',
	data() {
		return {
			viewData: {
				linkList: [{
					name: 'GitHub',
					link: 'javascript:;'
				},{
					name: 'OSChina博客',
					link: 'javascript:;'
				},{
					name: "Support & FAQ's",
					link: 'javascript:;'
				},{
					name: 'Gitter',
					link: 'javascript:;'
				}],
				nowDate: new Date().getFullYear()
			}
		}
	}
}
</script>

<style lang="scss">
.page-footer {

	.footer-top {
		background: #F5F5F5;
		display: flex;
		// padding: 0 20px;
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
