import CategoryStack from '../CategoryStack/CategoryStack';
import HomeStack from '../HomeStack/HomeStack';

export enum STACK {
  HOME = 'HOME',
  CATEGORY = 'CATEGORY',
}

export const stacks = {
  [STACK.HOME]: HomeStack,
  [STACK.CATEGORY]: CategoryStack,
};
