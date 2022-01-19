import { readable, writable } from 'svelte/store';

export const answer = readable('panic');

export const currentRound = writable(0);
export const currentWord = writable('');
export const rounds = writable([
  {
    id: 1,
    word: 'brain'
  },
  {
    id: 2,
    word: 'manic'
  },
]);