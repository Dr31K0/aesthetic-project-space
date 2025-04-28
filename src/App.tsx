
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navigation from "./components/Navigation";
import BottomNav from "./components/BottomNav";
import PageNavigation from "./components/PageNavigation";
import Index from "./pages/Index";
import Brief from "./pages/Brief";
import Analysis1 from "./pages/Analysis1";
import Analysis2 from "./pages/Analysis2";
import Research from "./pages/Research";
import AVP from "./pages/AVP";
import Final from "./pages/Final";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/brief" element={<Brief />} />
          <Route path="/analysis1" element={<Analysis1 />} />
          <Route path="/analysis2" element={<Analysis2 />} />
          <Route path="/research" element={<Research />} />
          <Route path="/avp" element={<AVP />} />
          <Route path="/final" element={<Final />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <PageNavigation />
      <BottomNav />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/aesthetic-project-space">
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
