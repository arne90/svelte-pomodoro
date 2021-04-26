import { writable } from 'svelte/store';

export const modal = writable(null);

export const workGoal = writable(25200); // In seconds, 25200s = 7 hours
export const workDuration = writable(0); // In seconds

export const selectedDuration = writable(1500);
export const sessionDuration = writable(0);