import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, CheckCircle2, Home, Users, Banknote, Phone } from "lucide-react";
import { toast } from "sonner";

interface QuizProps {
  open: boolean;
  onClose: () => void;
}

interface QuizData {
  propertyType: string;
  budget: string;
  program: string;
  name: string;
  phone: string;
}

export function Quiz({ open, onClose }: QuizProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuizData>({
    propertyType: "",
    budget: "",
    program: "",
    name: "",
    phone: "",
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Спасибо! Мы свяжемся с вами в течение 15 минут", {
      description: "Наш специалист подготовит для вас персональное предложение",
    });
    onClose();
    setStep(1);
    setData({
      propertyType: "",
      budget: "",
      program: "",
      name: "",
      phone: "",
    });
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return data.propertyType !== "";
      case 2: return data.budget !== "";
      case 3: return data.program !== "";
      case 4: return data.name !== "";
      case 5: return data.phone !== "";
      default: return false;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="gradient-primary text-white p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              Узнайте ваши условия по ипотеке
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Progress value={progress} className="h-2 bg-white/20" />
            <p className="text-sm mt-2 text-white/80">Шаг {step} из {totalSteps}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Property Type */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Какую недвижимость рассматриваете?</h3>
              </div>
              <RadioGroup value={data.propertyType} onValueChange={(value) => setData({ ...data, propertyType: value })}>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="studio" />
                    <span>Студия</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="1room" />
                    <span>1-комнатная</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="2room" />
                    <span>2-комнатная</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="3room" />
                    <span>3-комнатная и более</span>
                  </label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 2: Budget */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Banknote className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Ваш бюджет на покупку?</h3>
              </div>
              <RadioGroup value={data.budget} onValueChange={(value) => setData({ ...data, budget: value })}>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="2-3" />
                    <span>2-3 млн ₽</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="3-5" />
                    <span>3-5 млн ₽</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="5-7" />
                    <span>5-7 млн ₽</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="7+" />
                    <span>Более 7 млн ₽</span>
                  </label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Mortgage Program */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Какая программа вам подходит?</h3>
              </div>
              <RadioGroup value={data.program} onValueChange={(value) => setData({ ...data, program: value })}>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="family" />
                    <div>
                      <span className="font-medium">Семейная ипотека</span>
                      <p className="text-sm text-muted-foreground">Для семей с детьми, ставка от 5%</p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="it" />
                    <div>
                      <span className="font-medium">IT-ипотека</span>
                      <p className="text-sm text-muted-foreground">Для IT-специалистов, ставка от 3.5%</p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="standard" />
                    <div>
                      <span className="font-medium">Стандартная ипотека</span>
                      <p className="text-sm text-muted-foreground">Базовые условия от банков</p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted transition-colors">
                    <RadioGroupItem value="unknown" />
                    <div>
                      <span className="font-medium">Не знаю / Нужна консультация</span>
                      <p className="text-sm text-muted-foreground">Поможем подобрать оптимальную программу</p>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Name */}
          {step === 4 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Как к вам обращаться?</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Phone */}
          {step === 5 && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Куда отправить результаты?</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-green-900 dark:text-green-100">Что вы получите:</p>
                      <ul className="mt-2 space-y-1 text-green-800 dark:text-green-200">
                        <li>• Персональную подборку квартир</li>
                        <li>• Расчёт ипотеки в 25 банках</li>
                        <li>• Скидки до 500 000₽</li>
                        <li>• Консультацию эксперта</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Назад
            </Button>
            
            {step < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90"
              >
                Далее
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white"
              >
                Получить результаты
                <CheckCircle2 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}