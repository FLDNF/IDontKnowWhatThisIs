# IDontKnowWhatThisIs

在里面做你想做的事

## 开发注意

### 开发之前

    npm install -g eslint // 安装下eslint

在 vscode 安装 Prettier，每当文件保存就可以让代码符合 eslint 的格式了

### 运行

    npm run start

### 打包

    npm run build

### 变量与文件命名

普通变量、函数和文件名称一律使用小驼峰命名

    // 常量大写用下划线隔开
    const CREATE_TODO = 'create todo';

    // 类名使用大驼峰
    class TodoList extends React.Component {
      // 函数如果是传入其他组件则在前面加下划线
      _onTodoClick() {}
      // 其他则用小驼峰
      todoData() {
        return [];
      }
      render() {
        const data = this.todoData();

        <div>
          {data.map(({ name, content }) => (
            <Todo name={name} content={content} onClick={this._onTodoClick} />
          ))}
        </div>;
      }
    }

### 组件 Prop Type

https://github.com/fi3ework/blog/issues/22

    export declare interface AppProps {
      children1: JSX.Element; // bad
      children2: JSX.Element | JSX.Element[]; // meh
      children3: React.ReactChild | React.ReactChildren; // better
      children: React.ReactNode; // best
      style?: React.CSSProperties; // for style
      onChange?: (e: React.FormEvent<HTMLInputElement>) => void; // form events!
      props: Props & React.HTMLProps<HTMLButtonElement> // to impersonate all the props of a HTML element
    }
