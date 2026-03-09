import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/componentes/ui/sonner";
import { Toaster } from "@/componentes/ui/toaster";
import { TooltipProvider } from "@/componentes/ui/tooltip";
import Indice from "./paginas/Indice.tsx";
import NaoEncontrado from "./paginas/NaoEncontrado.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Indice />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
