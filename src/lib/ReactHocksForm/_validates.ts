import { ValidationRule } from 'react-hook-form'

export const FormValidates = {
  require: (label: string) => ({
    value: true,
    message: `${label}は必須項目です`
  }),
  email: (label: string): ValidationRule<RegExp> => {
    return {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: `${label}がメールアドレス形式ではありません。`
    }
  },
  password: (): ValidationRule<RegExp> => {
    return {
      value:
        /^((?=.*[A-Za-z])(?=.*[0-9])|(?=.*[A-Za-z])(?=.*[!#-+\--/:-@[\]-`{-~])|(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!#-+\--/:-@[\]-`{-~])|(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!#-+\--/:-@[\]-`{-~]))([A-Za-z0-9!#-+\--/:-@[\]-`{-~](?!.*[,，])){8,20}$/,
      message: `指定されたパスワードの形式ではありません。`
    }
  },
  compare: (field_1: string, field_2: string): boolean => {
    return field_1 === field_2
  }
}
