import { render } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { DefaultLayout } from '@/components/Layouts/Wrapper/Default'

const AllWrapper = ({ children }: { children: ReactNode }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: AllWrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }
