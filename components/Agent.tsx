'use client'

import React, { useState } from 'react'

enum CallStatus {
  INACTIVE = 'INACTIVE',
  CONNECTING = 'CONNECTING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

interface AgentProps {
  userName: string
}

const Agent = ({ userName }: AgentProps) => {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE)

  const isSpeaking = callStatus === CallStatus.ACTIVE

  const startCall = () => {
    setCallStatus(CallStatus.CONNECTING)

    setTimeout(() => {
      setCallStatus(CallStatus.ACTIVE)
    }, 1000)
  }

  const endCall = () => {
    setCallStatus(CallStatus.FINISHED)
  }

  const messages = [
    'What is your name?',
    `My name is ${userName}. Nice to meet you!`,
  ]

  const lastMessage = messages[messages.length - 1]

  return (
    <>
      {/* CALL VIEW */}
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <img
              src="/ai-avatar.png"
              alt="AI Interviewer"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>

          <h1>AI Interviewer</h1>

          <div className="card-border">
            <div className="card-content">
              <img
                src="/user-avatar.png"
                alt="User avatar"
                width={120}
                height={120}
                className="rounded-full object-cover size-[120px]"
              />
              <h3>{userName}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* TRANSCRIPT */}
      {lastMessage && (
        <div className="transcript-border">
          <div className="transcript">
            <p className="transition-opacity duration-500 animate-fadeIn opacity-100">
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      {/* CALL BUTTON */}
      <div className="w-full flex justify-center mt-6">
        <button
          className={
            callStatus === CallStatus.ACTIVE
              ? 'btn-disconnect'
              : 'btn-call'
          }
          onClick={callStatus === CallStatus.ACTIVE ? endCall : startCall}
          disabled={callStatus === CallStatus.CONNECTING}
        >
          {callStatus === CallStatus.ACTIVE
            ? 'END'
            : callStatus === CallStatus.CONNECTING
            ? '...'
            : 'Call'}
        </button>
      </div>
    </>
  )
}

export default Agent
