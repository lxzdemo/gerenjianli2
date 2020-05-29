//使用单例模式开发
//加载页面
let loadingModel = (function(){
	let $loading  =$(".loading");
	let $run = $loading.find(".run");
	let $moveImg = $loading.find(".loading .moveImg img");
	let $btn = $(".btn");
	//获取图片的数组
		let imgList = ["imges/zf_course.png","imges/zf_course1.png","imges/zf_course2.png",
        "imges/zf_course3.png","imges/zf_course4.png","imges/zf_course5.png",
        "imges/zf_course6.png","imges/zf_messageLogo.png","imges/zf_messageStudent.png","imges/zf_phoneLogo.png"];
		//获取图片长度
		let total = imgList.length;
		//定义滚动时长
		let cur = 0;
		//计算图片的长度
		function commep(){
			imgList.forEach(function(item){
				//创建临时图片地址
				let tempImg = new Image;
				tempImg.src = item;
				//每加载一张图片的时候
				tempImg.onload = function(){
					
					//加载中 清空临时地址
					tempImg = null;
					cur++;
					//计算滚动长度
					runFn();
					//人物放大
					humanMove();
					
					//如果加载完成
					if(cur>=total){
						let setTimer = setTimeout(()=>{
						$loading.remove();
						clearTimeout(setTimer);
						catalogModel.init();
						
						},1500)
					}
				}
				
			})
		}
	//计算滚动的长度runF
	function runFn(){
		$run.css("width",cur/total*100+"%");
	}
	//人物放大
	function humanMove(){
		$moveImg.css("transform","scale(1.5)");
	}
	return{
		init:function(){
			$loading.css("display","block");
			commep();
		}
	}
	
})();

//catalogModel 首页
let catalogModel = (function(){
	let $main = $(".main")
	let $catalog = $(".catalog");
	let $left = $main.find(".left");
	let $left1 = $main.find(".left1");
	let $center =$main.find(".center");
	//首页
	let $home = $main.find(".home");
	
	let $catalogBrief = $catalog.find(".brief");
	let $works = $catalog.find(".works");
	//简介
	let $info = $main.find(".info");
	let $infoWraps = $main.find(".infoWraps");
	let $manWrap = $infoWraps.find(".manWrap");
	let $wrapDetalis = $infoWraps.find(".wrapDetalis");
	let $brief = $manWrap.find("div");
	let $details = $wrapDetalis.find(".details");
	let $detailsBrief = $details.find(".brief");
	let $demo = $center.find(".demo");
	
	
		//项目作品
	let $demoWrap  = $(".demoWrap");	
	
	//联系方式
	let $call = $center.find(".call");
	let $callWrap = $(".callWrap");
	//点击菜单栏
	function menuBar(){
		$left.tap(function(){
			$center.css("width","70%");
			$left1.css("display","block");
			return;
		})
		$left1.tap(function(){
			$center.css("width","0");
			$left1.css("display","none");
			return;
		})
	}
	//首页取胜
	function homeFn(){
		$home.tap(function(){
			$catalog.css("display","block");
			$infoWraps.css("display","none");
		})
	}
	//简介区域
	function briefIntroduction(){
		
		$catalogBrief.tap(function(){
			$catalog.css("display","none");
			$infoWraps.css("display","block");
			$wrapDetalis.css("display","none");
		})
		
		$info.tap(function(){
			$catalog.css("display","none");
			$infoWraps.css("display","block");
			$wrapDetalis.css("display","none");
		})
		
		//显示个人信息
		$brief.forEach(function(item,index){
			$brief.eq(index).tap(function(){
				$wrapDetalis.css("display","block");
				$details.eq(index).css("display","block");
			})
		})
		
		//隐藏个人信息
		$detailsBrief.forEach(function(item,index){
			$detailsBrief.eq(index).tap(function(){
				$wrapDetalis.css("display","none");
				$details.eq(index).css("display","none");
			})
		})
		
		//项目作品
		$demo.tap(function(){
			$catalog.css("display","none");
			$infoWraps.css("display","none");
			$wrapDetalis.css("display","none");
			$demoWrap.css("display","block");
		})
		$works.tap(function(){
			$catalog.css("display","none");
			$infoWraps.css("display","none");
			$wrapDetalis.css("display","none");
			$demoWrap.css("display","block");
		})
		//联系方式
		$call.tap(function(){
			$catalog.css("display","none");
			$infoWraps.css("display","none");
			$wrapDetalis.css("display","none");
			$demoWrap.css("display","none");
			$callWrap.css("display","block");
		})
	}
	
	return {
		init:function(){
			$catalog.css("display","block");
			menuBar();
			//首页
			homeFn();
			//简介
			briefIntroduction();
		}
	}
})();
loadingModel.init();