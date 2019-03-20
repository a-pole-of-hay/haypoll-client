export const getPolls = state => state.polls.polls;
export const getQuestion = state => state.pollForm.question;
export const getOptions = state => state.pollForm.options;
export const getOption = state => state.pollForm.option;
export const isLoadingForm = state => state.pollForm.loading;
export const isLoadingPoll = state => state.polls.loading;
