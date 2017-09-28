<template>
	<div class="wrap">
		<header>
			<p class="lftP"><i class="iconfont icon-tianmao1"></i><i class="iconfont icon-fangdajing"></i><input type="text" placeholder="京东生鲜超级品类日,领券满199减80" class="inputGt"></p>
			<a href="#" class="add">登录</a>
		</header>
	<!-- 	<div id="sectionBox" class="sectionBox"> -->
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
					<!-- <li><img src="../img/nav/01.png"><span>京东超市</span></li>
					<li><img src="../img/nav/02.png"><span>全球购</span></li>
					<li><img src="../img/nav/03.png"><span>服装城</span></li>
					<li><img src="../img/nav/04.png"><span>京东生鲜</span></li>
					<li><img src="../img/nav/05.png"><span>京东到家</span></li>
					<li><img src="../img/nav/06.png"><span>充值缴费</span></li>
					<li><img src="../img/nav/07.png"><span>领京豆</span></li>
					<li><img src="../img/nav/08.png"><span>领券</span></li>
					<li><img src="../img/nav/09.png"><span>惠赚钱</span></li>
					<li><img src="../img/nav/10.png"><span>物流查询</span></li> -->
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
				<!-- <div class="swiper-container">
					<ul class="swiper-wrapper">
						<li class="swiper-slide"><span class="red">热</span> iPhone 手机最神奇的功能，原来说过的话收到货了</li>
						<li class="swiper-slide"><span class="red">抢</span> 京东生鲜券满199送99 </li>
						<li class="swiper-slide"><span class="red">爆</span>内裤多久换一次？大多数男生哈市V的进吧速度<</li>
					</ul>
				</div> -->
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
				<!-- <li>
					<img src="../img/product/1.jpg">
					<span class="numMon">￥1</span>
					<span class="agoNum">￥81.9</span>
				</li>
				<li>
					<img src="../img/product/2.png">
					<span class="numMon">￥298</span>
					<span class="agoNum">￥499.9</span>
				</li>
				<li>
					<img src="../img/product/3.jpg">
					<span class="numMon">￥134</span>
					<span class="agoNum">￥150</span>
				</li>
				<li>
					<img src="../img/product/4.jpg">
					<span class="numMon">￥145</span>
					<span class="agoNum">￥3899</span>
				</li>
				<li>
					<img src="../img/product/5.jpg">
					<span class="numMon">￥13</span>
					<span class="agoNum">￥358</span>
				</li>
				<li>
					<img src="../img/product/6.jpg">
					<span class="numMon">￥12</span>
					<span class="agoNum">￥199</span>
				</li> -->
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
				<!-- <div class="txtImg">
					<p class="shanTxt"><span class="bigTxt">发现好货</span><span class="normal">发现品质生活</span></p>
					<p><img src="../img/product/02.jpg" class="hjImg"></p>
				</div> -->
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
					<!-- <p class="shanTxt bgg iop">
						<span class="bigTxt tet">新品首发</span>
						<span  class="normal nol">三星新品预售</span>
						<img src="../img/product/phone2.jpg" class="imgGirl">
					</p> -->
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
				  <mt-swipe-item><img src="../img/banner/swiper/1/01.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/banner/swiper/1/02.jpg"></mt-swipe-item>
			</mt-swipe>
			</div>
			<p class="bannerTitle">购特色</p>
			</div>
			<div class="optImg io">
				<div class="txtImg jk">
					<p class="shanTxt"><span class="bigTxt">排行榜</span><span class="normal">实时热卖尖货</span></p>
					<p><img src="../img/product/03.jpg" class="hjImg"></p>
				</div>
				<div class="txtImg fg">
					<p class="shanTxt ok">
						<span class="bigTxt tet">会买专辑</span>
						<span  class="normal nol">教你买买买</span>
						<img src="../img/product/phone1.jpg" class="imgGirl">
					</p>
					<p class="shanTxt bgg">
						<span class="bigTxt tet">新品首发</span>
						<span  class="normal nol">三星新品预售</span>
						<img src="../img/product/phone2.jpg" class="imgGirl">
					</p>
				</div>
			</div>
			<ul class="navBotBar">
				<li>
				<p class="navP"><span class="bigTxt">环球时尚</span><span>低至3折</span></p><img src="../img/product/b1.jpg"><span class="very">超好看</span></li>
				<li><p class="navP"><span class="bigTxt">珠宝首饰</span><span>周3大牌日</span></p><img src="../img/product/b2.jpg"></li>
				<li><p class="navP"><span class="bigTxt">设计师</span><span>潮流设计精选</span></p><img src="../img/product/b3.jpg"></li>
				<li><p class="navP"><span class="bigTxt">买手甄选</span><span>户外消夏季</span></p><img src="../img/product/b4.jpg"><span class="very">自营</span></li>
			</ul>
			<ul class="navBotBar">
				<li>
				<p class="navP"><span class="bigTxt">环球时尚</span><span>低至3折</span></p><img src="../img/product/b1.jpg"><span class="very">超好看</span></li>
				<li><p class="navP"><span class="bigTxt">珠宝首饰</span><span>周3大牌日</span></p><img src="../img/product/b2.jpg"></li>
				<li><p class="navP"><span class="bigTxt">设计师</span><span>潮流设计精选</span></p><img src="../img/product/b3.jpg"></li>
				<li><p class="navP"><span class="bigTxt">买手甄选</span><span>户外消夏季</span></p><img src="../img/product/b4.jpg"><span class="very">自营</span></li>
			</ul>

			
			<div class="boxbaner">
			<div class="optMyMt">			
			<mt-swipe :auto="1000">
				  <mt-swipe-item><img src="../img/banner/swiper/1/01.jpg"></mt-swipe-item>
				  <mt-swipe-item><img src="../img/banner/swiper/1/02.jpg"></mt-swipe-item>
			</mt-swipe>
			</div>
			<p class="bannerTitle txtBanner">
				<span></span>
				<span>发现好店</span>
				<span class="moreCai"><span>更多精彩</span><b>></b></span>
			</p>
			</div>

			<div class="txtImgPic">
				<div class="txtImgPicDiv">
					<p class="food">
					<span class="bigTxt">休闲食品</span>
					<span class="normal">吃货集散中心</span>
					</p>
					<p class="imgP">
						<img src="../img/product/o1.jpg">
						<img src="../img/product/o2.jpg">
					</p>
					<p class="ding">三只松鼠京东自营养旗舰店</p>
				</div>
				<div class="txtImgPicDiv">
					<p class="food">
					<span class="bigTxt">休闲食品</span>
					<span class="normal">吃货集散中心</span>
					</p>
					<p class="imgP">
						<img src="../img/product/o3.jpg">
						<img src="../img/product/o4.jpg">
					</p>
					<p class="ding">三只松鼠京东自营养旗舰店</p>
				</div>
			</div>

			
			<p class="bannerTitle txtBanner">
				<span></span>
				<span>直播</span>
				<span class="moreCai moreCsi"><span>更多精彩</span><b>></b></span>
			</p>
			<div class="txtImgPic">
				<div class="txtImgPicDiv">
					<p class="food">
					<span class="bigTxt">休闲食品</span>
					<span class="normal nalM">吃货集散中心</span>
					</p>
					<p class="imgP ioImg">
						<img src="../img/product/o1.jpg">
					</p>
				</div>
				<div class="txtImgPicDiv">
					<p class="food">
					<span class="bigTxt">休闲食品</span>
					<span class="normal nalM">吃货集散中心</span>
					</p>
					<p class="imgP ioImg">
						<img src="../img/product/o3.jpg">
					</p>
				</div>
			</div>
			<div class="middleForYou">
			<span class="bor"></span>
			<p class="middle"><i class="iconfont icon-tijiaodingdan"></i><span>为您推荐</span></p>
			<span class="bor"></span>
			</div>
			<div class="dlBox">
				<dl class="dls">
					<dt><img src="../img/product/u0.jpg"></dt>
					<dd>
						<p class="txtPio">莫琳达这肚子哀伤的空间啊是的你呢</p>
						<span class="redH">￥108.00</span>
						<p class="spanB">
						<span class="normal">好评率100%</span><span class="btnT">看相似</span>
						</p>
					</dd>
				</dl>
				<dl class="dls">
					<dt><img src="../img/product/u1.jpg"></dt>
					<dd>
						<p class="txtPio">莫琳达这肚子哀伤的空间啊是的你呢</p>
						<span class="redH">￥108.00</span>
						<p class="spanB">
						<span class="normal">好评率100%</span><span class="btnT">看相似</span>
						</p>
					</dd>
				</dl>
			</div>
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
	import { Swipe, SwipeItem } from 'mint-ui';
	// var iscroll = require("../configjs/iscroll5.js")
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);


	export default{
		name:"index",
		data(){
			return {
				name:"huixim",
				datas:"",
				hours:1,
				methods:2,
				second:3
			}
		},
		mounted(){
		// const $ = this.$jquery;	
		
		const mySwiper = new this.$swiper(".swiper-container",{
				autoplay:1000,
				loop:true,
				direction:'vertical'
			})
		
		// $(".wrap").on("scroll",function(){
		// 	console.log(1)
		// 	console.log(this.scrollTop())
		// })
		// console.log($(".wrap").scrollTop())
		},
		updated(){
			new this.$iscroll("#mainWinBox",{
				scrollX:true,
				scrollY:false
			});
			// setInterval(function(){
		    //      var day=new Date();
			//   var days=new Date('2017-11-1')-day;
			//   var d=parseInt(days/86400000);
			//   var h=parseInt((days/86400000-59)*24);
			//   var m=parseInt(((days/86400000-59)*24-h)*60);
			//   var s=parseInt((((days/86400000-59)*24-h)*60-m)*60);
			//   this.hours=h;
			//   this.methods=m;
			//   this.second=s;
			  // console.log(h)
			  // console.log(m)
			  // console.log(s)
		  // $('b').html(d+'天'+h+'时'+m+'分'+s+'秒');
	     // },1000)
		},
		beforeRouteEnter(to,from,next){
			next((vm)=>{
				// console.log(datay)
				vm.$data.datas=vm.$json;
				console.log(vm.$data.datas)
				// console.log(vm.$data.datas.nav)
			})
		}
	}
</script>
<style>
	/*.active{
		color: #f23030;
	}*/
</style>