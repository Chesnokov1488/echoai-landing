import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/6aece514-3cc0-42f4-9515-e7ca17797a4d.png" 
              alt="EchoAI" 
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold tracking-tight">EchoAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Начать
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <Badge variant="outline" className="border-primary text-primary px-4 py-1">
              ИИ-технология нового поколения
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Анализ звонков и переписок <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">
                с помощью ИИ
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              EchoAI автоматически анализирует коммуникации ваших менеджеров, 
              выявляет проблемы и помогает повысить эффективность продаж
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-glow">
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg font-semibold">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            {[
              { icon: "Phone", value: "10,000+", label: "звонков проанализировано" },
              { icon: "MessageSquare", value: "50,000+", label: "переписок обработано" },
              { icon: "TrendingUp", value: "35%", label: "рост конверсии" }
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all">
                <Icon name={stat.icon} className="text-primary mb-4" size={32} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-muted-foreground">
              Все инструменты для контроля качества коммуникаций в одном месте
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Headphones",
                title: "Анализ звонков",
                description: "Автоматическая расшифровка и анализ всех телефонных разговоров менеджеров с клиентами"
              },
              {
                icon: "MessagesSquare",
                title: "Анализ переписок",
                description: "Оценка качества текстовых коммуникаций в мессенджерах и чатах"
              },
              {
                icon: "BarChart3",
                title: "Детальная аналитика",
                description: "Понятные отчеты с метриками эффективности и рекомендациями по улучшению"
              },
              {
                icon: "AlertCircle",
                title: "Выявление проблем",
                description: "ИИ находит типичные ошибки менеджеров и предлагает пути их решения"
              },
              {
                icon: "UserCheck",
                title: "Оценка менеджеров",
                description: "Объективная оценка работы каждого сотрудника на основе данных"
              },
              {
                icon: "Zap",
                title: "Интеграции",
                description: "Подключение к CRM, телефонии и популярным мессенджерам"
              }
            ].map((feature, i) => (
              <Card key={i} className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={feature.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Тарифные планы
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите план, который подходит вашему бизнесу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Стартовый",
                price: "9 990",
                period: "месяц",
                description: "Для небольших команд",
                features: [
                  "До 500 звонков в месяц",
                  "Анализ переписок",
                  "Базовая аналитика",
                  "Email поддержка",
                  "1 пользователь"
                ],
                popular: false
              },
              {
                name: "Профессиональный",
                price: "24 990",
                period: "месяц",
                description: "Для растущих компаний",
                features: [
                  "До 2000 звонков в месяц",
                  "Расширенная аналитика",
                  "Интеграция с CRM",
                  "Приоритетная поддержка",
                  "До 5 пользователей",
                  "API доступ"
                ],
                popular: true
              },
              {
                name: "Корпоративный",
                price: "59 990",
                period: "месяц",
                description: "Для крупного бизнеса",
                features: [
                  "Неограниченно звонков",
                  "Все возможности",
                  "Персональный менеджер",
                  "SLA 99.9%",
                  "Неограниченно пользователей",
                  "Кастомные интеграции"
                ],
                popular: false
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 relative ${
                  plan.popular 
                    ? 'border-2 border-primary bg-card/80 scale-105' 
                    : 'bg-card/50 border-border'
                } hover:border-primary transition-all`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Популярный
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">₽/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-muted hover:bg-muted/80'
                  } font-semibold`}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Остались вопросы? Мы всегда на связи
            </p>
          </div>

          <Card className="p-8 bg-card/80 border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input placeholder="Ваше имя" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..." 
                  className="bg-background min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                Отправить сообщение
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "Mail", title: "Email", value: "hello@echoai.ru" },
              { icon: "Phone", title: "Телефон", value: "+7 (495) 123-45-67" },
              { icon: "MapPin", title: "Адрес", value: "Москва, Россия" }
            ].map((contact, i) => (
              <div key={i} className="space-y-2">
                <Icon name={contact.icon} className="text-primary mx-auto" size={28} />
                <div className="font-semibold">{contact.title}</div>
                <div className="text-sm text-muted-foreground">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/6aece514-3cc0-42f4-9515-e7ca17797a4d.png" 
                alt="EchoAI" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">EchoAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EchoAI. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
