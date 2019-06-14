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

在github创建一个空的仓库，名字可以自己取名，我这里就取名`xinkezhan`哈，其他的可以不填直接创建仓库

创建好仓库后，复制仓库的地址，我的是这样的哈

```
https://github.com/xininn/xinkezhan.git
```

我们来回顾一下git的一些基本命令哈

```
echo "# xinkezhan" >> README.md
git init    
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/xininn/xinkezhan.git
git push -u origin master
```

### 回到我们的电脑桌面

稍微等一下就可以看到我们的空文件夹多出来很多文件了哈

这里我先简单说一下我的搭建思路，首先hexo博客的源码我是放在blog分支上，到时生成的静态页面我是放在gh-pages分支上的哈，各位切记线理顺的我的思路哈。当然你也可以弄两个仓库，一个仓库放hexo源码，一个仓库放生成的静态页面哈

这里我要在master分支（存放我的hexo源码），gh-pages分支放生成的静态页面哈

在`xinkezhan`根目录下输入下面的命令

```
git init
初始化这个仓库后，我们有一个默认的master分支
git add .
git commit -m "first commit"
git checkout -b gh-pages    创建gh-pages分支并切换到gh-pages分支
```

好我们已经切换到gh-pages分支了

现在我们的仓库一共有两个分支，一个是master（默认的），一个是自己新建的gh-pages的，两个分支的内容都存着hexo源码

现在我们在blog分支上，我们来新建一篇文章，用命令

```
hexo n 'xininn'
执行完这个名利我们可以在source文件夹下的_posts文件夹下看到文件xininn.md,自己写点文字上去
```

```
提交一下
git add .
git commit -m 'blog first commit'
```

好，blog分支弄完了，我们切换为master分支

```
git checkout master
```

我们直接删除全部文件，除了`.git`文件夹不删除，如果你看不到`.git`文件夹就全部删除

```
提交一下
git add .
git commit -m 'master two commit'
```

好，现在我们源码分支全部弄好了，我们提交到github的仓库上

```
git remote add origin https://github.com/xininn/xinkezhan.git
git push -u origin master
git push -u origin blog
```

## Travis CI配置

打开官网 [Travis CI官网](https://travis-ci.org/)

点击右上角的`sign in with github`用github来登陆

点击My Repositories右边的 + 找到`xinkezhan`这个仓库，打上勾，然后点击右边的setting

在新出来的页面里找到`Environment Variables`

在下方的Name里填入你自定义的名字（注意要英文），在右边的value填入你之前的github上申请的token，然后点击add就添加成功了

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
  - git commit -m "zidong bushu"
  - git push --force --quiet "https://${GITHUB_REPO_TOKEN}@github.com/xininn/hexoboke.git" master:gh-pages

branches:
  only:
    - master # 触发持续集成的分支

```

