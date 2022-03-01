# China-Citycode
中国城市的城市码(json)  

## 字段说明  
`Province`中指明了所在的省份  
`citys`中为当前省份中的城市  
    `city`为城市名,如北京  
    `code`为城市的城市码,如101010100  

## 使用方法
例如在中国天气网`http://www.weather.com.cn/`中抓取
> http://www.weather.com.cn/weather1d/101010100.shtml

即为北京当日天气预报  
抓取此页面的第722行即为逐三小时预报(或记录),以下是于2022年2月19日抓取获得的
``` Javascript
var hour3data={"1d":["19日08时,d00,晴,-6℃,西北风,<3级,1","19日11时,d00,晴,-1℃,西北风,<3级,1","19日14时,d00,晴,2℃,西北风,<3级,1","19日17时,d00,晴,2℃,西北风,<3级,1","19日20时,n00,晴,-1℃,西北风,<3级,0","19日23时,n00,晴,-4℃,西北风,<3级,0","20日02时,n00,晴,-7℃,北风,<3级,0","20日05时,n00,晴,-8℃,东北风,<3级,0","20日08时,d00,晴,-7℃,西风,<3级,2"],"23d":[["19日08时,d00,晴,-6℃,西北风,<3级,1","19日11时,d00,晴,-1℃,西北风,<3级,1","19日14时,d00,晴,2℃,西北风,<3级,1","19日17时,d00,晴,2℃,西北风,<3级,1","19日20时,n00,晴,-1℃,西北风,<3级,0","19日23时,n00,晴,-4℃,西北风,<3级,0","20日02时,n00,晴,-7℃,北风,<3级,0","20日05时,n00,晴,-8℃,东北风,<3级,0"],["20日08时,d00,晴,-7℃,西风,<3级,2","20日11时,d00,晴,0℃,西南风,<3级,2","20日14时,d00,晴,4℃,西南风,<3级,2","20日17时,d00,晴,3℃,西南风,<3级,2","20日20时,n00,晴,0℃,西南风,<3级,0","20日23时,n00,晴,-2℃,西北风,<3级,0","21日02时,n00,晴,-5℃,西北风,<3级,0","21日05时,n01,多云,-6℃,北风,<3级,0"]],"7d":[["19日08时,d00,晴,-6℃,西北风,<3级,1","19日11时,d00,晴,-1℃,西北风,<3级,1","19日14时,d00,晴,2℃,西北风,<3级,1","19日17时,d00,晴,2℃,西北风,<3级,1","19日20时,n00,晴,-1℃,西北风,<3级,0","19日23时,n00,晴,-4℃,西北风,<3级,0","20日02时,n00,晴,-7℃,北风,<3级,0","20日05时,n00,晴,-8℃,东北风,<3级,0"],["20日08时,d00,晴,-7℃,西风,<3级,2","20日11时,d00,晴,0℃,西南风,<3级,2","20日14时,d00,晴,4℃,西南风,<3级,2","20日17时,d00,晴,3℃,西南风,<3级,2","20日20时,n00,晴,0℃,西南风,<3级,0","20日23时,n00,晴,-2℃,西北风,<3级,0","21日02时,n00,晴,-5℃,西北风,<3级,0","21日05时,n01,多云,-6℃,北风,<3级,0"],["21日08时,d01,多云,-3℃,东北风,<3级,2","21日11时,d01,多云,3℃,东北风,<3级,2","21日14时,d00,晴,6℃,西南风,<3级,2","21日17时,d00,晴,4℃,西南风,<3级,2","21日20时,n00,晴,1℃,西北风,<3级,0","21日23时,n00,晴,-1℃,西北风,<3级,0","22日02时,n00,晴,-4℃,北风,<3级,0","22日05时,n00,晴,-6℃,北风,<3级,0"],["22日08时,d00,晴,-3℃,北风,<3级,4","22日14时,d00,晴,3℃,西北风,<3级,4","22日20时,n00,晴,0℃,西南风,<3级,0","23日02时,n00,晴,-5℃,西风,<3级,0"],["23日08时,d00,晴,-3℃,北风,<3级,4","23日14时,d00,晴,6℃,南风,<3级,4","23日20时,n00,晴,1℃,西南风,<3级,0","24日02时,n00,晴,-4℃,西南风,<3级,0"],["24日08时,d00,晴,-2℃,西北风,<3级,4","24日14时,d00,晴,7℃,南风,<3级,4","24日20时,n00,晴,3℃,南风,<3级,0","25日02时,n00,晴,-2℃,北风,<3级,0"],["25日08时,d00,晴,0℃,北风,<3级,4","25日14时,d00,晴,9℃,南风,<3级,4","25日20时,n00,晴,5℃,西风,<3级,0","26日02时,n00,晴,0℃,西北风,<3级,0"]]}
```
抓取753~815行即为当地当日生活指数,以下是于2022年2月19日抓取获得的(没有格式化)
``` HTML
<ul class="clearfix">
<li>
<i style="background-position:-108px -401px;"></i>
<span>易发</span>
<em>感冒指数</em>
<p>天冷易感冒，注意防范。</p>
</li>
<li>
<i style="background-position:0px -401px;"></i>
<span>较不宜</span>
<em>运动指数</em>
<p>天气寒冷，推荐您进行室内运动。</p>
</li>
<li class="huali">
<a href="http://www.weather.com.cn/forecast/hf_index.shtml?id=101010100" target="_blank">
<div class="pageflip">
<img src="http://i.tq121.com.cn/i/weather2015/png/page_flip.png" style="">
<div class="msg_block" style="">
</div>
</div>
<i class="huai" style=""></i>
<div class="huabox" style="">
<div class="huabox1" style="">
<div style="" class="huanum"></div><div class="huaname" style="">（粒/千平方毫米）</div></div>
<div class="huaword" style=""></div>
</div>
<em>花粉过敏指数</em>
<p>暂无</p>
</a>
</li>
<li class="li3 hot" id="chuanyi">
<a href="http://www.weather.com.cn/forecast/ct.shtml?areaid=101010100" target="_blank">
<div class="pageflip">
<img src="http://i.tq121.com.cn/i/weather2015/png/page_flip.png">
<div class="msg_block">
</div>
</div>
<i></i>
<span>寒冷</span>
<em>穿衣指数</em>
<p>建议着厚羽绒服等隆冬服装。</p>
</a>
</li>
<li class="li4 hot dazhong">
<a href="http://www.weather.com.cn/index/2020/08/3377603.shtml" target="_blank">
<div class="pageflip">
<img src="http://i.tq121.com.cn/i/weather2015/png/page_flip.png">
<div class="msg_block">
</div>
</div>
<i></i>
<span>适宜</span>
<em>洗车指数</em>
<p>天气较好，适合擦洗汽车。</p>
</a>
</li>
<li class="li1 hot">
<i></i>
<span>强</span>
<em>紫外线指数</em>
<p>涂擦SPF大于15、PA+防晒护肤品。</p>
</li>
</ul>
```

### 可抓取的页面
以北京为例:
* *http://www.weather.com.cn/weather1d/101010100.shtml* 为当日天气
* *http://www.weather.com.cn/weather/101010100.shtml* 为7天预报
* *http://www.weather.com.cn/weather15d/101010100.shtml* 为8~15天预报
* *http://www.weather.com.cn/weather40d/101010100.shtml* 为40天预报
* *http://www.weather.com.cn/weather1dn/101010100.shtml* 为新版本当日天气
* *http://www.weather.com.cn/weathern/101010100.shtml* 为新版本7天预报
* *http://www.weather.com.cn/weather15dn/101010100.shtml* 为新版本8~15天预报
* *http://www.weather.com.cn/weather40dn/101010100.shtml* 为新版本40天预报

其他城市用对应城市码替换`101010100`即可

## 常用城市码

### 国内城市码
> 北京 101010100  
> 上海 101020100  
> 成都 101270101  
> 杭州 101210101  
> 南京 101190101  
> 天津 101030100  
> 深圳 101280601  
> 重庆 101040100  
> 西安 101110101  
> 广州 101280101  
> 青岛 101120201  
> 武汉 101200101  

其他城市码可以在`citycode.json`中获得
### 国外城市码
此部分在`citycode.json`中无法获得,是由`http://www.weather.com.cn/`主页面抓取获得的
> 曼谷 106010100  
> 首尔 102010100  
> 吉隆坡 105010100  
> 新加坡 104010100  
> 巴黎 202010100  
> 罗马 401169100  
> 伦敦 302159100  
> 雅典 218010100  
> 柏林 203010101  
> 纽约 401110101  
> 温哥华 404430100  
> 墨西哥城 411010100  
> 哈瓦那 406010100  
> 圣何塞 427020100  
> 巴西利亚 502866100  
> 布宜诺斯艾利斯 501010100  
> 圣地亚哥 401040102  
> 利马 510070100  
> 基多 513010100  
> 悉尼 601020101  
> 墨尔本 601060101  
> 惠灵顿 606010100  
> 奥克兰 606020100  
> 苏瓦 610010100  
> 开罗 301010101  
> 内罗毕 317010100  
> 开普敦 302010100  
> 维多利亚 502330100  
> 拉巴特 321030100  

## 详细抓取方法
### 7日预报
以河北沧州为例,抓取[http://www.weather.com.cn/weather/101090701.shtml](http://www.weather.com.cn/weather/101090701.shtml)中的第548~667行即可获得.以下是于2022年3月1日抓取的结果.
``` HTML
<ul class="t clearfix">
<li class="sky skyid lv1 on">
<h1>1日（今天）</h1>
<big class="png40"></big>
<big class="png40 n00"></big>
<p title="晴" class="wea">晴</p>
<p class="tem">
<i>0℃</i>
</p>
<p class="win">
<em>
<span title="西南风" class="SW"></span>
</em>
<i>3-4级</i>
</p>
<div class="slid"></div>
</li>
<li class="sky skyid lv1">
<h1>2日（明天）</h1>
<big class="png40 d00"></big>
<big class="png40 n00"></big>
<p title="晴" class="wea">晴</p>
<p class="tem">
<span>16℃</span>/<i>0℃</i>
</p>
<p class="win">
<em>
<span title="西风" class="W"></span>
<span title="北风" class="N"></span>
</em>
<i><3级</i>
</p>
<div class="slid"></div>
</li>
<li class="sky skyid lv1">
<h1>3日（后天）</h1>
<big class="png40 d00"></big>
<big class="png40 n01"></big>
<p title="晴转多云" class="wea">晴转多云</p>
<p class="tem">
<span>16℃</span>/<i>2℃</i>
</p>
<p class="win">
<em>
<span title="西风" class="W"></span>
<span title="西南风" class="SW"></span>
</em>
<i><3级转3-4级</i>
</p>
<div class="slid"></div>
</li>
<li class="sky skyid lv1">
<h1>4日（周五）</h1>
<big class="png40 d01"></big>
<big class="png40 n00"></big>
<p title="多云转晴" class="wea">多云转晴</p>
<p class="tem">
<span>15℃</span>/<i>-2℃</i>
</p>
<p class="win">
<em>
<span title="西北风" class="NW"></span>
<span title="东北风" class="NE"></span>
</em>
<i>4-5级转3-4级</i>
</p>
<div class="slid"></div>
</li>
<li class="sky skyid lv1">
<h1>5日（周六）</h1>
<big class="png40 d00"></big>
<big class="png40 n01"></big>
<p title="晴转多云" class="wea">晴转多云</p>
<p class="tem">
<span>11℃</span>/<i>0℃</i>
</p>
<p class="win">
<em>
<span title="东南风" class="SE"></span>
<span title="东南风" class="SE"></span>
</em>
<i><3级转3-4级</i>
</p>
<div class="slid"></div>
</li>
<li class="sky skyid lv1">
<h1>6日（周日）</h1>
<big class="png40 d01"></big>
<big class="png40 n01"></big>
<p title="多云" class="wea">多云</p>
<p class="tem">
<span>17℃</span>/<i>1℃</i>
</p>
<p class="win">
<em>
<span title="西南风" class="SW"></span>
<span title="北风" class="N"></span>
</em>
<i>4-5级转3-4级</i>
</p>
<div class="slid"></div>
</li>
<li class="sky skyid lv1">
<h1>7日（周一）</h1>
<big class="png40 d00"></big>
<big class="png40 n00"></big>
<p title="晴" class="wea">晴</p>
<p class="tem">
<span>18℃</span>/<i>2℃</i>
</p>
<p class="win">
<em>
<span title="东南风" class="SE"></span>
<span title="东南风" class="SE"></span>
</em>
<i>3-4级</i>
</p>
<div class="slid"></div>
</li>
</ul>
```

### 8~15日预报
以山东烟台为例,抓取[http://www.weather.com.cn/weather15d/101120501.shtml](http://www.weather.com.cn/weather15d/101120501.shtml)中的第543~616行即可获得.以下是于2022年3月1日抓取的结果.
``` HTML
<ul class="t clearfix">
<li class="t">
<span class="time">周二（8日）</span>
<big class="png30 d01"></big>
<big class="png30 n00"></big>
<span class="wea">多云转晴</span>
<span class="tem"><em>14℃</em>/1℃</span>
<span class="wind">南风转北风</span>
<span class="wind1">3-4级转<3级</span>
</li>
<li>
<span class="time">周三（9日）</span>
<big class="png30 d00"></big>
<big class="png30 n00"></big>
<span class="wea">晴</span>
<span class="tem"><em>12℃</em>/2℃</span>
<span class="wind">西风转南风</span>
<span class="wind1"><3级</span>
</li>
<li class="t">
<span class="time">周四（10日）</span>
<big class="png30 d02"></big>
<big class="png30 n02"></big>
<span class="wea">阴</span>
<span class="tem"><em>10℃</em>/3℃</span>
<span class="wind">南风</span>
<span class="wind1">3-4级转<3级</span>
</li>
<li>
<span class="time">周五（11日）</span>
<big class="png30 d02"></big>
<big class="png30 n02"></big>
<span class="wea">阴</span>
<span class="tem"><em>9℃</em>/4℃</span>
<span class="wind">东风转南风</span>
<span class="wind1"><3级</span>
</li>
<li class="t">
<span class="time">周六（12日）</span>
<big class="png30 d301"></big>
<big class="png30 n02"></big>
<span class="wea">雨转阴</span>
<span class="tem"><em>7℃</em>/2℃</span>
<span class="wind">东北风转北风</span>
<span class="wind1"><3级</span>
</li>
<li>
<span class="time">周日（13日）</span>
<big class="png30 d02"></big>
<big class="png30 n02"></big>
<span class="wea">阴</span>
<span class="tem"><em>7℃</em>/2℃</span>
<span class="wind">东北风</span>
<span class="wind1"><3级</span>
</li>
<li class="t">
<span class="time">周一（14日）</span>
<big class="png30 d02"></big>
<big class="png30 n02"></big>
<span class="wea">阴</span>
<span class="tem"><em>6℃</em>/4℃</span>
<span class="wind">东北风转西北风</span>
<span class="wind1"><3级</span>
</li>
<li>
<span class="time">周二（15日）</span>
<big class="png30 d02"></big>
<big class="png30 n06"></big>
<span class="wea">阴转雨夹雪</span>
<span class="tem"><em>7℃</em>/0℃</span>
<span class="wind">西北风转北风</span>
<span class="wind1"><3级转4-5级</span>
</li>
</ul>
```

### 40日预报
未遂
