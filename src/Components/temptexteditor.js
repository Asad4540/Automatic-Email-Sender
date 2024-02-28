import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Button from '@mui/material/Button';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = ({ onEditorClose }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const saveContent = () => {
    // Handle the save action (e.g., update the state, send to backend)
    console.log('Content saved');
    onEditorClose(); // Close the editor after saving
  };

  const exitEditor = () => {
    onEditorClose(); // Close the editor without saving
  };

  return (
    <div className="mx-auto max-w-3xl p-4 bg-gray-100 rounded-lg shadow-lg" >
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div className="flex justify-end mt-4">
        <Button variant="contained" onClick={saveContent} style={{ marginRight: '8px',backgroundColor:'#3f51b5',color:'white' }}>
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={exitEditor} style={{backgroundColor:"#f50057",color:'white'}}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
