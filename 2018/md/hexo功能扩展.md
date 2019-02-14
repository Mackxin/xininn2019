# Hexo增加评论功能

先来介绍第一个

## Valine

```
登陆网站，注册完后登陆（https://leancloud.cn/），然后创建一个应用
进入到创建的应用，点击设置按钮，选择应用key，这时你可以看到App ID和App Key两个参数，复制这两个参数，
接下来我们到next主题的主题配置文件_config.yml ，按住ctrl+f 在弹出的输入框输入valine
enable: true
appid: 粘贴你刚复制的
appkey: 一样粘贴你刚复制的

关于这个评论的数据管理，在你创建的应用下的存储里面的class comment
更多这个评论的配置介绍可以打开这个网站来学习 https://valine.js.org/

```

接着介绍第二个

## 来必力

```
先打开官网（https://livere.com），按照惯例你们先要注册登录，这个就不演示了，自行操作
接下来点击页面顶部的 *安装* 按钮，选择免费的city版本，先现在安装
然后安装要求输入你的网站链接，网站名称，还有网站的类型，都输入完点击申请代码
之后会出现一个新的页面，看代码第二行有个data-uid，把双引号的内容复制好
接下来打开next主题的主题配置文件，按住ctrl+f 在弹出的输入框输入livere
把前面的#号删除，然后在引号后面粘贴你的id，保存，去刷新你的页面看有没有效果吧哈
```
再来第三个哈

## Gitment

```
先点击这个网页[点击跳转](https://github.com/settings/applications/new)
Application name    这个随便填
Homepage URL       这个也可以随便填，也可以跟第四个地址一样
Application description   写一下简介什么的
Authorization callback URL 这个要写你的访问的域名http://mackxin.github.io

上面的的申请完后你会得到
Client ID
Client Secret
这两个你是要配置到主题配置文件的

上面的弄好后去到主题的配置文件里搜索gitment，按照下面的配置
gitment:
  enable: true 是否开启gitment评论系统
  mint: true 
  count: true 是否显示评论数
  lazy: true 懒加载，设置为ture时需手动展开评论
  cleanly: true 是否隐藏'Powered by ...'
  language: en 语言，置空则随主题的语言
  github_user: mackxin # Github用户名
  github_repo: mackxiner # 在Github新建一个仓库用于存放评论，这是仓库名
  client_id:  #注册OAuth Application时生成
  client_secret:  注册OAuth Application时生成

这个评论你必须登录github才可以评论，评论的信息就存放在你设置的仓库的issues上
```

## 部署
```
deploy:
  type: git
  repo: 
    github: https://github.com/mackxin/mackxin.github.io
```

## 增加搜素功能
```
在站点根目录下输入下面的命令
npm install hexo-generator-searchdb --save
然后在站点根目录的配置文件增加下面的代码
search:
  path: search.xml
  field: post
  format: html
  limit: 10000

最后在主题根目录下把local_search下的false改成true，如
local_search:
  enable: true
```

## 增加不蒜子统计功能
```
在主题配置文件中搜索busuanzi_count，按要求修改
site_uv: true
  enable: true
  site_uv_header: 本站访客数 <i class="fa fa-user"></i>
  site_uv_footer: 人次
  site_pv: true
  site_pv_header: 本站总访问量 <i class="fa fa-eye"></i>
  site_pv_footer: 次
  page_pv: true
  page_pv_header: 本文总阅读数 <i class="fa fa-file-o"></i>
  page_pv_footer: 次

然后刷新你的页面你就会看到效果了
```

## 内容分享服务
```
在主题配置文件， 添加/修改字段 jiathis，值为 true
# JiaThis 分享服务
jiathis: true
```

## 在每篇文章末尾统一添加“本文结束”标记
```
在根目录下的 \themes\next\layout\_macro 中新建 passage-end-tag.swig 文件,并添加以下内容：
<div>
    {% if not is_index %}
        <div style="text-align:center;color: #ccc;font-size:14px;">-------------本文结束<i class="fa fa-paw"></i>感谢您的阅读-------------</div>
    {% endif %}
</div>

接着打开\themes\next\layout\_macro\post.swig文件，在post-body 之后， post-footer 之前添加如下画红色部分代码（post-footer之前两个DIV）
代码如下：
<div>
  {% if not is_index %}
    {% include 'passage-end-tag.swig' %}
  {% endif %}
</div>
然后打开主题配置文件（_config.yml),在末尾添加：

# 文章末尾添加“本文结束”标记
passage_end_tag:
  enabled: true

完成以上设置之后，在每篇文章之后都会添加如上效果图的样子。
```	

## 侧边栏社交小图标设置
```
打开主题配置文件（_config.yml），搜索social_icons:,在[图标库](https://fontawesome.com/icons)找自己喜欢的小图标，并将名字复制在如下位置，保存即可
social_icons:
  Github: github
  Weibo: weibo
  掘金: spinner
```

## 添加热度
```
next主题集成leanCloud，打开/themes/next/layout/_macro/post.swig,在画红线的区域添加℃：
就是在 <span class="leancloud-visitors-count"></span>后面加一行
 <span>℃</span>
 然后打开，/themes/next/languages/zh-Hans.yml,将画红框的改为热度就可以了
```

## 网站底部字数统计
```
切换到根目录下，然后运行如下代码
npm install hexo-wordcount --save
然后在/themes/next/layout/_partials/footer.swig文件尾部加上：
<div class="theme-info">
  <div class="powered-by"></div>
  <span class="post-count">博客全站共{{ totalcount(site) }}字</span>
</div>
```

## 添加 README.md 文件
```
每个项目下一般都有一个 README.md 文件，但是使用 hexo 部署到仓库后，项目下是没有 README.md 文件的。
在 Hexo 目录下的 source 根目录下添加一个 README.md 文件，修改站点配置文件 _config.yml，将 skip_render 参数的值设置为
skip_render: README.md
保存退出即可。再次使用 hexo d 命令部署博客的时候就不会在渲染 README.md 这个文件了。
```

## 设置网站的图标Favicon
```
自己做一张图或者网上下载一张32*32的图，并将图标名称改为favicon.ico，然后把图标放在/themes/next/source/images里，并且修改主题配置文件：
# Put your favicon.ico into `hexo-site/source/` directory.
favicon: /favicon.ico
```

## 实现统计功能(组数统计和阅读时长)

在根目录下安装 hexo-wordcount,运行：
`npm install hexo-wordcount --save`
然后在主题的配置文件中，配置如下：
```
# Post wordcount display settings
# Dependencies: https://github.com/willin/hexo-wordcount
post_wordcount:
  item_text: true
  wordcount: true
  min2read: true
```

## 在文章底部增加版权信息
在目录 next/layout/_macro/下添加 my-copyright.swig文件，然后添加下面的代码
```
{% if page.copyright %}
<div class="my_post_copyright">
  <script src="//cdn.bootcss.com/clipboard.js/1.5.10/clipboard.min.js"></script>
  
  <!-- JS库 sweetalert 可修改路径 -->
  <script src="https://cdn.bootcss.com/jquery/2.0.0/jquery.min.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <p><span>本文标题:</span><a href="{{ url_for(page.path) }}">{{ page.title }}</a></p>
  <p><span>文章作者:</span><a href="/" title="访问 {{ theme.author }} 的个人博客">{{ theme.author }}</a></p>
  <p><span>发布时间:</span>{{ page.date.format("YYYY年MM月DD日 - HH:MM") }}</p>
  <p><span>最后更新:</span>{{ page.updated.format("YYYY年MM月DD日 - HH:MM") }}</p>
  <p><span>原始链接:</span><a href="{{ url_for(page.path) }}" title="{{ page.title }}">{{ page.permalink }}</a>
    <span class="copy-path"  title="点击复制文章链接"><i class="fa fa-clipboard" data-clipboard-text="{{ page.permalink }}"  aria-label="复制成功！"></i></span>
  </p>
  <p><span>许可协议:</span><i class="fa fa-creative-commons"></i> <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" title="Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)">署名-非商业性使用-禁止演绎 4.0 国际</a> 转载请保留原文链接及作者。</p>  
</div>
<script> 
    var clipboard = new Clipboard('.fa-clipboard');
    $(".fa-clipboard").click(function(){
      clipboard.on('success', function(){
        swal({   
          title: "",   
          text: '复制成功',
          icon: "success", 
          showConfirmButton: true
          });
	});
    });  
</script>
{% endif %}
```
在目录next/source/css/_common/components/post/下添加my-post-copyright.styl：
```
.my_post_copyright {
  width: 85%;
  max-width: 45em;
  margin: 2.8em auto 0;
  padding: 0.5em 1.0em;
  border: 1px solid #d3d3d3;
  font-size: 0.93rem;
  line-height: 1.6em;
  word-break: break-all;
  background: rgba(255,255,255,0.4);
}
.my_post_copyright p{margin:0;}
.my_post_copyright span {
  display: inline-block;
  width: 5.2em;
  color: #b5b5b5;
  font-weight: bold;
}
.my_post_copyright .raw {
  margin-left: 1em;
  width: 5em;
}
.my_post_copyright a {
  color: #808080;
  border-bottom:0;
}
.my_post_copyright a:hover {
  color: #a3d2a3;
  text-decoration: underline;
}
.my_post_copyright:hover .fa-clipboard {
  color: #000;
}
.my_post_copyright .post-url:hover {
  font-weight: normal;
}
.my_post_copyright .copy-path {
  margin-left: 1em;
  width: 1em;
  +mobile(){display:none;}
}
.my_post_copyright .copy-path:hover {
  color: #808080;
  cursor: pointer;
}

```
修改next/layout/_macro/post.swig，在代码
```
<div>
      {% if not is_index %}
        {% include 'wechat-subscriber.swig' %}
      {% endif %}
</div>
```
之前添加增加如下代码：
```
<div>
      {% if not is_index %}
        {% include 'my-copyright.swig' %}
      {% endif %}
</div>
```
修改next/source/css/_common/components/post/post.styl文件，在最后一行增加代码：
`@import "my-post-copyright"`
保存重新生成即可。
如果要在该博文下面增加版权信息的显示，需要在 Markdown 中增加copyright: true的设置

小技巧：如果你觉得每次都要输入copyright: true很麻烦的话,那么在/scaffolds/post.md文件中添加：
`copyright:`

## 隐藏网页底部powered By Hexo / 强力驱动
打开themes/next/layout/_partials/footer.swig,把下面的代码注释掉或者直接删除，注释用
`<!--   要注释的内容    -->`
```
{% if theme.footer.powered %}
  <div class="powered-by">{#
  #}{{ __('footer.powered', '<a class="theme-link" target="_blank" href="https://hexo.io">Hexo</a>') }}{#
#}</div>
{% endif %}

{% if theme.footer.powered and theme.footer.theme.enable %}
  <span class="post-meta-divider">|</span>
{% endif %}

{% if theme.footer.theme.enable %}
  <div class="theme-info">{#
  #}{{ __('footer.theme') }} &mdash; {#
  #}<a class="theme-link" target="_blank" href="https://github.com/iissnan/hexo-theme-next">{#
    #}NexT.{{ theme.scheme }}{#
  #}</a>{% if theme.footer.theme.version %} v{{ theme.version }}{% endif %}{#
#}</div>
{% endif %}
```
## 修改字体大小
`打开\themes\next\source\css\ _variables\base.styl文件，将$font-size-base改成16px`

## 点击爆炸效果

在themes/next/source/js/src里面建一个叫fireworks.js的文件，代码如下：
```
"use strict";function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function createParticule(e,t){var a={};return a.x=e,a.y=t,a.color=colors[anime.random(0,colors.length-1)],a.radius=anime.random(16,32),a.endPos=setParticuleDirection(a),a.draw=function(){ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.fillStyle=a.color,ctx.fill()},a}function createCircle(e,t){var a={};return a.x=e,a.y=t,a.color="#F00",a.radius=0.1,a.alpha=0.5,a.lineWidth=6,a.draw=function(){ctx.globalAlpha=a.alpha,ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.lineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke(),ctx.globalAlpha=1},a}function renderParticule(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function animateParticules(e,t){for(var a=createCircle(e,t),n=[],i=0;i<numberOfParticules;i++){n.push(createParticule(e,t))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:0.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(e,t){var a;return function(){var n=this,i=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,i)},t)}}var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)}"use strict";function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function createParticule(e,t){var a={};return a.x=e,a.y=t,a.color=colors[anime.random(0,colors.length-1)],a.radius=anime.random(16,32),a.endPos=setParticuleDirection(a),a.draw=function(){ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.fillStyle=a.color,ctx.fill()},a}function createCircle(e,t){var a={};return a.x=e,a.y=t,a.color="#F00",a.radius=0.1,a.alpha=0.5,a.lineWidth=6,a.draw=function(){ctx.globalAlpha=a.alpha,ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.lineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke(),ctx.globalAlpha=1},a}function renderParticule(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function animateParticules(e,t){for(var a=createCircle(e,t),n=[],i=0;i<numberOfParticules;i++){n.push(createParticule(e,t))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:0.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(e,t){var a;return function(){var n=this,i=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,i)},t)}}var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)};

```
打开themes/next/layout/_layout.swig,在</body>上面写下如下代码：
```
{% if theme.fireworks %}
   <canvas class="fireworks" style="position: fixed;left: 0;top: 0;z-index: 1; pointer-events: none;" ></canvas> 
   <script type="text/javascript" src="//cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script> 
   <script type="text/javascript" src="/js/src/fireworks.js"></script>
{% endif %}
```
打开主题配置文件，在里面最后写下：
```
# Fireworks
fireworks: true
```

## 添加顶部加载条
主题配置文件(_config.yml)将pace: false改为pace: true就行了
还可以选择pace_theme来更改样式



