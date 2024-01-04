import { CanDeactivateFn } from '@angular/router';

export const contactGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
