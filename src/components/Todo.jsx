import React from 'react'

export default function Todo({task, handlerRemove, id}) {
  return (
    <div>
    <div className="row">
      <div className="col-auto">
        <button type="button" className="btn btn-primary btn-sm" onClick={handlerRemove(id)}>-</button>
      </div>
      <div className="col">{task}</div>
    </div>
    <hr/>
  </div>
  )
}
