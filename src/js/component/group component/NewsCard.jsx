import React from 'react'

const NewsCard = () =>{

    return (
        <div className="card">
            <img style={{ height: "420px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKjTMSLXUNCq2j0fYA9KgZKnfuudUX5Q6Pg&usqp=CAU" className="carousel slide" alt="Noticia" />
            <div className="card-body bg-dark d-flex justify-content-center">
                <h5 className="card-title">Noticia</h5>
                <p className="card-text">Update</p>
                <button type="button" className="btn btn-dark mx-2">¡Leamos!</button>
            </div>
        </div>

    )
}
export default NewsCard
