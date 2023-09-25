import React from 'react'

const Adn = () => {
    return (
        <>
            <div className="accordion accordion-borderless" id="accordionFlushExampleX">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOneX">
                        <button
                            className="accordion-button"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseOneX"
                            aria-expanded="true"
                            aria-controls="flush-collapseOneX"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOneX"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOneX"
                        data-mdb-parent="#accordionFlushExampleX"
                    >
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the
                            <code>.accordion-flush</code> class. This is the first item's accordion
                            body.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwoX">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseTwoX"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwoX"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwoX"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwoX"
                        data-mdb-parent="#accordionFlushExampleX"
                    >
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the
                            <code>.accordion-flush</code> class. This is the second item's accordion
                            body. Let's imagine this being filled with some actual content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThreeX">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#flush-collapseThreeX"
                            aria-expanded="false"
                            aria-controls="flush-collapseThreeX"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThreeX"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThreeX"
                        data-mdb-parent="#accordionFlushExampleX"
                    >
                        <div className="accordion-body">
                            Placeholder content for this accordion, which is intended to demonstrate
                            the
                            <code>.accordion-flush</code> class. This is the third item's accordion
                            body. Nothing more exciting happening here in terms of content, but just
                            filling up the space to make it look, at least at first glance, a bit
                            more representative of how this would look in a real-world application.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adn
