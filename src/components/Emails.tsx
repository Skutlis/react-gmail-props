import React from "react";
import Email from "./Email"


export default function Emails(props) {
    
    return (
        <main className="emails">
            <ul>
            {
                props.emails.map((email) => {
                    return <Email key = {email.id} 
                    email = {email}
                    toggleRead = {props.toggleRead}
                    toggleStar = {props.toggleStar}
                    starred= {props.starred} />
                })
            }
            </ul>
        </main>
    );
}
