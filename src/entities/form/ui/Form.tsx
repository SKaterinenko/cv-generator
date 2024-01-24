import React from 'react';
import { Input } from '@/shared/Input';
import { Textarea } from '@/shared/Textarea';
import { ResumeType } from '@/shared/Types/generalTypes';

type FormProps = {
  state: ResumeType
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const Form:React.FC<FormProps> = ({ state, handleChange }) => (
  <div>
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
        <Input name="mail" type="email" value={state.mail} onChange={handleChange} />
      </div>
      <div>
        <p>Телефон:</p>
        <Input name="phone" type="number" value={state.phone} onChange={handleChange} />
      </div>
      <div>
        <p>Должность:</p>
        <Input name="job" value={state.job} onChange={handleChange} />
      </div>
    </div>
    <div className="mt-5">
      <p>О себе:</p>
      <Textarea name="about" onChange={handleChange} />
    </div>
  </div>
);
