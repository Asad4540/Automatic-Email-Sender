import React, { useState } from 'react';
import TextEditor from './TextEditor';


const EmailTemplate = () => {
  // State to manage the visibility and section of the TextEditor
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingSection, setEditingSection] = useState('');


 // Function to handle clicking the edit button
  const handleEdit = (section) => {
    setEditingSection(section);
    setEditorVisible(true);
  };


 return (
    <>
      <section className="flex justify-center items-center m-10">
        <div className="bg-gray-200 border-black border-2 p-12 mx-5 font-semibold">
          <div className="border-black border-y-2">
            <h3 className="text-2xl text-center font-bold">Internal Stakeholders</h3>
          </div>
          <div className="px-2 m-2 text-lg mt-10">
            {['Planned', 'Started', 'Inprogress', 'Completed', 'Delay', 'Disregard'].map((status) => (
              <div className="flex items-center gap-5 p-2" key={status}>
                <h3 className="w-24">{status}</h3>
                <button className="border-blue-500 border-2 bg-blue-500 text-white px-2" onClick={() => handleEdit(status)}>Edit</button>
                <button className="border-blue-500 border-2 bg-blue-500 text-white px-2">View</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 border-black border-2 p-12 mx-5 font-semibold">
          <div className="border-black border-y-2">
            <h3 className="text-2xl text-center font-bold">East & West</h3>
          </div>
          <div className="px-2 m-2 text-lg mt-10">
            {['Planned', 'Started', 'Inprogress', 'Completed', 'Delay', 'Disregard'].map((status) => (
              <div className="flex items-center gap-5 p-2" key={status}>
                <h3 className="w-24">{status}</h3>
                <button className="border-blue-500 border-2 bg-blue-500 text-white px-2" onClick={() => handleEdit(status)}>Edit</button>
                <button className="border-blue-500 border-2 bg-blue-500 text-white px-2">View</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {editorVisible && (
        <TextEditor onEditorClose={() => setEditorVisible(false)} editingSection={editingSection} />
      )}
    </>
  );
};


export default EmailTemplate;