import React from 'react'

export const Card3 = () => {
    return (
        
        <>
        <br/><br/><br/>

        <div className="container">
            <div className="col-12">
                <div className="row" style={{display:"flex"}}>


                        <div className="col-md-6 col-sm-1">
                            <h3 className="card-title twhite" style={{ color: "white" }}>Showcase your app in our integrations directory</h3><br />
                           <p className="card-text twhite" >Bulding somthing special? we're always looking to Work with partners who wants to help the word bring their ideas to life.</p>
                           <div style={{display:"flex"}}>
                            <button type="button" class="btn btn-light" style={{borderRadius:"50px 50px 50px 50px"}}>Become a partner</button>
                            <button type="button" class="btn btn-dark" style={{borderRadius:"50px 50px 50px 50px"}}>view Integrations</button>
                            </div>
                        </div>
                        


                    <div className="col-md-6 col-sm-1">
                        <img style={{ height: "90%", width: "90%" }} src="../showcase.png" alt="illustration" />
                    </div>
                </div>
            </div>

        </div>



    </>
    )
    
}
export default Card3;