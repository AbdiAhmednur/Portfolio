import MemeGenerator from '../Pictures/Meme Generator picture.png';
import TravelJournal from '../Pictures/Travel journal picture.png';
import Tezenis from '../Pictures/Tezenis.png';
import fylo from '../Pictures/fylo.jpg';

function Projects() {
  const projectList = [
    {
      name: 'Meme Generator',
      description: 'A meme generator web app made using react. The memes were fetched from a meme API and the page was styled using CSS. The app generates random memes from the API, and has two inputs where the top and bottom text on the meme can be added.',
      image: MemeGenerator,
      link: 'https://memegenerator101.netlify.app',
      source: 'https://github.com/AbdiAhmednur/Meme-Generator'
    },
    {
      name: 'Travel Journal',
      description: 'A travel journal made using react. The destinations are contained in a separate data file and mapped onto the app, so they can be updated and the page would accordingly, instead of having to hardcore the details.',
      image: TravelJournal,
      link: 'https://traveljournal101.netlify.app',
      source: 'https://github.com/AbdiAhmednur/Travel-Journal'
    },
    {
      name: 'Tenzies',
      description: 'A tenzies game web app. The game is essentially won when you manage to roll 10 out of the same number as soon as possible. I used React and CSS to style, made use of the useEffect and useState to enable the game to function.',
      image: Tezenis,
      link: 'https://tenzies101.netlify.app',
      source: 'https://github.com/AbdiAhmednur/Tenzies-App'
    },
    {
      name: 'Fylo',
      description: 'A file storage website created with Tailwind CSS, allowing you to access all your files in one platform. It allows you to share your work friends, families, and colleagues to collaborate with. Unlock, the potential for dynamic teamwork, where ideas can come to life and projects can thrive. Discover, the future of file storage and collaboration, all within your reach.',
      image: fylo,
      link: 'https://fylo101.netlify.app',
      source:  'https://github.com/AbdiAhmednur/Fylo'
    }
  ];

  const projects = projectList.map((project) => (
    <div className="flex">
      <div className="project-content">
        <h2 className="project-title">{project.name}</h2>
        <p>{project.description}</p>
        <br />
        <a className="source-btn" href={project.source} target="_blank" rel="noreferrer">Source code</a> < br/> <br /> <br />
         <a className="source-btn" href={project.link} target="_blank" rel="noreferrer">Live Project</a>
      </div>
      
      <img className="project-image" src={project.image} alt="projects" />
    </div>
  ));

  return (
    <section id="projects">
      <h1 className="section-title">Projects</h1>
      {projects}
    </section>
  );
}

export default Projects;
