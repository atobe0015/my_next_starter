import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
export { useMutation, useQuery } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
      cacheTime: 60 * 1000
    }
  }
})

const ReactQueryClient: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryClient
