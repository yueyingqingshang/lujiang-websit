export default {
	// 头部菜单栏
	operationList: [{
		label: '首页',
		routeName: 'home'
	},{
		label: '产品列表',
		routeName: 'productList'
	},{
		label: '用户讨论组',
		routeName: 'user'
	},{
		label: '技术支持',
		routeName: 'support'
	},{
		label: '赞助',
		routeName: 'sponsor'
	}],
	// 首页头部描述文字
	headerTipsInfo: {
		title: "Mr.Wednesday's Free Business Frameworker",
		description: 'One stop for Free, Professional and Open Source basic system solutions for Internet companies'
	},
	// 产品列表
	productList: [{
		id: 1,
		// 项目名称
		name: 'Wed-JOB',
		// 产品跳转链接
		hrefUrl: 'www.baidu.com',
		imgUrl: require('@/assets/images/project01.png'),
		description: '这里是产品描述'
	},{
		id: 2,
		// 项目名称
		name: '项目1',
		// 产品跳转链接
		hrefUrl: 'www.baidu.com',
		imgUrl: require('@/assets/images/project01.png'),
		description: '这里是产品描述'
	},{
		id: 3,
		// 项目名称
		name: '项目1',
		// 产品跳转链接
		hrefUrl: 'www.baidu.com',
		imgUrl: require('@/assets/images/project01.png'),
		description: '这里是产品描述'
	},{
		id: 4,
		// 项目名称
		name: '项目1',
		// 产品跳转链接
		hrefUrl: 'www.baidu.com',
		imgUrl: require('@/assets/images/project01.png'),
		description: '这里是产品描述'
	},{
		id: 5,
		// 项目名称
		name: '项目1',
		// 产品跳转链接
		hrefUrl: 'www.baidu.com',
		imgUrl: require('@/assets/images/project01.png'),
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.'
	}],
	// awesomeList
	awesomeList: [{
		title:'功能齐全',
		icon: 'el-icon-s-grid',
		desc: '提供一般信息化企业必备产品，功能覆盖全面，使用组件化开发，企业可按需定制。'
	},{
		title:'开箱即用',
		icon: 'el-icon-goods',
		desc: '简单使用场景下只需要5分钟时间简单调整配置，一键部署。真正做到开箱即用。'
	},{
		title:'支持上云',
		icon: 'el-icon-upload',
		desc: '支持阿里云及腾讯云服务器部署，把产品包交给云运维吧，省下昂贵的运维成本。'
	},{
		title:'高效',
		icon: 'el-icon-refresh',
		desc: '免费不减配，所有产品在单机情况下均保证良好的性能。在集群部署下可以应对中小电商日常流量。'
	},{
		title:'免费支持',
		icon: 'el-icon-setting',
		desc: '提供工单支持，免费工单48小时内响应；付费工单1~12小时解决问题。'
	},{
		title:'永久开源',
		icon: 'el-icon-time',
		desc: '基于GPL(>=3)开源协议。'
	}],
	// 轮播图列表
	bannerList: [{
		imgUrl: require('@/assets/images/banner01.png'),
		hrefUrl: 'www.baidu.com'
	},{
		imgUrl: require('@/assets/images/banner02.png'),
		hrefUrl: 'www.baidu.com'
	},{
		imgUrl: require('@/assets/images/banner03.png'),
		hrefUrl: 'www.baidu.com'
	},{
		imgUrl: require('@/assets/images/banner04.png'),
		hrefUrl: 'www.baidu.com'
	}],
	// 链接列表
	linkList: [{
		name: 'GitHub',
		link: 'www.baidu.com'
	},{
		name: 'OSChina博客',
		link: 'www.baidu.com'
	},{
		name: "Support & FAQ's",
		link: 'www.baidu.com'
	},{
		name: 'Gitter',
		link: 'www.baidu.com'
	}],
	// 赞助商
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
	}],
	// 作者信息
	authorInfo: {
		// 邮箱地址
		email: 'l890j817@126.com',
		// 二维码图片
		QRCodeUrl: require('@/assets/images/QRCode.png'),
		// 作者介绍
		description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.'
	}
}
