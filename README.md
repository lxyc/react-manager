# react 项目学习

## 一、生命周期

| 生命周期钩子                    | 状态                                                                                                         | 最佳实践                                |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| render                          | 每个class组件必须存在                                                                                        | 纯函数                                  |
| constructor                     | 不要调用 setState() / 不要将 props 赋值给 state                                                              | 初始化state/事件                        |
| componentDidMount               | 组件挂载后调用                                                                                               | 操作 DOM 节点 / 网络请求 / 添加订阅     |
| componentDidUpdate              | 参数(prevProps, precState, snapshot)，在更新后立即调用                                                       | 对比更新前后的 props/state              |
| componentWillUnmount            | 组件卸载前调用                                                                                               | 清除定时器和订阅                        |
| shouldComponentUpdate           | 用于性能优化，生命周期返回 false 时不执行 render() 和 componentDidUpdate()，但并不会阻止子组件更改时重新渲染 |                                         |
| static getDerivedStateFromProps | 在render方法之前调用，返回一个对象来更新state，返回null则不更新                                              | 用在 state 的值在任何时候都取决于 props |
| getSnapshotBeforeUpdate         | 参数(prevProps, prevState)，在最近一次渲染输出之前调用，返回值作为参数给componentDidUpdate                   | 滚动处理记录上一次滚动位置              |

### 1.1 单组件

#### 1.1.1 挂载阶段【初始化】

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

#### 1.2 更新阶段

1. `static getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

#### 1.3 卸载

1. `componentWillUnmount()`

### 1.2 父子组件

#### 1.2.1 挂载阶段【初始化】

1. `[parent] constructor()`
2. `[parent] static getDerivedStateFromProps()`
3. `[parent] render()`
4. `--[child] constructor()`
5. `--[child] static getDerivedStateFromProps()`
6. `--[child] render()`
7. `--[child] componentDidMount()`
8. `[parent] componentDidMount()`

--> 在父组件挂载完成之前，将子组件挂载

#### 1.2.2 更新阶段

父组件更新【同单个组件更新相同】

1. `[parent] static getDerivedStateFromProps()`
2. `[parent] sholdComponentUpdate()`
3. `[parent] render()`
4. `--[child] Static getDerivedStateFromProps()`
5. `--[child] shouldComponentUpdate()`
6. `--[child] render()`
7. `--[child] getSnapshotBeforeUpdate()`
8. `[parent] getSnapshotBeforeUpdate()`
9. `--[child] componentDidUpdate()`
10. `[parent] componentDidUpdate()`

--> 父组件的更新会影响子组件

子组件更新

1. `--[child] static getDerivedStateFromProps()`
2. `--[child] shouldComponentUpdate()`
3. `--[child] render()`
4. `--[child] getSnapshotBeforeUpdate()`
5. `--[child] componentDidUpdate()`

--> 子组件的更新不会影响父组件

#### 1.3.3 销毁阶段

1. `[parent] componentWillUnmount()`
2. `--[child] componentWillUnmount()`

--> 先销毁父组件，再销毁子组件

### 1.3 复杂嵌套结构【父子子】

一个父组件包含两个子组件，两子组件并列

#### 1.3.1 挂载阶段

1. `[parent] constructor()`
2. `[parent] static getDerivedStateFromProps()`
3. `[parent] render()`
4. `--[child1] constructor()`
5. `--[child1] static getDerivedStateFromProps()`
6. `--[child1] render()`
7. `--[child2] constructor()`
8. `--[child2] static getDerivedStateFromProps()`
9. `--[child2] render()`
10. `--[child1] componentDidComponent()`
11. `--[child2] componentDidComponent()`
12. `[parent] componentDidCompoent()`

--> 从父到子执行到`render()`阶段，子组件按顺序挂载，最后挂载父组件

#### 1.3.2 更新阶段

与上述相同，仅子组件内部`state`的改变，父组件不会执行生命周期

父组件更新

1. `[parent] static getDerivedStateFromProps()`
2. `[parent] shouldComponentUpdate()`
3. `[parent] render()`
4. `--[child1] satic getDerivedStateFromProps()`
5. `--[child1] shouldComponentUpdate()`
6. `--[child1] render()`
7. `--[child2] static getDerivedStateFromProps()`
8. `--[child2] shouldComponentUpdate()`
9. `--[child2] render()`
10. `--[child1] getSnapshotBeforeUpdate()`
11. `--[child2] getSnapshotBeforeUpdate()`
12. `[parent] getSnapshotBeforeUpdate()`
13. `--[child1] componentDidUpdate()`
14. `--[child2] componentDidUpdate()`
15. `[parent] componentDidUpdate()`

#### 1.3.3 销毁阶段

1. `[parent] componentWillUnmount()`
2. `--[child1] componentWillUnmount()`
3. `--[child2] componentWillUnmount()`

## 二、集成less & 更改主题

### 2.1 集成less

**Ant 官网使用的是不更改源配置文件的方式集成less** https://ant.design/docs/react/use-with-create-react-app-cn

> create-react-app 脚手架中已经添加了 sass-loader 的支持，所以只需要安装 node-sass 插件即可，但是脚手架中并没有配置关于 less 文件的解析，所以我们需要自己进行配置

- 在命令行运行 `npm run eject` 命令
  
  > 此命令会将脚手架中隐藏的配置都展示出来，此过程不可逆

- 运行完成之后，打开 config 目录下的 webpack.config.js 文件，找到 // style files regexes 注释位置，仿照其解析 sass 的规则，在下面添加两行代码

  ```javascript
  // 添加 less 解析规则
  const lessRegex = /\.less$/;
  const lessModuleRegex = /\.module\.less$/;
  ```

- 找到 rules 属性配置，在其中添加 less 解析配置
  > !!!注意： 这里有一个需要注意的地方，下面的这些 less 配置规则放在 sass 的解析规则下面即可，如果放在了 file-loader 的解析规则下面，less 文件解析不会生效。

  ```javascript
  // Less 解析配置
  {
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getStyleLoaders(
          {
              importLoaders: 2,
              sourceMap: isEnvProduction && shouldUseSourceMap,
          },
          'less-loader'
      ),
      sideEffects: true,
  },
  {
      test: lessModuleRegex,
      use: getStyleLoaders(
          {
              importLoaders: 2,
              sourceMap: isEnvProduction && shouldUseSourceMap,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
          },
          'less-loader'
      )
  },
  ```
- 此时配置完成，安装 less 和 less-loader 插件即可
  ```shell
  $ npm install less less-loader --save
  ```

### 2.2 更改主题

- 下载 `babel-plugin-import` 在配置中 `babel-loader` 处添加如下：
  ```javascript
  [
    'import', {
      libraryName: 'antd',
      libraryDirectory: 'es', // default: lib
      style: true, // true = LESS/Sass, css = css
    }
  ]
  ```
- `less-loader` options 如下
  ```javascript
  {
    javascriptEnabled: true, // 必须
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  }
  ```
  > !!!注意：此处有坑！`webpack/config.js/getStyleLoaders()`方法添加的属性是针对`css-loader`添加的，所以扩展属性时会报错，因为属性不合适。解决办法是扩展`getStyleLoaders()`参数，针对当前 loader 添加属性

