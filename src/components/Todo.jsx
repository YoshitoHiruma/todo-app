import React from "react";

class Todo extends React.Component {
  render() {
    const { text, completed } = this.props;
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={this.handleChangeCompleted}
          />
          {text}
        </label>
        <button onClick={this.hanClickEdit}>編集</button>
        <button onClick={this.handleClickDelete}>削除</button>
      </>
    );
  }
  handleChangeCompleted = () => {
    const { onChange, id, completed } = this.props;
    onChange(id, "completed", !completed);
  };
  hanClickEdit = () => {
    const { onChange, id, editing } = this.props;
    onChange(id, "editing", !editing);
  };
  handleClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };
}

export default Todo;
