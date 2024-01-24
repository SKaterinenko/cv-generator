export type ResumeType = {
  name: string | undefined
  lastName: string | undefined
  mail: string | undefined
  phone: string | undefined
  image: string | undefined
  job: string | undefined
  about: string | undefined
  jobs: JobType[]
};

export type JobType = {
  titleJob?: string | undefined
  cityJob?: string | undefined
  descriptionJob?: string | undefined
};
