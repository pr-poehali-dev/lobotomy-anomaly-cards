import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const anomalies = [
  {
    id: 1,
    number: "O-01-12",
    name: "Одноглазая птица",
    riskClass: "TETH",
    workType: "Инстинкт",
    description: "Аномалия в виде большой черной птицы с одним глазом",
    detailedDescription:
      "Одноглазая птица - это большая черная птица с единственным глазом в центре головы. Она проявляет агрессивность к сотрудникам, которые работают с ней слишком долго. При работе с аномалией необходимо соблюдать осторожность и не превышать рекомендованное время контакта.",
    image: "/img/c288f91d-3cd3-45e9-be9b-75d67b9a0f07.jpg",
    stats: {
      hp: 400,
      mentalResistance: "Низкая",
      physicalResistance: "Средняя",
    },
    ego: {
      weapon: {
        name: "Перо наблюдения",
        damage: "12-16",
        attackSpeed: "Средняя",
        range: "Короткая",
        description: "Длинное черное перо, заточенное до остроты лезвия. При атаке выпускает тёмную энергию."
      },
      armor: {
        name: "Плащ одноглазого",
        defense: "RED: 0.8, WHITE: 1.2, BLACK: 0.6, PALE: 2.0",
        description: "Темный плащ из перьев, дающий защиту от физических атак."
      },
      gift: {
        name: "Третий глаз",
        effect: "+2 Благоразумие",
        description: "Небольшой глаз, появляющийся на лбу носителя. Улучшает способность видеть скрытые угрозы."
      }
    }
  },
  {
    id: 2,
    number: "T-01-75",
    name: "Маленький принц",
    riskClass: "HE",
    workType: "Привязанность",
    description: "Гуманоидная аномалия в виде ребенка в королевской одежде",
    detailedDescription:
      "Маленький принц выглядит как ребенок в богатой королевской одежде. Он крайне требователен к вниманию и может стать опасным, если им пренебрегать. Аномалия обладает способностью контролировать эмоции сотрудников.",
    image: "/img/c288f91d-3cd3-45e9-be9b-75d67b9a0f07.jpg",
    stats: {
      hp: 600,
      mentalResistance: "Высокая",
      physicalResistance: "Низкая",
    },
    ego: {
      weapon: {
        name: "Золотая роза",
        damage: "4-7",
        attackSpeed: "Быстрая",
        range: "Длинная",
        description: "Элегантная золотая роза на длинном стебле. Способна очаровывать врагов."
      },
      armor: {
        name: "Королевские одежды",
        defense: "RED: 1.5, WHITE: 0.5, BLACK: 1.0, PALE: 0.8",
        description: "Роскошные королевские одежды, защищающие от ментальных атак."
      },
      gift: {
        name: "Корона принца",
        effect: "+3 Благоразумие, +1 Справедливость",
        description: "Миниатюрная золотая корона. Повышает лидерские качества и мудрость."
      }
    }
  },
  {
    id: 3,
    number: "O-02-56",
    name: "Необходимость",
    riskClass: "WAW",
    workType: "Понимание",
    description: "Механическое устройство неизвестного происхождения",
    detailedDescription:
      "Необходимость представляет собой сложное механическое устройство, функции которого до конца не изучены. Аномалия реагирует на присутствие сотрудников и может активироваться в случае неправильного обращения.",
    image: "/img/c288f91d-3cd3-45e9-be9b-75d67b9a0f07.jpg",
    stats: {
      hp: 800,
      mentalResistance: "Средняя",
      physicalResistance: "Высокая",
    },
    ego: {
      weapon: {
        name: "Механический молот",
        damage: "20-26",
        attackSpeed: "Медленная",
        range: "Короткая",
        description: "Тяжелый механический молот с паровым двигателем. Наносит сокрушительные удары."
      },
      armor: {
        name: "Механическая броня",
        defense: "RED: 0.3, WHITE: 1.5, BLACK: 0.8, PALE: 1.2",
        description: "Сложная механическая броня с множеством шестерёнок и трубок."
      },
      gift: {
        name: "Механическое сердце",
        effect: "+4 Стойкость, +2 Благоразумие",
        description: "Небольшое механическое устройство, заменяющее сердце. Повышает выносливость."
      }
    }
  },
  {
    id: 4,
    number: "O-01-04",
    name: "Старая дама",
    riskClass: "TETH",
    workType: "Инстинкт",
    description: "Пожилая женщина в черном платье",
    detailedDescription:
      "Старая дама выглядит как обычная пожилая женщина, но обладает аномальными свойствами. Она может влиять на психическое состояние сотрудников, вызывая у них чувство тревоги и страха.",
    image: "/img/c288f91d-3cd3-45e9-be9b-75d67b9a0f07.jpg",
    stats: {
      hp: 350,
      mentalResistance: "Средняя",
      physicalResistance: "Низкая",
    },
    ego: {
      weapon: {
        name: "Трость скорби",
        damage: "8-12",
        attackSpeed: "Медленная",
        range: "Средняя",
        description: "Старая деревянная трость с серебряным набалдашником. Вызывает печаль у врагов."
      },
      armor: {
        name: "Траурное платье",
        defense: "RED: 1.2, WHITE: 0.6, BLACK: 1.0, PALE: 0.9",
        description: "Старое черное платье, источающее ауру печали и меланхолии."
      },
      gift: {
        name: "Старые воспоминания",
        effect: "+2 Благоразумие, +1 Справедливость",
        description: "Древние воспоминания, хранящие мудрость прошлых лет."
      }
    }
  },
  {
    id: 5,
    number: "T-09-09",
    name: "Красные туфельки",
    riskClass: "HE",
    workType: "Привязанность",
    description: "Пара красных женских туфель на высоком каблуке",
    detailedDescription:
      "Красные туфельки кажутся обычной парой женской обуви, но обладают способностью контролировать того, кто их надевает. Аномалия заставляет жертву танцевать до изнеможения.",
    image: "/img/c288f91d-3cd3-45e9-be9b-75d67b9a0f07.jpg",
    stats: {
      hp: 450,
      mentalResistance: "Низкая",
      physicalResistance: "Средняя",
    },
    ego: {
      weapon: {
        name: "Танец смерти",
        damage: "14-18",
        attackSpeed: "Очень быстрая",
        range: "Короткая",
        description: "Элегантные красные туфли, позволяющие наносить быстрые атаки в танце."
      },
      armor: {
        name: "Платье танцовщицы",
        defense: "RED: 0.9, WHITE: 0.7, BLACK: 1.3, PALE: 1.1",
        description: "Красивое красное платье, дающее свободу движений и защиту от проклятий."
      },
      gift: {
        name: "Ритм танца",
        effect: "+3 Справедливость, +2 Стойкость",
        description: "Внутренний ритм, улучшающий координацию и скорость реакции."
      }
    }
  },
  {
    id: 6,
    number: "O-05-76",
    name: "Король отчаяния",
    riskClass: "ALEPH",
    workType: "Понимание",
    description: "Крайне опасная аномалия высшего класса риска",
    detailedDescription:
      "Король отчаяния - одна из самых опасных аномалий в корпорации. Его истинная форма неизвестна, но его влияние на окружающих крайне разрушительно. Работа с этой аномалией требует максимального уровня подготовки.",
    image: "/img/c288f91d-3cd3-45e9-be9b-75d67b9a0f07.jpg",
    stats: {
      hp: 1200,
      mentalResistance: "Крайне высокая",
      physicalResistance: "Крайне высокая",
    },
    ego: {
      weapon: {
        name: "Клинок отчаяния",
        damage: "35-45",
        attackSpeed: "Средняя",
        range: "Длинная",
        description: "Проклятый клинок из чистого отчаяния. Каждый удар высасывает надежду из противника."
      },
      armor: {
        name: "Доспехи короля",
        defense: "RED: 0.2, WHITE: 0.1, BLACK: 0.3, PALE: 0.5",
        description: "Легендарные доспехи, выкованные из материализованного отчаяния."
      },
      gift: {
        name: "Корона отчаяния",
        effect: "+5 Благоразумие, +3 Справедливость, +2 Стойкость",
        description: "Корона абсолютной власти. Дарует огромную силу, но за высокую цену."
      }
    }
  },
];

const riskClassColors = {
  ZAYIN: "bg-green-600",
  TETH: "bg-blue-600",
  HE: "bg-yellow-600",
  WAW: "bg-purple-600",
  ALEPH: "bg-red-600",
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRiskClass, setSelectedRiskClass] = useState<string | null>(
    null,
  );

  const filteredAnomalies = anomalies.filter((anomaly) => {
    const matchesSearch =
      anomaly.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRiskClass =
      !selectedRiskClass || anomaly.riskClass === selectedRiskClass;
    return matchesSearch && matchesRiskClass;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
        <div className="relative max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img
              src="/img/aa6d390b-4282-4202-9797-0bebc62cc79a.jpg"
              alt="Warning"
              className="w-16 h-16 mx-auto mb-4 opacity-80"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-primary">
            LOBOTOMY CORPORATION
          </h1>
          <p className="text-xl mb-4 text-muted-foreground">
            СИСТЕМА КАТАЛОГИЗАЦИИ АНОМАЛИЙ
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Секретная база данных аномальных объектов, содержащихся в
            корпорации. Доступ ограничен. Соблюдайте протоколы безопасности.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-destructive">
              <Icon name="AlertTriangle" size={20} />
              <span className="text-sm font-medium">
                УРОВЕНЬ УГРОЗЫ: ВЫСОКИЙ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск по номеру или названию аномалии..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedRiskClass === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedRiskClass(null)}
            >
              Все классы
            </Button>
            {Object.keys(riskClassColors).map((riskClass) => (
              <Button
                key={riskClass}
                variant={
                  selectedRiskClass === riskClass ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedRiskClass(riskClass)}
                className={
                  selectedRiskClass === riskClass
                    ? `${riskClassColors[riskClass as keyof typeof riskClassColors]} text-white`
                    : ""
                }
              >
                {riskClass}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Anomalies Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Icon name="Database" size={24} />
              КАТАЛОГ АНОМАЛИЙ
            </h2>
            <p className="text-muted-foreground">
              Найдено: {filteredAnomalies.length} объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAnomalies.map((anomaly) => (
              <Dialog key={anomaly.id}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:bg-card/80 transition-all duration-300 animate-fade-in border-border">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          className={`${riskClassColors[anomaly.riskClass as keyof typeof riskClassColors]} text-white font-bold`}
                        >
                          {anomaly.riskClass}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-mono">
                          {anomaly.number}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{anomaly.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video mb-3 bg-muted rounded-lg overflow-hidden">
                        <img
                          src={anomaly.image}
                          alt={anomaly.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardDescription className="text-sm">
                        {anomaly.description}
                      </CardDescription>
                      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Briefcase" size={16} />
                        <span>Тип работы: {anomaly.workType}</span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        className={`${riskClassColors[anomaly.riskClass as keyof typeof riskClassColors]} text-white font-bold`}
                      >
                        {anomaly.riskClass}
                      </Badge>
                      <span className="text-sm text-muted-foreground font-mono">
                        {anomaly.number}
                      </span>
                    </div>
                    <DialogTitle className="text-2xl">
                      {anomaly.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img
                        src={anomaly.image}
                        alt={anomaly.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="FileText" size={16} />
                        ОПИСАНИЕ
                      </h3>
                      <p className="text-muted-foreground">
                        {anomaly.detailedDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Activity" size={16} />
                          ХАРАКТЕРИСТИКИ
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>HP:</span>
                            <span className="text-primary">
                              {anomaly.stats.hp}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ментальная защита:</span>
                            <span>{anomaly.stats.mentalResistance}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Физическая защита:</span>
                            <span>{anomaly.stats.physicalResistance}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Briefcase" size={16} />
                          РАБОЧИЕ ПРОТОКОЛЫ
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Тип работы:</span>
                            <span className="text-accent">
                              {anomaly.workType}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Класс риска:</span>
                            <Badge
                              size="sm"
                              className={`${riskClassColors[anomaly.riskClass as keyof typeof riskClassColors]} text-white`}
                            >
                              {anomaly.riskClass}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* E.G.O. Section */}
                    <div className="border-t border-border pt-6">
                      <h3 className="font-bold mb-4 flex items-center gap-2 text-lg text-primary">
                        <Icon name="Zap" size={20} />
                        E.G.O. ЭКИПИРОВКА
                      </h3>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Weapon */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Sword" size={16} className="text-red-400" />
                            <h4 className="font-semibold text-red-400">ОРУЖИЕ</h4>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                            <h5 className="font-medium text-sm">{anomaly.ego.weapon.name}</h5>
                            <div className="text-xs space-y-1">
                              <div className="flex justify-between">
                                <span>Урон:</span>
                                <span className="text-primary">{anomaly.ego.weapon.damage}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Скорость:</span>
                                <span>{anomaly.ego.weapon.attackSpeed}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Дальность:</span>
                                <span>{anomaly.ego.weapon.range}</span>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {anomaly.ego.weapon.description}
                            </p>
                          </div>
                        </div>

                        {/* Armor */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Shield" size={16} className="text-blue-400" />
                            <h4 className="font-semibold text-blue-400">БРОНЯ</h4>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                            <h5 className="font-medium text-sm">{anomaly.ego.armor.name}</h5>
                            <div className="text-xs">
                              <span className="text-muted-foreground">Защита:</span>
                              <div className="mt-1 text-xs font-mono">
                                {anomaly.ego.armor.defense}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {anomaly.ego.armor.description}
                            </p>
                          </div>
                        </div>

                        {/* Gift */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Gift" size={16} className="text-purple-400" />
                            <h4 className="font-semibold text-purple-400">ДАР</h4>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                            <h5 className="font-medium text-sm">{anomaly.ego.gift.name}</h5>
                            <div className="text-xs">
                              <span className="text-muted-foreground">Эффект:</span>
                              <div className="mt-1 text-accent font-medium">
                                {anomaly.ego.gift.effect}
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {anomaly.ego.gift.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredAnomalies.length === 0 && (
            <div className="text-center py-12">
              <Icon
                name="Search"
                size={48}
                className="mx-auto mb-4 text-muted-foreground"
              />
              <h3 className="text-xl font-semibold mb-2">
                Аномалии не найдены
              </h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 text-destructive">
            <Icon name="Shield" size={20} />
            <span className="font-medium">КОНФИДЕНЦИАЛЬНО</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Lobotomy Corporation © 2025. Вся информация классифицирована.
            Несанкционированный доступ преследуется по закону.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;