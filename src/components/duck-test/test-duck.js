import { Duck } from 'saga-duck';

export class MyDuck extends Duck {
  get quickTypes() {
    return {
      ...super.quickTypes,
      ADD: 1
    };
  }

  get reducers() {
    const { types } = this;
    return {
      ...super.reducers,
      num: (state = 0, action) => {
        switch (action.type) {
          case types.ADD:
            return state + 1;
          default:
            return state;
        }
      }
    };
  }

  get creators() {
    return {
      ...super.creators,
      add() {
        return { type: types.ADD };
      }
    };
  }
}
