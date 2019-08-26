<template>
<div id="app">
	<pageHeader />
	<section class="page-main">
		<router-view></router-view>
	</section>
	<pageFooter />
</div>
</template>
<script>
import pageHeader from '@/components/header.vue'
import pageFooter from '@/components/footer.vue'
export default {
  name: 'app',
  components: {
		pageHeader,
		pageFooter
  }
}
</script>

<style>
	.page-main {
		background: #F5F5F5;
		margin-top: -30px;
	}
</style>
