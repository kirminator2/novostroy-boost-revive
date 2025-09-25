import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">КубаньНовострой</h3>
            <p className="text-muted mb-4">
              Ваш надежный партнер в мире недвижимости Краснодара с 2010 года
            </p>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">14</span>
              </div>
              <span className="text-sm">лет на рынке</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:+79034592564" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +7 (903) 459-25-64
              </a>
              <a href="mailto:info@kubannov.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@kubannov.ru
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>г. Краснодар,<br />Восточно-Кругликовская 48/2</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Ежедневно 9:00 - 19:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Подбор квартиры</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Оформление ипотеки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Юридическое сопровождение</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trade-in недвижимости</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Программы</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Семейная ипотека</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IT-ипотека</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Сельская ипотека</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Военная ипотека</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center text-sm text-muted">
          <p>© 2024 КубаньНовострой. Все права защищены.</p>
          <p className="mt-2">ИНН 2312345678 | ОГРН 1102312345678</p>
        </div>
      </div>
    </footer>
  );
}