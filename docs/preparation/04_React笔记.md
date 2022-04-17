# React 笔记

## 1.React 极速入门

```
https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/
图片地址
```



### 1.1 React 概述



#### 1.1.1 React 是什么

> A JavaScript library for building user interfaces
>
> 一个用于构建用户界面的 JavaScript 库

React 是一个开源的 JavaScript 库，用于构建 web 应用中的视图层，实际上就是 web 应用中的前端用户界面。



使用 React 构建的客户端 web 应用可以快速响应用户操作，使 web 应用的使用体验近乎于移动 App。




React 允许开发人员将用户界面代码和逻辑代码进行完美融合，以更加灵活的方式创建用户界面。

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

了解：React 除了可以构建运行在浏览器中的 web 应用以外，还可以构建在移动端运行的原生 App 应用。

#### 1.1.2 它的背景与生态

它是由 Facebook 的软件工程师在 2012 年创建，于 2013 年 5 月开源，目前由 Facebook 以及个人开发人员和公司组成的社区维护。

React 生态圈异常活跃，在构建客户端 web 应用的过程中你遇到的问题几乎都可以在社区中找到答案。

| [Redux](https://redux.js.org/)           | [MobX](https://mobx.js.org/README.html)             | [Recoil](https://recoiljs.org/)                          | [Formik](https://formik.org/)       | [React Table](https://react-table.tanstack.com/) |
| ---------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- | ----------------------------------- | ------------------------------------------------ |
| [Next.js](https://nextjs.org/)           | [Gatsby](https://www.gatsbyjs.com/)                 | [React Query](https://react-query.tanstack.com/)         | [SWR](https://swr.vercel.app/zh-CN) | [React Router](https://reactrouter.com/)         |
| [React Spring](https://react-spring.io/) | [Styled-Components](https://styled-components.com/) | [Ant Design](https://ant.design/docs/react/introduce-cn) | [Material UI](https://mui.com/zh/)  | [MSW](https://mswjs.io/)                         |

[官方文档](https://reactjs.org/)



### 1.2 React 初体验

#### 1.2.1 引包(浏览器环境)

```html
<script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
```

React 可以构建在浏览器中运行的 web 应用，也可以构建在移动端运行的原生应用，React 在构建这两种应用时会有一些通用方法和一些非通用方法，通用方法都被放置在了 `react` 文件中，非通用方法比如实现 web 应用的方法被放置在了 `react-dom` 中，实现移动端应用的方法被放置在了 `react-native-web` 文件中。

react：核心库，包含了构建 web 应用和构建移动端应用的通用方法。

react-dom：只包含了构建 web 应用的方法。

react-native-web：只包含构建移动端应用的方法。

#### 1.2.2 createElement

引入`react`后，window对象下会多出一个`React`的对象,对象下面的`createElement`方法用于创建元素

```jsx
//type:标签名称、字符串
// props:元素属性，对象，无属性填入null 
//childeren:子元素，普通文本或creaateElement 方法返回的元素对象
//返回值：元素对象（虚拟 DOM 对象）
React.createElement(type,props,children)
```

```javascript
cosnt button =React.createElement("button",{yupe:"button"},"保存")
```

#### 1.2.3 render

引入 `react-dom`后，window下会多出一个叫做`ReactDOM`的对象，对象下面的`render`方法用于渲染元素

```javascript
// element: 待渲染元素对象, 就是通过 createElement 方法创建的虚拟 DOM 对象
// container: 虚拟 DOM 对象的渲染位置. 真实 DOM 对象.
ReactDOM.render(element, container)
```

```html
<div id="root"></div>
```

```jsx
ReactDOM.render(button, document.getElementById("root"))
```

#### 1.2.4练习

## 2.组件化开发基础

### 2.6  表单控制

#### 2.6.1 受控表单组件

在 React 组件中使用表单元素时，为了方便获取表单控件的值，通常都会将表单控件和组件状态进行绑定，通过该方式使用表单的组件叫做受控表单组件。

##### 1. text

```jsx
function App() {
  const [username, setUsername] = React.useState("");
  return (
    <input
      type="text"
      value={username}
      onChange={(event) => setUsername(event.target.value)}
    />
  );
}
```

##### 2. password

```jsx
// 优化前
function App() {
  const [formState, setFormState] = React.useState({
    username: "",
    password: "",
  });
  return (
    <>
      <input
        type="text"
        value={formState.username}
        onChange={(event) => setFormState({ ...formState, username: event.target.value })}/>
      <input
        type="password"
        value={formState.password}
        onChange={(event) => setFormState({ ...formState, password: event.target.value })}/>
    </>
  );
}
```

```jsx
// 优化后
function App() {
  const [formState, setFormState] = React.useState({
    username: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <input type="text" name="username" value={formState.username} onChange={onChangeHandler} />
      <input type="password" name="password" value={formState.password} onChange={onChangeHandler} />
    </>
  );
}
```

##### 3. textarea

```jsx
function App() {
  const [formState, setFormState] = React.useState({
    biography: "",
  });
  const onChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return <textarea name="biography" value={formState.biography} onChange={onChangeHandler}></textarea>;
}
```

##### 4. select

```jsx
function App() {
  const [formState, setFormState] = React.useState({
    transport: "",
  });
  const onChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <select
      name="transport"
      value={formState.transport}
      onChange={onChangeHandler}
      >
      <option value="">请选择交通方式</option>
      <option value="0">火车</option>
      <option value="1">飞机</option>
    </select>
  );
}
```

##### 5. radio

```jsx
function App() {
  const [formState, setFormState] = React.useState({
    size: "",
  });
  const onChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
    	<input type="radio" name="size" value="m"  onChange={onChangeHandler} checked={formState.size === "m"} />
    	<span>M</span>
    	<input type="radio" name="size" value="s" onChange={onChangeHandler} checked={formState.size === "s"} />
    	<span>S</span>
		</>
	);
}
```

##### 6. checkbox

checkbox 单独使用，比如是否同意协议、是否记住密码、是否保持登录状态等等，在这种情况下 checkbox 绑定布尔值。

当前的需求是查看用户是否同意了网站协议。

```jsx
function App() {
  const [formState, setFormState] = React.useState({
    agree: false,
  });
  const onChangeHandler = (event) => {
    // 如果表单控件是复选框, 获取 checked 属性的值作为 value
    const value =
          event.target.type === "checkbox"
    ? event.target.checked
    : event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };
  return (
    <input
      type="checkbox"
      name="agree"
      checked={formState.agree}
      onChange={onChangeHandler}
      />
  );
}
```

多个复选框一起使用，比如选择兴趣爱好、多选题等。

当前的需求是使用模拟爱好数组生成用户界面，当用户选择爱好后，存储用户选择的爱好ID。

```jsx
// 模拟数据 爱好数组
const data = [
  { id: 1, title: "足球" },
  { id: 2, title: "篮球" },
  { id: 3, title: "橄榄球" },
];
function App() {
  // 声明表单状态
  const [formState, setFormState] = React.useState({
    hobbies: [],
  });
  // 爱好数组映射, 爱好数组中有多少爱好, 该状态数组中就有多少布尔值与之对应, 表示对应的爱好当前的选中状态是什么
  const [checkedState, setCheckedState] = React.useState(
    new Array(data.length).fill(false)
  );
  // 用于选择爱好后执行的事件处理函数
  const hobbyChangeHandler = (index) => {
    // index 为用户更改的爱好在原数组中的索引
    // 根据 index 找到爱好对应的布尔值, 取反, 返回新的爱好数组对应的是否选中的状态布尔值数组
    const updatedCheckedState = checkedState.map((checked, i) =>  i === index ? !checked : checked);
    // 更新爱好状态布尔值数组, 供下次用户选择时使用
    setCheckedState(updatedCheckedState);
    // 根据爱好布尔值状态数组, 从原数组中找到用户选中的爱好 id
    const udpatedHobbies = updatedCheckedState.reduce(
      (result, checked, index) => {
        if (checked) result.push(data[index].id);
        return result;
      },
      []
    );
    // 更新表单状态
    setFormState({ ...formState, hobbies: udpatedHobbies });
  };
  return (
    <>
      {data.map((item, index) => (
        <p key={item.id}>
          <input
            type="checkbox"
            onChange={() => hobbyChangeHandler(index)}
            />
          {item.title}
        </p>
    	))}
  	</>
  );
}
```

##### 7. submit

```jsx
function App() {
  const [formState, setFormState] = React.useState({
    username: "",
  });
  const onChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={onChangeHandler}
        />
      <input type="submit" />
    </form>
  );
}
```

##### 8. reset

```jsx
const initialState = {
  username: "",
};
function App() {
  const [formState, setFormState] = React.useState(initialState);
  const onChangeHandler = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onResetHandler = (event) => {
    setFormState(initialState);
  };
  return (
    <form>
      <input
        type="text"
        name="username"
        value={formState.username}
        onChange={onChangeHandler}
        />
      <button type="button" onClick={onResetHandler}>
        重置
      </button>
    </form>
  );
}
```

#### 2.6.2 非受控表单组件

##### 1. useRef

通过 useRef 方法可以实现 DOM 对象的获取。

```jsx
import { useRef } from 'react';

function App () {
  const username = useRef();
  const handler = () => console.log(username); // {current: input}
  return <input ref={username} onChange={handler}/>
}
```

##### 2. forwardRef

通过 forwardRef 方法可以实现子组件中 DOM 对象的获取。

```jsx
// src/App.js
import { useEffect, useRef } from "react";
import Message from "./Message";

function App() {
  const messageRef = useRef();
  useEffect(() => {
    console.log(messageRef.current);
  }, []);
  return <Message ref={messageRef} />;
}

export default App;
```

```jsx
// src/Message.js
import { forwardRef } from "react";

function Message(props, ref) {
  return <span ref={ref}>I am span</span>;
}
export default forwardRef(Message);
```



##### 3. 非受控表单组件

在 React 中受控表单组件使用起来很方便但也相对复杂，如果表单本身比较简单也可以使用非受控表单组件，非受控表单组件就是表单控件不和组件状态进行绑定，就使用原生的表单 DOM 对象存储用户输入的值。

```jsx
function App() {
  const usernameRef = React.useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(usernameRef.current.value);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" ref={usernameRef} />
      <input type="submit" />
    </form>
  );
}
```

### 2.7 样式控制

#### 2.7.1 CSS stylesheets

在 JS 文件中可以通过 import 关键字导入 CSS 样式表，样式表的作用范围为全局。

```css
/* src/styles.css */
.button {
  color: #fff;
  background-color: #5cb85c;
  text-align: center;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  border: none;
}
```

```javascript
// src/index.js
import "./styles.css";
```

```jsx
// src/App.js
function App() {
  return <button class="button">button</button>;
}
```

#### 2.7.2 Inline styling

通过 style 属性为元素添加行内样式，在样式参与逻辑时行内样式具有高度优势。

```jsx
import { useState } from "react";

function App() {	
  const [state, setState] = useState({
    colors: ["palevioletred", "yellow", "papayawhip"],
    index: 0,
  });
  const styles = {
    width: 200,
    padding: "50px 0",
    background: state.colors[state.index],
    textAlign: "center",
  };
  const onClickHandler = () => {
    setState({
      ...state,
      index: state.index + 1 > 2 ? 0 : state.index + 1,
    });
  };
  return (
    <div style={styles} onClick={onClickHandler}>
      Hello React
    </div>
  );
}

export default App;
```

#### 2.7.3 CSS Modules

通过 CSS 模块可以实现组件级样式，样式文件名称约定格式: [name].module.css

```css
/* App.module.css */
.button {
  color: #fff;
  background-color: #5cb85c;
  text-align: center;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  border: none;
}
```

```jsx
// App.js
import styles from "./App.module.css";

function App() {
  return <button className={styles.button}>button</button>;
}
```

#### 2.7.4 classnames

通过 [classnames](https://www.npmjs.com/package/classnames) 第三方库可以实现 `className` 属性值的动态绑定。

```bash
// 下载 classnames 第三方库
npm install classnames
```

```jsx
// 注意: classNames 方法的参数个数没有限制
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'bar': true }); // => 'foo-bar'
```

```jsx
import classNames from "classnames";

function App() {
  return <div className={classNames("foo", { bar: true })}>App works</div>;
}
```

### 2.8 传送门组件

#### 2.8.1  已知问题

需求: 在 App 组件中点击按钮渲染弹框组件。

问题: 弹框组件被渲染到 App  组件内部，弹框组件的样式受到了 App 组件元素的影响，导致布局错乱。

<span style="color: skyblue">期望的结果如下 ↓</span>

<img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/04_React%E7%AC%94%E8%AE%B0.assets/28.png" width="65%" />

<span style="color: skyblue">实际的结果如下 ↓</span>

<img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/04_React%E7%AC%94%E8%AE%B0.assets/29.png" width="65%" />


```jsx
// src/App.js
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const appStyles = { width: "60%", height: 400, transform: "translate(0,0)" };
  return (
    <div style={appStyles}>
      <button onClick={() => setIsOpen(!isOpen)}>open modal</button>
      {isOpen ? <Modal /> : null}
    </div>
  );
}

export default App;
```

```jsx
// src/Modal.js
import styles from "./Modal.module.css";

function Modal() {
  return (
    <div className={styles.overlayer}>
      <div className={styles.content}></div>
    </div>
  );
}
export default Modal;

```

```css
/* src/Modal.module.css */ 
.overlayer {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.content {
  width: 450px;
  height: 300px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

#### 2.8.2 传送门组件

通过 `ReactDOM.createPortal` 方法可以将指定组件渲染到指定位置。

```html
<!-- public/index.html -->
<div id="portal-root"></div>
```

```jsx
// src/Modal.js
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div className={styles.overlayer}>
      <div className={styles.content}></div>
    </div>,
    document.getElementById("portal-root")
  );
}
export default Modal;
```

## 3.组件化开发进阶

### 3.4.1 概述与实例

通过useRef方法不仅可以获取DOM对象，它还可以用于保存数据。

使用它保存的数据脱离组件渲染，也就是说，即使组件重新渲染值他依然存在，而且值的改变不会引发试图更新。

需求：记录组件渲染次数

```jsx
import React, { useEffect, useRef, useState } from 'react'

function App() {
  const [text,setText]=useState('')
  
  const renderCount=useRef(0)
  useEffect(()=>{
    renderCount.current+=1

  })
  return (
  <>
  <input type="text" value={text} onChange={(e)=>setText(e.target.value)}>
    </input>
    {renderCount.current}
  </>
  )
}

export default App
```

### 3.4.2 疑惑

能不能不使用useRef方法而使用useState方法记录组件渲染次数？

答案是不能,因为通过useState 方法声明的是组件状态，组件状态被改变会触发试图更新，一旦视图更新就要通过count记录更新次数，count被改变又会触发视图更新，从而引发组件的无限次循环渲染。

```jsx
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  });
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
          {count}
    </>
  );
}
```

### 3.4.3 memo

问题代码实例

```jsx
//src/App.js
import React, { useEffect, useState } from 'react'
import ShowName from "./ShowName";
function App() {
  const [index,setIndex]=useState(0)
  const [name]=useState("张三")

  useEffect(()=>{
    const  timer=setInterval(()=>{
      setIndex((prev)=>prev+1);
    },1000)
    return ()=>clearInterval(timer)
  },[])
  return (
   <>
   <p>{index}</p>
   <ShowName name={name}/>
   </>
  )
}

export default App
```

```jsx
// src/ShowName.js
import { useEffect } from "react";

function ShowName({ name }) {
  useEffect(() => {
    console.log("ShowName rendered");
  });
  return <div>{name}</div>;
}

export default ShowName;
```

以上代码的问题在于父组件更新引起了子组件的不必要更新，因为子组件本身是没有任何变化的是没有必要更新的。

### 3.5.2 基本使用

memo 方法可以为组件添加输入数据（props）的对比逻辑，如果当前渲染时的输入数据和上一次渲染时的输入数据一致，阻止组件重新渲染。

```jsx
import { memo } from "react";

export default memo(ShowName);
```

memo方法内部采用的是浅层比较，比较基本数据类型的值是否相同，比较引用是否为相同的应用地址。

以下代码在父组件每次重新渲染时都会生成新的person对象,memo方法在内部比较时得到的都是不同的对象，所以每次子组件也会跟着重新渲染。

```jsx
<ShowName person={{ name: "张三" }} />
```

memo方法的第二个参数即为比较函数，可以通过它解决以上的问题。比较函数的第二个参数为prevProps,比较函数的第二个参数为nextProps,比较函数返回false组件重新渲染。

```jsx
export default memo(ShowName, compareFunction);

function compareFunction(prevProps, nextProps) {
  if (prevProps.person.name === nextProps.person.name) {
    return true;
  }
  return false;
}
```

### 3.6 useMemo

问题代码实例

```jsx
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const styles = {
    background: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  const getItems = () => {
    return [number, number + 1, number + 2];
  };
  return (
    <div style={styles}>
      <input
        type="number"
        value={number}
        onChange={() => setNumber((prev) => prev + 1)}
      />
      <button onClick={() => setDark((dark) => !dark)}>button</button>
      <List getItems={getItems} />
    </div>
  );
}

function List({ getItems }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(getItems());
    console.log("update items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

export default App;
```

### 3.7.2基本使用

通过`useCallback`方法可以缓存函数，使用组件每次重新渲染都返回相同的函数实例，也可以指定某个状态变化后返回新的函数实例。

```jsx
import { useCallback } from "react";

function App () {
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);
}
```

### 3.8useImperativeHandle

### 3.8.1 概述

虽然React遵循单项数据流原则，但凡事总有特殊情况，React也提供了子组件向父组件传递数据方式

通过useImperativeHandle 方式可以实现父组件获取父组件获取子组件的数据或者调用子组件的里面的声明函数。

父组件通过useRef 方法创建了一个钩子，用于钩取子组件的数据，子组件在获取到钩子以后，通过useImperativeHandle 向钩子上暴露数据。

### 3.8.2 代码示例

```jsx
// src/App.js
import { useRef } from "react";
import Message from "./Message";

function App() {
  const messageRef = useRef();
  const onClickHandler = () => {
    console.log(messageRef.current.getText());
  };
  return (
    <>
      <Message ref={messageRef} />
      <button onClick={onClickHandler}>button</button>
    </>
  );
}

export default App;
```

```jsx
// src/Messages.js
import { forwardRef, useImperativeHandle, useState } from "react";

function Message(props, ref) {
  const [text, setText] = useState("");
  useImperativeHandle(ref, () => {
    return {
      getText() {
        return text;
      },
    };
  });
  return (
    <input
      type="text"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
}

export default forwardRef(Message);
```

### 3.9 Custom Hooks

### 3.9.1 概述

React允许开发者创建自定义钩子函数用于向组件中添加功能

自定义钩子函数确实就是应用逻辑和内置钩子函数的组合

### 3.9.2 useStorage

用于将组件状态实时同步到本地存储localStorage。

```jsx
//src/localStorage.js
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  // 声明状态
  const [storedValue, setStoredValue] = useState(function () {
    // 看看本地是否存在已有状态值
    const item = window.localStorage.getItem(key);
    // 如果本地已经有了就用本地的, 否则使用 initialValue
    return item ? JSON.parse(item) : initialValue;
  });
  // 对设置状态的方法进行增强, 添加状态同步到本地存储的功能
  const setState = (value) => {
    // 获取新的状态值
    // 如果 value 是函数类型, 调用函数传递现有状态, 从返回值中获取新的状态
    // 如果 value 是其他类型, 直接作为状态值使用
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    // 设置状态
    setStoredValue(valueToStore);
    // 将状态值同步到 localStorage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };
  // 返回状态及设置状态的方法
  return [storedValue, setState];
}
```

```jsx
//src/App.js
import React from 'react'
import { useLocaStorang } from './localStorage'

function App() {
  const [name,setName]=useLocaStorang("name","Bob")
  return (
   <>
   <div>
     <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}>
    
     </input>
   </div>
   </>
  )
}

export default App
```

### 3.9.3 useToggle

```jsx
import React, { useCallback, useState } from 'react'

function App() {
  const [isTextChanged, setIsTextChange] = useToggle()

  return (
    <>
      <button onClick={setIsTextChange}> {isTextChanged ? "Toggled" : "click to Toggle"}</button>
    </>
  )
}

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue)
  const toggle = useCallback(() => {
    setState((state) => !state)
  }, [])
  return [state, toggle]
}
export default App
```

#### 3.9.4 useAsync

用于执行异步代码并为异步过程添加状态。

```jsx
import { useCallback, useEffect, useState } from "react";

export default function useAsync(asyncFunction, immediate = false) {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}
```

```jsx
import useAsync from "./useAsync";

const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5 ? resolve("成功 🙌") : reject("失败 😞");
    }, 2000);
  });
};

function App() {
  const { status, value, error, execute } = useAsync(myFunction);
  return (
    <div>
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}
      <button onClick={execute} disabled={status === "pending"}>
        {status !== "pending" ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}

export default App;
```

#### 3.9.5 useHover

用于检测元素的鼠标移入移除操作。

```jsx
import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [value, setValue] = useState(false);
  const elementRef = useRef();
  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [elementRef, value];
}
```

```jsx
import useHover from "./useHover";

function App() {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}

export default App;
```

#### 3.9.6 useWindowSize

用于获取浏览器的窗口大小。

```jsx
import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
```

```jsx
import useWindowSize from "./useWindowSize";

function App() {
  const size = useWindowSize();
  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}

export default App;
```

#### 3.9.7 useReducerAsync

通过 useReducerAsync 自定义钩子函数可以实现在 useReducer 的工作流程中融入副作用代码。

首先看一段没有该钩子函数的代码，需求是在点击按钮时获取id值为1的任务对象。

```jsx
import axios from "axios";
import { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "setTodo":
      return [...state, action.payload];
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onClickHandler = async (id) => {
    let response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    dispatch({ type: "setTodo", payload: response.data });
  };
  return (
    <div>
      <button onClick={() => onClickHandler(1)}>button</button>
      <div>{JSON.stringify(state, null, 2)}</div>
    </div>
  );
}

export default App;
```

以上代码的问题在于，任务状态的处理有一部分在组件内部一部分在组件外部，代码过于分散。

通过 [useReducerAsync](https://github.com/dai-shi/use-reducer-async) 自定义钩子函数可以将处理状态过程中的副作用代码抽离到组件外部。

`npm install use-reducer-async`

```jsx
import { useReducerAsync } from "use-reducer-async";
import axios from "axios";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "setTodo":
      return [...state, action.payload];
    default:
      return state;
  }
}

const asyncHandlers = {
  loadTodo:
    ({ dispatch }) =>
    async (action) => {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${action.payload}`
      );
      dispatch({ type: "setTodo", payload: response.data });
    },
};

function App() {
  const [state, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncHandlers
  );
  return (
    <div>
      <button onClick={() => dispatch({ type: "loadTodo", payload: 1 })}>
        button
      </button>
      <div>{JSON.stringify(state, null, 2)}</div>
    </div>
  );
}

export default App;
```

### 3.10 Children

#### 3.10.1 only

通过 `Children.only` 方法可以限制组件标签只接收一个子元素。

```jsx
import Message from "./Message";
	
function App() {
  // 不允许 Message 组件标签传入多个子元素, 需要对这种情况进行限制
  return (
    <Message>
      <p>Hello</p>
      <p>Hello</p>
    </Message>
  );
}
```

```jsx
import { Children } from "react";

function Message(props) {
  try {
    Children.only(props.children);
  } catch (error) {
    // Error: React.Children.only expected to receive a single React element child.
    // 错误: React.children 只期望接收一个 React 元素
    return <div>Message 组件标签只接收一个子元素 </div>;
  }
  return <div>{props.children}</div>;
}
```

#### 3.10.2 count

通过 `Children.count` 方法可以获取组件标签传入的子元素的数量。

```jsx
import { Children } from "react";

function Message(props) {
  return <div>{Children.count(props.children)}</div>;
}
```

#### 3.10.3 map

通过 `Children.map` 方法可以对组件标签内部的子元素进行转换操作。

```jsx
function App() {
  return (
    <Message>
      <img
        src="https://images.pexels.com/photos/10198426/pexels-photo-10198426.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/4386364/pexels-photo-4386364.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/9812128/pexels-photo-9812128.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/8746965/pexels-photo-8746965.jpeg"
        width="300px"
        alt=""
      />
    </Message>
  );
}
```

```jsx
import { Children } from "react";

function Message(props) {
  const items = Children.map(props.children, (item) => (
    <a href="http://www.baidu.com">{item}</a>
  ));
  return <div>{items}</div>;
}
```

#### 3.10.4 toArray

`props.children` 内存储多个值时是数组类型，存储一个值时为对象类型。

通过 `Children.toArray` 方法可以将 `props.children` 转换为数组类型，以保证 `Children.map` 方法永远有用。

```jsx
// src/App.js
import ImageToggle from "./ImageToggle";

function App() {
  return (
    <ImageToggle>
      <img
        src="https://images.pexels.com/photos/10198426/pexels-photo-10198426.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/4386364/pexels-photo-4386364.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/9812128/pexels-photo-9812128.jpeg"
        alt=""
        width="300px"
      />
      <img
        src="https://images.pexels.com/photos/8746965/pexels-photo-8746965.jpeg"
        width="300px"
        alt=""
      />
    </ImageToggle>
  );
}
```

```jsx
// src/ImageToggle.js
import { useEffect, useState, Children } from "react";

function ImageToggle(props) {
  const [state, setState] = useState({
    current: 0,
    total: 0,
  });
  useEffect(() => {
    setState((prev) => ({ ...prev, total: Children.count(props.children) }));
  }, [props.children]);

  useEffect(() => {
    const timer = setInterval(showNext, 2000);
    return () => clearInterval(timer);
  }, []);

  const showNext = () => {
    setState(({ current, total }) => {
      return {
        total,
        current: current + 1 === total ? 0 : current + 1,
      };
    });
  };
  return <div>{Children.toArray(props.children)[state.current]}</div>;
}
```

### 3.11 Context

```

```

## 5.React路由v6

### 5.1 客户端路由概述

在 Web 应用中，客户端路由就是导航，就是 URL 地址与页面之间的对应关系，可以实现点击不同的链接跳转到不同的页面。

传统 Web 应用的中的路由是由 a 标记实现的，通过 a 标记可以实现在不同的 HTML 文件之间进行跳转。

在 React 应用中，只有一个 HTML 文件，React 应用通过不同的组件模拟不同的页面，所以 React 应用中的路由要实现的是在不同的组件之间进行跳转。

<img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/04_React%E7%AC%94%E8%AE%B0.assets/41.png" align="left" width="50%"/>

<img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/04_React%E7%AC%94%E8%AE%B0.assets/42.gif" align="left" width="45%"/>

```bash
	npm install react-router-dom
```

### 5.2 基本使用

需求：为应用创建首页和关于我们两个页面。

1. 创建页面级路由组件

   `src/pages/Home.js`

   ```react
   function Home() {
     return <div>欢迎来到首页 🌶🌶🌶 </div>;
   }
   export default Home;
   ```

   `src/pages/News.js`

   ```react
   function News() {
     return <div>欢迎来到关于新闻页 😁😁😁</div>;
   }
   export default News;
   ```

   `src/pages/Error.js`

   ```react
   function Error() {
     return <div>页面走丢了 😭😭😭</div>;
   }
   export default Error;
   ```

2. 配置路由规则

   `src/App.js`

   ```react
   import { BrowserRouter, Routes, Route } from "react-router-dom";
   import News from "./pages/News";
   import Home from "./pages/Home";
   
   function App() {
     // 注意: 在 v6 版本中，一旦路由规则匹配成功，则不再继续向后匹配，所以不再需要使用 exact 属性
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/news" element={<News />} />
         </Routes>
       </BrowserRouter>
     );
   }
   
   export default App;
   ```

3. 为应用添加用于跳转页面的链接地址

   ```react
   import { Link } from "react-router-dom";
   
   function App() {
     // 注意: react-router-dom 提供的组件都必须被 BrowserRouter 组件包裹, 包括 Link 组件
     return (
       <BrowserRouter>
         <Link to="/">Home</Link>
         <Link to="/news">News</Link>
       </BrowserRouter>
     );
   }
   ```

### 5.3 NavLink 组件

link组件是用于生成普通链接的组件，导航链接应该使用NavLink组件，当前链接集激活时，链接元素身上会自动添加active激活类名。

```react
<NavLink to="/">
  Home
</NavLink>
<NavLink to="/news">
  News
</NavLink>
```

可以通过以下方式更改默认的激活类名。

```react
    const activeClassName = ({ isActive }) => (isActive ? "on" : "off");

    <NavLink to="/" className={activeClassName}>
      Home
    </NavLink>
    <NavLink to="/about" className={activeClassName}>
      News
    </NavLink>
```

通过同样的方式也可以为导航链接添加内样式

```react
<NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}>
  Home
</NavLink>
```

### 5.4 404 与 Navigate

在路由规则配置的最后，可以使用`*`号匹配不存在的路由规则，匹配以后可以指定表示404的页面组件

```react
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Error from './pages/Error'
function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
   </BrowserRouter>
   </>
}

export default App
```

如果不想展示404，也可以将路由重定向到应用中已经存在的页面路由组件。

```react
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 5.5嵌套路由

嵌套路由可以理解为二级路由乃至三级路由. 就是在路由组件中还包含路由匹配组件。

<img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/04_React%E7%AC%94%E8%AE%B0.assets/40.png" align="left" width="55%"/>

1. 配置新闻页面中的二级路由规则

   `src/App.js`

   ```react
   import News from "./pages/News";
   import InnerNews from "./pages/InnerNews";
   import OuterNews from "./pages/OuterNews";
   
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/news" element={<News />}>
             <Route path="inner" element={<InnerNews />} />
             <Route path="outer" element={<OuterNews />} />
           </Route>
         </Routes>
       </BrowserRouter>
     );
   }
   ```

2. 在一级路由页面组件 ( 新闻页面组件 ) 中放置路由插槽、配置跳转链接

   `src/pages/News.js`

   ```react
   import { NavLink, Outlet } from "react-router-dom";
   
   function News() {
     return (
       <div>
         <p>欢迎来到关于新闻页 😁😁😁</p>
         <NavLink to="/news/inner">国内新闻</NavLink>
         <NavLink to="/news/outer">国际新闻</NavLink>
         <Outlet />
       </div>
     );
   }
   ```

### 5.6索引路

由显示的二级路由，比如上述案例中，当进入新闻页面时二级路由组件所在区域是空白的，该缺陷就可以通过索引路由补救。

`src/App.js`

```react
function App() {
  // 注意: 索引路由不能有 path
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/news" element={<News />}>
          <Route index element={<InnerNews />} />
          <Route path="inner" element={<InnerNews />} />
          <Route path="outer" element={<OuterNews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### 5.7 编程式导航

通过事件的方式进行跳转。

```react
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/news")}>News</button>;
}
```

### 5.8 路由参数

通过路由参数可以实现在不同的页面组件之间跳转时携带数据。

比如在文章列表页面中，点击某一篇文章跳转到文章详情页面，此时就需要将被点击的那篇文章的 id 传递到文章详情页面。

在应用中会有很多篇文章，但是文章详情页面组件只有一个，可以将它理解为文章详情的模板页面，在跳转到这个模板页面时，需要将文章id传进来，在模板页面中需要通过 id 获取详情，从而展示详情数据。

1. 添加路由规则并指定跳转到该路由时需要传递参数

   `src/App.js`

   ```react
   import Detail from "./pages/Detail";
   
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/detail/:id" element={<Detail />} />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

2. 在实现跳转的路由链接中传递参数

   `src/pages/Home.js`

   ```react
   import { Link } from "react-router-dom";
   
   function Home() {
     return (
       <ul>
         <li>
           <Link to="/detail/1">老旧小区改造, 这三区名单来了!</Link>
         </li>
         <li>
           <Link to="/detail/2">穿鞋把脚放列车座位上, 韩总统候选人尹锡悦引发网友批..</Link>
         </li>
       </ul>
     );
   }
   ```

3. 在目标跳转页面组件接收路由参数

   `src/pages/Detail.js`

   ```react
   import { useParams } from "react-router-dom";
   
   function Detail() {
     const { id } = useParams();
     return <div>Detail Page {id}</div>;
   }
   
   export default Detail;
   ```

### 5.9 查询参数

1. 定义路由时不需要加路由参数占位符

   `src/App.js`

   ```react
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/detail" element={<Detail />} />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

2. 在链接跳转时添加参数

   `src/pages/Home.js`

   ```react
   import { Link } from "react-router-dom";
   
   function Home() {
     return (
       <ul>
         <li>
           <Link to="/detail?id=1">老旧小区改造, 这三区名单来了!</Link>
         </li>
         <li>
           <Link to="/detail?id=2">穿鞋把脚放列车座位上, 韩总统候选人尹锡悦引发网友批..</Link>
         </li>
       </ul>
     );
   }
   ```

3. 在目标跳转页面组件接收路由参数

   `src/pages/Detail.js`

   ```react
   import { useSearchParams } from "react-router-dom";
   
   function Detail() {
     const [searchParams] = useSearchParams();
     return <div>Detail Page {searchParams.get("id")}</div>;
   }
   
   export default Detail;
   ```

### 5.10 路由组件懒加载

默认情况下应用中所有的组件都被打包到了同一个文件中，就是说应用初始加载时就加载了所有的组件，这样会导致初始加载应用时间长用户体验差。

解决办法就是在打包应用时以页面组件为单位，将不同的页面组件打包到不同的文件中，初始加载时只加载用户访问的页面组件。

1. 通过 lazy, import 异步加载组件

   `src/App.js`

   ```react
   import { lazy } from 'react';
   
   const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./pages/Home"));
   ```

   通过 import 方法动态导入模块时，webpack 会将导入的模块拆分成单独的文件。

   webpackChunkName 定义拆分文件名称。

2. 在调用异步加载的组件时，组件的外面必须包裹 Suspense 组件，通过 Suspense 组件可以指定组件加载过程中的等待 UI。

   `src/App.js`

   ```react
   import { Suspense } from "react";
   
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route
             path="/"
             element={
               <Suspense fallback={<div>loading...</div>}>
                 <Home />
               </Suspense>
             }
           />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

3. 封装 Loadable 组件以复用 Suspense 组件

   `src/common/Loadable.js`

   ```react
   import { Suspense } from "react";
   
   function Loadable(Component) {
     return function (props) {
       return (
         <Suspense fallback={<div>loading...</div>}>
           <Component {...props} />
         </Suspense>
       );
     };
   }
   
   export default Loadable;
   ```

   `src/App.js`

   ```react
   import Loadable from "./pages/Loadable";
   
   const Home = Loadable(
     lazy(() => import(/* webpackChunkName: "Home" */ "./pages/Home"))
   );
   
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />}/>
         </Routes>
       </BrowserRouter>
     );
   }
   ```

### 5.11 路由守卫 单路由守卫

当用户去访问那些需要鉴权以后才能进入的路由组件时，需要先通过路由守卫对其进行鉴权，只有通过才允许用户进入，否则进行重定向。

1. 定义执行鉴权的钩子函数供路由守卫进行使用

   `src/common/useAuth.js`

   ```react
   import { useEffect, useState } from "react";
   
   function isAuth() {
     // 模拟鉴权成功
     return Promise.resolve();
     // 模拟鉴权失败
     // return Promise.reject();
   }
   
   function useAuth() {
     // 用于存储鉴权结果
     // true 成功
     // false 失败 (默认值)
     const [auth, setAuth] = useState(false);
     // 用于存储异步状态
     // true 等待 (默认值)
     // false 结束
     const [loading, setLoading] = useState(true);
     useEffect(() => {
       // 开始鉴权
       isAuth()
         // 成功
         .then(() => setAuth(true))
         // 失败
         .catch(() => setAuth(false))
         // 不管成功还是失败, 都将异步状态更新为结束
         .finally(() => setLoading(false));
     }, []);
     // 返回异步状态和鉴权结果
     return { loading, auth };
   }
   
   export default useAuth;
   ```

2. 创建用于实现身份验证的路由守卫组件

   `src/common/AuthGuard.js`

   ```react
   import { Navigate } from "react-router-dom";
   import useAuth from "../hooks/useAuth";
   
   function AuthGuard({ children }) {
     // 调用鉴权钩子, 获取异步状态及鉴权结果22
     const { auth, loading } = useAuth();
     // 如果异步状态为等待, 渲染等待过程中的UI界面
     if (loading) return <div>loading...</div>;
     // 判断鉴权结果, 如果通过, 进入目标路由组件, 如果没通过, 重定向到执行授权的页面
     return auth ? children : <Navigate to="/login" />;
   }
   
   export default AuthGuard;
   ```

3. 对 Admin 组件，即需要鉴权以后才能访问的页面路由组件进行守卫

   `src/App.js`

   ```react
   import AuthGuard from "./common/AuthGuard";
   
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/admin" element={<AuthGuard><Admin /></AuthGuard>}/>
         </Routes>
       </BrowserRouter>
     );
   }
   ```

### 5.12 路由守卫 多路由守卫

通过 Outlet 路由插座组件可以实现多路由守卫。

`src/App.js`

```react
import Admin from "./pages/Admin";
import AuthGuardOutlet from "./common/AuthGuardOutlet";

function App() {
  return (
    <BrowserRouter>
        <Route path="/admin" element={<AuthGuardOutlet />}>
          <Route path="" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

`src/common/AuthGuardOutlet.js`

```react
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function AuthGuardOutlet() {
  // 调用鉴权钩子, 获取异步状态及鉴权结果
  const { auth, loading } = useAuth();
  // 如果异步状态为等待, 渲染等待过程中的UI界面
  if (loading) return <div>loading...</div>;
  // 判断鉴权结果, 如果通过, 渲染路由插座组件, 让 children 组件能够渲染到插座组件中
  // 如果没通过, 重定向到执行授权的页面
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthGuardOutlet;
```

### 5.13 滚动行为修正

问题：在A页面中将页面滚动到底部，切换到B页面，此时滚动的仍然处于A页面的位置

解决问题得方式就是监听路由切换行为，当路由发生切换行为时，让页面自动回到顶部。

```react

```

## 6.服务端渲染

### 6.1 概述

### 6.1.1渲染概述

### 1.服务端渲染SSR

服务端渲染（server-side rendering）是指数据和HTML模板在服务端的进行拼接，完成拼接后发送到客户端的进行解析。

<img src="../../../../React笔记/assets/next/02.png" />



### 2.客户端渲染CSR

客户端渲染（client-side rendering）是指数据和HTML模板在客户端的浏览器中进行拼接，拼接完成之后再追加到DOM树中供浏览器解析。

images/csr.png

### 3.静态生成SSG

静态站点生成的（start stie grneration）是指在站点构建阶段进行数据和HTMLde模板在服务端的进行拼接，完成拼接并生成对应的静态的HTML页面。



### 6.1.2 渲染发展史

6.2.2 Next.js

6.2.1 概述

[Next.js](https://nextjs.org/) 是集成式 React 服务端渲染应用框架，用于构建 SEO 友好的 SPA 应用。

```bash
# 全局安装 next.js 脚手架工具
npm install -g create-next-app
# 创建 next.js 应用
create-next-app next-tutorial
# 启动开发服务器
npm run dev
```

### 6.2.2 基于文件系统中的路由

#### 1.路由匹配

在Next.js中，页面是存储在pages文件中的React组件，组件文件名称和路由相关联。

```react
// pages/index.js ====> http://localhost:3000/
export default function Home() {
  return <div>首页</div>;
}	
```

```react
// pages/about.js ====> http://localhost:3000/about
export default function About() {
  return <div>关于我们</div>;
}
```

```react
// pages/post/index.js ====> http://localhost:3000/post
export default function Post() {
  return <div>这是博客索引目录</div>;
}
```

```react
// pages/blog/first-blog.js ====> http://localhost:3000/blog/first-post
export default function FirstPost () {
  return <div>这是我的第一篇博客文章</div>
}
```

```react
// pages/post/[pid].js ====> http://localhost:3000/post/1
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter(); // routter.query ====> {"pid": "1"}
}
```

```react
// pages/post/[pid].js ====> http://localhost:3000/post/1?name=zhangsan
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter(); // routter.query ====> {"pid": "1", "name": "张三"}
}
```

```react
// pages/order/[uid]/[status].js ====> http://localhost:3000/order/2/all
import { useRouter } from "next/router";

export default function Orders() {
  const router = useRouter(); // router.query ====> {"uid": "2", "status": "all"}
}
```

```react
// pages/404.js ====> 自定义404页面
export default function NotFound() {
  return <div>这是自定义的404页面</div>;
}
```

##### 2. 路由跳转

Link组件默认进行客户端路由跳转，如果浏览器中JavaScrip被禁用则使用链接进行服务端12路由跳转

Link组件中不应添加除href属性以为的属性，其余属性添加到a标签上，比如title、onClick。

Link 组件通过预取(在生产中)功能自动优化应用程序以获得最佳性能。

```react
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/about">
      <a title="关于我们">关于我们</a>
    </Link>
  );
}
```

```react
import Link from "next/link";

const posts = [
  { id: 1, title: "这是id为1的文章" },
  { id: 2, title: "这是id为2的文章" },
];

export default function Post() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

```react
import Link from "next/link";

const posts = [
  { id: 1, title: "这是id为1的文章" },
  { id: 2, title: "这是id为2的文章" },
];

export default function Post() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={{ pathname: "/post/[pid]", query: { pid: post.id } }}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
```

```react
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return <button onClick={() => router.push("/about")}>关于我们</button>;
}
```

```react
import Link from "next/link";

export default function Home() {
  const onClickHandler = (event) => {
    alert("clicked");
    event.preventDefault();
  };
  return (
    <Link href="/about">
      <a onClick={onClickHandler}>关于我们</a>
    </Link>
  );
}
```

#### 6.2.3 API 路由

通过API路由开发者可以为**客户端**应用提供的API接口。

API路由的是服务端应用程序，代码将会被打包到服务端应用程序，它不会最增加客户端打包文件的体积。

##### 1.基本使用

```javascript
// pages/api/index.js ====> http://localhost:3000/api
export default function handler(req, res) {
  // req: 请求对象
  // res: 响应对象
  // 对客户端进行响应
  res.send({ msg: "API Route is running" });
}
```

```javascript
// pages/api/posts/index.js
// 获取文章列表: GET  http://localhost:3000/api/posts
// 添加文章:    POST  http://localhost:3000/api/posts
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.send({ msg: "客户端在获取文章列表" });
      break;
    case "POST":
      res.send({ msg: "客户端在添加文章", body: req.body });
      break;
    default:
      res.status(400).send({msg: "API 不存在"})
  }
}
```

```javascript
// pages/api/posts/[pid].js
// 根据pid获取文章: GET     http://localhost:3000/api/post/12
// 根据pid删除文章: DELETE  http://localhost:3000/api/post/12
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.send({ msg: "客户端在根据pid获取文章", pid: req.query.pid });
      break;
    case "DELETE":
      res.send({ msg: "客户端在根据pid删除文章", pid: req.query.pid });
      break;
  }
}
```

```javascript
// pages/api/posts/[...pids].js 
// 根据pid批量删除文章: DELETE http://localhost:3000/api/posts/2/3
// [pid].js 的匹配优先级高于 [...pid].js
export default function handler(req, res) {
  switch (req.method) {
    case "DELETE":
      res.send({ msg: "客户端在根据pid批量删除文章", pid: req.query.pid });
  }
}
```

##### 2. 连接数据库

```javascript
// services/dbConnection.js
import mongoose from "mongoose";

async function dbConnect() {
  // 判断数据库是否已经连接过, 如果已经连接过, 不再重复连接
  if (mongoose.connection.readyState === 1) return;
  // 如果数据库没有连接过, 链接数据库
  await mongoose.connect("mongodb://localhost:27017/test");
}
export default dbConnect;
```

```javascript
// models/Post.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "标题不能为空"],
    unique: true,
    maxlength: [40, "标题不能超过40个字符"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "描述不能超过200个字符"],
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
```

```javascript
// pages/api/posts/index.js
import Post from "@/models/Post";
import dbConnect from "@/services/dbConnection";

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      const posts = await Post.find({});
      res.send({ success: true, posts });
      break;
    case "POST":
      const post = await Post.create(req.body);
      res.status(201).json({ success: true, post });
      break;
    default:
      res.status(400).send({ success: false, error: "api 不存在" });
  }
}
```

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/models/*": ["models/*"],
      "@/services/*": ["services/*"]
    }
  }
}
```

#### 6.2.4 预渲染

预渲染时指在构建阶段对应程序进行编译，编译结果就是静态的HTML文件

当客户端是向服务端发送请求后，服务端直接将应用构建时编译的HTML文件发送到客户端

默认情况下，如果组件不通过请求获取外部数据，Next.js会在构建将其编译为静态HTML文件

预渲染适用于页面内容不会发生频繁变化的场景，比如博客、新闻、电商前台、文档、营销页面等

```react
export default function About() {
  return <div>About</div>
}
```

##### 1. 基于页面组件的预渲染

在构建阶段如果组件需要获取外部数据，在组件中要导出名为 getStaticProps 的异步方法，通过它返回组件所需数据，它会在应用的构建阶段执行。

```react
import axios from "axios";

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: {
      posts: data,
    },
  };
}
```

##### 2. 基于动态路由的预渲染

基于动态路由的预渲染是指根据路由动态参数编译 HTML 静态文件。

该路由拥有多少参数就会编译出多少静态 HTML 文件。

```bash
npm install -g json-server
```

```json
{
  "todos": [
    { "id": 1, "title": "吃饭" },
    { "id": 2, "title": "睡觉" },
    { "id": 3, "title": "打豆豆" }
  ]
}
```

```bash
json-server db.json -p 3001 -w
```

```react
// pages/todos/[id].js
import axios from "axios";
import { useRouter } from "next/router";

export default function Todo({ todo }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;
  return (
    <div>
      {todo.id} {todo.title}
    </div>
  );
}

// 第一步: 在构建时先获取所有路由参数
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
    ],
    // false 当访问没有被预渲染的路径时展示404页面
    // true: 当访问没有被预渲染的路径时, 先展示后备UI, Next.js 会在客户端请求时进行预渲染, 完后后显示预渲染结果
    fallback: true,
  };
}

// 第二步: 根据路由参数编译静态 HTML 文件
// 在构建时 Next 先调用 getStaticPaths 方法获取所有路由参数
// 遍历路由参数, 不断调用 getStaticProps 方法编译静态HTML文件
export async function getStaticProps({ params }) {
  let response = await axios.get(`http://localhost:3001/todos/${params.id}`);
  await delay(2000);
  return {
    props: {
      todo: response.data,
    },
    // 设置当前页面缓存的过期时间
    // 当前页面被访问时, 如果缓存时间过期, 触发当前页面的重新预渲染
    // 当次访问用户看到的仍然是缓存页面, 当重新预渲染完成后, 下次用户访问时看到的就是新页面了
    revalidate: 10,
  };
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
```

#### 6.2.5 服务端渲染

服务端渲染是指在客户端发送请求时，服务器端即时编译 HTML，编译完成后将 HTML 代码发送到客户端。

服务端渲染方式适用于页面内容频繁发生变化场景且需要 SEO 的场景。

getServerSideProps 方法在服务端执行，内部可以调用 API 路由，也可以直接查询数据库。

```react
import Post from "@/models/Post";

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const posts = await Post.find({});
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
```

#### 6.2.6 混合渲染

混合渲染是指客户端渲染和服务端渲染、客户端渲染和预渲染可以混合使用。

比如文章详情页面，文章内容不会经常变化可以使用预渲染，而文章评论需要实时更新可以使用客户端渲染。

```react
// pages/api/comments/index.js
export default function comments(req, res) {
  res.send([
    { id: 1, content: "评论1" },
    { id: 2, content: "评论2" },
  ]);
}
```

```react
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts({ posts }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/comments").then((response) => {
      setComments(response.data);
    });
  }, []);
  return (
    <>
      {/* 预渲染部分开始 */}
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
      {/* 预渲染部分结束 */}
      {/* 动态渲染部分开始 */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      {/* 动态渲染部分结束 */}
    </>
  );
}

export async function getStaticProps() {
  let response = await axios.get("http://localhost:3000/api/posts");
  return {
    props: {
      posts: response.data.posts,
    },
  };
}
```

#### 6.2.7 为应用添加样式

Next.js 推荐将所有样式表文件存储在 styles 目录中。
