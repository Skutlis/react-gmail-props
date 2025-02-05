import React from "react";
import EmailElement from "./EmailElement"


export default function Emails(props) {
    const markedEmail = props.markedEmail;
    return (
        <main className="emails">
            <ul>
            {
                props.emails.map((email) => {
                    return <EmailElement key = {email.id} 
                    email = {email}
                    toggleRead = {props.toggleRead}
                    toggleStar = {props.toggleStar}
                    setMarkedEmail = {props.setMarkedEmail}
                    starred= {props.starred} />
                })
            }
            </ul>
        </main>
        
    );
}
