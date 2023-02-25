import React from 'react'
import Todo from './Todo'

export default function Form({handlerAdd, task, tasks, handlerRemove, onChange}) {
  return (
    <div>
       <div className="mb-3">
    <form className="d-flex">
      <div className="me-3">
        <input type="text" required="" value={task} onChange={e => onChange(e)} className="form-control" placeholder="I am going..."/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={e => handlerAdd(e)}>add</button>
    </form>
  </div>
  {tasks.map((item) => {
    return (
        <Todo key={item.id} task={item.task} id={item.id} handlerRemove={handlerRemove}></Todo>
    )
  })}
    </div>
  )
}
