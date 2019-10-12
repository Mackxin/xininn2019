# 网页版演示库nodeppt

## 安装

全局安装

```
npm install -g nodeppt
```

## 使用命令

```
创建一个新的md文件
nodeppt new xin.md
启动一个md文件 webpack dev server
nodeppt serve xin.md
编译产出一个md文件
nodeppt build xin.md
```

## 顶部配置

```
title: 这是演讲的题目
speaker: 演讲者名字
url: 可以设置链接
transition: 转场效果，例如：zoomin/cards/slide
files: /css/theme.moon.css，尾部的文件
theme: moon //皮肤
highlightStyle: monokai_sublime //hljs的样式
headFiles: //头部的文件
usemathjax: //如果为yes，则引入mathjax，默认不建议开启，导出文件太多
date: 2015年12月20日
```

## 一些类名

- delay-800
- aligncenter
- size-50
- frame
- bounce
- features
- bg-trans-dark
- card-50
- fullscreen 
- clients
- slow
- anim
- slide-top
- content-left
- text-pull-right
- alignright
- alignleft

## 转场效果

- animated
- zoomIn
- fadeIn
- fadeInUp
- rollIn
- moveIn
- fadeInLeft
- fadeInRight
- tobuild
- tada
- kontext
- vkontext
- circle
- earthquake
- cards
- glue
- stick
- move
- newspaper
- slide
- slide2
- slide3
- horizontal3d
- horizontal
- vertical3d
- zoomOut
- pulse

## 快捷键

页面切换：↑/↓/←/→ 空格 Home End
全屏观看：F
放大缩小（总览）：-/+
演讲笔记：N
网格背景：Enter

## 文字类

- text-landing
- text-intro
- text-shadow
- text-data
- text-context
- text-cols

## 背景类

- bg-primary  #44d
- bg-secondary  #67d
- bg-light  #edf2f7
- body   #f7f9fb
- bg-black  #111
- bg-black-blue  #123
- bg-white  #fff
- bg-red  #c23
- bg-green  #077
- bg-blue   #346
- bg-purple  #62b
- bg-trans-dark   rgba(0,0,0,0.5)
- bg-trans-light  rgba(255,255,255,0.2)

## 渐变色

- bg-gradient-h
- bg-gradient-r
- bg-gradient-v

## 视频

- background-video

```
<slide class="bg-blue aligncenter" video="https://webslides.tv/static/videos/working.mp4 poster='https://webslides.tv/static/images/working.jpg' .dark">
```

## 按钮

- button
- radius
- ghost
- svg-icon
