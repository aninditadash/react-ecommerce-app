// Example of Pure Components in React
import { memo, PureComponent, Component } from 'react';

export class GreetingComponent extends Component {
  render() {
    console.log(
      'GreetingComponent was rendered at',
      new Date().toLocaleTimeString()
    );
    return (
      <p>
        Hello {this.props.name && ', '}
        {this.props.name}!
      </p>
    );
  }
}

export class GreetingPureComponent extends PureComponent {
  render() {
    console.log(
      'GreetingPureComponent was rendered at',
      new Date().toLocaleTimeString()
    );
    return (
      <p>
        Hello{this.props.name && ', '}
        {this.props.name}!
      </p>
    );
  }
}

export const GreetingPureComponentFunction = memo(
  function GreetingPureComponentFunction({ name }) {
    console.log(
      'GreetingPureComponentFunction was rendered at',
      new Date().toLocaleTimeString()
    );
    return (
      <p>
        Hello{name && ', '}
        {name}!
      </p>
    );
  }
);
