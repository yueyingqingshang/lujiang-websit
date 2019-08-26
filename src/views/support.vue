<template>
	<section class="page-support">
		<p class="page-title">技术支持</p>
		<div class="support-list">
			<div class="support-item" v-for="(item,index) in viewData.supportList" :key="item.id">
				<div class="support-image">
					<div class="images-area">
						<img src="@/assets/images/project01.png" alt="">
					</div>
					<p class="support-name">{{item.name}}</p>
					<div class="btn-area">
						<el-button size="small">手册</el-button>
						<el-button size="small">GtiHub</el-button>
					</div>
				</div>
				<div class="support-info">
					<div class="support-introduce">
						<p class="introduce-title"> <span>创建工单</span> <el-button size="small">转至GitHub提交issue</el-button> </p>
						<p class="introduce-area">
							<el-input
								v-model="formDataList[index]['workOrder']"
								type="textarea"
								:rows="3"
								placeholder="请输入内容">
							</el-input>
						</p>
					</div>
					<div class="support-introduce">
						<p class="introduce-title"> <span>联系方式</span></p>
						<p class="introduce-area">
							<el-input
								v-model="formDataList[index]['phoneNumber']"
								placeholder="请输入内容">
							</el-input>
						</p>
					</div>
					<div class="support-introduce">
						<p class="introduce-title">
							<span class="title-info">选择支持类型</span>
							<el-radio v-model="formDataList[index]['workOrderType']" label="1">提交为【免费支持】</el-radio>
							<el-radio v-model="formDataList[index]['workOrderType']" label="2">付费为您的工单加速</el-radio>
						</p>
						<p class="introduce-area">
							<el-input
								class="mt-10"
								v-model="formDataList[index]['orderNo']"
								placeholder="若您已付费，请再次填写您的订单号">
							</el-input>
						</p>
						<el-button size="small" @click="handleSubmit">提交</el-button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'supportList',
	data(){
		return {
			formDataList: [],
			viewData: {
				supportList: [{
					id: 1,
					name: 'Wed-JOB',
					description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
				},{
					id: 2,
					name: '项目1',
					description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
				},{
					id: 3,
					name: '项目1',
					description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
				},{
					id: 4,
					name: '项目1',
					description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
				},{
					id: 5,
					name: '项目1',
					description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
				}]
			}
		}
	},
	created() {
		this.formDataList = this.viewData.supportList.map(item=>{
			return {
				id: item.id,
				name: item.name,
				description: item.description,
				workOrder: '',
				workOrderType: '1',
				phoneNumber: '',
				orderNo: ''
			}
		})
	},
	methods: {
		handleSubmit() {
			console.log(this.formDataList)
		}
	}
}
</script>
<style lang="scss">
.page-support {
	.page-title {
		text-align: center;
		padding-top: 60px;
		font-size: 28px;
	}
	.support-list {
		padding: 15px 50px;
		.support-item {
			display: flex;
			margin: 30px 0;
			.support-image {
				border: 1px solid #333;
				border-radius: 4px;
				display: flex;
				flex-direction: column;
				.images-area {
					flex: .9;
					img {
						width: 100%;
						max-height: 100%;
					}
				}
				.support-name {
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
			.support-info {
				padding: 20px 25px;
				font-size: 32px;
				color: #666;
				p {
					margin: 10px 0;
				}
				.support-introduce {
					.introduce-title {
						display: flex;
						align-items: center;
						.title-info {
							margin-right: 30px;
						}
						button {
							margin-left: 30px;
						}
					}
					.introduce-area {
						font-size: 16px;
						.mt-10 {
							margin-top: 10px;
						}
					}
				}
			}
		}
	}
}
</style>
