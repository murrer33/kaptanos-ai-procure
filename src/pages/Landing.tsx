import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Shield, Zap, TrendingUp, Users, Clock, Calculator, FileText, BarChart3, Star, Quote, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/kaptanos-logo.jpg";
import { Navigation } from "@/components/Landing/Navigation";
import { HeroSection } from "@/components/Landing/HeroSection";

const Landing = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Güvenilir Tedarikçiler",
      description: "Doğrulanmış ve güvenilir tedarikçi ağımız ile çalışın"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Hızlı Teklif Alma",
      description: "AI destekli sistem ile dakikalar içinde karşılaştırmalı teklifler"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Maliyet Optimizasyonu",
      description: "Akıllı algoritmalaarla %30'a varan maliyet tasarrufu"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Ekip Yönetimi",
      description: "Tüm satın alma süreçlerinizi tek platformdan yönetin"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "7/24 Destek",
      description: "Kesintisiz hizmet için sürekli teknik destek"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Otomatik Hesaplama",
      description: "Metraj ve maliyet hesaplamalarını otomatikleştirin"
    }
  ];

  const stats = [
    { number: "500+", label: "Aktif Müşteri" },
    { number: "10K+", label: "Tamamlanan Proje" },
    { number: "%95", label: "Müşteri Memnuniyeti" },
    { number: "%30", label: "Ortalama Tasarruf" }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Proje Müdürü",
      company: "ABC İnşaat",
      content: "Kaptanos sayesinde satın alma süreçlerimiz çok hızlandı. Artık daha az zamanda daha iyi teklifler alabiliyoruz.",
      rating: 5
    },
    {
      name: "Fatma Demir",
      role: "Satın Alma Uzmanı", 
      company: "XYZ Yapı",
      content: "AI destekli teklif karşılaştırması gerçekten çok işimize yaradı. Maliyetlerimizde ciddi düşüş gözlemledik.",
      rating: 5
    },
    {
      name: "Mehmet Kaya",
      role: "İnşaat Mühendisi",
      company: "DEF Construction",
      content: "Platform çok kullanıcı dostu. Tüm satın alma işlemlerimizi buradan yönetmek harika bir deneyim.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Başlangıç",
      price: "₺299",
      period: "/ay",
      description: "Küçük projeler için ideal",
      features: [
        "5 aktif proje",
        "Temel teklif karşılaştırması",
        "Email desteği",
        "Temel raporlama"
      ],
      popular: false
    },
    {
      name: "Profesyonel",
      price: "₺599",
      period: "/ay", 
      description: "Orta ölçekli şirketler için",
      features: [
        "25 aktif proje",
        "AI destekli analiz",
        "Öncelikli destek",
        "Gelişmiş raporlama",
        "API entegrasyonu",
        "Ekip yönetimi"
      ],
      popular: true
    },
    {
      name: "Kurumsal",
      price: "Özel",
      period: "fiyat",
      description: "Büyük organizasyonlar için",
      features: [
        "Sınırsız proje",
        "Özel AI modeli",
        "7/24 destek",
        "Özel entegrasyonlar",
        "Eğitim ve danışmanlık",
        "SLA garantisi"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection stats={stats} />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Özellikler</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Neden Kaptanos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern teknoloji ile geleneksel satın alma süreçlerini yeniden tasarladık
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Süreç</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sadece 3 adımda projeleriniz için en iyi teklifleri alın
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">İhtiyaçlarınızı Belirtin</h3>
              <p className="text-muted-foreground">
                Proje detaylarınızı ve ihtiyaç listelerinizi platforma yükleyin
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Analizi</h3>
              <p className="text-muted-foreground">
                Sistemimiz uygun tedarikçileri bulur ve tekliflerini karşılaştırır
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">En İyi Teklifi Seçin</h3>
              <p className="text-muted-foreground">
                Detaylı analizlerle en uygun teklifi seçin ve satın alma işlemini tamamlayın
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Müşteri Görüşleri</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kaptanos kullanarak projelerini optimize eden müşterilerimizden geri dönüşler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Fiyatlandırma</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Size Uygun Planı Seçin
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              İhtiyaçlarınıza göre ölçeklenebilir fiyatlandırma seçenekleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`border-0 shadow-card relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      En Popüler
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.name === "Kurumsal" ? "İletişime Geç" : "Başla"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hemen Başlamaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Kaptanos ile satın alma süreçlerinizi optimize edin ve maliyetlerinizi düşürün.
            Ücretsiz deneme sürümünüzü bugün başlatın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Ücretsiz Deneyin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Satış Ekibi ile Görüş
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Kaptanos" className="h-8 w-8 rounded" />
                <div>
                  <h3 className="font-semibold">Kaptanos</h3>
                  <p className="text-xs text-muted-foreground">İnşaat Satın Alma Asistanı</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                AI destekli satın alma platformu ile inşaat projelerinizi optimize edin.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Özellikler</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Fiyatlandırma</a></li>
                <li><Link to="/reports" className="hover:text-foreground transition-colors">Raporlar</Link></li>
                <li><Link to="/tracking" className="hover:text-foreground transition-colors">Takip</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Kariyer</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">İletişim</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API Dokümantasyonu</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Güvenlik</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Gizlilik</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Kaptanos. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
