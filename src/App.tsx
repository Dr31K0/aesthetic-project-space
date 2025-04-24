
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import BottomNav from "./components/BottomNav";
import Brief from "./pages/Brief";
import Analysis1 from "./pages/Analysis1";
import Analysis2 from "./pages/Analysis2";
import Research from "./pages/Research";
import AVP from "./pages/AVP";
import Final from "./pages/Final";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Brief />} />
          <Route path="/brief" element={<Brief />} />
          <Route path="/analysis1" element={<Analysis1 />} />
          <Route path="/analysis2" element={<Analysis2 />} />
          <Route path="/research" element={<Research />} />
          <Route path="/avp" element={<AVP />} />
          <Route path="/final" element={<Final />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
