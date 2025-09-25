import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import HeroImage from "@/assets/hero-building.jpg";

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenCallback: () => void;
}

export function Hero({ onOpenQuiz, onOpenCallback }: HeroProps) {
  const benefits = [
    "Проверим программы господдержки",
    "Проверим региональные льготы",
    "Проверим комиссии 25 банков",
    "Проверим возможность ипотеки 3,5%",
    "Проверим скидки на отдельные квартиры"
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HeroImage}
          alt="Современные новостройки Краснодара"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-secondary/90" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Агентство недвижимости №1 в Краснодаре</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ипотека от{" "}
              <span className="text-accent">3,5%</span> и скидки до{" "}
              <span className="gradient-text font-extrabold">
                <AnimatedCounter end={500000} prefix="₽" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90">
              на квартиры в <AnimatedCounter end={2386} /> новостройках Краснодара от застройщиков
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onOpenQuiz}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover-lift animate-pulse-glow"
              >
                Пройти тест за 1 минуту
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={onOpenCallback}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl hover-scale"
              >
                <Phone className="mr-2 h-5 w-5" />
                Заказать звонок
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={2324} suffix="+" />
                </div>
                <div className="text-sm text-white/70 mt-1">Довольных семей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={14} />
                </div>
                <div className="text-sm text-white/70 mt-1">Лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">
                  <AnimatedCounter end={25} />
                </div>
                <div className="text-sm text-white/70 mt-1">Банков-партнёров</div>
              </div>
            </div>
          </div>

          {/* Right content - Interactive element */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 animate-float">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">
                    <AnimatedCounter end={3.5} suffix="%" />
                  </div>
                  <div className="text-xl mb-6">Минимальная ставка по ипотеке</div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Семейная ипотека</span>
                        <span className="font-bold">от 5%</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">IT-ипотека</span>
                        <span className="font-bold">от 3.5%</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Сельская ипотека</span>
                        <span className="font-bold">от 2.7%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/79034592564"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover-scale animate-bounce"
        aria-label="Написать в WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
}