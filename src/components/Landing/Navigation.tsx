import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/kaptanos-logo.jpg";

export const Navigation = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Kaptanos" className="h-8 w-8 rounded" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Kaptanos</h1>
            <p className="text-xs text-muted-foreground">İnşaat Satın Alma Asistanı</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Özellikler
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Fiyatlandırma
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Referanslar
          </a>
          <Link to="/dashboard">
            <Button>Hemen Başla</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
