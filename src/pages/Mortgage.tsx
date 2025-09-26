import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { Quiz } from "@/components/Quiz";
import { CallbackModal } from "@/components/CallbackModal";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingDown, 
  Clock, 
  Shield, 
  CheckCircle, 
  Calculator,
  FileText,
  Users,
  Building
} from "lucide-react";

const Mortgage = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  const benefits = [
    {
      icon: TrendingDown,
      title: "Ставка от 5.9%",
      description: "Специальные условия от банков-партнеров"
    },
    {
      icon: Clock,
      title: "Быстрое одобрение",
      description: "Решение за 1 день по 15 банкам"
    },
    {
      icon: Shield,
      title: "Без скрытых платежей",
      description: "Прозрачные условия и полное сопровождение"
    },
    {
      icon: CheckCircle,
      title: "98% одобрения",
      description: "Подберем банк даже в сложных случаях"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Заявка",
      description: "Оставьте заявку на сайте или позвоните нам"
    },
    {
      number: "02",
      title: "Подбор программы",
      description: "Анализируем предложения 15+ банков"
    },
    {
      number: "03",
      title: "Одобрение",
      description: "Получаем решение за 1-2 дня"
    },
    {
      number: "04",
      title: "Сделка",
      description: "Сопровождаем до получения ключей"
    }
  ];

  const banks = [
    "Сбербанк",
    "ВТБ",
    "Газпромбанк",
    "Альфа-Банк",
    "Россельхозбанк",
    "Промсвязьбанк",
    "Открытие",
    "Совкомбанк",
    "Райффайзенбанк",
    "ДОМ.РФ",
    "Росбанк",
    "Уралсиб"
  ];

  return (
    <div className="min-h-screen">
      <Navigation onOpenCallback={() => setCallbackOpen(true)} />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ипотека в Краснодаре
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                от 5.9% годовых
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Поможем получить одобрение в 15 банках за 1 день
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setQuizOpen(true)}
              >
                Рассчитать ипотеку
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setCallbackOpen(true)}
              >
                Получить консультацию
              </Button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ипотечный калькулятор
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Рассчитайте примерную стоимость ипотеки и узнайте доступные программы
          </p>
          <MortgageCalculator onOpenQuiz={() => setQuizOpen(true)} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banks Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Банки-партнеры
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Работаем с ведущими банками для получения лучших условий
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Building className="w-8 h-8 mx-auto mb-3 text-primary/60" />
                <p className="font-medium">{bank}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ипотечные программы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <FileText className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-3">Семейная ипотека</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ставка от 5.9%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Первый взнос от 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>До 30 лет</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-3">IT-ипотека</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ставка от 4.9%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Первый взнос от 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>До 30 лет</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Calculator className="w-12 h-12 mb-4 text-primary" />
              <h3 className="font-semibold text-xl mb-3">Стандартная ипотека</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ставка от 12.5%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Первый взнос от 20%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>До 30 лет</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Нужна помощь с ипотекой?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наши эксперты помогут подобрать оптимальную программу и получить одобрение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setQuizOpen(true)}
              >
                Подобрать ипотеку
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => setCallbackOpen(true)}
              >
                Заказать звонок
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      
      <Quiz open={quizOpen} onClose={() => setQuizOpen(false)} />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </div>
  );
};

export default Mortgage;