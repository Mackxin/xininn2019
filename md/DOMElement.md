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

`addEventListener()`方法用于向指定的元素添加事件句柄

可以用`removeEventListener()`方法来移除`addEventListener()`方法添加的事件句柄

一个元素可以添加多个事件，添加的事件不会覆盖已存在的事件，当然同一个元素中也可以添加不同类型的事件

如果浏览器不支持 `addEventListener()` 方法, 你可以使用 `attachEvent()` 方法替代

```javascript
var x = document.getElementById('mybtn');
if (x.addEventListener){     //最新浏览器
  x.addEventListener('click',myfunction);  
}else if (x.attachEvent){    //IE8及更早IE版本浏览器
  x.attachEvent('onclick',myfunction);
}
```

- click
- contextmenu
- dbclick
- mouseenter
- mouseleave
- mouseover
- mouseout
- mouseup
- mousedown

```javascript
document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
```

```javascript
document.getElementById("myBtn").addEventListener("click", myFunction);
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```

## appendChild()

`appendChild()`方法向节点添加最后一个子节点

也可以使用 `appendChild()` 方法从一个元素向另一个元素中移动元素

```javascript
var node = document.createElement('li');  //创建一个li节点
var textnode = document.createTextNode('mackxin');  //创建一个文本节点，内容为mackxin
node.appendChild(textnode);
document.getElementById('mylis').appendChild(node);
```

## attributes属性

`attributes` 属性返回指定节点属性的集合,可以使用 length 属性确定属性的数量

```javascript
var x = document.getElementById('xin').attributes.length;
document.getElementById('p').innerHTML = x;
```

循环遍历一个元素的的所有属性并输出每个属性的的名称跟值

```javascript
var p = docuemnt.getElementById('p');
var text = '';
for(var i = 0; i < x.attributes.length ; i ++){
  text = text + x.attributes[i].name '=' + x.attributes[i].value + '<br>';
}
```

## blur()

`blur()` 方法用于移除文本域的焦点 , 记得没有参数和返回值的哈

`focus() ` 方法用于获取文本域的焦点

```javascript
document.getElementById('p').blur();
document.getElementById('p').focus();
```

## childElementCount属性

这个属性返回的是子元素的数量

使用`children.length` 也可以返回子元素的具体数量

```javascript
document.getElementById('p').childElementCount; //数字
```