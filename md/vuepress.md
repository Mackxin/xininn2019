# Vuepress

docs的目录结构:

> ```
> ├── docs
> │   ├── .vuepress (可选的)
> │   │   ├── components (可选的)
> │   │   ├── theme (可选的)
> │   │   │   └── Layout.vue
> │   │   ├── public (可选的)
> │   │   ├── styles (可选的)
> │   │   │   ├── index.styl
> │   │   │   └── palette.styl
> │   │   ├── templates (可选的, 谨慎配置)
> │   │   │   ├── dev.html
> │   │   │   └── ssr.html
> │   │   ├── config.js (可选的)
> │   │   └── enhanceApp.js (可选的)
> │   │ 
> │   ├── README.md
> │   ├── guide
> │   │   └── README.md
> │   └── config.md
> │ 
> └── package.json
> 
> 
> ```

## 全局安装

```javascript
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build 
```

## 现有项目

```javascript
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 开始写作
npx vuepress dev docs
```

## 配置favorite.icon

在.vuepress文件夹下新建public文件夹，把自己制作好的icon放进去

然后在.vuepress下新建config.js配置文件

```javascript
// .vuepress/config.js
module.exports = {
    title : 'mackxin',
    description : 'xininn',
    head : [
        ['link',{rel:'icon',href:'/mackxin.ico'}]
    ]
}
```

现在重新执行命令`yarn docs:dev` 就可以看到效果了

## 配置导航栏

主要配置的是config.js文件

代码如下：

```javascript
// .vuepress/config.js
module.exports = {
    title : 'mackxin',
    description : 'xininn',
    head : [
        ['link',{rel:'icon',href:'/mackxin.ico'}]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'contact', link: 'contact' },
            { text: 'about', link: 'about' },
            { 
              text: '分享', 
              items:[
                { text: '技术' , link:'/foo/'},
                { text: '每日分享' , link:'/bar/'}
              ]
            },
            { text: '掘金', link: 'https://juejin.im/' },
            { text: 'GitHub', link: 'https://github.com/mackxin'},
            { text: '知乎', link: 'https://www.zhihu.com/'},
            // 下拉列表显示分组
            {
                text: '学习',
                items: [
                { 
                    text: '前端', 
                    items: [
                    { text: 'js', link: '/js/js' },
                    { text: 'css', link: '/css/css' }
                    ] 
                },
                { 
                    text: '后端', 
                    items: [
                    { text: 'php', link: '/php/php' },
                    { text: 'java', link: '/java/java'},
                    ] 
                },
                ]
            }
        ]
      }
}
```

这里需要注意一下的是，分享下面的（技术和每日分享）需要新建文件夹，然后在jishu文件夹下新建README.md文件，里面内容可以是`#hello jishu`,在每日分享文件夹下新建README.md文件，里面的内容可以是`# hello fenxiang`。

对应的文档结构：

> ```
> ├─docs // docs目录下
> │ ├─js //文件夹的名字
> │ ├─css
> │ └─php
> │ └─java
> │ └─foo
> │ └─bar
> | contact.md  //md文件
> | about.md    //md文件
> | README.md  //首页配置
> ```

## 配置侧边栏

```javascript
// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
        
            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ]
        
            // 下面的是首页显示侧边栏的，不需要首页显示的话可以删掉代码
            // '/': [
            //     '',        /* / */
            //     'contact', /* /contact.html */
            //     'about'    /* /about.html */
            // ]
        }
    }
}
```
侧边栏的文件结构

> ```
> ├─docs            // docs目录下
> | ├─.vuepress     //文件夹的名字
> |   ├─config.js   //文件
> |   ├─public      //文件夹
> |   ├─dist        //生成的静态文件
> │ ├─js            //文件夹的名字
> |   ├─js.md
> │ ├─css           //文件夹的名字
> |   ├─css.md
> │ └─php           //文件夹的名字
> |   ├─php.md
> │ └─java          //文件夹的名字
> |   ├─java.md
> │ └─foo           //文件夹的名字
> |   ├─README.md
> |   ├─one.md
> |   ├─two.md
> │ └─bar           //文件夹的名字
> |   ├─README.md
> |   ├─three.md
> |   ├─four.md
> | contact.md  //md文件
> | about.md    //md文件
> | README.md  //首页配置文件
> ```

## 搜索框的配置

直接看代码来解读哈

```javascript
module.exports = {
  themeConfig: {
    search: false,         //这个是禁用搜索框了，默认是开启的
    searchMaxSuggestions: 10    //这个是调整默认搜索框显示的搜索结果数量
  }
}
```

## 首页README文件配置

```
---
home: true
heroImage: /logo.png
actionText: 馨客栈
features:
- title: 关注分享
  details: 馨客栈每日分享，分享身边好玩有趣的内容
- title: 关注导航
  details: 馨客栈导航，给你一个干净简洁的导航页面，希望你们会喜欢
- title: 关注馨客栈
  details: 感谢关注馨客栈，我们会一直努力的奋斗，青春不止步，未来不限步
footer: MIT Licensed | Copyright © 2018-Mackxin
---

# hell mackxin
```

