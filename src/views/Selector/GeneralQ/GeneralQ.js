import React from 'react'
import Question from './Question'
import { Outlet } from 'react-router-dom'

export default function GeneralQ(props) {
  const childrenCount = props.childRoutes.length - 1;
  return (
      <Question Count={childrenCount}>
        <Outlet/>
      </Question>
  )
}
