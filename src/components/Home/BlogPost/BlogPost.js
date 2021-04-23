import React from 'react';
import blg1 from '../../../images/blg1.jpg'
import blg2 from '../../../images/blg2.jpg'
import blg3 from '../../../images/blg3.jpg'

const BlogPost = () =>{
    return (
        <div className="container">
            <h2 className="smText text-center mt-5">Our Blog Posts</h2>
            <div className="row justify-content-around mt-5">
                <div className="col-md-3">
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={blg1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem Ipsum</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn button text-white">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={blg2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem Ipsum</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn button text-white">READ MORE</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={blg3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Lorem Ipsum</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn button text-white">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;