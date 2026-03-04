import HeroSection from '@/components/sections/Hero'
import AboutSection from '@/components/sections/About'
import SkillsSection from '@/components/sections/Skills'
import ExperienceSection from '@/components/sections/Experience'
import ProjectsSection from '@/components/sections/Projects'
import ContactSection from '@/components/sections/Contact'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden">
            <ScrollProgressBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <ScrollToTop />
        </main>
    )
}
