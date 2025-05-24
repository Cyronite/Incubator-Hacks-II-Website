import './About.css';
import IncubatorHacksLogo from './assets/IncubatorHacksLogo.svg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header-group">
                <div className="about-title-label">[what is incubator hacks?]</div>
                <div className="about-title">
                    About <span className="about-duplohacks-gradient">Incubator Hacks</span>
                </div>
            </div>

            <div className="about-content-group">
                <div className="about-description">
                    <span className="about-description-bracket">&#123; </span>
                    <span className="about-description-main">
                        Incubator Hacks is a dynamic 2-day tech conference designed for newcomers to dive into cutting-edge technologies, craft innovative project pitches, and compete for post-event mentorship. Participants collaborate to develop solutions using niche tools, with winning teams securing hands-on guidance from industry-experienced mentors to bring their ideas to life after the event.
                    </span>
                    <span className="about-description-bracket">&#125;</span>
                </div>
                <div className="about-image-group">
                    <img src={IncubatorHacksLogo} alt="Incubator Hacks Logo" className="about-image-photo" style={{background: 'white', padding: '1.5rem', objectFit: 'contain'}} />
                </div>
            </div>
        </div>
    )
}
export default About
