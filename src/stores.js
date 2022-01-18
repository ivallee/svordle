import { writable } from 'svelte/store';

export const currentRound = writable(0);
export const currentWord = writable('');
export const rounds = writable([]);