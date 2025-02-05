import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import  Emails  from './components/Emails'
import React from 'react'
import Email from './components/Email'
import Menu from './components/menu'
import Header from './components/header'



const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [searchword, setSearchword] = useState("")
  const [markedEmail, setMarkedEmail] = useState(0)
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  const markMail = (id) => {
    setMarkedEmail(id)
  }


  const updateSearch = (search) => {
    setSearchword(search.toLowerCase())
  }

  
  
  let filteredEmails = emails
 
  if (searchword != ""){
    filteredEmails = filteredEmails.filter(email => email.title.toLowerCase().includes(searchword));
  }

 

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header
      updateSearch={updateSearch} />
      <Menu setCurrentTab = {setCurrentTab}
            currentTab = {currentTab}
            unreadEmails={unreadEmails}
            starredEmails={starredEmails}
            hideRead={hideRead}
            setHideRead={setHideRead} />
      {
        markedEmail == 0 ?
      <Emails emails = {filteredEmails} 
      toggleStar = {toggleStar}
      toggleRead = {toggleRead}
      setMarkedEmail = {markMail} />
      :
      <Email email = {initialEmails.at(markedEmail-1)}
       
      setMarkedEmail = {markMail}
      />
      }


    </div>
  )
}

export default App
