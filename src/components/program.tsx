import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

function Content() {
  return (
    <Tabs defaultValue="media" className="w-full text-white">
      <TabsList className="grid h-14 w-full grid-cols-4 rounded-2xl bg-[#350DA9] px-4 sm:h-16">
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="sport"
        >
          <span className="whitespace-break-spaces">E-sport / Sport</span>
        </TabsTrigger>
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="media"
        >
          Media
        </TabsTrigger>
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="digit"
        >
          Digit
        </TabsTrigger>
        <TabsTrigger
          className="rounded-2xl text-xs font-bold text-white md:text-xl lg:text-2xl xl:text-3xl"
          value="events"
        >
          Events
        </TabsTrigger>
      </TabsList>

      <TabsContent value="sport">Nothing to see</TabsContent>
      <TabsContent value="media">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:text-5xl">
              NIS devs
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              Cотрудничество с школьным обьединением программистов из Назарбаев
              интеллектуальных школ г.Алматы (ФМН и ХБН), в целях возможного
              создания филиала в нашем городе и создании совместных проектов в
              сфере программирования.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:text-5xl">
              Shanyraqs&apos; ratings
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:text-5xl">
              Jaiq hub
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      <TabsContent value="digit">Nothing to see</TabsContent>
      <TabsContent value="events">Nothing to see</TabsContent>
    </Tabs>
  );
}

export default function Program() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-16 bg-background px-10 md:px-16 lg:px-24">
      <h1 className="pt-16 text-6xl font-semibold text-white sm:text-[84px] sm:font-bold">
        Program
      </h1>
      <Content />
    </div>
  );
}
