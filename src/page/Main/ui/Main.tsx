'use client';

import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Input } from '@/shared/Input';
import { Textarea } from '@/shared/Textarea';
import { Resume } from '@/widgets/Resume/ui/Resume';

export const Main = () => {
  const initialState = {
    name: '',
    lastName: '',
    mail: '',
    phone: '',
    job: '',
    image: '',
    about: '',
    jobs: '',
  };

  const [state, setState] = useState(initialState);
  const [isAddedJob, setIsAddedJob] = useState(false);
  const [job, setJob] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Сохранит в стейт либо фото либо текст
    if (event.target instanceof HTMLInputElement && event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setState({
          ...state,
          [event.target.name]: reader.result,
        });
      };

      reader.readAsDataURL(file);
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleChangeJob = (event: React.ChangeEvent<HTMLInputElement>) => {
    setJob((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const saveJob = () => {
    setState((prevState) => ({
      ...prevState,
      jobs: [{ ...job }],
    }));
    setIsAddedJob(false);
  };

  return (
    <div className="container grid grid-cols-2 mt-10 gap-10">
      <div>
        <h1 className="my-5 text-2xl">CV Generator</h1>
        <button onClick={() => console.log(state)}>LOG</button>
        <br />
        <button onClick={() => console.log(job)}>LOG job</button>

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
            <p>Фото:</p>
            <input name="image" type="file" onChange={handleChange} />
          </div>
          <div>
            <p>Почта:</p>
            <Input name="mail" value={state.mail} onChange={handleChange} />
          </div>
          <div>
            <p>Телефон:</p>
            <Input name="phone" value={state.phone} onChange={handleChange} />
          </div>
          <div>
            <p>Должность:</p>
            <Input name="job" value={state.job} onChange={handleChange} />
          </div>
        </div>
        <div className="mt-5">
          <p>О себе:</p>
          <Textarea name="about" onChange={handleChange} />
          {isAddedJob && (
          <div>
            <div>
              <p>Должность:</p>
              <Input name="titleJob" onChange={handleChangeJob} />
            </div>
            <button onClick={saveJob}>Сохранить</button>
          </div>
          )}
          {!isAddedJob && <button onClick={() => setIsAddedJob(true)}>Добавить работу</button>}
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
