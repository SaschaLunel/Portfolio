import { createContext, useContext, useState } from 'react'

export const content = {
  en: {
    nav: { hero: 'Home', design: 'Design', photography: 'Photography', about: 'About', contact: 'Contact' },
    hero: {
      eyebrow: 'UI/UX Graphic Designer — Brittany, France',
      title: 'Imagine.\nDesign.\nRefine.',
      sub: 'I design visual identities and digital interfaces that combine aesthetics, clarity and user experience.',
      cta: 'View work',
    },
    design: {
      label: '01 — Selected Work',
      title: 'Design',
      intro:
        'Every project is an opportunity to craft a story, whether through branding, print design, or digital experiences.',
      modal: { roleLabel: 'Project type', clientLabel: 'Client', close: 'Close' , videoLabel: 'Project Video' },
      items: [
        {
          tag: 'Identity',
          name: 'Na Mara',
          year: '2025',
          desc: 'Visual identity for a local microbrewery.',
          role: 'Visual identity, logotype, packaging, print design',
          client: 'Na Mara Brewery',
          details:
            'Na Mara is a fictional brand created during my UI/UX Design training as part of a three-person team project. The goal was to build a complete and consistent brand identity across multiple touchpoints, including a logo, packaging, print communication, website and video promotion. It was a great opportunity to explore what it takes to create a cohesive brand experience.',
          gallery: [
            { caption: 'Business cards' },
            { caption: 'Custom branded coasters' },
            { caption: 'Promotional poster' },
            { caption: 'Contact Page' },
          ],
        },
        {
          tag: 'Print',
          name: 'London brochure',
          year: '2025',
          desc: 'Graphic design for a tourist brochure.',
          role: 'Print design, layout',
          client: '',
          details:
            'This fictional travel brochure was created as part of a project focused on editorial and print design. The aim was to apply the fundamentals of layout, typography, and print production while designing a brochure that is both clear and engaging to read. The project also features a fully redrawn London Underground map created in Adobe Illustrator.',
          gallery: [
            { caption: 'Cover' },
            { caption: 'Inside spread, map and itinerary' },
            { caption: 'Cover and back cover' },
            { caption: 'Inside spread, neighborhood map and guide' },
          ],
        },
        {
          tag: 'Branding',
          name: 'Votre Rédac Web',
          year: '2026',
          desc: 'Design and development of a complete communication solution for a web editor.',
          role: 'Branding, web design & development, SEO strategy',
          client: 'Votre Rédac Web',
          details:
            'This was my final graduation project, carried out for a real client. Her existing website no longer reflected her business and lacked a strong visual identity. I redesigned her entire communication ecosystem, from the logo and website to print materials, SEO strategy, editorial calendar, newsletter, motion design, and communication guidelines. Working with a real client also meant dealing with real-world constraints such as budget, deadlines, and expectations.',
          gallery: [
            { caption: 'Business card' },
            { caption: 'Website contact page' },
            { caption: 'Custom notepad' },
            { caption: 'LinkedIn banner and professional profile picture' },
          ],
        },
        {
          tag: 'Redesign',
          name: 'Restart Esport Club',
          year: '2026',
          desc: "Complete redesign of the esports club's visual identity and digital presence.",
          role: 'Website redesign, brand guidelines',
          client: 'Restart Esport Club',
          details:
            "Completed during my internship alongside another intern from the same UI/UX Design training program. Our mission was to redesign Restart Esport Club's website and refine its visual identity. We also created a comprehensive brand board to provide the team with a solid foundation for future communication while maintaining a consistent and recognizable brand.",
          gallery: [
            { caption: 'Staff t-shirt design' },
            { caption: 'Website Contact page' },
            { caption: 'Brandboard' },
            { caption: 'Website About page' },
          ],
        },
      ],
    },
    photography: {
      label: '02 — Frames',
      title: 'Photography',
      intro: 'Photography is a personal practice that shapes my perspective as a designer. Through composition, light, and detail, it enriches the way I create visual experiences.',
      items: [
        { tag: 'Wildlife', name: 'Shared Rest' },
        { tag: 'Landscape', name: 'The Last Watch' },
        { tag: 'Night Photography', name: 'Hunting Shadow' },
        { tag: 'Landscape', name: 'Last Crossing' },
        { tag: 'Wildlife', name: 'Watchful Gaze' },
        { tag: 'Abstract', name: 'Fairground Lights' },
      ],
    },
    about: {
      label: '03 — About',
      title: 'About',
      bio: "My background combines development, design, and communication, allowing me to approach projects from a broader perspective. Beyond creating visual identities and digital interfaces, I enjoy thinking about how a brand expresses itself, tells its story, and builds a consistent presence across both print and digital media.",
      skillsLabel: 'Tools & focus',
      skills: ['Brand Identity & Print Design', 'UI/UX Design', 'Digital Communication', 'Content Creation', 'Prototyping & Design Systems', 'Front-end Development', 'Adobe Suite & Figma', 'Photography & Art Direction'],
      cvCta: 'View my CV',
    },
    contact: {
      label: '04 — Contact',
      title: "Let's talk",
      intro: "Looking for a graphic designer, a UI/UX designer, or a versatile communication professional? I'd be happy to discuss your project or team.",
      emailLabel: 'Email',
      email: 'sascha.lunel@gmail.com',
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sascha-b%C3%A9nard-lunel-240880326/' },
      ],
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send message',
      },
      location: 'Bretagne, France',
    },
    footer: '© 2026 — All rights reserved.',
  },
  fr: {
    nav: { hero: 'Accueil', design: 'Design', photography: 'Photographie', about: 'À propos', contact: 'Contact' },
    hero: {
      eyebrow: 'Graphiste • Concepteur Designer UI/UX — Bretagne, France',
      title: 'Imaginer.\nConcevoir.\nPerfectionner.',
      sub: "Je conçois des identités visuelles et des interfaces numériques qui allient esthétique, clarté et expérience utilisateur.",
      cta: 'Voir les projets',
    },
    design: {
      label: '01 — Projets sélectionnés',
      title: 'Design',
      intro:
        "Chaque projet est l'occasion de raconter une histoire, qu'elle prenne la forme d'une identité visuelle, d'un support imprimé ou d'une interface numérique.",
      modal: { roleLabel: 'Type de projet', clientLabel: 'Client', close: 'Fermer', videoLabel: 'Vidéo du projet'  },
      items: [
        {
          tag: 'Identité',
          name: 'Na Mara',
          year: '2025',
          desc: 'Identité visuelle pour une micro-brasserie locale.',
          role: 'Identité visuelle, logotype, packaging, print',
          client: 'Brasserie Na Mara',
          details:
            "Na Mara est une marque fictive imaginée pendant ma formation de Concepteur Designer UI/UX, dans le cadre d'un projet réalisé en équipe de trois. L'objectif était de créer une identité complète et cohérente, déclinée sur différents supports : logotype, packaging, communication print, site web et vidéo promotionnelle. Un projet qui m'a permis de découvrir les enjeux d'un univers de marque pensé dans sa globalité.",
          gallery: [
            { caption: 'Carte de visite et de fidélité' },
            { caption: 'Dessous de verre en papier recyclé' },
            { caption: 'Affiche promotionnelle grand format' },
            { caption: 'Page contact du site web' },
          ],
        },
        {
          tag: 'Print',
          name: 'Brochure Londres',
          year: '2025',
          desc: 'Création graphique pour une brochure touristique.',
          role: 'Design print, mise en page',
          client: '',
          details:
            "Cette brochure touristique fictive a été réalisée dans le cadre d'un exercice consacré au design éditorial et au print. L'objectif était d'appliquer les codes de la mise en page, de la typographie et de la préparation à l'impression, tout en concevant un support agréable à parcourir. Le projet comprend également un plan du métro de Londres entièrement redessiné sous Adobe Illustrator.",
          gallery: [
            { caption: 'Couverture de la brochure' },
            { caption: 'Double page intérieure, plan du métro Londonien' },
            { caption: 'Couverture et dos de la brochure, reliure agrafée' },
            { caption: 'Double page intérieure, plan et présentation des quartiers' },
          ],
        },
        {
          tag: 'Branding',
          name: 'Votre Rédac Web',
          year: '2026',
          desc: 'Design et développement d\'une solution de communication complète pour une rédactrice web.',
          role: 'Branding, design & développement web, stratégie SEO',
          client: 'Votre Rédac Web',
          details:
            "Projet réalisé dans le cadre de mon examen de fin de formation pour une cliente réelle. Son site existant ne reflétait plus son activité et ne disposait pas d'une identité suffisamment forte pour être mis en avant. J'ai repensé l'ensemble de sa communication, du logotype au site web, en passant par les supports print, la stratégie SEO, le calendrier éditorial, la newsletter, le design motion et le cahier des charges. Une expérience très enrichissante, avec les contraintes bien réelles d'un budget, d'un planning et des attentes d'une cliente.",
          gallery: [
            { caption: 'Carte de visite' },
            { caption: 'Page Contact du Site Web' },
            { caption: 'Bloc note personnalisé' },
            { caption: 'Bannière LinkedIn et photo professionnelle' },
          ],
        },
        {
          tag: 'Refonte',
          name: 'Restart Esport Club',
          year: '2026',
          desc: 'Refonte complète de l\'identité visuelle et de la présence digitale du club d\'esport.',
          role: 'Refonte de site, brand board',
          client: 'Restart Esport Club',
          details:
            "Projet réalisé pendant mon stage de formation, en binôme avec un autre stagiaire suivant la même formation que moi. Notre mission consistait à moderniser le site web de Restart Esport Club et à clarifier son identité visuelle. Nous avons notamment conçu un brand board complet afin de leur fournir une base solide pour faire évoluer leur communication tout en conservant une image cohérente et facilement identifiable.",
          gallery: [
            { caption: 'Proposition de design de t-shirt pour le staff' },
            { caption: 'Page Contact du Site Web' },
            { caption: 'Brandboard' },
            { caption: 'Page À Propos du Site Web' },
          ],
        },
      ],
    },
    photography: {
      label: '02 — Clichés',
      title: 'Photographie',
      intro: 'La photographie est une pratique personnelle qui nourrit mon regard de designer. À travers la composition, la lumière et les détails, elle enrichit ma manière de concevoir des expériences visuelles.',
      items: [
        { tag: 'Faune', name: 'Repos partagé' },
        { tag: 'Paysage', name: 'Dernier poste' },
        { tag: 'Nocturne', name: 'Ombre en chasse' },
        { tag: 'Paysage', name: 'Dernière traversée' },
        { tag: 'Faune', name: 'Regard vigilant' },
        { tag: 'Abstrait', name: 'Lumières foraines' },
      ],
    },
    about: {
      label: '03 — À propos',
      title: 'À propos',
      bio: "Mon parcours mêlant développement, design et communication me permet d'aborder un projet dans son ensemble. Au-delà de la création d'identités visuelles et d'interfaces, j'aime réfléchir à la manière dont une marque s'exprime, se raconte et construit une communication cohérente sur l'ensemble de ses supports, qu'ils soient imprimés ou numériques.",
      skillsLabel: 'Outils & spécialités',
      skills: ['Identité visuelle & Print', 'UI/UX Design', 'Communication digitale', 'Création de contenus', 'Prototypage & Design Systems', 'Développement Front-end', 'Suite Adobe & Figma', 'Photographie & Direction artistique'],
      cvCta: 'Voir mon CV',
    },
    contact: {
      label: '04 — Contact',
      title: 'Discutons',
      intro: 'À la recherche d\'un graphiste, d\'un designer UI/UX ou d\'un profil polyvalent en communication ? Échangeons autour de votre projet ou de votre équipe.',
      emailLabel: 'Email',
      email: 'sascha.lunel@gmail.com',
      social: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sascha-b%C3%A9nard-lunel-240880326/' },
      ],
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer',
      },
      location: 'Bretagne, France',
    },
    footer: '© 2026 — Tous droits réservés.',
  },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const toggle = () => setLang((l) => (l === 'en' ? 'fr' : 'en'))
  const t = content[lang]
  return <LangContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
