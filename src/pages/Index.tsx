import { useState } from "react";
import { Hero } from "@/components/Hero";
import { MortgageCalculator } from "@/components/MortgageCalculator";
import { DistrictBlocks } from "@/components/DistrictBlocks";
import { Testimonials } from "@/components/Testimonials";
import { Quiz } from "@/components/Quiz";
import { CallbackModal } from "@/components/CallbackModal";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero 
        onOpenQuiz={() => setQuizOpen(true)} 
        onOpenCallback={() => setCallbackOpen(true)}
      />
      <MortgageCalculator onOpenQuiz={() => setQuizOpen(true)} />
      <DistrictBlocks onOpenQuiz={() => setQuizOpen(true)} />
      <Testimonials />
      <Footer />
      
      <Quiz open={quizOpen} onClose={() => setQuizOpen(false)} />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </div>
  );
};

export default Index;