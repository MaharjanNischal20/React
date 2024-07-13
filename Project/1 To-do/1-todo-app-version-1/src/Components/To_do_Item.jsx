function ToDoItem() {
  let todoName = "Buy Milk";
  let todoDate = "10/20/2022";
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger item-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
