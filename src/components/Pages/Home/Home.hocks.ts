export type UseHockReturn = ReturnType<typeof useHock>

export const useHock = () => {
  const userName = 'あなたの名前'
  return {
    userName
  }
}
