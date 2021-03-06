import React from "react";

class CheckedAll extends React.Component {
  render() {
    const { allCompleted } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          checked={allCompleted}
          onChange={this.handleChange}
        />
        すべて{allCompleted ? "未完了" : "完了"}にする
      </label>
    );
  }
  handleChange = () => {
    const { onChange, allCompleted } = this.props;
    onChange(!allCompleted);
  };
}
export default CheckedAll;
