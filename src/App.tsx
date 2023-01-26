import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";

import Container from "./Container";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Container />
    </QueryClientProvider>
  );
}

export default App;
