<template>
	<section class="page-product">
		<div class="product-list">
			<div class="product-item">
				<div class="product-image"></div>
				<div class="product-info"></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'productList',
	data(){
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
				}]
			}
		}
	}
}
</script>

<style lang="scss">
.page-product {
	.product-list {
		.product-item {
			.product-image {

			}
			.product-info {

			}
		}
	}
}
</style>
