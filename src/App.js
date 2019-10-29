import React from 'react';
import logo from './logo.svg';
import './App.css';

import Editor from './editor/Editor';
import Italic from './marks/Italic';
import Bold from './marks/Bold';
import Heading from './nodes/Heading';
import HardBreak from './nodes/HardBreak';

class EditorContent extends React.Component {
  constructor (props) {
    super(props)

    this.editorRef = React.createRef()

    //const {editor} = props;
    //this.editor = editor;

    this.editor = new Editor({
        extensions: [
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Italic(),
        ],
        content: `
          <h2>
            Images
          </h2>
          <p>
            This is basic example of implementing images. Try to drop new images here. Reordering also works.
          </p>
          <img src="https://66.media.tumblr.com/dcd3d24b79d78a3ee0f9192246e727f1/tumblr_o00xgqMhPM1qak053o1_400.gif" />
        `,
      })
  }

  componentDidMount () {
    this.editorRef.current.appendChild(this.editor.element.firstChild)
    this.editor.setParentComponent(this)
  }

  // FIXME destroy

  render () {
    return <div ref={this.editorRef} >Teste</div>
  }
}

function Teste () {
  return <EditorContent/>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <EditorContent/>
      </header>
    </div>
  );
}

export default App;
