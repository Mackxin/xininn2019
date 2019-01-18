# Vuepress

docs的目录结构:

> ```
>  ├── myvuepress
>  |   ├── docs
>  |   │   ├── .vuepress (可选的)
>  |   │   │   ├── components (可选的)
>  |   │   │   ├── theme (可选的)
>  |   │   │   │   └── Layout.vue
>  |   │   │   ├── public (可选的)
>  |   │   │   ├── styles (可选的)
>  |   │   │   │   ├── index.styl
>  |   │   │   │   └── palette.styl
>  |   │   │   ├── templates (可选的, 谨慎配置)
>  |   │   │   │   ├── dev.html
>  |   │   │   │   └── ssr.html
>  |   │   │   ├── config.js (可选的)
>  |   │   │   └── enhanceApp.js (可选的)
>  |   │   │ 
>  |   │   ├── README.md
>  |   │   ├── guide
>  |   │   │   └── README.md
>  |   │   └── config.md
>  |   │ 
>  |   └── package.json
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
            { text: '馨客栈导航', link:'http://mackxin.com/nav.html/' },
            { text: '馨客栈前端导航', link:'http://mackxin.com/webnav.html/' },
            { text: '馨客栈每日分享', link: 'http://mackxin.com/fx.html/' },
            // { text: 'about', link: '/about' },
            // { 
            //   text: '分享', 
            //   items:[
            //     { text: '技术' , link:'/foo/'},
            //     { text: '每日分享' , link:'/bar/'}
            //   ]
            // },
            { text: 'GitHub', link: 'https://github.com/mackxin'},
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
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
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

## 部署到Github

这里介绍的是手动部署的哈，比较麻烦哈

```
//.vuepress config.js
module.exports = {
  title : '馨客栈',
  description : '关注分享，关注导航，关注馨客栈',
  base: '/vuepress/'      默认是'/'，如果你要用某个仓库就跟我一样把仓库名写上
}
```

官网是这样介绍的哈

```
1.在 docs/.vuepress/config.js 中设置正确的 base。

2.如果你打算发布到 https://<USERNAME>.github.io/，则可以省略这一步，因为 base 默认即是 "/"。

3.如果你打算发布到 https://<USERNAME>.github.io/<REPO>/（也就是说你的仓库在 https://github.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"。
```

我这里是以一个仓库名为vuepress来部署的哈

```javascript
在执行命令之前你要在你的上一级目录的 package.json 文件中写一段代码
{
	"scripts" : {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
}
```

上面的配置好后，接着来哈

### 1.在项目根目录执行命令   `npm run docs:build`

```
$ npm run docs:build

> vpress@1.0.0 docs:build C:\Users\xininn\Desktop\vpress
> vuepress build docs


 WAIT  Extracting site metadata...
[11:30:12] Compiling Client
[11:30:14] Compiling Server
[11:30:46] Compiled Server in 32s
[11:30:46] Compiled Client in 33s
 WAIT  Rendering static HTML...

 DONE  Success! Generated static files in docs\.vuepress\dist.
//执行完成功后你会看到这个哈
```

### 2.进入到生成的静态文件目录dist内

```
在你的项目里的.vuepress内的dist文件夹内
cd .vuepress/dist
```

目录结构大概是下面这样的

```
├─dist // dist目录下
│ ├─assets //文件夹的名字
| index.html  //主文件
| 404.html    //404文件
| ***.ico  //图片
···可能还有很多你新建的文件和文件夹
```

再次提醒哈，现在你的命令行要在dist文件夹下哈

 ~/Desktop/vpress/docs`

接下来就是执行Git的命令了

```
说先要先初始化你的这个文件夹为仓库
然后提交你的所有文件到版本控制中
最后提交一下你这个的操作
命令如下，依次执行
git init
git add -A
git commit -m 'deploy'
```

```
上面代码执行成功后大概就是下面这样哈
$ git init
Initialized empty Git repository in C:/Users/xininn/Desktop/vpress/docs/.vuepress/dist/.git/

$ git add -A
warning: LF will be replaced by CRLF in 404.html.
The file will have its original line endings in your working directory

$ git commit -m 'deloy'
[master (root-commit) 4554481] deloy
 34 files changed, 507 insertions(+)
 create mode 100644 ···
```

到最重要的环节了

```
先确定你的用户名是什么，仓库名是什么。
我这里我的用户名是mackxin，仓库名是vuepress
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
```

最后我要访问的网址是https://mackxin.github.io/vuepress

那么我只要输入这样命令即可

```
git push -f git@github.com:mackxin/vuepress.git master:gh-pages
```

成功后的提示是

```
$ git push -f git@github.com:mackxin/vuepress.git master:gh-pages
Enumerating objects: 46, done.
Counting objects: 100% (46/46), done.
Delta compression using up to 2 threads
Compressing objects: 100% (40/40), done.
Writing objects: 100% (46/46), 76.31 KiB | 930.00 KiB/s, done.
Total 46 (delta 22), reused 0 (delta 0)
remote: Resolving deltas: 100% (22/22), done.
To github.com:mackxin/vuepress.git
 * [new branch]      master -> gh-pages

```

现在打开你的网址可以正常访问了