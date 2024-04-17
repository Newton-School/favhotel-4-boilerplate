import './styles/App.css'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import Modal from './components/Modal'
import Main from './components/Main'
import Favourite from './components/Favourite'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('SignUp')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [page, setPage] = useState('main')

  return (
    <div>
      <Navbar
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        setIsModalOpen={setIsModalOpen}
        setPage={setPage}
      />
      {isModalOpen && (
        <Modal
          isSignedIn={isSignedIn}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsSignedIn={setIsSignedIn}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div className='page'>
        {isSignedIn ? (
          page == 'main' ? (
            <Main />
          ) : (
            <Favourite />
          )
        ) : (
          <p>Please Sign in first</p>
        )}
      </div>
    </div>
  )
}

export default App
