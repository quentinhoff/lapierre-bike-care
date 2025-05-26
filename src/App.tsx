
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BikeDetail from "./pages/BikeDetail";
import AddBike from "./pages/AddBike";
import MaintenanceLog from "./pages/MaintenanceLog";
import WorkshopMap from "./pages/WorkshopMap";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";
import Planning from "./pages/Planning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bike/:id" element={<BikeDetail />} />
            <Route path="/add-bike" element={<AddBike />} />
            <Route path="/maintenance" element={<MaintenanceLog />} />
            <Route path="/workshops" element={<WorkshopMap />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
