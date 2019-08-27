// connect可以将我们的Hello组件转换成一个容器，通过以下两个函数：
// mapStateToProps将当前store里的数据以我们的组件需要的形式传递到组件。
// mapDispatchToProps利用dispatch函数，创建回调props将actions送到store。

// import { connect, Dispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Hello from '../components/Hello';
import * as actions from '../redux/actions';
import { IStoreState } from '../redux/store';

// 应用包含两个属性：languageName和enthusiasmLevel。 我们的Hello组件，希望得到一个name和一个enthusiasmLevel。 mapStateToProps会从store得到相应的数据，如果需要的话将针对组件的props调整它。
export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

// mapDispatchToProps是一个函数，它需要传入一个调度函数。 这个调度函数可以将actions传入store来触发更新，因此我们可以创建一对回调函数，它们会在需要的时候调用调度函数。
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
}

// connect首先会接收mapStateToProps和mapDispatchToProps，然后返回另一个函数，我们用它来包裹我们的组件
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
