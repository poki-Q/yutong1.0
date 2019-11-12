//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {}

    //缓存数据
    var photos = this.setPhotosData();
    var designs = this.setDesignsData();
    var videos = this.setVideosData();
    var bands = this.setBandsData();
    wx.setStorageSync("photos", photos);
    wx.setStorageSync("designs", designs);
    wx.setStorageSync("videos", videos);
    wx.setStorageSync("bands", bands);
    

    
    //遍历各个项目数组，追加到items数组
    //把二维数组变为一维数组
    var items = [photos, designs,videos,bands];
    var flag = (photos.length + designs.length + videos.length + bands.length) / 2 + 1;
    var datas = [];
    for (var i = 0; i < flag ; i++ ){
      for(var j = 0; j < items.length; j++){
        if (items[j][i]){
          datas.push(items[j][i]);
        }
        
      }
    }
    wx.setStorageSync("items", datas);

  },
  
  //1.照片数据
  setPhotosData:function(){
    //设置照片数据
    var photos = new Array();

    var photo = new Object();
    photo.id = "100";
    photo.sort ="photos";
    photo.name = "全家福";
    photo.banner_src = "family1.jpg";
    photo.srcArray = ['family1.jpg', 'family2.jpg','family3.jpg'];
    photo.sentence ="家，是沙漠中的的绿洲，黯然的心灵感到希望；是黑暗中的灯火，无助时看到美丽的方向。";
    photos[0] = photo;

    var photo1 = new Object();
    photo1.id = "101";
    photo1.sort = "photos";
    photo1.name = "校园写真";
    photo1.banner_src = "campus2.jpg";
    photo1.srcArray = ['campus1.jpg', 'campus2.jpg', 'campus3.jpg', 'campus4.jpg','campus5.jpg'];
    photo1.sentence ="还记得手抖厉害的食堂阿姨吗？还记得那个抠门的同桌吗？还记得你画的黑板报吗？";
    photos[1] = photo1;

    var photo2 = new Object();
    photo2.id = "102";
    photo2.sort = "photos";
    photo2.name = "古风";
    photo2.banner_src = "trad2.jpg";
    photo2.srcArray = ['trad1.jpg', 'trad2.jpg', 'trad3.jpg', 'trad1.jpg', 'campus4.jpg'];
    photo2.sentence = "许年华如水，与君共豆蔻几岁光阴。愿前程似锦，望汝完宏愿一生安乐。别离不是愁，终会再聚首。";
    photos[2] = photo2;

    var photo3 = new Object();
    photo3.id = "103";
    photo3.sort = "photos";
    photo3.name = "形象照";
    photo3.banner_src = "xx.jpg";
    photo3.srcArray = [];
    photos[3] = photo3;

    var photo4 = new Object();
    photo4.id = "104";
    photo4.sort = "photos";
    photo4.name = "宝宝照";
    photo4.banner_src = "baby3.jpg";
    photo4.srcArray = ['baby1.jpg', 'baby2.jpg', 'baby3.jpg', 'baby4.jpg', 'baby5.jpg', 'baby6.jpg'];
    photo4.sentence ="嘟嘟嘴巴，眨眨眼睛，哈哈哈。";
    photos[4] = photo4;

    return photos;
  },
  
  //2.平面设计数据
  setDesignsData:function(){
    var designs = new Array();
    
    var design = new Object();
    design.id="100";
    design.sort = "designs";
    design.name="名片设计制作";
    design.banner_src="card1.jpg";
    design.srcArray = ['card1.jpg', 'card2.jpg','card3.jpg'];
    designs[0] = design;

    var design1 = new Object();
    design1.id = "101";
    design1.sort = "designs";
    design1.name = "宣传单设计";
    design1.banner_src = "leaflet1.jpg";
    design1.srcArray = ['leaflet1.jpg', 'leaflet2.jpg'];
    designs[1] = design1;

    var design2 = new Object();
    design2.id = "102";
    design2.sort = "designs";
    design2.name = "结婚海报";
    design2.banner_src = "jhhb3.jpg";
    design2.srcArray = ['jhhb1.jpg', 'jhhb2.jpg', 'jhhb3.jpg', 'jhhb4.jpg', 'jhhb5.jpg'];
    designs[2] = design2;

    var design3 = new Object();
    design3.id = "103";
    design3.sort = "designs";
    design3.name = "活动晚会背景";
    design3.banner_src = 'hdwhbj2.jpg';
    design3.srcArray = ['hdwhbj1.jpg', 'hdwhbj2.jpg', 'hdwhbj3.jpg', 'hdwhbj4.jpg'];
    designs[3] = design3;

    var design4 = new Object();
    design4.id = "104";
    design4.sort = "designs";
    design4.name = "宣传海报";
    design4.banner_src = 'xchb4.jpg';
    design4.srcArray = ['xchb1.jpg', 'xchb2.jpg', 'xchb3.jpg', 'xchb4.jpg', 'xchb5.jpg'];
    designs[4] = design4;

    var design5 = new Object();
    design5.id = "105";
    design5.sort = "designs";
    design5.name = "门面招牌";
    design5.banner_src = 'zp2.jpg';
    design5.srcArray = ['zp1.jpg', 'zp2.jpg'];
    designs[5] = design5;

    var design6 = new Object();
    design6.id = "106";
    design6.sort = "designs";
    design6.name = "logo设计";
    design6.banner_src = 'LOGO2.jpg';
    design6.srcArray = ['LOGO1.jpg', 'LOGO2.jpg'];
    designs[6] = design6;

  

    

    return designs;

  },

  //3.视频拍摄
  setVideosData: function () {
    var videos = new Array();

    var video = new Object();
    video.id = "100";
    video.sort = "videos";
    video.name = "婚礼录像";
    video.banner_src = "hunliluxiang.jpg";
    video.srcArray = [];
    video.sentence ="托清风捎去衷心的祝福，让流云奉上真挚的情意；今夕空气里都充满了醉人的甜蜜。";
    videos[0] = video;

    var video1 = new Object();
    video1.id = "101";
    video1.sort = "videos";
    video1.name = "回娘家";
    video1.banner_src = "huiniangjia.jpg";
    video1.srcArray = [];
    video1.sentence = "左手一只鸡，右手一只鸭，身上还背著一个胖娃娃呀，咿呀咿得儿喂。";
    videos[1] = video1;

    var video2 = new Object();
    video2.id = "102";
    video2.sort = "videos";
    video2.name = "幼儿园晚会";
    video2.banner_src = "youeryuan.png";
    video2.srcArray = [];
    video2.sentence = "爸爸妈妈，我慢慢地长大啦！还记得我第一次跳舞吗？您还在台下为我鼓掌呢！";
    videos[2] = video2;

    var video3 = new Object();
    video3.id = "103";
    video3.sort = "videos";
    video3.name = "商业活动";
    video3.banner_src = "yd4.png";
    video3.srcArray = [];
    video3.sentence = "null";
    videos[3] = video3;

    var video4 = new Object();
    video4.id = "104";
    video4.sort = "videos";
    video4.name = "生日宴会";
    video4.banner_src = "shengriyanhui.jpg";
    video4.srcArray = [];
    video4.sentence = "因为你的降临，这一天成了一个美丽的日子，从此世界便多了一抹诱人的色彩。";
    videos[4] = video4;

    var video5 = new Object();
    video5.id = "105";
    video5.sort = "videos";
    video5.name = "聚会";
    video5.banner_src = "juhui.png";
    video5.srcArray = [];
    video5.sentence = "风雨的街头，招牌能挂多久，爱过的老歌，你能记得几首，别忘了有像我这样的一位朋友。";
    videos[5] = video5;

    return videos;

  },

  //4.乐队演出
  setBandsData: function () {
    var bands = new Array();

    var band = new Object();
    band.id = "100";
    band.sort = "bands";
    band.name = "晚会";
    band.banner_src = "yd1.png";
    band.srcArray = [];
    bands[0] = band;

    var band1 = new Object();
    band1.id = "101";
    band1.sort = "bands";
    band1.name = "庙会";
    band1.banner_src = "yd2.png";
    band1.srcArray = [];
    bands[1] = band1;

    var band2 = new Object();
    band2.id = "102";
    band2.sort = "bands";
    band2.name = "开业活动";
    band2.banner_src = "yd3.png";
    band2.srcArray = [];
    bands[2] = band2;

    return bands;

  },

  



})



