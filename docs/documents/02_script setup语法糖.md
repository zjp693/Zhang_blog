`<script setup></script>` 是一种编译时语法糖，用于在单文件组件中使用组合式API，如果你同时使用单文件组件和组合式API，建议使用该语法。

它与普通语法相比，代码更加简洁、性能更加强悍、更好的 TS 支持。

```bash
npm install -g @vue/cli
```

```vue
<script setup>
// 此处代码将会被编译为 setup 函数代码
// 也就是说此处代码将会在组件每次创建实例时执行
// 在内部声明的顶级变量和函数都可以在模板中你直接使用
const msg = "Hello Vue3 setup";

function log() {
  console.log(msg);
}
</script>

<template>
  <div @click="log">{{ msg }}</div>
</template>
```



```vue
<script setup>
// 在此处可以直接导入外部的辅助方法在模板直接使用
import { capitalize } from "./helps";
  
const msg = "Hello Vue3 setup";
</script>

<template>
  {{ capitalize(msg) }}
</template>
```



```vue
<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div @click="count++">{{ count }}</div>
</template>
```



```vue
<script setup>
// 在此处可以直接导入组件在模板中使用, 不再需要手动注册组件
import HelloWorld from "@/components/HelloWorld";
</script>

<template>
  <HelloWorld />
</template>
```



```vue
<!-- src/App.vue -->
<script setup>
import HelloWorld from "./components/HelloWorld";
</script>

<template>
  <HelloWorld msg="Hello Vue script setup" />
</template>
```

```vue
<!-- src/components/HelloWorld.vue -->
<script setup>
// 定义该组件接收的 Props
// defineProps 在此处可以直接使用无需导入
defineProps({ msg: String });
</script>
<template>
  {{ msg }}
</template>
```



```vue
<!-- src/components/HelloWorld.vue -->
<script setup>
// defineEmits 在此处可以直接使用无需导入
defineEmits(["delete"]);
</script>
<template>
  <button @click="$emit('delete')">delete button</button>
</template>
```

```vue
<!-- src/App.vue -->
<script setup>
import HelloWorld from "./components/HelloWorld";
function onDeleteHandler() {
  alert("deleted");
}
</script>

<template>
  <HelloWorld @delete="onDeleteHandler" />
</template>
```



```vue
<!-- src/components/HelloWorld.vue -->
<script setup>
const count = 0;
// 定义当前组件向外暴露的数据
defineExpose({ count });
</script>
```

```vue
<!-- src/App.vue -->
<script setup>
import HelloWorld from "./components/HelloWorld";
import { ref } from "vue";
const instance = ref(null);
function log() {
  console.log(instance.value.count);
}
</script>

<template>
  <HelloWorld ref="instance" />
  <button @click="log">button</button>
</template>
```



```vue
<!-- src/components/HelloWorld.vue -->
<script setup>
import { useSlots, getCurrentInstance } from "vue";
// 获取组件实例
const currentInstance = getCurrentInstance();
// 获取插槽
const slots = useSlots();
// 通过 JSX 渲染模板
currentInstance.render = () => <div>{slots.default()}</div>;
</script>
```

```vue
<!-- src/App.vue -->
<script setup>
import HelloWorld from "./components/HelloWorld";
</script>

<template>
  <HelloWorld>
    <h1>Hello World</h1>
  </HelloWorld>
</template>
```



```vue
<!-- src/App.vue -->
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
```





```bash
yarn add pinia
npm install pinia
```

```javascript
import { createPinia } from 'pinia'
// return the root store
app.use(createPinia())
```

创建 store，存储状态

```javascript
// src/stores/user.js
import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: () => ({ username: "张三" }),
});
```

使用状态

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
import { storeToRefs } from "pinia";

const user = useUser();
// 以下为错误写法，状态丢失响应性
// const {username, age} = useUser();

// 以下为正确写法, 保持了数据的响应性
const { username, age } = storeToRefs(user);

</script>
<template>
	<!-- 直接获取并使用不会破坏数据响应性 -->
	<p> {{ user.username }}</p>
	<p> {{ username }} </p>
</template>
```

更改状态

```javascript
// src/stores/user.js
import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: () => ({ username: "张三", age: 20, hobbies: [] }),
  actions: {
    updateUsername(username) {
      this.username = username;
    },
  },
});

```

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
const user = useUser();
</script>
<template>
  {{ user.username }}
  <button @click="user.updateUsername('李四')">updateUsername</button>
</template>
```

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
const user = useUser();
</script>
<template>
  {{ user.username }} {{ user.age }}
  <button @click="user.$patch({ username: '王五' })">updateUsername</button>
  <button
    @click="
      user.$patch((state) => {
        state.hobbies.push('足球');
        state.age = 30;
      })
    "
  >
    button
  </button>
</template>
```

重置状态

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
import { storeToRefs } from "pinia";
const user = useUser();
</script>
<template>
  <button @click="user.$reset">reset</button>
</template>
```

替换状态

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
const user = useUser();
</script>
<template>
  {{ user.username }} {{ user.age }}
  <button @click="user.$state = { username: '赵六', age: 50 }">replace state</button>
</template>
```



getters，getters 就是 store 中的计算属性

```javascript
// src/stores/user.js
import { defineStore } from "pinia";

// getters 就是 store 中的计算属性
export const useUser = defineStore("user", {
  state: () => ({ count: 25 }),
  getters: {
    doubleCount(state) {
      // 通过参数 state 获取依赖状态
      return state.count * 2;
    },
    doubleCountPlusOne() {
      console.log(this);
      // 通过 this 获取其他 getter
      return this.doubleCount + 1;
    },
  },
});
```

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
const user = useUser();
</script>
<template>{{ user.doubleCount }} {{ user.doubleCountPlusOne }}</template>
```



Getter 传递参数

```javascript
// src/stores/user.js
import { defineStore } from "pinia";

// getters 就是 store 中的计算属性
export const useUser = defineStore("user", {
  state: () => ({ count: 25 }),
  getters: {
    // getter 传递参数, 该方式会失去 getter 缓存特性
    countPlus(state) {
      return (count) => state.count + count;
    },
  },
});
```

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
const user = useUser();
</script>
<template>
  {{ user.countPlus(5) }}
</template>
```



Action

```javascript
// src/stores/user.js
import { defineStore } from "pinia";
import axios from "axios";

export const useUser = defineStore("user", {
  state: () => ({ profile: null }),
  actions: {
    async getUserInfo(id) {
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      this.profile = data;
    },
  },
});
```

```vue
<!-- src/App.vue -->
<script setup>
import { useUser } from "@/stores/user";
const user = useUser();
</script>
<template>
  {{ user.profile }}
	<button @click="user.getUserInfo(1)">getUserInfo</button>
</template>
```

