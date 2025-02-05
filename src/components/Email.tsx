import React from "react";


export default function Email(props) {
        const email = props.email

        return (
            <div>
                <div>
                <button 
                className = "simplebutton"
                onClick={() => props.setMarkedEmail(0)}> return 
                </button>
                <header><h1>{email.title}</h1></header>
                </div>

                <div>
                    {email.sender + ": " + email.sender + "@gmail.com" }
                </div>
                
                
            </div>
        );
        

    return (<></>)
    
}