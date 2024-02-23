import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
import 'draft-js/dist/Draft.css';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const handleUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const handleItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  return (
    <div className="mx-40">
        <div>
      <Button variant="outlined" onClick={handleBoldClick} sx={{ mr:0.5,my:0.5 }}>
        <FormatBold/>
      </Button>
      <Button variant="outlined" onClick={handleUnderlineClick} sx={{ mr:0.5 }}>
        <FormatUnderlined/>
      </Button>
      <Button variant="outlined" onClick={handleItalicClick}>
        <FormatItalic/>
      </Button>
      </div>
      <div style={{ border: '1px solid #000000', padding: '10px' }}>
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
    </div>
  );
};

export default TextEditor;