import React from 'react';
import flemmingPic from './images/flemming.JPG';
import ianaPic from './images/iana.JPG';
import './App.css';

function Card(props) {
  const VIEWBOX = "0 0 300 415";
  const SVGBORDER = "M20.5,20.5h260v375h-260V20.5z";

  return (
    <a className="tilt" href={this.props.link}>
      <figure className="tilt--cover tilt-figure js-tilt">
            <img 
              className="tilt--cover tilt-image" 
              src={this.props.pic} 
              alt={"Portrait of " + this.props.cardTitle} 
            />
            <div className="tilt-deco tilt-deco--overlay"></div>
            <figcaption className="tilt-caption">
              <h2 className="tilt-title">{this.props.cardTitle}</h2>
              <p className="tilt-description">{this.props.cardSubtitle}</p>
            </figcaption>
            <svg 
              className="tilt-deco tilt-deco--lines" 
              viewBox={VIEWBOX}
              title="white outline" 
              desc={"an outline for" + this.props.cardTitle + "'s profile card"}
            >
              <desc>An outline for {this.props.cardTitle}'s profile card</desc>
              <path d={SVGBORDER} />
            </svg>
          </figure>
    </a>
  );
}

function CopyrightNote(props) {
  return (
    <aside>
        <p className="copyright" tabIndex="0">&copy; The original color palette is
        <a href={this.props.link}>05.05.18</a>
        created by <a href={this.props.author}>JMG84</a>
        under <a href={this.props.license}>CC-BY-NC-SA</a> license.
        This website uses a slightly modified version of the mentioned color palette.
        </p>
      </aside>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPaletteLink: "https://www.colourlovers.com/palette/4570274/05.05.18",
      colorPaletteAuthor: "https://www.colourlovers.com/lover/JMG84",
      colorPaletteLicense: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      persons: [
        {
          link: "https://flemming.godskesen.consulting",
          name: "Flemming Godskesen",
          subtitle: "PowerShell Junkie",
          pic: flemmingPic
      },
        {
          link: "https://iana.godskesen.consulting",
          name: "Iana Godskesen",
          subtitle: "Webdev Enthusiast",
          pic: ianaPic
        }
      ]
      
      
    };
  }

  render() {
    const cards = this.state.persons.map((item, key) => 
    <Card 
      key={key}
      link={item.link}
      pic={item.pic}
      cardTitle={item.name}
      cardSubtitle={item.subtitle}
    />);
    return (
      <main>
        <section className="content">
          {cards}
        </section>
        <CopyrightNote 
          link={this.state.colorPaletteLink} 
          author={this.state.colorPaletteAuthor} 
          license={this.state.colorPaletteLicense} 
        />
      </main>
    );
  }

  
}

export default App;
