import { Todo } from './type';

export const TODO_LIST: Todo[] = [
  { id: 1, title: 'Buy groceries for next week', statusId: 1 },
  { id: 2, title: 'Renew car insurance', statusId: 1 },
  { id: 3, title: 'Sign up for online course', statusId: 1 },
];

export const STATUS = {
  IN_PROGRESS: { id: 1, title: 'In progress' },
  FINISHED: { id: 2, title: 'Finished' },
};
