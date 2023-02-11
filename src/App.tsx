import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";

import Container from "./Container";
import LowBinData from "./components/LowBinData";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <LowBinData />
      <Container />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
