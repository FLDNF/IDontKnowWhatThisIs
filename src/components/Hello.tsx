import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    console.log(66);
    console.log(process.env);
    debugger;
    return (
      <h1>
        Hello from 111{this.props.compiler} and {this.props.framework}!
        {process.env.NODE_ENV}
        {process.env.TEST_1}
      </h1>
    );
  }
}
