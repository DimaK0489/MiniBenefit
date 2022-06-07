import HomeStack from '../HomeStack/HomeStack';

export enum STACK {
  HOME = 'HOME',
}

export const stacks = {
  [STACK.HOME]: HomeStack,
};
