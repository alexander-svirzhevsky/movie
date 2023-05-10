import React from "react";

export class Posts extends React.Component {
  render() {
    const { loading, error, data } = this.props;

    return loading ? (
      <span>loading ...</span>
    ) : data ? (
      <ul>
        {data.map((item) => {
          return (
            <li>
              <div>{item.title}</div>
              <div>{item.body}</div>
            </li>
          );
        })}
      </ul>
    ) : (
      <span>{JSON.stringify(error)}</span>
    );
  }
}
