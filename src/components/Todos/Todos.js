import React from 'react';
import PropTypes from 'prop-types';

import './cssTodos.css';


const Todos = ({ todos, Item, parentTodoID }) => (
  <div className="todos-list">
    {todos.map(todo =>
      <Item
        key={todo.id}
        {...todo}
      />
    )}
  </div>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  Item: PropTypes.any
};

export default Todos;