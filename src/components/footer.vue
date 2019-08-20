<template>
	<section class="page-footer">
		<div class="footer-top">
			<div class="carousel-area">
				<!-- <img src="../assets/images/700x400-0.png" alt="" /> -->
				<el-carousel :autoplay="false">
					<el-carousel-item v-for="(item,index) in 4" :key="item">
						<img src="../assets/images/700x400-0.png" alt="" />
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="copyright-area">

		</div>
	</section>
</template>

<script>
export default {
	name: 'pageFooter'
}
</script>

<style lang="scss">
.page-footer {
	.footer-top {
		height: 400px;;
		.carousel-area {
			width: 700px;
			height: 100%;
			img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
