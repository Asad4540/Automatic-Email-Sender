import React, { useState } from 'react';
import TinyMce from './TinyMce'; // Importing the TinyMce component
import { Button, MenuItem, Select } from '@mui/material'; // Importing components from Material UI

// Component for rendering section buttons
const SectionButtons = ({ sections, selectedSection, setSelectedSection, handleEdit }) => (
  <div className="bg-gray-100 p-4 mx-3 font-semibold shadow-lg">
    <div className="mb-6">
      {/* This is a comment */}
      {/* Uncomment below line if you want to add a heading */}
      {/*<h2 className="text-2xl text-center font-bold">Select Clients</h2>*/}
    </div>
    <div className="flex flex-row justify-center gap-2 -mb-8">
      <h3 className=''>Clients :</h3>
      {/* Mapping through sections to render radio buttons */}
      {sections.map(section => (
        <div key={section} className="flex items-center mr-4">
          {/* Radio button for each section */}
          <input
            type="radio"
            id={section}
            value={section}
            checked={selectedSection === section}
            onChange={() => setSelectedSection(section)}
            className="mr-2"
          />
          {/* Label for the radio button */}
          <label htmlFor={section}>{section}</label>
        </div>
      ))}
    </div>
  </div>
);

// Component for rendering section content
const SectionContent = ({ section, handleEdit }) => {
  const [selectedStatus, setSelectedStatus] = useState('Planned');

  // Function to handle status change
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 mx-3 font-semibold shadow-lg mb-8">
      <div className="flex flex-col items-center">
        <div className=" mb-4">
          {/* Heading for section (if needed) */}
          {/*<h2 className="text-2xl text-center">{section}</h2>*/}
        </div>
        <div className="flex items-center">
          <h3 className='mr-3'>Template :</h3>
          {/* Select component for selecting status */}
          <Select
            value={selectedStatus}
            onChange={handleStatusChange}
            variant="outlined"
            className="mr-4"
            displayEmpty
            defaultValue={'Planned'}
            sx={{width:150,height:'40px'}} // Set the desired width
          >
            {/* Menu items for different status options */}
            <MenuItem value={'Planned'}>Planned</MenuItem>
            <MenuItem value={'Started'}>Started</MenuItem>
            <MenuItem value={'Inprogress'}>Inprogress</MenuItem>
            <MenuItem value={'Completed'}>Completed</MenuItem>
            <MenuItem value={'Delay'}>Delay</MenuItem>
            <MenuItem value={'Disregard'}>Disregard</MenuItem>
          </Select>
          {/* Buttons for editing and viewing */}
          <div>
            <Button variant="contained" onClick={() => handleEdit(section)} style={{ backgroundColor: '#3f51b5', color: 'white', marginRight: '8px' }}>Edit</Button>
            <Button variant="contained" color="secondary" style={{ backgroundColor: "#f50057", color: 'white' }}>View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main EmailTemplate component
const EmailTemplate = () => {
  // Array of sections
  const sections = ['Internal Stakeholders', 'East & West'];
  // State for selected section, editor visibility, and editing section
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [editorVisible, setEditorVisible] = useState(false);
  const [editingSection, setEditingSection] = useState('');

  // Function to handle edit button click
  const handleEdit = (section) => {
    setEditingSection(section);
    setEditorVisible(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg">
        {/* Rendering section buttons */}
        <SectionButtons
          sections={sections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          handleEdit={handleEdit}
        />

        {/* Rendering section content based on selected section */}
        {selectedSection &&
          <SectionContent section={selectedSection} handleEdit={handleEdit} />
        }
      </div>

      {/* Rendering TinyMce editor if editorVisible is true */}
      {editorVisible && (
        <TinyMce onEditorClose={() => setEditorVisible(false)} editingSection={editingSection} />
      )}
    </div>
  );
};

export default EmailTemplate;

