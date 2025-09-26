import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CallbackModal } from "@/components/CallbackModal";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { 
  Home as HomeIcon, 
  Banknote, 
  FileCheck, 
  Gift, 
  CheckCircle,
  Building2,
  MapPin,
  Users,
  Award,
  Clock,
  Shield,
  TrendingUp,
  PhoneCall
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Home = () => {
  const [callbackOpen, setCallbackOpen] = useState(false);

  const advantages = [
    {
      icon: Banknote,
      title: "Без комиссии",
      description: "Не берем денег с покупателей новостроек"
    },
    {
      icon: FileCheck,
      title: "Лучшие ипотечные предложения",
      description: "Помогаем бесплатно оформить ипотеку"
    },
    {
      icon: HomeIcon,
      title: "Без договора",
      description: "Не заключаем договор поиска и подбора объектов для новостроек"
    },
    {
      icon: Gift,
      title: "Бонусы и подарки",
      description: "Сертификаты и подарки при покупке квартиры"
    }
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Довольных клиентов" },
    { value: 12, suffix: "", label: "Лет на рынке" },
    { value: 150, suffix: "+", label: "Объектов в каталоге" },
    { value: 98, suffix: "%", label: "Одобрение ипотеки" }
  ];

  const services = [
    {
      icon: Building2,
      title: "Новостройки",
      description: "Прямые договоры с застройщиками Краснодара и края"
    },
    {
      icon: MapPin,
      title: "Подбор квартиры",
      description: "Поможем выбрать идеальную квартиру под ваши требования"
    },
    {
      icon: FileCheck,
      title: "Ипотека",
      description: "Оформление ипотеки под минимальный процент"
    },
    {
      icon: Shield,
      title: "Юридическая поддержка",
      description: "Полное сопровождение сделки от и до"
    }
  ];

  const districts = [
    {
      name: "ЦМР",
      description: "Центральный микрорайон",
      projects: 15,
      minPrice: "от 3.5 млн ₽"
    },
    {
      name: "ФМР",
      description: "Фестивальный микрорайон",
      projects: 12,
      minPrice: "от 3.2 млн ₽"
    },
    {
      name: "ЮМР",
      description: "Юбилейный микрорайон",
      projects: 8,
      minPrice: "от 2.9 млн ₽"
    },
    {
      name: "ЧМР",
      description: "Черемушки",
      projects: 10,
      minPrice: "от 3.8 млн ₽"
    },
    {
      name: "ПМР",
      description: "Прикубанский округ",
      projects: 20,
      minPrice: "от 2.8 млн ₽"
    },
    {
      name: "КМР",
      description: "Карасунский округ",
      projects: 18,
      minPrice: "от 3.0 млн ₽"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation onOpenCallback={() => setCallbackOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 pt-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              АГЕНТСТВО НЕДВИЖИМОСТИ
              <br />
              КУБАНЬ НОВОСТРОЙ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Официальный представитель застройщиков Краснодарского края
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => setCallbackOpen(true)}
                className="min-w-[200px]"
              >
                Горящие предложения
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="min-w-[200px]"
              >
                Каталог объектов
              </Button>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/10"
              >
                <advantage.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Кубань Новострой в цифрах
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <service.icon className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section id="catalog" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Районы Краснодара
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите район для просмотра доступных новостроек
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((district, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{district.name}</h3>
                    <p className="text-sm text-muted-foreground">{district.description}</p>
                  </div>
                  <MapPin className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Проектов:</span>
                    <span className="font-semibold">{district.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Цены:</span>
                    <span className="font-semibold text-primary">{district.minPrice}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => setCallbackOpen(true)}
                >
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-2">Официальный представитель</h3>
              <p className="text-muted-foreground">
                Прямые договоры с ведущими застройщиками региона
              </p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-2">Опытная команда</h3>
              <p className="text-muted-foreground">
                Более 12 лет помогаем людям найти идеальное жилье
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-2">Выгодные условия</h3>
              <p className="text-muted-foreground">
                Скидки от застройщиков и помощь в получении ипотеки
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <PhoneCall className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы найти квартиру мечты?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку и получите персональную подборку объектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setCallbackOpen(true)}
              className="min-w-[200px]"
            >
              Получить консультацию
            </Button>
            <a href="tel:+79034592564">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 border-white text-white hover:bg-white/20">
                Позвонить сейчас
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </div>
  );
};

export default Home;