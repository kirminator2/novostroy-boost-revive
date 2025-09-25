import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Елена Михайлова",
      role: "Купила 2-комнатную квартиру",
      content: "Ребята помогли оформить семейную ипотеку под 5%. Сэкономила 380 000₽ благодаря скидке от застройщика. Всё оформили за 3 дня!",
      rating: 5,
      date: "2 недели назад",
      savings: "380 000₽",
    },
    {
      id: 2,
      name: "Александр Петров",
      role: "IT-специалист",
      content: "Оформил IT-ипотеку под 3.5%! Не думал, что это возможно. Команда проверила все банки и нашла лучшие условия. Рекомендую!",
      rating: 5,
      date: "1 месяц назад",
      savings: "420 000₽",
    },
    {
      id: 3,
      name: "Семья Ивановых",
      role: "Купили 3-комнатную квартиру",
      content: "Искали квартиру полгода сами, потом обратились сюда. За неделю нашли идеальный вариант со скидкой 500 000₽. Спасибо огромное!",
      rating: 5,
      date: "3 недели назад",
      savings: "500 000₽",
    },
  ];

  const stats = [
    { value: 4.9, label: "Средний рейтинг", suffix: "/5" },
    { value: 2324, label: "Довольных клиентов", suffix: "+" },
    { value: 98, label: "Одобрение ипотеки", suffix: "%" },
    { value: 15, label: "Минут на заявку", suffix: " мин" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">Отзывы клиентов</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Истории <span className="gradient-text">успеха</span> наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 2000 семей уже живут в квартирах своей мечты
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-6 hover-lift animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
              </div>

              <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Сэкономлено</p>
                    <p className="font-bold text-primary">{testimonial.savings}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-xl">🏆</span>
            </div>
            <div>
              <p className="font-semibold">Лучшее агентство</p>
              <p className="text-sm">Краснодара 2023</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-xl">✅</span>
            </div>
            <div>
              <p className="font-semibold">Проверено</p>
              <p className="text-sm">Росреестром</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-xl">🤝</span>
            </div>
            <div>
              <p className="font-semibold">25 банков</p>
              <p className="text-sm">партнёров</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}