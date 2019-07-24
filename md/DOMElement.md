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

## childNodes属性

返回节点的子节点集合(包括文本节点、注释节点等)

```javascript
document.body.childNodes
```

## children属性

返回元素的子元素集合

`document.body.children`

```javascript
<button>anniu</button>
<p id='xin'></p>
document.getElementsByTagName('button')[0].addEventListener('click',function(){
  var x = document.body.children;
  var text = '';
  for(var i = 0; i < x.length;i++){
    // text = text + x[i] + '<br>';
    text = text + x[i].tagName + '<br>';
  }
  document.getElementById('xin').innerHTML = text;
})
```

## nodeName属性

返回节点的节点名称

```javascript
document.body.nodeName
```
## tagName属性

返回元素的标签名

```javascript
element.tagName
```

## classList

返回元素的类名,是只读属性，你可以通过使用add()和remove()方法修改它

```javascript
document.getElementsByTagName('p')[0].classList.add('xin');
document.getElementsByTagName('p')[0].classList.add('xin','xiner','mackxin');
document.getElementsByTagName('p')[0].classList.length;
document.getElementsByTagName('p')[0].classList.remove('xin');
document.getElementsByTagName('p')[0].classList.item(0); //获取当前元素的第一个类名，序号从零开始
document.getElementsByTagName('p')[0].classList.contains("wen"); //查看当前元素有没有wen这个类名，值为布尔值哈
document.getElementsByTagName('p')[0].classList.toggle('newClassName');
```

查看元素是否存在 "mystyle" 类，如果存在则移除另外一个类名:

```javascript
var x = document.getElementById("myDIV");

if (x.classList.contains("mystyle")) {
  x.classList.remove("anotherClass");
} else {
  alert("Could not find it.");
}
```

##  className

设置或返回元素的 class 属性

```javascript
element.className = class
element.className
```

```javascript
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
```

## click()

用来模拟鼠标左键单击一个元素

> element.click() 

## textContent

获取元素的文本内容

> ```javascript
> node.textContent           //返回节点的文本内容
> 
> node.textContent = 这里写你要设置的文本      //设置节点的文本内容
> ```

下面三个属性都可以设置标签的文本内容

- innerText    可以获取到标签的文本，和标签下子标签的文本内容（多个连续的空格合并为一个）
- textContent  可以获取到标签的文本，和标签下子标签的文本内容（多个连续的空格正常显示）
- innerHTML  可以获取标签内所有的内容包括里面的字标签

## tabindex

主要用于tab键来控制顺序

> ```html
> <element tabindex="number">
> ```

## setAttribute()

此方法是添加指定的属性，并且为其赋值，如果指定的属性存在了那么就仅设置/更改值

> ```javascript
> element*.setAttribute(*attributename, *attributevalue*)
> // 如：
> document.getElementById("id").setAttribute("class", "democlass");
> document.getElementById("myAnchor").setAttribute("href", "https://www.w3schools.com");
> document.getElementsByTagName("input")[0].setAttribute("type", "button");
> ```

## setAttributeNode()

此方法是向元素中添加指定的属性节点，如果属性存在，那么就会替换它

`element.setAttributeNode(您希望添加的属性节点)`

```javascript
var h1 = document.getElementsByTagName('h1')[0];  //获取h1元素
var att = docuemnt.createAttribute('class');      //创建一个class属性名
att.value = 'democlass';						  //设置class属性值为democlass
h1.setAttributeNode(att);						  //将class属性添加到h1标签中
```

```javascript
var xin = document.getElementById('id');          //获取xin
var att = document.createAttribute('href');		  //创建一个href属性
att.value = 'http://mackxin.com';				  //设置href属性的值为···
xin.setAttributeNode(att);						  //将href属性添加到xin所在的标签中
```

## getAttribute()



## scrollTop

获取当前页面滚动条纵坐标的位置：

`document.body.scrollTop`

`document.documentElement.scrollTop`

获取当前页面滚动条横坐标的位置：

`document.body.scrollLeft`

`document.documentElement.scrollLeft`

> var xtop = document.body.scrollTop || document.documentElement.scroll;

## scrollWidth

`Element.scrollWidth`

是只读属性，表示元素内容的宽度，包括由于滚动而未显示在屏幕中内容

`var xScrollWidth = element.scrollWidth;`

xScrollWidth 的值是元素的内容宽度

这里我们稍微扩展一下：

> 网页可见区域宽： document.body.clientWidth;
> 网页可见区域高： document.body.clientHeight;
> 网页可见区域宽： document.body.offsetWidth   (包括边线的宽);
> 网页可见区域高： document.body.offsetHeight  (包括边线的宽);
> 网页正文全文宽： document.body.scrollWidth;
> 网页正文全文高： document.body.scrollHeight;
> 网页被卷去的高： document.body.scrollTop;
> 网页被卷去的左： document.body.scrollLeft;
> 网页正文部分上： window.screenTop;
> 网页正文部分左： window.screenLeft;
> 屏幕分辨率的高： window.screen.height;
> 屏幕分辨率的宽： window.screen.width;
> 屏幕可用工作区高度： window.screen.availHeight;
> 屏幕可用工作区宽度：window.screen.availWidth;

> offsetWidth       width+padding+border(不包括外边距margin，如果有滚动条，滚动条已经在padding中了)
>
> offsetHeight      height+padding+border
>
> offsetLeft
>
> offsetTop

## contains()

返回的结果是布尔值

> *node*.contains(*node*)

比如：

```javascript
document.getElementById("myDIV").contains(span);
//这里的意思是，span标签在不在mydiv的子标签下，如果在返回true，不在的话返回false
```

## dir

更改元素的文本方向，值有：

- ltr  （默认的，从左到右）
- rtl （从右到左）
- auto（自动）

> *HTMLElementObject*.dir = "ltr|rtl|auto"

`document.getElementById("p").dir = "rtl"`

将p元素的文本方向更改为从左到右

## focus()

将焦点放在指定的元素上

> document.getElementById("myAnchor").focus();