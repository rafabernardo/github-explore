import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'
import Main from './view/main'

export function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  )
}
