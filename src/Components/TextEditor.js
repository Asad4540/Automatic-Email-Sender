// TextEditor.js
import React from 'react';
import { Editor, EditorTools } from '@progress/kendo-react-editor';
import Button from '@mui/material/Button'; // Import Material-UI Button component
  import Content from './Content';

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  ForeColor,
  BackColor,
  CleanFormatting,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  NumberedList,
  BulletedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  InsertFile,
  SelectAll,
  Print,
  Pdf,
  TableProperties,
  TableCellProperties,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell
} = EditorTools;

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
    //<div style={{height: '300px', width: '1000px',margin:'auto'}}>
    <div className="mx-auto p-1 bg-gray-100 rounded-lg shadow-lg" style={{ width: '1000px'}}>
    <Editor
        tools={[
          [Bold, Italic, Underline, Strikethrough],
          [Subscript, Superscript],
          ForeColor,
          BackColor,
          [CleanFormatting],
          [AlignLeft, AlignCenter, AlignRight, AlignJustify],
          [Indent, Outdent],
          [OrderedList, UnorderedList],
          [NumberedList, BulletedList],
          FontSize,
          FontName,
          FormatBlock,
          [SelectAll],
          [Undo, Redo],
          [Link, Unlink, InsertImage, ViewHtml],
          [InsertTable, InsertFile],
          [Pdf, Print],
          [TableProperties, TableCellProperties],
          [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
          [DeleteRow, DeleteColumn, DeleteTable],
          [MergeCells, SplitCell]
        ]}
        contentStyle={{
          
        }}
        //onChange={handleEditorChange}
       defaultContent={Content}
      />
      <div className='flex justify-end m-3'> 
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
