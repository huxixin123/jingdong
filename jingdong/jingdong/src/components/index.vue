<template>
	<div class="wrap">
		<header class="head">
			<p class="lftP"><i class="iconfont icon-tianmao1"></i><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="京东生鲜超级品类日,领券满199减80" class="inputGt"></p>
			<a href="#" class="add">登录</a>
		</header>
		<section id="sec">			
			<div class="boxSwiper">
				<mt-swipe :auto="4000" >
				  <mt-swipe-item><img src="../img/header_swiper/01.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/02.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/03.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/04.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/05.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/06.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/07.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/header_swiper/08.jpg"></mt-swipe-item>
				</mt-swipe>
			</div>
			<div class="banner"><img src="../img/banner/newpeople.jpg"></div>
			<div class="nav">
			<ul class="navUl">
				<li v-for="(item,index) in datas.nav" :key="index">
				<img :src="item.img"><span>{{item.txt}}</span>
				</li>
				</ul>
			</div>
			<div class="txt">
				<div class="content">
				<span class="text"><span class="jing">京东</span><span class="first">快报 </span> :</span>
				<ul class="list">
					<li><span class="red">热</span> iPhone 手机最神奇的功能，原来说过的话收到货了</li>
					<li><span class="red">抢</span> 京东生鲜券满199送99 </li>
					<li><span class="red">爆</span>内裤多久换一次？大多数男生哈市V的进吧速度</li>
				</ul>
				<a class="more">更多</a>
				</div>
			</div>
			<div class="navBar">
				<div class="title">
					<p>
					<span class="kill">京东秒杀</span><span class="colos">14点场</span><span class="num">{{hours}}</span>: <span class="num">{{methods}}</span>: <span class="num">{{second}}</span>
					</p>
					<p class="weiHt"><span>京选尖货轮重秒</span> <span class="rightL">></span></p>
				</div>
			</div>
			<div class="navBox">
			<div id="mainWinBox" class="mainWinBox">
			<ul class="navWin" id="navWin">
				<li v-for="(item,index) in datas.navBar" :key="index">
					<img :src="item.img">
					<span class="numMon">￥{{item.mon}}</span>
					<span class="agoNum">￥{{item.ago}}</span>
				</li>
			</ul>
			</div>
			</div>
			<div class="imgWhy"></div>
			<div class="optImg"><strong class="optGet1"></strong><strong class="optGet3"></strong></div>
			<div class="optImg"><strong class="optGet2"></strong><strong class="optGet4"></strong></div>
			<div class="optImg io">
				<div class="txtImg" v-for="(item,index) in datas.shan" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.text}}</span><span class="normal">{{item.txt}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
			</div>
			<div class="optImg io">
				<div class="txtImg jk" v-for="(item,index) in datas.paihang2" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.text}}</span><span class="normal">{{item.txt}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
				<div class="txtImg fg">
					<p class="shanTxt ok iop" v-for="(item,index) in datas.paihang1" :key="index">
						<span class="bigTxt tet">{{item.text}}</span>
						<span  class="normal nol">{{item.txt}}</span>
						<img :src="item.img" class="imgGirl">
					</p>
				</div>
			</div>
			<p class="bannerTitle">
				爱生活
			</p>
			<div class="optImg io">
				<div class="txtImg" v-for="(item,index) in datas.body1" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.txt}}</span><span class="normal">{{item.text}}</span><span class="first fi">{{item.pink}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
			</div>
			<div class="optImg io">
				<div class="txtImg" v-for="(item,index) in datas.body2" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.txt}}</span><span class="normal">{{item.text}}</span><span class="first fi">{{item.pink}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
			</div>
			<ul class="navBotBar">
				<li v-for="(item,index) in datas.body3" :key="index">
				<p class="navP"><span class="bigTxt">{{item.txt}}</span><span>{{item.text}}</span></p><img :src="item.img"><span class="very">{{item.pink}}</span></li>
			</ul>
			<div class="boxbaner">
			<div class="optMyMt">			
			<mt-swipe :auto="1000">
				  <mt-swipe-item><img src="../img/banner/swiper/1/01.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/banner/swiper/1/02.jpg"></mt-swipe-item>
			</mt-swipe>
			</div>
			<p class="bannerTitle">享品质</p>
			</div>
			<div class="optImg io">
				<div class="txtImg" v-for="(item,index) in datas.body11" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.txt}}</span><span class="normal">{{item.text}}</span><span class="first fi">{{item.pink}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
			</div>
			<div class="optImg io">
				<div class="txtImg" v-for="(item,index) in datas.body22" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.txt}}</span><span class="normal">{{item.text}}</span><span class="first fi">{{item.pink}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
			</div>
			<ul class="navBotBar">
				<li v-for="(item,index) in datas.body33" :key="index">
				<p class="navP"><span class="bigTxt">{{item.txt}}</span><span>{{item.text}}</span></p><img :src="item.img"><span class="very">{{item.pink}}</span></li>
			</ul>


			<div class="boxbaner">
			<div class="optMyMt">			
			<mt-swipe :auto="1000">
				  <mt-swipe-item><img src="../img/banner/swiper/2/01.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/banner/swiper/2/02.jpg"></mt-swipe-item>
			</mt-swipe>
			</div>
			<p class="bannerTitle">购特色</p>
			</div>
			<div class="optImg io">
				<div class="txtImg jk" v-for="(item,index) in datas.paihang3" :key="index">
					<p class="shanTxt"><span class="bigTxt">{{item.text}}</span><span class="normal">{{item.txt}}</span>
					<span class="first fi">{{item.pink}}</span></p>
					<p><img :src="item.img" class="hjImg"></p>
				</div>
				<div class="txtImg fg">
					<p class="shanTxt ok iop" v-for="(item,index) in datas.paihang4" :key="index">
						<span class="bigTxt tet">{{item.text}}</span>
						<span  class="normal nol">{{item.txt}}</span>
						<img :src="item.img" class="imgGirl">
					</p>
				</div>
			</div>
			<ul class="navBotBar">
				<li v-for="(item,index) in datas.body111" :key="index">
				<p class="navP"><span class="bigTxt">{{item.txt}}</span><span>{{item.text}}</span></p><img :src="item.img"><span class="very">{{item.pink}}</span></li>
			</ul>
			<ul class="navBotBar">
				<li v-for="(item,index) in datas.body222" :key="index">
				<p class="navP"><span class="bigTxt">{{item.txt}}</span><span>{{item.text}}</span></p><img :src="item.img"><span class="very">{{item.pink}}</span></li>
			</ul>
			<div class="boxbaner">
			<div class="optMyMt">			
			<mt-swipe :auto="1000">
				  <mt-swipe-item><img src="../img/banner/swiper/3/01.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/banner/swiper/3/02.jpg"></mt-swipe-item>
			</mt-swipe>
			</div>
			<p class="bannerTitle txtBanner">
				<span></span>
				<span>发现好店</span>
				<span class="moreCai"><span>更多精彩</span><b>></b></span>
			</p>
			</div>

			<div class="txtImgPic">
				<div class="txtImgPicDiv" v-for="(item,index) in datas.food" :key="index">
					<p class="food">
					<span class="bigTxt">{{item.txt}}</span>
					<span class="normal">{{item.text}}</span>
					</p>
					<p class="imgP">
						<img :src="item.img1">
						<img :src="item.img2">
					</p>
					<p class="ding">{{item.p}}}</p>
				</div>
			</div>
			<p class="bannerTitle txtBanner">
				<span></span>
				<span>直播</span>
				<span class="moreCai moreCsi"><span>更多精彩</span><b>></b></span>
			</p>
			<div class="txtImgPic">
				<div class="txtImgPicDiv"  v-for="(item,index) in datas.xiu" :key="index">
					<p class="food">
					<span class="bigTxt">{{item.txt}}</span>
					<span class="normal nalM">{{item.text}}</span>
					</p>
					<p class="imgP ioImg">
						<img :src="item.img1">
					</p>
				</div>
			</div>
			<div class="middleForYou">
			<span class="bor"></span>
			<p class="middle"><i class="iconfont icon-tijiaodingdan"></i><span>为您推荐</span></p>
			<span class="bor"></span>
			</div>
			<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<div class="dlBox">
				<dl class="dls" v-for="(item,index) in datas.bottomNav" >
					<dt><img :src="item.img"></dt>
					<dd>
						<p class="txtPio">{{item.text}}</p>
						<span class="redH">￥{{item.mon}}</span>
						<p class="spanB">
						<span class="normal">好评率{{item.good}}%</span><span class="btnT">看相似</span>
						</p>
					</dd>
				</dl>
			</div>
			</mt-loadmore>
		</section>

		<footer>
			<ul class="fen_li">
				<router-link :to="{ path:'/home'}" tag="li"><i class="iconfont icon-iconhuidaoshouye"></i><span>首页</span></router-link>
				<router-link :to="{ path:'/add'}" tag="li"><i class="iconfont icon-gengduo-2"></i><span>分类</span></router-link>
				<router-link :to="{ path:'/cover'}" tag="li"><i class="iconfont icon-youhuiquan-geren-01"></i><span>发现</span></router-link>
				<router-link :to="{ path:'/shopcar'}" tag="li"><i class="iconfont icon-gouwuche"></i><span>购物车</span></router-link>
				<router-link :to="{ path:'/my'}" tag="li"><i class="iconfont icon-wode"></i><span>我的</span></router-link>
			</ul>
		</footer>
	</div>
</template>
<script>
	
	import Vue from 'vue'
	import { Swipe, SwipeItem, Loadmore  } from 'mint-ui';
	// var iscroll = require("../configjs/iscroll5.js")
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	Vue.component(Loadmore.name, Loadmore);


	export default{
		name:"index",
		data(){
			return {
				name:"huixim",
				datas:"",
				hours:1,
				methods:2,
				second:3,
				allLoaded:false,
				list:[{
			'img':"../../static/img/product/p18.jpg",
			"text":"驰琴纯棉免烫男装休闲裤男2017秋冬装新品100%棉休闲",
			'mon':"158.00",
			'good':"97"
		},{
			'img':"../../static/img/product/p19.jpg",
			"text":"[京东配送]品胜苹果六数据线充电线适用苹果5s苹果6s",
			'mon':"24.00",
			'good':"95"
		},{
                img: "../../static/img/product/p20.jpg",
                text: "春夏季软底无味防滑浴室洗澡拖鞋",
                good: "89",
                mon: "1000.00"
         },{
         	 img: "../../static/img/product/p21.jpg",
                text: "【京东超市】爱华仕（OIWAS）7003防泼水大容量行李包手提旅行包",
                good: "67",
                mon: "10.00"
         },{
         	img: "../../static/img/product/p22.jpg",
                text: "【京东超市】完美芦荟胶40g 3支装",
                good: "89",
                mon: "13.00"
         },{
         	img: "../../static/img/product/p23.jpg",
                text: "实时特卖尖货,哈雷电动车 前后减震60v1000w两轮宽胎发顺风顺丰多少士大夫撒",
                good: "98",
                mon: "37.00"
         }]
			}
		},
		mounted(){
		// const mySwiper = new this.$swiper(".swiper-container",{
		// 		autoplay:1000,
		// 		loop:true,
		// 		direction:'vertical'
		// 	})
			var $=this.$jquery;
			$("body").on("mousewheel",function(){
				if(this.scrollTop>100){
					$(".head").addClass('bg')
				}else{
					$(".head").removeClass('bg')
				}
			})
		},
		methods:{
			loadTop() {
			
			},
			loadBottom() {
				this.datas.bottomNav.push(...this.list)
			}
		},
		updated(){
			new this.$iscroll("#mainWinBox",{
				scrollX:true,
				scrollY:false
			});
		},
		beforeRouteEnter(to,from,next){
			next((vm)=>{
				vm.$data.datas=vm.$json;
				console.log(vm.$data.datas)
				
			})
		}
	}
</script>
<style>
	.boxUl{
		height: 500px;
	}
	/*.active{
		color: #f23030;
	}*/
</style>