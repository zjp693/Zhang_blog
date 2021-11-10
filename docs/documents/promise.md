# 这一次，彻底弄懂 Promise 原理

#### 1.为什么需要 promise

> 需求

通过 AJAX 请求 id ,再根据 id 请求用户名.再根据用户名,再根据用户名获取 email

> 回调地狱

回调函数中嵌套回调

Promise 解决了回调地狱

#### 2.promise 的基本使用

promise 是一个构造函数，通过 new 关键字实例化对象

> 语法

```js
new Promise((resolve, reject) => {});
```

- Promise 接受一个函数作为参数
- 在参数函数中接受两个参数
  - resolve:成功函数
  - reject:失败函数

> promise 实例

promise 实例有两个属性

- state:状态
- result:结果

#### 1)Promise 的状态

第一种状态：pending(准备，待解决，进行中)

第二种状态：fulfilled(已完成，成功)

第三种状态：rejected(已拒绝，失败)

#### 2.Promise 状态的改变

> 实例 1

```javascript
const p = new Promise((resolve, reject) => {
  //resolve(): 调用函数, 使当前Promise对象的状态改成fulfilled
  reslove();
});
console.dir(p); // fulfilled
```

> 实例 2

```javascript
const p = new Promise((resolve, reject) => {
  //resolve(): 调用函数, 使当前Promise对象的状态改成fulfilled
  //reject(): 调用函数, 使当前Promise对象的状态改成rejected
  //reslove();
  reject();
});
console.dir(p);
```

- resolve():调用函数，使当前 Promise 对象的状态改成 fulFilled
- reject():调用函数，使当前 Promise 对象的状态改成 rejected

> Promise 是一次性的，也就是说，如果你调用了 resolve 或者 reject 这个 Promise 会处理相关回调，然后它的生命周期就结束了。

#### 3) prmoise 的结果

> 实例

```javascript
const p = new Promise((resolve, reject) => {
  // 通过调用resolve || reject 函数  ,传递的参数，改变的是当前promise对象的结果
  // resolve("成功的结果");
  reject("失败的结果");
});
console.dir(p);
```

#### 3.Promise 方法

1)then 方法

> 实例

```javascript
    <script>
      const p = new Promise((resolve, reject) => {
        // 通过调用resolve || reject 函数  ,传递的参数，改变的是当前promise对象的结果
        // resolve("成功的结果");
        reject("失败的结果");
      });

      // then 方法函数
      // 参数
      // 两个参数都是函数
      // 返回值：是一个Promise对象
      p.then(
        () => {
          // 当promise状态是fulfilleds时,执行
          console.log("成功时的调用");
        },
        () => {
          // 当promise状态是rejected时,执行
          console.log("失败时调用");
        }
      );
      console.dir(p);
    </script>
```

> 实例 2

```javascript
    <script>
      const p = new Promise((resolve, reject) => {
        // 通过调用resolve || reject 函数  ,传递的参数，改变的是当前promise对象的结果
        // resolve("成功的结果");
        // resolve("123");
        reject("失败的结果");
      });

      // then 方法函数
      // 参数
      // 两个参数都是函数
      // 返回值：是一个Promise对象
      p.then(
        (value) => {
          // 当promise状态是fulfilleds时,执行
          console.log("成功时的调用", value);
          // console.log();
        },
        (err) => {
          // 当promise状态是rejected时,执行
          console.log("失败时调用", err);
        }
      );
      console.dir(p);
    </script>
```

- 在 then 方法的函数中，通过形参使用 promise 对象的结果

> then 方法返回一个新的 promise 实例，状态时 pending

```javascript
    <script>
      const p = new Promise((resolve, reject) => {
        // 通过调用resolve || reject 函数  ,传递的参数，改变的是当前promise对象的结果
        // resolve("成功的结果");
        // resolve("123");
        reject("失败的结果");
      });

      // then 方法函数
      // 参数
      // 两个参数都是函数
      // 返回值：是一个Promise对象
      const t = p.then(
        (value) => {
          // 当promise状态是fulfilleds时,执行
          console.log("成功时的调用", value);
          // console.log();
        },
        (err) => {
          // 当promise状态是rejected时,执行
          console.log("失败时调用", err);
        }
      );
      console.dir(p);
    </script>
```

> promise 的状态不改变，不会执行 then 里的方法

```javascript
// 如果promise 的状态不改变 then里的方法不会执行
const p = new Promise((resolve, reject) => {}).then(
  (value) => {
    console.log("成功");
  },
  (err) => {
    console.log("失败");
  }
);
```

> 在 then 方法中，通过 return 将返回的 promise 的状态

```javascript
//如果Promise的状态改变,then里的方法不会执行
const p = new Promise((resolve, reject) => {

})
const t = p.then((value) => {
	console.log("成功")
  //使用return可以将t实例的状态改为fulfilled
  return 123
},(reason) => {
console.log("失败")
})
t.then.((value) => {
	console.log("成功2",value)
},(reason) => {
console.log("失败2")
})
```

> 在 then 方法中,出现代码错误,将返回的 Promise 实例改为 rejected 状态

```javascript
//如果Promise的状态改变,then里的方法不会执行
const p = new Promise((resolve, reject) => {

})
const t = p.then.((value) => {
	console.log("成功")
  //使用return可以将t实例的状态改为fulfilled
  return 123
},(reason) => {
  //如果这里代码出错,会将t实例的状态改为rejected
console.log("失败")
})
t.then.((value) => {
	console.log("成功2",value)
},(reason) => {
console.log("失败2")
})
```

##### 一、什么是 Promise？我们用 Promise 来解决什么问题？

```javascript
Promise 是异步编程的一种解决方案：
从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。
promise有三种状态：
待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
已兑现（fulfilled）: 意味着操作成功完成。
已拒绝（rejected）: 意味着操作失败。
状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
```

##### promise 有什么用？

目的是更加优雅地书写复杂的异步任务,

它主要是为了解决 js 异步 回调时业务太乱，尤其嵌套异步时，代码也很丑，维护性也差，错误处理也不能统一这些问题。因此目前也只有 js 语言会使用 promise

他解决了问题，为什么会出现他，他的是怎么用的]()
