import pic from '../Pictures/pic.jpg';



function About(){
    return (
      <section id="about">
        <h1 className="about-title">About Me</h1>
        <div>
        
              <img src={pic} alt="me" className="me" />
            </div>
        <p>I am a self-motivated front-end developer with a technical skills, creativity, and problem-solving abilities. 
            I am always looking for new projects and new challenges to push and test myself. I got into coding by building websites on wordpress and I wanted to take my skills to the next level, pushing myself to the higher level. 
            My goal is to build interactive and user friendly websites, push my skill set build challenging websites and interactive apps. 
            I am committed to constantly improving my skills and staying up-to-date with the latest technologies, as I strive to make a meaningful contribution to Software Engineering.</p>


          

       <h4>Skills</h4>
       <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>ES6</li>
       </ul>
    
    </section>
    
    )
    
    
    }
    
    export default About;