import React from 'react';
import ReactDOM from 'react-dom';
import { NewButton } from './components';
import { Button } from 'antd';
import './app.css'

function App() {
  return (
    <div>
      <NewButton name="新按钮" />
      <Button type="primary">按钮</Button>
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));