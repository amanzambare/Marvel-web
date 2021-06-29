import React ,{useState,useEffect, useContext} from 'react';
import Data from './data';

const Card4=(props)=>
{
    return(
        <>
        <br/><br/><br/>
        <div className="container">
            <div className="col-12">
                <div className="row">
                   <div className="col-4">
                    
                   <Data src="../abc.png"
                    alt="abc" 
                    heading="Dedicated API Team" 
                    para="Our team are available for user's questions via our Slack Developer Community and Email" />
                   </div>

                    <div className="col-4">
                    <Data src="../graphQL.png" 
                    alt="graph" 
                    heading="Our API users Graph QL" 
                    para="No handling server side. Get many API's responses in a single request." />
                   </div> 

                   <div className="col-4">
                   <Data  src="../abcd.png" 
                    alt="abcd" 
                    heading="Supercharge your workflow" 
                    para="Automate workflows, integrate and analyse date and take marvel to the next level" />
                    </div>  
                </div> 
            </div>
        </div>
        </>
    );
}

export default Card4;