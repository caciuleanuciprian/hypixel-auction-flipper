import { QueryClient, QueryClientProvider } from "react-query";

import Container from "./Container";
import LowestBin from "./LowestBin";

function App() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Container />
        <LowestBin />
      </QueryClientProvider>
    </div>
  );
}

export default App;
