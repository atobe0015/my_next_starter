import React from 'react'
import type { UseHockReturn } from './Home.hocks'

export const View = (props: UseHockReturn) => {
  return <div className="text-center">welcome, {props.userName}</div>
}
