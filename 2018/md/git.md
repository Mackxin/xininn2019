# Git命令整理

![git](https://images2015.cnblogs.com/blog/385704/201509/385704-20150915155600929-543996061.jpg)

```
pwd 显示用户当前整个路径名
mkdir 创建一个文件夹
touch 创建一个文件
ls -a 列出所有文件包括以“ . ”开头的隐藏文件
ls -l 列出文件列表
ls 列出文件和目录
cd .. 返回上一层
cd 文件名 进入这个文件名
rm -rf 文件名 删除文件(慎用，不要删错了)
rm -rf * 删除所有文件(慎用，不要删错了)
ctrl+L 命令界面清除
ls -al ~/.ssh 列出电脑上所有的SSH秘钥文件
.git/config
.gitignore 忽略不提交文件的配置文件
git rm --cached 文件名 只删除版本库的文件不删除本地开发的文件
vim 文件名 用vim打开这个文件
cat 文件名 查看文件
git commit --amend 修改提交信息
git config --global alias.a add 给命令取别名
git archive master --prefix='wei/' --forma=zip > wei.zip 代码打包（wei是压缩包内文件夹名，wei.zip是压缩包名）
git rebase master
```

这里说一下，执行完取别名的命令后我们cd回到主目录然后可以打开.gitconfig文件来自己编辑
```
git config --global alias.a add 给命令取别名
执行完上面的命令后，我们cd一下回到主目录
然后找到.gitconfig可以看到这个文件里面多了两行
[alias]
	a = add
看到这个说明我们成功给add添加了别名
我们也可以直接自己添加比如
[alias]
	a = add
	c = commit -m
```


## 配置Git的整理
```
git config user.name "这里写你的用户名" 配置你的用户名(只在当前文件夹使用)
git config user.email "这里写你的邮箱" 配置你的邮箱(只在当前文件夹使用)
git config --global user.name "这里写你的用户名" 配置你的用户名
git config --global user.email "这里写你的邮箱" 配置你的邮箱
ssh -T git@github.com 测试SSH key是否设置成功
ssh-keygen -t rsa -C "你的邮箱" 生成相应邮箱的密匙
git config user.name 查看你配置的用户名
git config 指定的属性名 查看你相对应的属性的值，然后返回给你
git config --global core.quotepath false 解决git提交中文文件乱码不能提交的问题

```
## 撤销更改
```
git reset HEAD 文件名 撤销回git add的内容(add添加后撤回没有添加)
git checkout -- 文件名 丢弃工作区的修改
```
## 创建和扩隆仓库
```
git init 初始化你的仓库
git clone 远程仓库的地址 扩隆远程地址的代码到本地仓库
git config --list 获取git的配置信息

```

## 提交跟历史
```
git log 查看提交的历史
git log --oneline 在一行显示提交的历史
git log -p 指定的文件名 查看指定文件的提交历史
git log --name -only
git log --name -status
git log --graph  查看分支合并图
合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，
而fast forward合并就看不出来曾经做过合并
git blame 指定的文件名 以列表的方式查看指定文件的提交历史
git add 文件名 提交指定文件到暂存区
git add . 提交全部修改的文件到暂存区
git commit -m "这里写你这次提交的描述" 提交所有更新过的文件
```

## 分支和标签
```
git branch 显示所有的分支
git checkout 分支名或者标签名 切换到指定的分支或标签
git checkout -b 分支名 创建一个分支并切换到此分支
git checkout 后面不跟任何参数的话是对工作区进行检查（显示改动的文件）
git branch 新的分支名                基于当前的分支创建新的分支
git branch -d 分支名 删除本地的分支（已经合并的分支用此命令）
git branch -D 分支名 删除本地的分支（没有合并的分支用此命令）（慎用）
git branch --merged 查看已经合并的分支
git branch --no-merged 查看没有合并的分支
git branch -r 显示远程分支
git branch -a 显示所有分支
git push origin --delete 分支名 删除远程分支
```
## tag标签
```
git tag 列出本地所有标签
git tag <name> : 新建一个标签
git push --tags 发布所有标签
git tag -a <tagname> -m xxx 可以指定标签信息
git tag -s <tagname> -m xxx 可以用PGP签名标签
git push origin <tagname> 推送一个本地标签
git push origin --tags 推送全部未推送过的本地标签
git tag -d <tagname> 删除本地标签
git push origin :refs/tags/<tagname> 删除远程标签
```
## 暂时储存
```
git stash 把当前工作的文件暂存起来（就是还不想提交commit时来操作的）
git stash list 显示当前暂存的列表
git stash apply 恢复暂存的文件，但是列表那里不删除
git stash pop 恢复暂存的文件，列表那里也删除(即恢复的同时把stash内容也删了)
git stash drop stash{0} 把列表第0号的暂存删除掉
```
## 更新跟发布
```
git pull 更新远程代码到本地的仓库（下拉仓库代码）
git pull 远程主机名 远程分支名:本地分支名
git push 远程主机名 本地分支名:远程分支名
如：
git pull origin master:master 取回origin主机的master分支，与本地的master分支合并
git push origin master:master 推送本地的master分支，与origin主机的master分支合并

git pull 远程地址 分支名 下载远程所有改动到本地，自动合并到当前（下载远程代码及快速合并）
git push 远程地址 分支名 将本地版本发布到远程端（上传本地代码到远程端）
git push -u origin master 本地提交代码到远程仓库
```

## 恢复撤销
```
git reset --hard commit_id  恢复到此ID的版本
git reflog 查看回滚的版本
git reset --hard HEAD^ 回退最近一次的版本
git reset --hard HEAD~3 回退到最近的此数字的版本
git push -f -u origin master 提交回滚后的版本
```
## 文件操作
```
git mv 旧文件名 新文件名 文件改名字
git rm 文件名 删除指定的文件名
git rm --cached 文件名 停止跟踪文件但不删除
```

## 远程仓库
```
git remote add 主机名 远程地址  添加一个远程地址并且添加别名，好操作
git remote rm 主机名 删除远程主机
git remote show 主机名 查看该主机的详细信息
git remote -v 查看远程主机的网址
git remote rename 原主机名 新主机名 重新命名远程主机的名字
git fetch 别名
```