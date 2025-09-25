import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, TrendingUp, Star, Users, Car, School, ShoppingBag, Trees } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface District {
  id: string;
  name: string;
  properties: number;
  priceFrom: string;
  priceTo: string;
  popular: boolean;
  rating: number;
  features: string[];
  description: string;
  image: string;
}

interface DistrictBlocksProps {
  onOpenQuiz: () => void;
}

export function DistrictBlocks({ onOpenQuiz }: DistrictBlocksProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  const districts: District[] = [
    { 
      id: "1", 
      name: "Центральный", 
      properties: 234, 
      priceFrom: "4.5 млн", 
      priceTo: "15 млн",
      popular: true, 
      rating: 4.8,
      features: ["Развитая инфраструктура", "Бизнес-центры", "Парки"],
      description: "Престижный район с развитой инфраструктурой и историческим центром",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
    },
    { 
      id: "2", 
      name: "Фестивальный", 
      properties: 156, 
      priceFrom: "3.8 млн", 
      priceTo: "12 млн",
      popular: true, 
      rating: 4.6,
      features: ["Новые ЖК", "Детские сады", "ТЦ"],
      description: "Современный район с новыми жилыми комплексами",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
    },
    { 
      id: "3", 
      name: "Юбилейный", 
      properties: 189, 
      priceFrom: "3.2 млн", 
      priceTo: "9 млн",
      popular: false, 
      rating: 4.5,
      features: ["Зеленые зоны", "Школы", "Спорткомплексы"],
      description: "Тихий район с хорошей экологией и инфраструктурой",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
    },
    { 
      id: "4", 
      name: "Гидрострой", 
      properties: 145, 
      priceFrom: "2.9 млн", 
      priceTo: "7 млн",
      popular: false, 
      rating: 4.3,
      features: ["Доступные цены", "Транспорт", "Магазины"],
      description: "Развивающийся район с доступным жильем",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400"
    },
    { 
      id: "5", 
      name: "Энка", 
      properties: 201, 
      priceFrom: "3.5 млн", 
      priceTo: "10 млн",
      popular: true, 
      rating: 4.7,
      features: ["Новостройки", "Озера", "Парковки"],
      description: "Перспективный район с активным строительством",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400"
    },
    { 
      id: "6", 
      name: "Прикубанский", 
      properties: 178, 
      priceFrom: "3.3 млн", 
      priceTo: "11 млн",
      popular: false, 
      rating: 4.4,
      features: ["Университеты", "Парки", "Метро"],
      description: "Студенческий район с отличным транспортным сообщением",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400"
    },
  ];

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("Парк") || feature.includes("Зелен") || feature.includes("Озер")) return <Trees className="w-4 h-4" />;
    if (feature.includes("Школ") || feature.includes("сад") || feature.includes("Университет")) return <School className="w-4 h-4" />;
    if (feature.includes("Транспорт") || feature.includes("Метро") || feature.includes("Парковк")) return <Car className="w-4 h-4" />;
    if (feature.includes("Магазин") || feature.includes("ТЦ") || feature.includes("Бизнес")) return <ShoppingBag className="w-4 h-4" />;
    return <MapPin className="w-4 h-4" />;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Районы Краснодара</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Выберите район вашей <span className="gradient-text">мечты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Исследуйте лучшие районы Краснодара с новостройками от проверенных застройщиков
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              <AnimatedCounter end={6} />
            </div>
            <div className="text-sm text-muted-foreground">Районов</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              <AnimatedCounter end={1103} />
            </div>
            <div className="text-sm text-muted-foreground">Новостроек</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              <AnimatedCounter end={87} />
            </div>
            <div className="text-sm text-muted-foreground">Застройщиков</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">
              2.9 млн
            </div>
            <div className="text-sm text-muted-foreground">От цены</div>
          </Card>
        </div>

        {/* District Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {districts.map((district, index) => (
            <Card 
              key={district.id}
              className={`overflow-hidden hover-lift transition-all cursor-pointer ${
                selectedDistrict === district.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedDistrict(district.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={district.image} 
                  alt={district.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {district.popular && (
                    <Badge className="bg-accent text-white border-0">
                      Популярно
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {district.properties} объектов
                  </Badge>
                </div>

                {/* Name */}
                <div className="absolute bottom-3 left-3 text-white">
                  <h3 className="text-xl font-bold">{district.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${
                          i < Math.floor(district.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-white/30'
                        }`} 
                      />
                    ))}
                    <span className="text-xs ml-1">{district.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Price Range */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-xs text-muted-foreground">Цены от</div>
                    <div className="text-lg font-bold text-primary">{district.priceFrom}</div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {district.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {district.features.slice(0, 3).map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
                    >
                      {getFeatureIcon(feature)}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenQuiz();
                  }}
                  className="w-full"
                  variant={district.popular ? "default" : "outline"}
                >
                  Смотреть квартиры
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold mb-3">
              Не можете определиться с районом?
            </h3>
            <p className="text-muted-foreground mb-6">
              Пройдите короткий тест и мы подберем идеальные варианты исходя из ваших предпочтений
            </p>
            <Button 
              onClick={onOpenQuiz}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white animate-pulse-glow"
            >
              <Users className="mr-2" />
              Получить персональную подборку
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}