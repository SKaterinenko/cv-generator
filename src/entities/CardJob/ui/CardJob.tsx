import React from 'react';
import { Button } from '@/shared/Button';
import { Input } from '@/shared/Input';
import { Textarea } from '@/shared/Textarea';

type CardJobProps = {
  handleChangeJob: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  saveJob: () => void;
};

export const CardJob: React.FC<CardJobProps> = ({ handleChangeJob, saveJob }) => (
  <div>
    <div className="grid grid-cols-2 gap-5">
      <div>
        <p>Должность:</p>
        <Input name="titleJob" onChange={handleChangeJob} />
      </div>
      <div>
        <p>Город:</p>
        <Input name="cityJob" onChange={handleChangeJob} />
      </div>
    </div>
    <div className="mt-5">
      <p>Описание:</p>
      <Textarea name="descriptionJob" onChange={handleChangeJob} />
    </div>
    <Button onClick={saveJob}>Сохранить</Button>
  </div>
);
