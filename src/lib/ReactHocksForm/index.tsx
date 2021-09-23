import React from 'react'
import {
  FormProvider,
  UseFormRegisterReturn,
  UseFormReturn
} from 'react-hook-form'
export { useForm } from 'react-hook-form'
export type { RegisterOptions } from 'react-hook-form'
export * from './_validates'

export type FormProps = {
  FormClient: UseFormReturn
}

export type registers<T> = {
  [key in keyof T]: UseFormRegisterReturn
}

export const ReactHocksFormProvider: React.FC<FormProps> = ({
  children,
  FormClient
}) => {
  return <FormProvider {...FormClient}>{children}</FormProvider>
}

export default ReactHocksFormProvider
