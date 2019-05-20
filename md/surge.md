# Surge教程

## 用surge托管静态文件

> 这里说明一下，这里介绍的是windows端的方法哈，其他系统的就不做介绍了   
> 关注分享，关注导航，关注**馨客栈**   
> 更多分享可以关注[馨客栈](http://mackxin.com)

## 第一步是软件安装

#### 首先我们要先安装node这个软件 

[下载地址](https://nodejs.org/zh-cn/)

## 全局安装surge

在windows终端输入的命令：  `surge install --global surge` 

完成后大概就是下面这样子的了

```
C:\Users\xininn\AppData\Roaming\npm\surge -> C:\Users\xininn\AppData\Roaming\npm\node_modules\surge\lib\cli.js
+ surge@0.20.4
updated 1 package in 28.177s

```
## 开始写你的静态页面

这里写静态页面的方法我就不多说了，这里我就以我[馨客栈官网](http://mackxin.com)来演示一下怎么操作

首先我们先去github仓库找到我们的馨客栈源码，地址是 [馨客栈官网github源码](https://github.com/mackxin/xininn2019) 

可以下载压缩包也可以用git命令克隆我的代码到本地`git clone https://github.com/Mackxin/xininn2019.git`

如果你有自己写好的静态页面就更好了

## 正式开始用surge托管我们的代码

我们进入到刚刚我们克隆的馨客栈源码，文件夹的名字叫 **xininn2019** ，我们进入到这个文件夹里面去，可以看到有很多的文件，不用管，看接下来的操作。

我们直接按住键盘的shift键不要放手，然后在文件夹**xininn2019**的空白处右键，windows会弹出一个窗口，我们点击**在此处打开powershell窗口**，稍等一下，我们可以看到一个蓝底白字的命令窗口，我们接下来的操作都会在这里操作哈

输入命令 `surge` 然后回车

然后会叫你输入邮箱，这里你输入你自己的邮箱，然后再次回车

接下来就是输入你的密码（自己设置），设置完后再次回车

这时你会看到你的醒目在本地的地址，自己看看对不对，不对的话自己稍微修改一下回车，会的话就直接回车

这时我们会看到一个类似这样的域名`*****.surge.sh`，这里的*****我们是可以自定义的哈，我就换成了`xininn.surge.sh` 这里搞定后我们回车等待系统完成部署就好了

这里大体的把内容展示一下给你们看

```
第一次开始大概是这个样子的
  Welcome to Surge! (surge.sh)
  Login (or create surge account) by entering email & password.
        email: 自己输入你的邮箱
        password: 自己输入你的密码
    Running as 你的邮箱地址 (Student)
        project: j:\mackxin\xininn(这里会自动显示你的项目地址)
        domain：*****.surge.sh   注意这里的****是可以自定义的哈
        upload: [====================] 100% eta: 0.0s (127 files, 5275869 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124

   Success! - Published to xininn.surge.sh
```

现在我们打开浏览器，在地址栏输入 `xininn.surge.sh` 回车就可以看到效果了

## 更新方法总结

### 更新方法一

好了，我们更新了我们的代码，要重新更新一下代码，怎么操作，

在终端输入命令 `surge` 然后回车

然后你大概会看到下面的命令

```
Running as 你的邮箱地址（Student）
    project： 这里会自动显示你的项目地址，确定无误后回车
    domain：随机的一个域名，自己更改为自己设定的域名哈，确定后回车，下面的等待完成就好
    upload: [====================] 100% eta: 0.0s (129 files, 9518831 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124

   Success! - Published to xininn.surge.sh
```

### 更新方法二

输入命令`surge -d xininn.surge.sh -p ./` 

直接回车就可以了，（注意这里的xininn可以设定你自己想的）

### 更新方法三

首先我们在项目的根目录中新建一个文件，名字叫**CNAME**

用代码编辑器打开**CNAME**这个文件，在里面输入我们的域名`xininn.surge.sh`，然后保存退出

我们在终端输入命令`surge ./` 然后回车确定等待部署成功就好了

## 如何退出当前的邮箱

只要一个命令就可以退出当前的账号

```
surge logout
```

## 自定义404页面

我们只需要在根目录下建立一个`404.html`这个文件，然后我们自己编写我们的404的代码就可以了，完了后更新代码推送一下就可以看到了

## 强制使用https访问

我们只需要输入一行代码就可以了

```
surge --domain https://xininn.surge.sh
```

## 自定义域名

在你的域名哪里解析一下(下面列举的是我在阿里万网解析的，你也可以用CNAME类型来解析，我试过也是可以的，下面演示的是A类型来解析哈)

| 记录类型 | 主机记录  |       记录值    | 
| ------- | -------- |      ------     |
|    A    | WWW      |  45.55.110.124  |
|    A    | @        |  45.55.110.124  |

然后在你的项目根目录下执行命令`surge`，你会看到下面的内容

```
Running as mackxinlww@gmail.com (Student)

        project: J:\mackxin\xininn2019\
         domain: http://xininn.xyz    (这里要写你的自定义的域名)
         upload: [====================] 100% eta: 0.0s (132 files, 9526667 bytes)
            CDN: [====================] 100%
             IP: 45.55.110.124

   Success! - Published to xininn.xyz
```

## 删除项目

```
surge teardown xininn.surge.sh
```

自定义域名项目删除
```
surge teardown xininn.xyz
```

成功的话大概是这样的哈

```
Success - xininn.surge.sh has been removed.
自定义域名删除成功的话大概是这样的
Success - xininn.xyz has been removed.
```

## 忽略文件或者目录

在我们的项目根目录创建一个文件名为 `.surgeignore` 的文件

### 默认会忽略的文件，就是不用我们自己定义的
```
.git
.*
*.*~
node_modules
bower_components
```

### 把默认的忽略文件移除

我们只需要在自己自定义的 `.surgeignore` 里把要取消忽略的文件前加个英文的感叹号，如下：

```
!node_modules  (这个的意思就是把node_modules这个文件夹从默认的忽略文件中取消掉了)
```

### 自己自定义的忽略文件
```
psd/  （这个是忽略psd这个文件夹，不部署到服务区上）
```






