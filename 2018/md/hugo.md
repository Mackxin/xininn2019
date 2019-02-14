
## hugo中文文档
[地址](http://www.gohugo.org/)
[hugo下载地址](https://github.com/gohugoio/hugo/releases/tag/v0.38.2)
[Hugo官方主页](https://gohugo.io/)
[Hugo主题列表](https://github.com/gohugoio/hugoThemes)
[Hugo主题预览](https://themes.gohugo.io/)

将hugo.exe文件的路径配置到电脑的环境变量中，然后在cmd下指令中输入：
hugo version
如果出现类似
```
Hugo Static Site Generator v0.38.2 windows/amd64 BuildDate: 2018-04-09T08:17:46Z
```
这样的讯息就代表安裝成功


## 创建一个名为“xininn“的静态站点
`hugo new site xininn`

然后hugo会自动生成这样一个目录结构：

  - archetypes/
  - content/(这里放你写的md文章)
  - layouts/(网站的模板文件)
  - static/(放的是css，js，图片等文件)
  - config.toml(网站配置文件)

## 创建一个页面：
`hugo new about.md`

## 如果是博客日志，最好将md文件放在content的post目录里
`hugo new post/first.md`

## 运行站点
`hugo server`

## 进入主题目录themes，然后输入下面的命令
`git clone https://github.com/spf13/hyde.git`

## Hugo官方的所有模板都下载下来
`git clone --recursive https://github.com/spf13/hugoThemes`

## 启动本地调试：
`hugo server --theme=hyde --buildDrafts --watch`
–watch或者-w 选项打开的话，将会监控到文章的改动从而自动去刷新浏览器，不需要自己手工去刷新浏览器，非常方便。
浏览器里打开：http://127.0.0.1:1313

# 关于部署
假设你需要部署在 GitHub Pages 上，首先在GitHub上创建一个Repository，命名为：mackxin.github.io （mackxin替换为你的github用户名）。

在站点根目录执行 Hugo 命令生成最终页面：

`hugo --theme=hyde --baseUrl="http://mackxin.github.io/"`
如果一切顺利，所有静态页面都会生成到 public 目录，将pubilc目录里所有文件 push 到刚创建的Repository的 master 分支。
```
cd public
git init
git remote add origin https://github.com/mackxin/mackxin.github.io.git
git add -A
git commit -m "first commit"
git push -u origin master

浏览器里访问：http://mackxin.github.io/
```

