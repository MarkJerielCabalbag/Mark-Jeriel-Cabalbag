import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HowWeWorkAndTeamSection } from './components/HowWeWorkAndTeamSection';
import { WorksSection } from './components/WorksSection';
import { ProcessSection } from './components/ProcessSection';
import { CertificatesScrollSection } from './components/CertificatesScrollSection';
import { ClientAcquisitionQuoteSection } from './components/ClientAcquisitionQuoteSection';
import { DirectContactModal } from './components/DirectContactModal';
import { BioModal } from './components/BioModal';
import { WorkDetailModal } from './components/WorkDetailModal';
import { CollectionModal } from './components/CollectionModal';
import { CertificateModal } from './components/CertificateModal';
import { WorkItem, CertificateItem } from './types';

export default function App() {
  const [isDirectContactOpen, setIsDirectContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState<string>('');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isBioOpen, setIsBioOpen] = useState(false);

  const handleOpenContact = (topic?: string) => {
    if (topic) setContactTopic(topic);
    setIsDirectContactOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-white text-[#121212] selection:bg-[#FF451A] selection:text-white">
      {/* Hero Section */}
      <HeroSection
        onOpenConsultation={() => handleOpenContact('Landing Page Launch Inquiry')}
        onOpenBio={() => setIsBioOpen(true)}
      />

      {/* Middle About Section */}
      <AboutSection />

      {/* Methodology & Solo Standards Section ("HOW I WORK" + "SOLO CREATOR STANDARDS") */}
      <HowWeWorkAndTeamSection
        onBookConsultation={(topic) => handleOpenContact(topic)}
        onOpenBio={() => setIsBioOpen(true)}
      />

      {/* Showcasing Works Element ("Best Sellers" / Curated Works) */}
      <WorksSection
        onSelectWork={(work) => setSelectedWork(work)}
        onOpenCollection={() => setIsCollectionOpen(true)}
      />

      {/* Editorial Process Section matching user uploaded image */}
      <ProcessSection
        onBookConsultation={(stepTitle) => handleOpenContact(stepTitle)}
      />

      {/* Verified Certificates & Badges 3D Curved Scroll Panorama (Below Process) */}
      <CertificatesScrollSection
        onSelectCertificate={(cert) => setSelectedCertificate(cert)}
        onOpenConsultation={(topic) => handleOpenContact(topic)}
      />

      {/* Client Acquisition Quote Section with Trending Photo Float Animations */}
      <ClientAcquisitionQuoteSection
        onOpenContact={(topic) => handleOpenContact(topic)}
      />

      {/* Interactive Form-Free Modals */}
      <DirectContactModal
        isOpen={isDirectContactOpen}
        initialTopic={contactTopic}
        onClose={() => {
          setIsDirectContactOpen(false);
          setContactTopic('');
        }}
      />

      <WorkDetailModal
        work={selectedWork}
        onClose={() => setSelectedWork(null)}
        onInquire={() => handleOpenContact(selectedWork ? `Project: ${selectedWork.title}` : undefined)}
      />

      <CollectionModal
        isOpen={isCollectionOpen}
        onClose={() => setIsCollectionOpen(false)}
        onSelectWork={(work) => setSelectedWork(work)}
      />

      <BioModal
        isOpen={isBioOpen}
        onClose={() => setIsBioOpen(false)}
        onBookConsultation={() => handleOpenContact()}
      />

      {/* Certificate Details Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        onInquire={(topic) => handleOpenContact(topic)}
      />
    </div>
  );
}




