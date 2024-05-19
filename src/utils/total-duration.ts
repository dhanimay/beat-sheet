import { IAct } from 'models';

export function getTotalDuration(acts: IAct[] = []) {
  return acts.reduce((acc, act) => {
    return acc + act.beats.reduce((total, beat) => total + beat.duration, 0);
  }, 0);
}
