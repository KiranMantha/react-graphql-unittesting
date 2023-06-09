import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Users } from "./Users";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
