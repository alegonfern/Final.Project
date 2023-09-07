import React from 'react'

const News = () => {
  return (
    <div className="card" >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKjTMSLXUNCq2j0fYA9KgZKnfuudUX5Q6Pg&usqp=CAU" className="card-img-top" alt="foto del medio"/>
    <div className="card-body">
      <h5 className="card-title">Nota</h5>
      <p className="card-text">Algun update o parche.</p>
      <a href="#" className="btn btn-dark">¡A leer!</a>
    </div>
  </div>
  )
}

export default News
