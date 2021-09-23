import React from 'react'

export type ForwardRefTypeOfElement<
  T extends keyof JSX.IntrinsicElements,
  U = unknown
> = React.ForwardRefExoticComponent<
  React.PropsWithRef<JSX.IntrinsicElements[T] & U>
>
