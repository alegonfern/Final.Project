import React from 'react'

const Post = () => {
    return (
        <div className="card">
            <form className="row g-3 m-2">
                <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                    <input type="text" class="form-control form-control-lg" id="post" aria-describedby="post" placeholder='Cuéntanos ¿en qué estás pensando?' />
                </div>

                <div>
                    <button type="submit" class="btn btn-dark mx-2">¡Postear texto!</button>
                    <button type="file" class="btn btn-dark mx-2">¡Postear foto/video!</button>
                </div>
            </form>
        </div>
    )
}

export default Post
