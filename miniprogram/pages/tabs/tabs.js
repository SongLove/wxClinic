var app = getApp();
Page({
  data: {
    // 轮播数据
    imgUrls0: [
      {
        spot: '0',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '育乐L1',
        desc: '小小观察者',
        content: '提供金宝贝独有的教具、乐器和音乐，并引入日常用品，帮助宝宝发展视觉、听觉和触觉能力，从而适应环境。穿插趴着的小游戏，刺激动觉、平衡觉发展。游戏精简、轻松，回家也能复习。当您每天陪伴上课、与孩子复习，孩子醒着、睡眠的时间也会逐渐形成规律。'
      },
      {
        spot: '1',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '育乐L2',
        desc: '积极的行动者',
        content: '孩子有机会以各种姿势接触金宝贝不同形状、材质的大型设备，丰富在家中所无法体验的空间感和身体运动机会。设备的大型面积让不同家庭聚在一起，您可通过指导师引导，观察并了解孩子的发展规律。孩子从小便建立自己的小社交圈。'
      },
      {
        spot: '2',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '育乐L3',
        desc: '双向交流者',
        content: '大面积的空间让学步期的孩子有机会学习自己站立、行走。斜的、硬的、软的、拱的、凹的设备表面和充气回弹的材质对肢体提出新的要求，让孩子收获更强的运动能力。与同龄人分享设备的空间，让他们机会观察彼此；而您也有机会观察孩子们互动的方式。'
      },
      {
        spot: '3',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '育乐L4',
        desc: '问题解决者',
        content: '提供丰富的设备，鼓励孩子尝试挑战。当孩子在设备狭窄处相遇时，是他们学会如何解决问题的机会。在体能、社交发展设计之外，我们将概念、单词融入活动中，无论做、听还是说，语言与认知都在发展中。'
      },
      {
        spot: '4',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '育乐L5 ',
        desc: '创意思维者',
        content: '提供孩子合作游戏的机会，符合并激发社交需求。课程围绕联想游戏展开，让孩子通过动作、语言和对教具的使用，扩展生活经验。主题游戏的设置帮您拓展思路，了解更多和孩子玩的方式，通游戏建立美好的亲子关系。'
      },
      {
        spot: '5',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '育乐L6 ',
        desc: '逻辑思维者',
        content: '准备了猜谜游戏，激发孩子对课程主题的好奇，通过线索，建立逻辑思维。假扮游戏中，孩子有机会充分表达意见，推动活动进程，渐渐掌握游戏主动权，领导力更强。活动的设计也将让孩子们自然排队，学会轮流和谦让，培养社交技巧。'
      },
    ],
    imgUrls1: [
      {
        spot: '0',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '音乐M1',
        desc: '积极的聆听者',
        content: '音乐一的课程提供20种音乐风格，简易操作的打击乐器，让学习充满成功的乐趣。指导师将引导您为孩子演唱、通过动作让孩子感受旋律和节奏。韵律球、音乐丝巾游戏让您回家也能与孩子共享音乐时刻，摇篮曲时间让您在音乐中与孩子建立亲密的爱与依恋。'
      },
      {
        spot: '1',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '音乐M2',
        desc: '活跃的舞蹈家',
        content: '音乐二的课程提供世界各地的音乐，让孩子通过听、唱、运动来学习音乐元素，发展语言能力。孩子的自发表达将会分享给集体一起模仿，建立领导力和自信。乐器探索环节满足了孩子对律动、音色吸收的学习愿望。您还可以丰富曲库，与孩子拥有更多亲子时间。'
      },
      {
        spot: '2',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '音乐M3',
        desc: '音乐大玩家',
        content: '音乐三的课程通过动作设计，将孩子们连结起来做音乐游戏，体验与伙伴一起唱歌、游戏的宝贵经历。通过音乐学习，这个年龄段所需要发展的社交技巧与对规则的认知也自然被孩子吸收。歌曲的选择大部分与低龄段一致，让孩子更熟悉歌曲、自信演唱。'
      }
    ],
    imgUrls2: [
      {
        spot: '0',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '艺术A1',
        desc: '艺术探索者',
        content: '艺术一的活动环节动静结合，符合孩子容易兴奋的神经特质。有趣的工具所创造出的艺术效果将鼓励孩子专注操作，自然地培养专注力、审美和创造力。对自我意识萌芽的孩子来说，完成自己的作品、观察自己作品与他人作品的不同，是对自我的再一次确认。'
      },
      {
        spot: '1',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '艺术A2',
        desc: '艺术表达者',
        content: '艺术二课程帮助2岁的孩子在现有的动手能力条件下，完成对更多工具的探索，完善精细肌肉发育，提高创造力。通过艺术创造，孩子能将头脑中的表象化为表达，在不会说话之前，就能通过艺术的载体进行对自我和生活的表达。'
      },
      {
        spot: '2',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '艺术A3',
        desc: '小小艺术家',
        content: '艺术三的课程在前两个阶段的基础上，进一步丰富材料和工具的选用，提升活动难度，更适合孩子生活探索和表达的需求。同时，孩子在体验中，能涉猎到一些艺术流派、艺术大师的作品特点，促进艺术认知的学习。'
      }
    ],
    imgUrls3: [
      {
        spot: '0',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '环球宝贝GK1 ',
        desc: '世界的小公民',
        content: '采集了24个国家地区的文化风俗，以孩子们的吸收，学习方式为基础，汇编成了环球宝贝课。在课堂上，孩子们体验到的语言、舞蹈、歌曲、手工和游戏，让他们不出国门，便能亲身经历全球的文化差异，体验成为世界的小公民。'
      },
      {
        spot: '1',
        imgsrc: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name: '环球宝贝GK2',
        desc: '小小梦想家',
        content: '拥有世界小公民能力的同时，课程的设置让孩子拥有充分的感官触觉探索机会，培养孩子的想象力与合作能力，让孩子更富有包容力和创意。独特的日志记录环节，让家长们在记录孩子每节课的游历过程中，更了解孩子的兴趣和发育。'
      }
    ],
    indicatorActiveColor: "#ef4721",
    indicatorColor: "#ef4721",
    indicatorDots: true,
    autoplay: true,
    interval: 0,
    duration: 0,
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置    
    swipperSpot: '0', //初始化轮播的点
    zuosrc: '../../images/icon/zuojiantou.png',
    yousrc: '../../images/icon/youjiantouo.png',
    content: '0'
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current,
      //轮播初始化
      swipperSpot: '0'
    });
    this.checkCor();
    if (this.data.currentTab == 0) {
      this.setData({
        zuosrc: '../../images/icon/zuojiantou.png',
        yousrc: '../../images/icon/youjiantouo.png',
      })
    } else if (this.data.currentTab == 5) {
      this.setData({
        yousrc: '../../images/icon/youjiantou.png',
        zuosrc: '../../images/icon/zuojiantouo.png'

      })
    } else {
      this.setData({
        zuosrc: '../../images/icon/zuojiantouo.png',
        yousrc: '../../images/icon/youjiantouo.png'
      })
    }
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    if (e == 0 || e == 1 || e == 2 || e == 3 || e == 4 || e == 5) {
      var cur = e
    } else {
      var cur = e.target.dataset.current;
    }
    this.setData({
      content: cur,
      swipperSpot: '0'
    })
    if (this.data.currentTab == cur) {
      if (this.data.currentTab == 0) {
        this.setData({
          zuosrc: '../../images/icon/zuojiantou.png',
          yousrc: '../../images/icon/youjiantouo.png',
        })
      } else if (this.data.currentTab == 5) {
        this.setData({
          yousrc: '../../images/icon/youjiantou.png',
          zuosrc: '../../images/icon/zuojiantouo.png',
        })
      } else {
        this.setData({
          zuosrc: '../../images/icon/zuojiantouo.png',
          yousrc: '../../images/icon/youjiantouo.png'
        })
      }
      return false;
    } else {
      this.setData({
        currentTab: cur,
        swipperSpot: '0'
      })
      app.globalData.cate_id = cur
      console.log(this.data.currentTab)
      if (this.data.currentTab == 0) {
        this.setData({
          zuosrc: '../../images/icon/zuojiantou.png',
          yousrc: '../../images/icon/youjiantouo.png',
        })
      } else if (this.data.currentTab == 5) {
        this.setData({
          yousrc: '../../images/icon/youjiantou.png',
          zuosrc: '../../images/icon/zuojiantouo.png',
        })
      } else {
        this.setData({
          zuosrc: '../../images/icon/zuojiantouo.png',
          yousrc: '../../images/icon/youjiantouo.png'
        })
      }
    }
    this.checkCor()
  },
  //轮播图滚动时轮播点切换
  changeSwiper: function (e) {
    console.log(e.detail.current)
    this.setData({
      swipperSpot: e.detail.current
    })
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 2) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  // 切换到哪个tab
  onShow: function () {
    console.log(app.globalData.cate_id)
    this.setData({
      currentTab: app.globalData.cate_id,
      content: app.globalData.cate_id,

    })
    this.swichNav(app.globalData.cate_id)
  },
  onLoad: function (option) {
    var that = this;
    // 高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 80;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  footerTap: app.footerTap,
  // 点左箭头向左移动1
  lefttab: function () {
    if (this.data.content > 0 && this.data.content <= 5) {
      var n = this.data.content - 1;
      this.swichNav(n);
    }

  },
  // 点右箭头向右移动1

  righttab: function () {
    if (this.data.content >= 0 && this.data.content < 5) {
      var n = Number(this.data.content) + 1;
      this.swichNav(n);
    }
  },
  toH5Page: function () {
    wx.navigateTo({
      url: "../H5web/H5web?url='www.baidu.com'",
    })
  }
})