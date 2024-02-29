// EmailTemplate.js
import React, { useState } from 'react';
import TextEditor from './TextEditor';
import { Button, MenuItem, Select } from '@mui/material';

const SectionButtons = ({ sections, selectedSection, setSelectedSection, handleEdit }) => (
  <div className="bg-gray-100 p-4 mx-3 font-semibold shadow-lg">
    <div className="mb-6">
      {/*<h2 className="text-2xl text-center font-bold">Select Clients</h2>*/}
    </div>
    <div className="flex flex-row justify-center gap-2 -mb-8" >
      <h3 className=''>Clients :</h3>
      {sections.map(section => (
        <div key={section} className="flex items-center mr-4">
          <input
            type="radio"
            id={section}
            value={section}
            checked={selectedSection === section}
            onChange={() => setSelectedSection(section)}
            className="mr-2"
          />
          <label htmlFor={section}>{section}</label>
        </div>
      ))}
    </div>
  </div>
);

const SectionContent = ({ section, handleEdit }) => {
  const [selectedStatus, setSelectedStatus] = useState('Planned');

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 mx-3 font-semibold shadow-lg mb-8">
      <div className="flex flex-col items-center ">
        <div className=" mb-4">
          {/* Heading if you want <h2 className="text-2xl text-center">{section}</h2> */}
        </div>
        <div className="flex items-center">
          <h3 className='mr-3'>Template :</h3>
          <Select
            value={selectedStatus}
            onChange={handleStatusChange}
            variant="outlined"
            className="mr-4"
            displayEmpty
            defaultValue={'Planned'}
            sx={{width:150,height:'40px'}} //set the desired width
          >
            {/*<MenuItem value="" disabled>Select Status</MenuItem>*/}
            <MenuItem value={'Planned'}>Planned</MenuItem>
            <MenuItem value={'Started'}>Started</MenuItem>
            <MenuItem value={'Inprogress'}>Inprogress</MenuItem>
            <MenuItem value={'Completed'}>Completed</MenuItem>
            <MenuItem value={'Delay'}>Delay</MenuItem>
            <MenuItem value={'Disregard'}>Disregard</MenuItem>
          </Select>
          <div>
            <Button variant="contained" onClick={() => handleEdit(section)} style={{ backgroundColor: '#3f51b5', color: 'white', marginRight: '8px' }}>Edit</Button>
            <Button variant="contained" color="secondary" style={{ backgroundColor: "#f50057", color: 'white' }}>View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmailTemplate = () => {
  const sections = ['Internal Stakeholders', 'East & West'];
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingSection, setEditingSection] = useState('');

  const handleEdit = (section) => {
    setEditingSection(section);
    setEditorVisible(true);
  };

  return (
    <div className="flex flex-col justify-center items-center  ">
      <div className="w-full max-w-screen-lg">
        <SectionButtons
          sections={sections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          handleEdit={handleEdit}
        />

        {selectedSection &&
          <SectionContent section={selectedSection} handleEdit={handleEdit} />
        }
      </div>

      {editorVisible && (
        <TextEditor onEditorClose={() => setEditorVisible(false)} editingSection={editingSection} />
      )}
    </div>
  );
};

export default EmailTemplate;
