export const postPoll = poll => {
  const { question, options, user } = poll;
  return Promise.all([
    { question, options, user }
  ]); 
};

export const getPolls = () => {
  return Promise.all([
    { question: 'hello?', options: ['no'] }
  ]);
};
