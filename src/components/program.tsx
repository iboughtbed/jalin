import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

function Content() {
  return (
    <Tabs defaultValue="digit" className="w-full text-white">
      <TabsList className="grid h-10 w-full grid-cols-4 rounded-2xl bg-[#350DA9] px-4 md:h-16">
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="sport"
        >
          <span>E- / Sport</span>
        </TabsTrigger>
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="media"
        >
          <span>Media</span>
        </TabsTrigger>
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="digit"
        >
          <span>Digit</span>
        </TabsTrigger>
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="events"
        >
          <span>Events</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="sport">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-2xl md:text-5xl">
              NIS all-stars matches, tournaments
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Матчи и турниры всех звезд старших классов (10-12 классы) по
              футболу, воллейболу и баскетболу, такие мероприятия взаимствованы
              из западных школ, целями которых является популяризация спорта у
              старших классов.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl md:text-5xl">
              NIS juniors cup
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Спортивные соревнования проводимы среди 7-9 классов по футболу,
              воллейболу и баскетболу. Аналогичные турниры но уже для учеников
              классов по младше.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Ping-Pong masters
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Спортивный турнир по настольному теннису для всех классов.
              Отличная возможность посоревноватся за звание лучшего настольного
              теннисиста нашей школы.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl md:text-5xl">
              CS:GO challenges
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Киберспортивный турнир по дисциплине контр-страйк, проводимый для
              всех классов, с взносом и соответствующим призовым фондом. При
              хорошей конкурентности есть возможность проведения турнира на
              сетевом этапе.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl md:text-5xl">
              EaFc 24 champions
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Киберспортивный турнир по футбольной дисциплине fifa, проводимый
              для всех классов, с взносом и соответствующим призовым фондом.
              Организация пройдет на базе нашей школы.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Mobile gaming cups
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Турниры по мобильным играм в онлайн (финальные этапы в оффлайн)
              формате. Регламент каждого турнира будет зависеть от самой игровой
              дисциплины.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="media">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl md:text-5xl">
              NIS recent
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Открытие новой школьной газеты. В рамках школьной газеты, мы
              предлагаем вам свежие школьные новости внутри сети Назарбаев
              Интеллектуальных Школ.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Wall of fame
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Если вы стали победителем олимпиады или внесли большой вклад в
              жизнь нашей школы, ваше имя и фото будут красоваться на главной
              страничке нашего сайта.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="digit">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Shanyraq ratings
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Совершенно новая система направленная на упрощение счета баллов в
              рейтинге шаныраков. Идея заключается в том что ученики сами могут
              публиковать свои достижения, и сквозь тщательную проверку
              модераторов, в реальном режиме будут выставлятся баллы, и будет
              виден топ-шаныраков.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Jalin.web
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Создание сайта команды имеющее информативные, развлекательные,
              образовательные цели. На нашем сайте будет публиковатся вся
              информация про предстоящие события, регистрация на возможные
              соревнования, и уроки по направленным тематикам.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Hackathon
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Организация соревновании по программированию целями которых
              являются выявление эрудированных и талантливых учащихся в сфере
              IT, и дальше возможное внедрение в более масштабные соревнования.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Nis.dev
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Сотрудничество с школьным обьединением программистов из Назарбаев
              интеллектуальных школ г.Алматы (ФМН и ХБН), в целях возможного
              создания филиала в нашем городе и создании совместных проектов в
              сфере программирования.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Jaiq hub
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Сотрудничество направленное на расширение знании учащихся школы,
              образовательные процессы, совместные мероприятия и возможность
              познать культуру стартапов, возможность участвовать в митапах с
              влиятельными разработчиками из крупных корпорации и расширение
              нетворкинга.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Courses
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Курсы, мастер-классы по мобильному программированию,
              искусственному интеллекту. В нашей команде собрались сильнейшие
              программисты с огромным багажом опыта на различных соревнованиях,
              олимпиадах областных, сетевых, республиканских, международных
              уровней, которые могут их направить на образование наших учеников
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="events">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl md:text-5xl">
              NIS society
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Возможность для каждого ученика открыть клуб/кружок по интересной
              для себя тематике. Конечно при полном взятии обязательств и
              ответственности и полном соглашении с устоявшими правилами
              школьной администрации.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Outdoor activities
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Внеклассные мероприятия нацеленные на расширение горизонта
              учащихся в научных сферах. Это осуществояется путем проведения
              интересных физических и химических экспериментов, (при соблюдении
              техник безопасности соответственно) и их исследовании.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl md:text-5xl">
              FLEX guides
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Онлайн-встречи, уроки с победителями данной программы по обмену
              учеников из нашей школы , в целях получения информации про
              возможности, перспективы, и тактики становления финалистом данной
              программы.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Brain ring
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Всеми излюбленные интеллектуальные мероприятия оценивающие уровень
              знании учеников в командной игре. Проведение данного рода
              мероприятии – фундамент стабильного роста стремления у учеников
              больше знать и исследовать все науки мира.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Pajama day
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Увлекательный день взаимствованный из американских школ, где
              ученикам школ разрешается провести один день в школе надев ночную
              пижаму. Очень отличная идея для разгрузки эмоции у учеников в
              тяжелые школьные будни.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-2xl md:text-5xl">
              NIS week
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Тематические недели дающие возможность более лучше вникнуть в ту
              или иную культуру или грызть гранит науки. Соответствующие
              декоративные элементы будут выполнятся участниками нашей команды.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Disco-nights
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Школьные дискотеки для всех классов с входным взносом, который
              дальше пойдет на благотворительность детским домам, приютам и тд.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-2xl md:text-5xl">
              Open-mic
            </AccordionTrigger>
            <AccordionContent className="lg:text-xl xl:text-2xl">
              Мероприятие для учеников чувствующих себя королями комедии,
              стэндаперами желающих проявить себя на сцене. Регистрация
              волонтеров будет проводится заранее.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
    </Tabs>
  );
}

export default function Program() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-16 bg-background px-10 md:px-16 lg:px-24">
      <h1 className="md:pt-16 text-6xl font-semibold text-white sm:text-[84px] sm:font-bold">
        Program
      </h1>
      <Content />
    </div>
  );
}
