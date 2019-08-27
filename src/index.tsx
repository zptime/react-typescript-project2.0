import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <App />,
  // 类型断言 getElementById的返回值类型是HTMLElement | null。 简单地说，getElementById返回null是当无法找对对应id元素的时候。 我们假设getElementById总是成功的，因此我们要使用as语法告诉TypeScript这点。
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
