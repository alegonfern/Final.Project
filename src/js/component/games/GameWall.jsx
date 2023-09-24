import React from 'react'
import "../../../styles/Wall.css"

const GameWall = () => {
    return (
        <>
            <>
                <link
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
                <div className="container bootstrap snippets bootdey">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="box box-widget">
                            <div className="box-header with-border">
                                <div className="user-block">
                                    <img
                                        className="img-circle"
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        alt="User Image"
                                    />
                                    <span className="username">
                                        <a href="#">John Breakgrow jr.</a>
                                    </span>
                                    <span className="description">Shared publicly - 7:30 PM Today</span>
                                </div>
                                <div className="box-tools">
                                    {/* <button
                                        type="button"
                                        className="btn btn-box-tool"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Mark as read"
                                    >
                                        <i className="fa fa-circle-o" />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-box-tool"
                                        data-widget="collapse"
                                    >
                                        <i className="fa fa-minus" />
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-box-tool"
                                        data-widget="remove"
                                    >
                                        <i className="fa fa-times" />
                                    </button> */}
                                </div>
                            </div>
                            <div className="box-body" style={{ display: "block" }}>
                                <img
                                    className="img-responsive pad"
                                    src="https://www.bootdey.com/image/660x300/"
                                    alt="Photo"
                                />
                                <p>I took this photo this morning. What do you guys think?</p>
                                <button type="button" className="btn btn-default btn-xs">
                                    <i className="fa fa-share" /> Share
                                </button>
                                <button type="button" className="btn btn-default btn-xs">
                                    <i className="fa fa-thumbs-o-up" /> Like
                                </button>
                                <span className="pull-right text-muted">127 likes - 3 comments</span>
                            </div>
                            <div className="box-footer box-comments" style={{ display: "block" }}>
                                <div className="box-comment">
                                    <img
                                        className="img-circle img-sm"
                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        alt="User Image"
                                    />
                                    <div className="comment-text">
                                        <span className="username">
                                            Maria Gonzales
                                            <span className="text-muted pull-right">8:03 PM Today</span>
                                        </span>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </div>
                                </div>
                                <div className="box-comment">
                                    <img
                                        className="img-circle img-sm"
                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        alt="User Image"
                                    />
                                    <div className="comment-text">
                                        <span className="username">
                                            Luna Stark
                                            <span className="text-muted pull-right">8:03 PM Today</span>
                                        </span>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer" style={{ display: "block" }}>
                                <form action="#" method="post">
                                    <img
                                        className="img-responsive img-circle img-sm"
                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                        alt="Alt Text"
                                    />
                                    <div className="img-push">
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Press enter to post comment"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default GameWall
