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
