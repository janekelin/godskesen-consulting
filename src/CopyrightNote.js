import React from 'react';

function CopyrightNote(props){
const {colorPaletteAuthor:author, colorPaletteLicense:license,  colorPaletteLink:link} = props.info;

  return (
    <aside>
        <p className="copyright" tabIndex="0">&copy; The original color palette is <a href={link}>05.05.18</a> created by <a href={author}>JMG84</a> under <a href={license}>CC-BY-NC-SA</a> license.
        This website uses a slightly modified version of the mentioned color palette.
        </p>
      </aside>
  );
}

export default CopyrightNote;