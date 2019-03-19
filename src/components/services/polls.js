export default postPoll = poll => {
  return fetch(`${process.env.API_URL}/polls`, {
    method: 'POST',
    body: JSON.stringify(poll)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
