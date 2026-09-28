import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Memberships } from './components/Memberships';
import { Trainers } from './components/Trainers';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { LoginModal } from './components/LoginModal';
import { LightboxModal } from './components/LightboxModal';
import { Toast } from './components/Toast';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedPlanForModal, setSelectedPlanForModal] = useState('Pro Performance');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleOpenJoin = (planName?: string) => {
    if (planName) {
      setSelectedPlanForModal(planName);
    }
    setJoinModalOpen(true);
  };

  const handleJoinSuccess = (plan: string, name: string) => {
    showToast(`Welcome to The Gym, ${name}! Your ${plan} activation is confirmed.`);
  };

  const handleLoginSuccess = (email: string) => {
    showToast(`Logged in successfully as ${email}`);
  };

  const handleSubscribeNewsletter = (email: string) => {
    showToast(`Subscribed! Training programming dispatch sent to ${email}`);
  };

  const handleSelectProgram = (programTitle: string) => {
    handleOpenJoin(`Pro Performance - ${programTitle}`);
  };

  const handleBookTrainer = (trainerName: string) => {
    showToast(`Trainer consultation request submitted for coach ${trainerName}.`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col selection:bg-lime-400 selection:text-zinc-950">
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenJoin={() => handleOpenJoin('Pro Performance')}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Section 2: Hero */}
        <Hero
          onOpenJoin={() => handleOpenJoin('Pro Performance')}
          onExplorePrograms={() => {
            const el = document.getElementById('programs');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 3: About */}
        <About
          onLearnMore={() => {
            const el = document.getElementById('programs');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 4: Programs */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* Section 5: Memberships */}
        <Memberships
          onSelectPlan={(plan) => handleOpenJoin(plan)}
        />

        {/* Section 6: Trainers */}
        <Trainers onBookTrainer={handleBookTrainer} />

        {/* Gallery */}
        <Gallery
          onSelectImage={(src, title) => setLightboxImage({ src, title })}
        />

        {/* Section 7: Contact */}
        <Contact onSuccessToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenJoin={() => handleOpenJoin('Pro Performance')}
        onSubscribe={handleSubscribeNewsletter}
      />

      {/* Interactive Modals */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        selectedPlan={selectedPlanForModal}
        onSuccess={handleJoinSuccess}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      <LightboxModal
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Toast notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
