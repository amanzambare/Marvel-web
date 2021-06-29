import React from 'react'

export const Card5 = () => {
    return (
        <div>
            <>
                <br /><br /><br />

                <div className="container">
                    <div className="col-12">
                        <div className="row">

                            <div className="col-6">
                                <img style={{ height: "90%", width: "90%" }} src="../botbot.png" alt="illustration" />
                            </div>

                            <div className="col-6" >
                                <h3 className="card-title twhite" style={{ color: "white" }}>A Slack-bot for creating and managing prototypes</h3><br />
                                <p className="card-text twhite" >Building something special?we're always looking to work with partners who wants to help the world bring their ideas to life.</p>
                                <div style={{ display: "flex" }}>
                                    <button type="button" class="btn btn-light" style={{ borderRadius: "50px 50px 50px 50px" }}>Become a partner</button>
                                    <button type="button" class="btn btn-dark" style={{ borderRadius: "50px 50px 50px 50px" }}>view Integrations</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



            </>
        </div>
    )
}
export default Card5;
