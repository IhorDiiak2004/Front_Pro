const Main = () => {
  return (
    <>
      <div className="todo">
        <div className="todo__form">
          <input type="text" placeholder="Todo..." />
          <button>Add</button>
        </div>

        <ul className="todo__list">
          <li>Learn React</li>
          <li>Write TODO app</li>
          <li>Submit homework</li>
        </ul>
      </div>
    </>
  );
};

export default Main;

