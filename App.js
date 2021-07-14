import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import AppNavigation from './src/navigation/navigation';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}
