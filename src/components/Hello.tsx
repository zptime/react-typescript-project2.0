// src/components/Hello.tsx
import './Hello.css';

import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// 我们创建了一个无状态的函数式组件（Stateless Functional Components，SFC）Hello。 具体来讲，Hello是一个函数，接收一个Props对象并拆解它。 如果Props对象里没有设置enthusiasmLevel，默认值为1。
// React中定义组件的两种方式：（1）使用函数  （2）通过类的方式定义
class Hello extends React.Component<IProps, object> {
  public render() {
    const { name, enthusiasmLevel = 1,  onIncrement, onDecrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

// function Hello({ name, enthusiasmLevel = 1 }: IProps) {
//   if (enthusiasmLevel <= 0) {
//     throw new Error('You could be a little more enthusiastic. :D');
//   }

//   return (
//     <div className="hello">
//       <div className="greeting">
//         Hello {name + getExclamationMarks(enthusiasmLevel)}
//       </div>
//     </div>
//   );
// }

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
