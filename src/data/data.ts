/*
interface DataInterface {
  header: Array<Array<string>>
  about: {
    description: string
  }
  works: {
    description: string
    projects: Array<{
      name: string
      description: string
      image: string
      link: string
    }>
  }
  collaborate: {
    description: string
    socials: {
      email: string
      linkedin: string
      github: string
      resumen: string
    }
    stack: {
      frontend: {
        [key: string]: string
      }
      backend: {
        [key: string]: string
      }
    }
  }
}
 */

const data = {
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
        image: '/img/proyects/Laptop_Mockup-min.jpg',
        link: 'https://melodic-wisp-e54b80.netlify.app/',
      },
    ],
  },

  collaborate: {
    socials: {
      Email: 'mailto:yunedor123@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/june-tk/',
      Github: 'https://github.com/June-t',
      Resume:
        'https://drive.google.com/file/d/1bUzAJYmMxnOayzDVjtofk14NJktbnUmv/view?usp=sharing',
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
