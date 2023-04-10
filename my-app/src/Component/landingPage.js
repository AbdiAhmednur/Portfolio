import CV from '../Pictures/CV-Web-Development NeW .pdf';

function landingPage() {
  return (
    <>
      <section id="landing" className="landing">
        <h1 className="landing-title">
          Hi, my name is <strong className="name">Abdirahman Ahmednur</strong>. I am a Web Developer.
        </h1>
      </section>
      <br />
      <div className="lb">
        <button> <a href="#about">About me</a></button>
        <button> <a href="#projects">Projects</a></button>
        <button> <a  href="#contact">Contact me</a></button>
        <button><a href={CV} target="_blank" download >My CV</a></button>
        <button><a href="https://github.com/AbdiAhmednur" target='_blank' rel="noreferrer">Github</a></button>
      </div>
    </>
  );
}

export default landingPage;
