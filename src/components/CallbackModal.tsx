import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface CallbackModalProps {
  open: boolean;
  onClose: () => void;
}

export function CallbackModal({ open, onClose }: CallbackModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    toast.success("Заявка отправлена!", {
      description: "Мы перезвоним вам в течение 15 минут",
    });
    
    onClose();
    setName("");
    setPhone("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary" />
            Заказать обратный звонок
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="callback-name">Ваше имя</Label>
              <Input
                id="callback-name"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="callback-phone">Номер телефона</Label>
              <Input
                id="callback-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2"
                required
              />
            </div>
          </div>

          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Время работы
            </h4>
            <p className="text-sm text-muted-foreground">
              Ежедневно с 9:00 до 19:00
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Среднее время ожидания звонка: 10 минут
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Бесплатная консультация</p>
                <p className="text-muted-foreground">Ответим на все вопросы по ипотеке и недвижимости</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium">Без спама</p>
                <p className="text-muted-foreground">Позвоним только один раз по вашей заявке</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Жду звонка
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}