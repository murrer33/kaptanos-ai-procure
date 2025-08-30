import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  stats: { number: string; label: string }[];
}

export const HeroSection = ({ stats }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
          AI Destekli Satın Alma Platformu
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          İnşaat Projeleriniz İçin
          <br />
          <span className="text-primary-subtle">Akıllı Satın Alma</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
          AI destekli platformumuz ile satın alma süreçlerinizi optimize edin, 
          maliyetleri düşürün ve projelerinizi hızlandırın.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Ücretsiz Deneyin
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Demo İzle
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">
                {stat.number}
              </div>
              <div className="text-sm text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
