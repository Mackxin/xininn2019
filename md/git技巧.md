# Git技巧分享

> 2019-07-30,如何修改最近一次的提交（包括本地跟远程）

## 如何修改最近一次的提交

首先前提是，你已经本地提交（commit）了，而且还上传了本次提交到远端服务器上

现在问题来了，你刚好想修改最近一次的这个提交，刚好里面有个字错了

记得是修改最近一次的提交哈，来看一下方法：

`git commit --amend`

输入完上面的命令后会出现一个vim编辑器窗口，我们在英文输入法的状态下按一下按键上的**i**来进入编辑的状态，不然的话你是无法编辑的哈，此时你可以修改你要修改的地方了，修改完后，怎么退出呢？先按键盘上的**ESC**键退出线，然后按**:wq**(这个是保存并退出)，这时我们回到正常的命令窗口界面了哈

接下来重新提交一下commit信息，命令如下：

`git rebase --continue`

所有的commit信息都修改完之后运行一下命令将更改推送到远程

`git push origin master --force`

好了，至此这个问题就解决了哈

## git报错解决

```
remote: Permission to Mackxin/xininn2019.git denied to xininn.
fatal: unable to access 'https://github.com/Mackxin/xininn2019.git/': The requested URL returned error: 403
```

解决办法：

在windows系统上，找到控制面板，看到用户账户，点击凭据管理器，选择windows凭据，在普通凭据那一栏找到对应的github账号信息，点击删除即可哈

