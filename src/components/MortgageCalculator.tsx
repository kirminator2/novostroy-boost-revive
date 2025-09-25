import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, Home, Percent, Calendar } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

interface MortgageCalculatorProps {
  onOpenQuiz: () => void;
}

export function MortgageCalculator({ onOpenQuiz }: MortgageCalculatorProps) {
  const [propertyPrice, setPropertyPrice] = useState([5000000]);
  const [downPayment, setDownPayment] = useState([1000000]);
  const [interestRate, setInterestRate] = useState([7.5]);
  const [loanTerm, setLoanTerm] = useState([20]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = propertyPrice[0] - downPayment[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const months = loanTerm[0] * 12;
    
    if (principal > 0 && monthlyRate > 0 && months > 0) {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      setMonthlyPayment(Math.round(payment));
    }
  }, [propertyPrice, downPayment, interestRate, loanTerm]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Интерактивный калькулятор</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Рассчитайте свою <span className="gradient-text">ипотеку</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте точную сумму ежемесячного платежа и подберите оптимальные условия
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator inputs */}
          <Card className="p-8 shadow-xl hover-lift">
            <div className="space-y-8">
              {/* Property Price */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    <label className="font-semibold">Стоимость квартиры</label>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    ₽{formatNumber(propertyPrice[0])}
                  </span>
                </div>
                <Slider
                  value={propertyPrice}
                  onValueChange={setPropertyPrice}
                  min={1000000}
                  max={20000000}
                  step={100000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₽1 млн</span>
                  <span>₽20 млн</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    <label className="font-semibold">Первоначальный взнос</label>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    ₽{formatNumber(downPayment[0])}
                  </span>
                </div>
                <Slider
                  value={downPayment}
                  onValueChange={setDownPayment}
                  min={0}
                  max={propertyPrice[0] * 0.5}
                  step={50000}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₽0</span>
                  <span>{Math.round((downPayment[0] / propertyPrice[0]) * 100)}%</span>
                  <span>₽{formatNumber(propertyPrice[0] * 0.5)}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Percent className="w-5 h-5 text-primary" />
                    <label className="font-semibold">Процентная ставка</label>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {interestRate[0]}%
                  </span>
                </div>
                <Slider
                  value={interestRate}
                  onValueChange={setInterestRate}
                  min={3.5}
                  max={15}
                  step={0.1}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>3.5%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <label className="font-semibold">Срок кредита</label>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    {loanTerm[0]} лет
                  </span>
                </div>
                <Slider
                  value={loanTerm}
                  onValueChange={setLoanTerm}
                  min={5}
                  max={30}
                  step={1}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 лет</span>
                  <span>30 лет</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="p-8 gradient-primary text-white shadow-xl animate-pulse-glow">
              <div className="text-center">
                <p className="text-lg mb-2 text-white/90">Ежемесячный платёж</p>
                <div className="text-5xl font-bold mb-4">
                  ₽<AnimatedCounter end={monthlyPayment} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/20">
                  <div>
                    <p className="text-sm text-white/70">Сумма кредита</p>
                    <p className="text-xl font-semibold">₽{formatNumber(propertyPrice[0] - downPayment[0])}</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Переплата</p>
                    <p className="text-xl font-semibold">
                      ₽{formatNumber(Math.round(monthlyPayment * loanTerm[0] * 12 - (propertyPrice[0] - downPayment[0])))}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent/10 border-accent/20">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Специальное предложение
              </h3>
              <p className="mb-4 text-muted-foreground">
                Получите индивидуальные условия и скидку до 500 000₽ на квартиру вашей мечты
              </p>
              <Button 
                onClick={onOpenQuiz}
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                size="lg"
              >
                Получить персональное предложение
              </Button>
            </Card>

            <Card className="p-6 border-primary/20">
              <h3 className="font-bold text-lg mb-3">Государственные программы:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">Семейная ипотека</span>
                  <span className="text-primary font-bold">от 5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">IT-ипотека</span>
                  <span className="text-primary font-bold">от 3.5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">Дальневосточная</span>
                  <span className="text-primary font-bold">от 2%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}