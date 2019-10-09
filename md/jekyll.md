# 「馨客栈分享」在 Windows 上安装基于 Jekyll 的静态网站

## 准备作案工具

```
1. 安装Ruby: https://www.ruby-lang.org/zh_cn/   
2. 安装RubyGems：https://rubygems.org/pages/download   
3. 安装RubyInstaller：https://rubyinstaller.org/   
```

查看安装成功的版本信息
```
ruby –v   
gem -v
bundle -v
Jekyll –v
```

## 安装命令

```
安装Jekyll：
gem install Jekyll
安装bundle：
gem install bundler
两个同时安装：
gem install jekyll bundler
```

## 安装jekyll博客

### 安装方法一

在cmd命令窗口，进入到你想创建博客的地方（如d:\xin）,进入后输入下面的命令  

`Jekyll new xininn`   

输入完后回车等待安装完（这里等待时间比较长，耐心等待哈，失败了就重试几次）   

安装完后就会显示下面的内容代码哈

### 安装方法二

自己先新建一个xininn文件夹，然后在此文件夹里面打开命令行

输入命令

`Jekyll new . `

成功后显示的很上面一样哈

## 安装成功大概会出现下面的内容

### Jekyll安装成功大概会出现下面内容

```
Successfully installed public_suffix-3.0.3
Successfully installed addressable-2.5.2
这里省略好多
Ruby Sass is deprecated and will be unmaintained as of 26 March 2019.
* If you use Sass as a command-line tool, we recommend using Dart Sass, the new
  primary implementation: https://sass-lang.com/install
* If you use Sass as a plug-in for a Ruby web framework, we recommend using the
  sassc gem: https://github.com/sass/sassc-ruby#readme
* For more details, please refer to the Sass blog:
  http://sass.logdown.com/posts/7081811
Successfully installed sass-3.5.7
这里也省略好多内容哈
Successfully installed jekyll-3.8.3
Done installing documentation for public_suffix, addressable, colorator, http_parser.rb, eventmachine, em-web                                                                                                                                                                  socket, concurrent-ruby, i18n, rb-fsevent, ffi, rb-inotify, sass-listen, sass, jekyll-sass-converter, ruby_de                                                                                                                                                                  p, listen, jekyll-watch, kramdown, liquid, mercenary, forwardable-extended, pathutil, rouge, safe_yaml, jekyl                                                                                                                                                                  l after 99 seconds
25 gems installed
```

### xininn安装成功后大概会出现下面内容
```
Running bundle install in J:/jekyll/xininn...
  Bundler: Fetching gem metadata from https://rubygems.org/...........
  Bundler: Fetching gem metadata from https://rubygems.org/.
  Bundler: Resolving dependencies...
  Bundler: Using public_suffix 3.0.3
  Bundler: Using addressable 2.5.2
  Bundler: Installing wdm 0.1.1 with native extensions
  Bundler: Bundle complete! 5 Gemfile dependencies, 33 gems now installed.
  Bundler: Use `bundle info [gemname]` to see where a bundled gem is installed.
New jekyll site installed in J:/jekyll/xininn.
```

### bundle安装成功大概会出现下面内容

```
Successfully installed bundler-1.16.4
Parsing documentation for bundler-1.16.4
Installing ri documentation for bundler-1.16.4
Done installing documentation for bundler after 22 seconds
1 gem installed
```

###

## 安装依赖防止出现不必要的问题

输入下面的命令来安装依赖

`bundle install`

## 开启服务

然后进入到新创建的博客文件去  

`cd xininn`

接下来就是开启jekyll了，输入下面的命令

`Bundle exec Jekyll`

（`jekyll s` 也是可以的）

开启服务后你会看到下面的代码

```
Configuration file: J:/jekyll/xininn/_config.yml
            Source: J:/jekyll/xininn
       Destination: J:/jekyll/xininn/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 1.998 seconds.
 Auto-regeneration: enabled for 'J:/jekyll/xininn'
    Server address: http://127.0.0.1:4000/

```

打开你的谷歌浏览器，在地址栏输入 http://127.0.0.1:4000/  你会看到神奇的页面向你招手

## 替换 gem 源

通过命令进行替换源

`gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/`

下面命令可能需要翻墙才能执行

`gem update --system` 

`gem -v`

## jekyll安装过程中可能会遇到的一些错误及解决办法

```
Dependency Error: Yikes! It looks like you don’t have jekyll-paginate or one of its dependencies installed. In order to use Jekyll as currently configured, you’ll need to install this gem. The full error message from Ruby is: ‘cannot load such file – jekyll-paginate’ If you run into trouble, you can find helpful resources at Getting Help
jekyll 3.1.2 | Error: jekyll-paginate
```

解决办法：安装jekyll时候直接运行

`gem install jekyll-paginate`

即可解决

```
Deprecation: The 'gems' configuration option has been renamed to 'plugins'. Please update your config file accordingly.
```

配置文件_config.yml中，使用了 plugins 的配置项，应该是用plugins替换掉gems

## 一些命令

```
jekyll build
jekyll b
安装依赖
bundle install 
指定生成的静态文件存放在哪里
jekyll b --Destination=./dist
截断阅读全文
<!---break->
```
## 插件集合网站

http://www.jekyll-plugins.com/

http://jekyllcn.com/docs/plugins/

http://planetjekyll.github.io/plugins/top

## Jekyll主题

http://jekyllthemes.org/



