interface Project {
  name: string
  description: string
  image: string
  link: string
}

interface CollaborateSocials {
  Email: string
  Linkedin: string
  Instagram: string
  Github: string
  Resume: string
}

interface FrontendStack {
  [key: string]: string
}

interface BackendStack {
  [key: string]: string
}

interface Collaborate {
  socials: CollaborateSocials
  stack: {
    frontend: FrontendStack
    backend: BackendStack
  }
}

interface Data {
  header: string[][]
  about: {
    description: string
  }
  works: {
    description: string
    projects: Project[]
  }
  collaborate: Collaborate
}

const data: Data = {
  header: [
    ['Index', '#main'],
    ['Proyectos', '#works'],
    ['Acerca', '#about'],
    ['¡Colaboremos!', '#collaborate'],
  ],
  about: {
    description:
      'Mi nombre es <b>Alexander Crespo</b>, nací el 12 de septiembre de 2001 en Maracay. Me apasiona la tecnología desde mi adolescencia, con un fuerte deseo de dar forma a ideas con dedicación y pasión.',
  },
  works: {
    description: 'Aquí puedes ver algunos de mis proyectos que he realizado.',
    projects: [
      {
        name: 'Nasty Haiko',
        description: 'Una web enfocada a mostrar el trabajo de una modelo',
        image: '/img/proyects/bg-nasty.jpg',
        link: 'https://melodic-wisp-e54b80.netlify.app/',
      },
      {
        name: 'Portfolio',
        description: 'Portafolio',
        image: '/img/proyects/bg-june.studio.jpg',
        link: 'https://www.june-t.studio/',
      },
      {
        name: 'Museum',
        description: 'Sitio dedicado a explorar obras de arte con un buscador',
        image: '/img/proyects/bg-museum.jpg',
        link: 'https://museum-henna.vercel.app/',
      },
      {
        name: 'Animation Lab',
        description:
          'Este es un proyecto creado para mostrar diseños que he visto de artistas e intentar crearlos.',
        image: '/img/proyects/bg-animation.lab.jpg',
        link: 'https://animation-lab.vercel.app/',
      },
    ],
  },

  collaborate: {
    socials: {
      Email: 'mailto:yunedor123@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/june-tk/',
      Instagram: 'https://www.instagram.com/junestudio.s',
      Github: 'https://github.com/June-t',
      Resume:
        'https://drive.google.com/file/d/1VzJuKlpkV5nPuoMtOx9J5EECf5t-IjBN/view?usp=sharing',
    },
    stack: {
      frontend: {
        TypeScript: 'https://www.typescriptlang.org/',
        GreenSock: 'https://greensock.com/gsap/',
        'Next.js': 'https://nextjs.org/',
        React: 'https://reactjs.org/',
        'Lenis Scroll': 'https://lenis.studiofreight.com/',
      },
      backend: {
        'Node.js': 'https://nodejs.org/en/',
        'Express.js': 'https://expressjs.com/',
        'Sanity CMS': 'https://www.sanity.io/',
        MySQL: 'https://www.mysql.com/',
      },
    },
  },
}

export default data
