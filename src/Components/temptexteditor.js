import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from '@mui/material/Button';

const TextEditor = ({ onEditorClose }) => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
  };

  const saveContent = () => {
    // Implement your save logic here
  };

  const exitEditor = () => {
    // Implement your exit logic here
    if (onEditorClose) {
      onEditorClose();
    }
  };

  return (
    <div className="mx-auto p-4 bg-gray-100 rounded-lg shadow-lg" style={{ width: '1000px' }}>
        <CKEditor
          editor={ClassicEditor}
          config={{
            width: '100%',
            toolbar: {
              items: [
                'heading', '|',
                'fontFamily', '|',
                'fontSize', '|',
                'fontColor', '|',
                'bold', 'italic', 'underline', 'strikethrough', '|',
                'alignment', '|',
                'indent', 'outdent', '|',
                'bulletedList', 'numberedList', '|',
                'link', '|',
                'imageUpload', '|',
                'undo', 'redo'
              ]
            },
            fontFamily: {
              options: [
                'default',
                'Arial,Helvetica,sans-serif',
                'Georgia,serif',
                'Times New Roman,serif',
                'Verdana,sans-serif'
              ]
            },
            fontSize: {
              options: [
                'default',
                '8pt', '9pt', '10pt', '11pt', '12pt', '14pt', '18pt', '24pt', '36pt'
              ]
            },
            alignment: {
              options: ['default', 'left', 'center', 'right']
            },
            link: {
              addTargetToExternalLinks: true
            }
          }}
          onChange={handleEditorChange}
        />
      <div className="flex justify-end mt-4">
        <Button variant="contained" onClick={saveContent} style={{ marginRight: '8px', backgroundColor: '#3f51b5', color: 'white' }}>
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={exitEditor} style={{ backgroundColor: "#f50057", color: 'white' }}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TextEditor;
s