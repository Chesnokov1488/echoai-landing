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
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <a 
              href="https://t.me/EchoAI_Product" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-all group"
            >
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
          </div>
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
            <div className="flex justify-center pt-4">
              <a href="https://t.me/EchoAI_CEO" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-glow">
                  Попробовать бесплатно
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            {[
              { icon: "Phone", value: "10,000+", label: "звонков проанализировано" },
              { icon: "MessageSquare", value: "50,000+", label: "переписок обработано" },
              { icon: "TrendingUp", value: "98%", label: "конверсии" }
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all">
                <Icon name={stat.icon} className="text-primary mb-4" size={32} />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <a 
              href="https://docs.google.com/presentation/d/1VpeW7Z4xRS_lFf-GXb9jU9lcUHQsBTRa3atk-WwK4ck/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="p-8 bg-card/50 border-border hover:border-primary transition-all hover:scale-[1.02] cursor-pointer group">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                      <Icon name="FileSpreadsheet" className="text-green-600" size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Презентация продукта</h3>
                    <p className="text-muted-foreground mb-4">Подробная информация о возможностях EchoAI, кейсах использования и результатах внедрения</p>
                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Открыть презентацию</span>
                      <Icon name="ExternalLink" size={18} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
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
              Тарифный план
            </h2>
            <p className="text-xl text-muted-foreground">
              Простая и прозрачная модель оплаты
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-10 border-2 border-primary bg-card/80">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-3">Pay-as-you-go</h3>
                <p className="text-muted-foreground">Платите только за то, что используете</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Zap" className="text-primary" size={24} />
                    <span className="font-semibold">Подключение</span>
                  </div>
                  <span className="text-2xl font-bold">10,000 ₽</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <span className="font-semibold">Анализ звонков</span>
                  </div>
                  <span className="text-2xl font-bold">2 ₽<span className="text-sm text-muted-foreground font-normal">/минута</span></span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="MessageSquare" className="text-primary" size={24} />
                    <span className="font-semibold">Анализ переписок</span>
                  </div>
                  <span className="text-2xl font-bold">2 ₽<span className="text-sm text-muted-foreground font-normal">/10K символов</span></span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm">Без ежемесячной абонентской платы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm">Неограниченное количество пользователей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm">Полный доступ ко всем возможностям</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm">Интеграция с CRM и телефонией</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-sm">Техническая поддержка 24/7</span>
                </li>
              </ul>
              
              <a href="https://t.me/EchoAI_CEO" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                  Начать работу
                </Button>
              </a>
            </Card>
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

          <a 
            href="https://t.me/EchoAI_CEO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block max-w-md mx-auto"
          >
            <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary transition-all hover:scale-105 cursor-pointer group">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all group-hover:scale-110">
                  <svg className="w-14 h-14 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Написать в Telegram</h3>
                  <p className="text-muted-foreground">Ответим в течение 15 минут</p>
                </div>
              </div>
            </Card>
          </a>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;