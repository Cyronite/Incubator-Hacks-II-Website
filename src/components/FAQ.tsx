import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Faq() {
  return (
    <> <section className="bg-[#ffeb9c]">
        <section className="py-16 px-4 max-w-6xl mx-auto">
          
      <h2 className="modak text-6xl md:text-7xl text-[#242424] text-center mb-12">
        FAQ
      </h2>
      <div className="space-y-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="inter text-xl text-[#222]">
              Who can participate?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              This hackathon is open to all high school students — no coding
              experience necessary! Whether you’re a total beginner or have
              built projects before, you’re welcome here.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="inter text-xl text-[#222]">
              Is it really free?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Yes! Participation, workshops, mentorship, and swag are all
              completely free thanks to our generous sponsors and community
              partners.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="inter text-xl text-[#222]">
              Do I need to have a team?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Not at all. You can register solo, and we’ll help match you with
              other participants during our team formation session. Or, you can
              sign up with your friends!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="inter text-xl text-[#222]">
              What if I've never coded before?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Perfect — this event is designed for beginners! We’ll have intro
              workshops, mentors to support you, and plenty of beginner-friendly
              project ideas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="inter text-xl text-[#222]">
              What should I bring?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Bring a laptop if you have one, a charger, and your creativity! If
              you don’t have a laptop, let us know in advance — we might be able
              to provide one for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="inter text-xl text-[#222]">
              How do I register?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Just head over to our Registration page and fill out the quick
              form. Spots are limited, so don’t wait!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      </section>
      </section>
    </>
  );
}

export default Faq;