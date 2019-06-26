# DOM Element

## accessKey

> IE浏览器,谷歌浏览器和苹果浏览器用快捷键 `Alt + key` 
> 火狐浏览器用快捷键 `Alt + shift + key`

|       浏览器       |      Windows      |           Mac            |
| :----------------: | :---------------: | :----------------------: |
|    火狐firefox     | Alt + Shift + key |       Ctrl+Alt+key       |
|      IE浏览器      |     Alt + key     | 苹果系统没有这个浏览器哈 |
|  谷歌浏览器Chrome  |     Alt + key     |       Ctrl+Alt+key       |
|  苹果浏览器Safari  |     Alt + key     |       Ctrl+Alt+key       |
| 欧朋浏览器Opera15+ |     Alt + key     |       Ctrl+Alt+key       |

```html
<a id="abtn" href="https://mackxin.com">mackxin</a>
<a id="abtn" accesskey="w" href="https://mackxin.com">mackxin</a>
<script>
document.getElementById('abtn').accesskey = 'w';
</script>
<!--这里用快捷键加上w就可以打开馨客栈网页了，而不需要点击这个按钮，具体快捷键的使用对应使用的浏览器而定哈-->
```

```javascript
function huoAccesskey() {
  var x = document.getElementById("w3s").accessKey;
  document.getElementById("demo").innerHTML = x;
}
```

## addEventListener()

