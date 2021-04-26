import { subscribe } from 'svelte/internal';
import { writable } from 'svelte/store';

export const modal = writable(null);

const startGoalSeconds = 25200;
// const startGoalSeconds = 6005;


// export const workGoal = writable(startGoalSeconds); // In seconds, 25200s = 7 hours
// export const workGoalMinutes = writable(startGoalSeconds/60);
// export const workGoalHours = writable(startGoalSeconds/60/60);
export const workDuration = writable(0); // In seconds

function createWorkGoal() {
  const { subscribe, set, update } = writable(startGoalSeconds);

  return {
    subscribe,
    incrementHours: () => update(n => n + (60*60)),
    decrementHours: () => update(n => n - (60*60)),
    incrementMinutes: () => update(n => n + (60)),
    decrementMinutes: () => update(n => n - (60)),
    incrementSeconds: () => update(n => n + 1),
    decrementSeconds: () => update(n => n - 1),
    getHours: () => n*60,
    reset: () => set(0)    
  };
}

function getWorkGoalHours() {
  const { subscribe, set, update } = writable(startGoalSeconds);

  return  {
    subscribe,
    getHours: () => valueof(workGoal/60/60)
  }
}

export const workGoal = createWorkGoal();
export const workGoalHours = getWorkGoalHours();

export const selectedDuration = writable(1500);
export const sessionDuration = writable(0);