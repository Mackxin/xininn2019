# 使用 Travis CI自动部署hexo博客

> 很早之前讲过hexo的视频配合next主题详细的介绍了如何操作部署的，感兴趣的可以去看看
>
> 名字叫：使用Hexo博客搭建的个人博客，使用Next主题来进行优化改造
>
> 地址：`https://www.bilibili.com/video/av17653359`

看我这篇文章前，你需要先掌握上面的基本技能哈哈，不然对你来说会有点蒙的哈

> 注意，下面讲的内容是基于你的hexo博客源码已经全部搭建好了，可以正常的生成静态文件并且展示了

说之前我们先来了解什么是 **Travis CI**

> Tracis CI 是一个在线托管的持续集成服务（自动编译和发布代码），不用自己搭建服务器，直接用Travis来进行持续集成，可以很好的和GitHub配合实现自动化部署。支持的语言很多，这里就不一一讲了，感兴趣的可以自己去了解

---

**接下来先来一些准备工作**

---

## 在github上创建 Token

直接登陆GitHub后，然后打开这个链接 [Personal access tokens](<https://github.com/settings/tokens>)

点击右上角的 `Generate new token` 

然后在新页面上你会看到Note，在下方的输入框输入你自定义的token名字（这里我取名 **hexoblog** 哈）

接下来就是打勾给权限了哈

在repo前面打个勾，那它下面的四个也会自动打上勾哈

- repo
  - repo:status
  - repo_deployment
  - public_repo
  - repo:invite

最后拉倒页面底部，我们会看到绿色的按钮，名字叫`Generate token` 点击它就可以创建完这个token了

接下来你会看到这样一段话

```
Make sure to copy your new personal access token now. You won’t be able to see it again!
```

记住，我们要复制上面这句英文下面的系统给我们自动生成的令牌,大概就是下面这样的一串字符，在右边会有一个复制的图标，可以点击复制

**记得一定要复制，记得一定要复制，记得一定要复制**

如果关了页面自己又没有复制，就只能重新再次创建token了

```
bqa89d1f7a903e567c1fe88884ccb8d2a6e0987f
```

上面生成的token在下面是要用到的哈

## 在Github创建仓库

在github创建一个仓库，名字可以自己取名，我这里就取名`xinkezhan`哈，其他的可以不填直接创建仓库

创建好仓库后，复制仓库的地址，我的是这样的哈

```
https://github.com/xininn/xinkezhan.git
```

>  我们来回顾一下git的一些基本命令哈

```
echo "# xinkezhan" >> README.md
git init    
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/xininn/xinkezhan.git
git push -u origin master
```

### 回到我们的电脑桌面

这里我先简单说一下我的搭建思路，首先hexo博客的源码我是放在master分支上，到时生成的静态页面我是放在gh-pages分支上的哈，各位切记线理顺的我的思路哈。当然你也可以弄两个仓库，一个仓库放hexo源码，一个仓库放生成的静态页面哈

>  这里我的做法是仓库名：xinkezhan
>
> master分支（存放hexo源码）
>
> gh-pages分支（存放生成的静态文件）

在桌面右键点击git bash here，然后输入下面的命令

```
git clone https://github.com/xininn/xinkezhan.git
成功后我们可以得到一个xinkezhan的文件夹，里面是空的仓库
```

现在默认的这个仓库是有一个master分支的，我们把我们已经弄好的hexo源码放到这个空的仓库里面，然后执行一下下面的命令

```
git status
git add .
git commit -m 'blog first commit'
```

好，master分支弄完了，我们现在来新建gh-pages分支，执行下面的命令

```
git checkout -b gh-pages
这个命令的意思是这样的，我新建了一个gh-pages分支并且切换到这个分支上去操作命令
```

我们直接删除全部文件，除了`.git`文件夹不删除，如果你看不到`.git`文件夹就全部删除

```
git status
git add .
git commit -m 'gh-pages first commit'
```

好，现在我们源码分支和gh-pages分支已经全部弄好了

接下来先切换回master分支，执行命令

```
git checkout master
```

现在我们已经切换到了master分支了，我们先往github提交一下代码

```
git push origin master
git push origin gh-pages
```

经过上面的两个命令后，我们到浏览器打开我们github的这个仓库地址，看看我们的代码有么有在这个仓库了，如果没有，自己好好检查哪里出错了。记得看一下是有两个分支点的哈，自己检查清楚。上面的操作都没有问题后，我们接着来讲下一个知识点哈。

## Travis CI配置

打开官网 [Travis CI官网](https://travis-ci.org/)

点击右上角的`sign in with github`用github来登陆

点击My Repositories右边的 + 找到`xinkezhan`这个仓库，打上勾，然后点击右边的setting

在新出来的页面里找到`Environment Variables`

在下方的Name里填入你自定义的名字（注意要英文，这里我就取GITHUB_REPO_TOKEN），在右边的value填入你之前的github上申请的token，然后点击add就添加成功了

到此我们的官网配置已经完成了，看不懂的话，就等我的视频版教程哈

## 配置 .travis.yml

在blog分支的根目录下新建文件，名字为`.travis.yml`

```
language: node_js

node_js: stable  # 要安装的node版本为当前的稳定版

cache:
  directories:
  - node_modules # 要缓存的文件夹

install:
  - npm install

script:
  - hexo clean
  - hexo g

after_script:   # 最后执行的命令
  - cd ./public
  - git init
  - git config user.name "xininn"
  - git config user.email "850907478@qq.com"
  - git add . 
  - git commit -m "代码是自动部署的哈"
  - git push --force --quiet "https://${GITHUB_REPO_TOKEN}@${GH_REF}" master:gh-pages

branches:
  only:
    - master # 触发持续集成的分支

env:
 global:
   - GH_REF: github.com/xininn/xinkezhan.git # 就是你github上存放静态博客最终文件的仓库地址末尾加上.git

```

## 提交代码

自动部署的文件配置好后，我们就把这个文件提交到我们的xinkezhan仓库的master分支上去，执行命令

```
记得是在master分支上执行这个命令，不要弄错了
git status
git add .
git commit -m 'add .travis.yml'
git push
```

上面的命令执行完后我们看看远端的github仓库xinkezhan的master分支上有没有看到更新记录，有的话就看下文哈

## 新建一篇文章

执行hexo命令

```
hexo n 'xininn'
```

执行完上面的命令我们可以在文件夹source里面的_posts文件夹里面找到我们刚刚新建的`xininn.md`，我们稍微编辑一下后，提交一下代码

```
git status
git add .
git commit -m 'master new add xininn'
git push
```

 ## 查看部署状态

打开官网 [Travis CI官网](https://travis-ci.org/)，然后找到你监控的这个仓库，最后找到 **Build History**就可以看到你每次提交的状态了

## 怎么看部署成功没有

在浏览器打开你github的仓库地址，切换到gh-pages分支上看看有没有自动生成的静态文件，如果有的话说明你成功了哈，我们浏览器打开链接，我的是 `https://xinin.github.io/xinkezhan`

如果你的可以正常访问了，那么恭喜你终于成功部署了哈

## 问题总结

### 默认主题部署正常，切换主题后就不正常

> 我这边是因为我要切换的主题文件没有正常的提交到hexo源码（也就是master分支上）里面，themes文件夹有我的主题名字，但是里面是空的，所以导致travis自动部署完后打开页面显示的是空白的

### travis无法监控你的仓库

> 这里就要到`.travis.yjml`配置文件里面看看你的配置了

```
branches:
  only:
    - master # 这里的master就是你要监控的hexo源码分支，你的源码在哪个分支就监控哪个分支，记得
```

### 路径问题

> 如果你的网站存放在子目录上，如：例如 `https://xininn.github.io/xinkezhan`,
>
> 那么请打开你的配置文件`_config.yml`，把里面的配置修改一下，如下
>
> 则请将您的 `url` 设为 `https://xininn.github.io/xinkezhan` 并把 `root` 设为 `/xinkezhan/`

```
url: https://xininn.github.io/xinkezhan
root: /xinkezhan/
```

