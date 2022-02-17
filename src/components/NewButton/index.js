import React from 'react';
import './index.css';

function NewButton(props) {
  return (
  <button style={{ color: 'red' }} className="btn-style">{props.name}</button>
  )
}
export default NewButton