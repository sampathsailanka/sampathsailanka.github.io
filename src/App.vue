<script>
import ExperienceSection from './components/ExperienceSection.vue';
import Header from './components/AppHeader.vue';
import LandingSection from './components/LandingSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import ContactMe from './components/ContactMe.vue';
import Footer from './components/Footer.vue/';
import ScrollButton from './components/ScrollButton.vue';
import Personal from './components/Personal.vue';

export default {
  name: "App",
  data() {
    return {}
  },
  components: {
    Header,
    LandingSection,
    SkillsSection,
    ExperienceSection,
    ProjectSection,
    ContactMe,
    Footer,
    ScrollButton,
    Personal,
  }
}
</script>

<template>
  <Header />
  <LandingSection />
  <Personal />
  <SkillsSection />
  <ExperienceSection />
  <ProjectSection />
  <ContactMe />
  <Footer />
  <ScrollButton />
</template>