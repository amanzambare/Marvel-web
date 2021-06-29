import React from 'react'

const Card = () => {
    return (
        <>
            <br/><br/><br/>
            <div className="container">
                <div className="col-12">
                    <div className="row">


                            <div className="col-6" >
                                <h3 className="card-title twhite" style={{ color: "white" }}>Let's build the future of design ,now.</h3><br />
                                <p className="card-text twhite" >Create amazing tools and integrations for 1 million users of customise Marvel for your team.</p>
                                <div style={{display:"flex"}}>
                                <button  style={{borderRadius:"50px 50px 50px 50px"}}type="button" class="btn btn-primary">Submit Your App</button>
                                <button style={{borderRadius:"50px 50px 50px 50px"}} type="button" class="btn btn-light">View API Docs</button>
                                </div>
                            </div>

                        <div className="col-6">
                            <img style={{ height: "90%", width: "90%" }} src="../illustration.png" alt="illustration" />
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Card;
