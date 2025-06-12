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
              Who can join?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Any high school student! You don't need any experience — just an interest in the environment, tech, or trying something new.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="inter text-xl text-[#222]">
              Is it really free?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Yes! Thanks to our community partners and sponsors, everything from food to mentorship to swag is covered.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="inter text-xl text-[#222]">
              Do I need a team?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Nope. You can register solo and we'll help you form a team at the event. Or sign up with your friends if you already have one!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="inter text-xl text-[#222]">
              What if I've never coded before?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              That's totally fine, in fact, this hackathon is made for people like you. You'll have access to beginner-friendly resources, mentors, and starter ideas focused on climate action.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="inter text-xl text-[#222]">
              What should I bring?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              A laptop and charger if you've got one. If you don't, let us know when you apply we'll do our best to help.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="inter text-xl text-[#222]">
              How do I register?
            </AccordionTrigger>
            <AccordionContent className="inter text-[#222] text-lg">
              Just head over to our Registration page and fill out the quick form. Spots are limited, so don't wait!
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