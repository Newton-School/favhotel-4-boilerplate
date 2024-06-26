import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
const Modal = ({
  activeTab,
  setActiveTab,
  setIsModalOpen,
  isSignedIn,
  setIsSignedIn,
}) => {
  return (
    <div className='modal'>
      <button className='close-btn' onClick={() => setIsModalOpen(false)}>
        X
      </button>
      <div className='modal-tabs'>
        <button
          style={{
            borderBottomColor: activeTab === 'SignUp' ? '#d4af37' : '#ffffff',
          }}
          onClick={() => setActiveTab('SignUp')}
        >
          Sign Up
        </button>
        <button
          style={{
            borderBottomColor: activeTab === 'SignIn' ? '#d4af37' : '',
            borderBottomStyle: activeTab === 'SignIn' ? 'solid' : 'none',
          }}
          onClick={() => setActiveTab('SignIn')}
        >
          Sign In
        </button>
      </div>
      <div className='modal-content'>
        {activeTab == 'SignUp' ? (
          <SignUp setActiveTab={setActiveTab} />
        ) : (
          <SignIn
            setIsModalOpen={setIsModalOpen}
            setIsSignedIn={setIsSignedIn}
          />
        )}
      </div>
    </div>
  )
}

export default Modal
