interface Project {
  name: string
  description: string
  image: string
  link: string
}

interface CollaborateSocials {
  Email: string
  Linkedin: string
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
    ['Works', '#works'],
    ['About', '#about'],
    ['Collaborate', '#collaborate'],
  ],
  about: {
    description:
      'My name is <b>Alexander Crespo</b>, I was born on September 12, 2001 in Maracay. I have been passionate about technology since my teens, with a strong desire to shape ideas with dedication and passion',
  },
  works: {
    description: 'Here you can see some of my projects that i have done',
    projects: [
      {
        name: 'Nasty Haiko',
        description: 'A website focused on showing the work of a model',
        image: '/img/proyects/bg-nasty.jpg',
        link: 'https://melodic-wisp-e54b80.netlify.app/',
      },
      {
        name: 'Portfolio',
        description: 'Portfolio of a web developer',
        image: '/img/proyects/bg-june.studio.jpg',
        link: 'https://www.june-t.studio/',
      },
      {
        name: 'Museum',
        description:
          'Site dedicated to exploring pieces of art with a search engine',
        image: '/img/proyects/bg-museum.jpg',
        link: 'https://museum-henna.vercel.app/',
      },
      {
        name: 'Animation Lab',
        description:
          "This is a project created to show designs I've seen from artists and try to create them",
        image: '/img/proyects/bg-animation.lab.jpg',
        link: 'https://animation-lab.vercel.app/',
      },
    ],
  },

  collaborate: {
    socials: {
      Email: 'mailto:yunedor123@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/june-tk/',
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
