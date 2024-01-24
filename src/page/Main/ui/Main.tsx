'use client';

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { CardJob } from '@/entities/CardJob';
import { Form } from '@/entities/form';
import { Button } from '@/shared/Button';
import { JobType, ResumeType } from '@/shared/Types/generalTypes';
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
    jobs: [
      {
        titleJob: '',
        cityJob: '',
        descriptionJob: '',
      },
    ],
  };

  const [state, setState] = React.useState<ResumeType>(initialState);
  const [isAddedJob, setIsAddedJob] = useState(false);
  const [job, setJob] = React.useState<JobType>();
  const [isClient, setIsClient] = useState(false);

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

  const handleChangeJob = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setJob({
      ...job,
      [event.target.name]: event.target.value,
    });
  };

  const saveJob = () => {
    setState({
      ...state,
      jobs: [...state.jobs, { ...job }],
    });
    setJob(undefined);
    setIsAddedJob(false);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container grid grid-cols-2 mt-10 gap-10 h-screen">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="my-5 text-2xl">CV Generator</h1>
          {isClient && (
          <PDFDownloadLink document={<Resume data={state} />} fileName="Resume.pdf">
            <Button>Скачать резюме</Button>
          </PDFDownloadLink>
          )}
        </div>
        <Form state={state} handleChange={handleChange} />
        <div className="mt-5">
          {isAddedJob && (
          <CardJob handleChangeJob={handleChangeJob} saveJob={saveJob} />
          )}
          {!isAddedJob && <Button onClick={() => setIsAddedJob(true)}>Добавить работу</Button>}
        </div>
      </div>
      {isClient && (
      <PDFViewer width="100%" height="100%" showToolbar={false}>
        <Resume data={state} />
      </PDFViewer>
      )}
    </div>
  );
};
