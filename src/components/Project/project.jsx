import React from 'react';


function project(props) {
  return (
    <div className="card" style={{width: "18rem", height: "18rem"}}>
    <img className="card-img-top" src={props.screenshot} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.deployedLink}</p>
  </div>
  <div class="card-footer">
        <a href={props.repoLink} className="btn btn-primary">GitHub</a>
      </div>
  </div>
  )
}

export default project