import React from 'react'
import Question from './Question'
import { Outlet } from 'react-router-dom'

export default function GeneralQ() {
  return (
      <Question>
        <Outlet/>
      </Question>
  )
}
