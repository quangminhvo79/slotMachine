export type Callback = (...args: any[]) => any;

export type RandomizeCallback = (active: number, max: number) => number;

export type Direction = 'up' | 'down';

export type Bound = {
  initial: number;
  from: number;
  to: number;
  nextReset: number;
  prevReset: number;
};

export type Bounds = Record<Direction, Bound>;

export type Options = {
  active?: number;
  delay?: number;
  randomize?: RandomizeCallback;
  direction?: Direction;
  finishTransition?: string;
  finishDuration?: number;
  delaySpin2?: number;
  delaySpin3?: number;
  delaySpin4?: number;
  delaySpin5?: number;
};
