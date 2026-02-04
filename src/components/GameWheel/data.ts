interface Data {
  title: string;
  wheel: {
    button: string;
    sectorsCount: number;
    sectorsValue: {
      bonuses: string[];
    };
  };
  modal: {
    title: string;
    bonus: string;
    button: string;
  };
};

export const data: Data = {
  title: 'Spin The Wheel',
  wheel: {
    button: 'Spin',
    sectorsCount: 8,
    sectorsValue: {
      bonuses: ['2000', 'Empty', '50', 'Spin Again', '100', 'Empty', '150', 'Spin Again']
    }
  },
  modal: {
    title: 'You Win',
    bonus: 'none',
    button: 'Collect'
  }
};