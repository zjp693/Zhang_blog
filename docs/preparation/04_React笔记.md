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

