import React, { useState } from 'react'

export const HireBtn = ({ phoneNumber }) => {
  const [hire, setHire] = useState()

  const handleHire = () => {
    window.location.href = `telegram://${phoneNumber}`
  }
  return (
    <button className="Link-style mt-5" onClick={handleHire}>Нанять</button>
  )
}