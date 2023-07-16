import Logo from '../components/Logo'

export default function Home({ setAbout, setWorks }) {
  return (
    <main id="#main" className="main">
      <div id="index" className="main__start">
        <Logo />
      </div>
      <div className="space"></div>
      <div id="about" className="main__about">
        <h1>Hello There</h1>
        <p dangerouslySetInnerHTML={{ __html: setAbout.description }}></p>
        <a
          href="https://drive.google.com/file/d/1bUzAJYmMxnOayzDVjtofk14NJktbnUmv/view?usp=sharing"
          target="_blank"
        >
          See more
        </a>
      </div>
      <div className="space"></div>
      <div id="works" className="main__works">
        <h1>Works</h1>
        <p>{setWorks.description}</p>
        <div className="space"></div>
        <div className="works__list">
          {setWorks.projects.map((project, index) => (
            <div className="list__item" key={index}>
              <div className="item__img">
                <a href={project.link} target="_blank">
                  <img src={project.image} alt={project.name} />
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space"></div>
    </main>
  )
}
