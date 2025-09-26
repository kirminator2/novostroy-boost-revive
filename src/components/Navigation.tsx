import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Navigation({ onOpenCallback }: { onOpenCallback: () => void }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Кубань Новострой" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Главная
            </Link>
            <Link
              to="/mortgage"
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === "/mortgage" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Ипотека
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79034592564"
              className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span>8 (903) 459-25-64</span>
            </a>
            <Button onClick={onOpenCallback} variant="default">
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                to="/mortgage"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === "/mortgage" ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ипотека
              </Link>
              <a
                href="tel:+79034592564"
                className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>8 (903) 459-25-64</span>
              </a>
              <Button onClick={onOpenCallback} variant="default" className="w-full">
                Заказать звонок
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}