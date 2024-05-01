import React from 'react';

const CourseModal = ({ show, onHide, title, imageSrc, body }) => {

    return (
        <div>
            {show && (
                <div className="modal-overlay"></div>
            )}
            <div className={show ? "modal show" : "modal"} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} >
                <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button type="button" className="btn-close" onClick={onHide} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={imageSrc} alt="Course" className="img-fluid" style={{ width: "260px", height: "200px" }} />
                                </div>
                                <div className="col-md-6">
                                    <p style={{color: "black"}}>{body}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onHide}>Close</button>
                            <button type="button" className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseModal;
