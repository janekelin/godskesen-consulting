import Card from './Card';
import React from 'react';

// Components
function App(props) {
  const info = props.copyrightInfo;
  const cards = props.persons.map((item, key) => 
    <Card 
      key={key}
      customLink={item.link}
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
          customLink={info.colorPaletteLink} 
          author={info.colorPaletteAuthor} 
          license={info.colorPaletteLicense} 
        />
      </main>
  );
}

function CopyrightNote(props) {
  return (
    <aside>
        <p className="copyright" tabIndex="0">&copy; The original color palette is <a href={props.link}> 05.05.18 </a>
        created by <a href={props.author}> JMG84 </a>
        under <a href={props.license}> CC-BY-NC-SA </a> license.
        This website uses a slightly modified version of the mentioned color palette.
        </p>
      </aside>
  );
}

export default App;
