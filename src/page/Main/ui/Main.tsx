'use client';

import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Input } from '@/shared/Input';
import { Resume } from '@/widgets/Resume/ui/Resume';

export const Main = () => {
  const initialState = {
    name: '',
    lastName: '',
    mail: '',
    phone: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container grid grid-cols-2 mt-10 gap-10">
      <div>
        <h1 className="my-5 text-2xl">CV Generator</h1>
        <button onClick={() => console.log(state)}>LOG</button>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p>Имя:</p>
            <Input name="name" value={state.name} onChange={handleChange} />
          </div>
          <div>
            <p>Фамилия:</p>
            <Input name="lastName" value={state.lastName} onChange={handleChange} />
          </div>
          <div>
            <p>Почта:</p>
            <Input name="mail" value={state.mail} onChange={handleChange} />
          </div>
          <div>
            <p>Телефон:</p>
            <Input name="phone" value={state.phone} onChange={handleChange} />
          </div>
        </div>
        <PDFDownloadLink document={<Resume data={state} />} fileName="Resume.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>

      <PDFViewer width="100%" height="100%" showToolbar={false}>
        <Resume data={state} />
      </PDFViewer>
    </div>
  );
};
