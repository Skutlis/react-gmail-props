import React from "react";

export default function EmailElement(props) {
   
    return (
        
        <li 
        key={props.email.id}
        className={`email ${props.email.read ? 'read' : 'unread'}`}
        onClick={() => props.setMarkedEmail(props.email.id)}
      >
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={props.email.read}
            onChange={() => props.toggleRead(props.email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={props.starred}
            onChange={() => props.toggleStar(props.email)}
          />
        </div>
        <div className="sender">{props.email.sender}</div>
        <div className="title">{props.email.title}</div>
      </li>
      
    );
}

