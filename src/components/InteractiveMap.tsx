import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Home, Users, Car, School } from "lucide-react";

interface District {
  id: string;
  name: string;
  properties: number;
  priceFrom: string;
  popular: boolean;
  coords: { x: string; y: string };
}

interface InteractiveMapProps {
  onOpenQuiz: () => void;
}

export function InteractiveMap({ onOpenQuiz }: InteractiveMapProps) {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);

  const districts: District[] = [
    { id: "1", name: "Центральный", properties: 234, priceFrom: "4.5 млн", popular: true, coords: { x: "50%", y: "50%" } },
    { id: "2", name: "Фестивальный", properties: 156, priceFrom: "3.8 млн", popular: true, coords: { x: "30%", y: "40%" } },
    { id: "3", name: "Юбилейный", properties: 189, priceFrom: "3.2 млн", popular: false, coords: { x: "70%", y: "30%" } },
    { id: "4", name: "Гидрострой", properties: 145, priceFrom: "2.9 млн", popular: false, coords: { x: "40%", y: "70%" } },
    { id: "5", name: "Энка", properties: 201, priceFrom: "3.5 млн", popular: true, coords: { x: "60%", y: "60%" } },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Интерактивная карта районов</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Выберите район вашей <span className="gradient-text">мечты</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Исследуйте лучшие районы Краснодара с новостройками от проверенных застройщиков
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="relative h-[500px] bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
              {/* Map placeholder with interactive points */}
              <div className="absolute inset-0 p-8">
                <div className="relative h-full">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-4 h-full">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="border border-primary/20 rounded-lg" />
                      ))}
                    </div>
                  </div>

                  {/* District markers */}
                  {districts.map((district) => (
                    <button
                      key={district.id}
                      onClick={() => setSelectedDistrict(district)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all hover-scale ${
                        selectedDistrict?.id === district.id ? 'scale-110' : ''
                      }`}
                      style={{ left: district.coords.x, top: district.coords.y }}
                    >
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          district.popular 
                            ? 'bg-accent text-white shadow-lg animate-pulse-glow' 
                            : 'bg-primary text-white shadow-md'
                        }`}>
                          <Building2 className="w-6 h-6" />
                        </div>
                        {district.popular && (
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                            Популярно
                          </span>
                        )}
                        <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold whitespace-nowrap">
                          {district.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected district info overlay */}
              {selectedDistrict && (
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t animate-slide-up">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{selectedDistrict.name} район</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Home className="w-4 h-4" />
                          {selectedDistrict.properties} объектов
                        </span>
                        <span className="flex items-center gap-1">
                          От {selectedDistrict.priceFrom}
                        </span>
                      </div>
                    </div>
                    <Button 
                      onClick={onOpenQuiz}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Подобрать квартиру
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* District Info Cards */}
          <div className="space-y-4">
            <Card className="p-6 hover-lift">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Топ-3 района
              </h3>
              <div className="space-y-3">
                {districts.filter(d => d.popular).map((district, index) => (
                  <div 
                    key={district.id}
                    className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/70 transition-colors"
                    onClick={() => setSelectedDistrict(district)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">#{index + 1}</span>
                      <div>
                        <p className="font-semibold">{district.name}</p>
                        <p className="text-sm text-muted-foreground">от {district.priceFrom}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary">{district.properties}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="font-bold text-lg mb-4">Инфраструктура</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <School className="w-5 h-5 text-primary" />
                  <span>15 школ и детских садов</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>8 торговых центров</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-primary" />
                  <span>Удобная транспортная развязка</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-accent/20 bg-accent/5">
              <h3 className="font-bold text-lg mb-3">🔥 Горячее предложение</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Скидка 300 000₽ на квартиры в Юбилейном районе только до конца месяца!
              </p>
              <Button 
                onClick={onOpenQuiz}
                className="w-full bg-accent hover:bg-accent/90 text-white"
              >
                Узнать подробнее
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}