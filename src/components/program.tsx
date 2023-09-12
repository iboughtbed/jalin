import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function Program() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-16 bg-background px-24">
      <h1 className="text-[84px] font-bold text-white">Program</h1>
      <Tabs defaultValue="media" className="w-full text-white">
        <TabsList className="grid h-16 w-full grid-cols-4 rounded-2xl bg-[#350DA9] px-4">
          <TabsTrigger
            className="rounded-2xl text-3xl font-bold text-white"
            value="sport"
          >
            E-sport / Sport
          </TabsTrigger>
          <TabsTrigger
            className="rounded-2xl text-3xl font-bold text-white"
            value="media"
          >
            Media
          </TabsTrigger>
          <TabsTrigger
            className="rounded-2xl text-3xl font-bold text-white"
            value="digit"
          >
            Digit
          </TabsTrigger>
          <TabsTrigger
            className="rounded-2xl text-3xl font-bold text-white"
            value="events"
          >
            Events
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sport">Nothing to see</TabsContent>
        <TabsContent value="media">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-5xl">NIS devs</AccordionTrigger>
              <AccordionContent className="text-[28px]">
                Cотрудничество с школьным обьединением программистов из
                Назарбаев интеллектуальных школ г.Алматы (ФМН и ХБН), в целях
                возможного создания филиала в нашем городе и создании совместных
                проектов в сфере программирования.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-5xl">
                Shanyraq ratings
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-5xl">Jaiq hub</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="digit">Nothing to see</TabsContent>
        <TabsContent value="events">Nothing to see</TabsContent>
      </Tabs>
    </div>
  );
}
