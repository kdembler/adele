import { capitalize, count, sort } from '../logic';

const testData = [
  {
    exampleField: {
      data: 'foo',
      label: 'Example Field',
    },
    codeDepth: {
      data: 'FOO/BAR/BOO',
      label: 'Code Depth',
    },
    colorNaming: {
      data: 'Natural (e.g. red)',
      label: 'Color Naming',
    },
    otherField: {
      data: 'foo',
      labal: 'Other Field',
    },
  },
  {
    exampleField: {
      data: 'foo',
      label: 'Example Field',
    },
    codeDepth: {
      data: 'FOO/BAR/BOO',
      label: 'Code Depth',
    },
    colorNaming: {
      data: 'Specific',
      label: 'Color Naming',
    },
    otherField: {
      data: 'foo',
      labal: 'Other Field',
    },
  },
  {
    exampleField: {
      data: 'Foo,: ',
      label: 'Example Field',
    },
    codeDepth: {
      data: 'FOO/BAR',
      label: 'Code Depth',
    },
    colorNaming: {
      data: 'natural (e.g. blue)',
      label: 'Color Naming',
    },
    otherField: {
      data: 'unique1',
      labal: 'Other Field',
    },
  },
  {
    exampleField: {
      data: 'bar',
      label: 'Example Field',
    },
    codeDepth: {
      data: 'FOO',
      label: 'Code Depth',
    },
    colorNaming: {
      data: 'Abstract (e.g. something)',
      label: 'Color Naming',
    },
    otherField: {
      data: 'unique2',
      labal: 'Other Field',
    },
  },
  {
    exampleField: {
      data: 'baz',
      label: 'Example Field',
    },
    codeDepth: {
      data: 'FOO/BAR/BOO/BAZ',
      label: 'Code Depth',
    },
    colorNaming: {
      data: 'natural',
      label: 'Color Naming',
    },
    otherField: {
      data: 'unique3',
      labal: 'Other Field',
    },
  },
];

describe('capitalize function', () => {
  it('capitalizes single lowercase word', () => {
    expect(capitalize('foO')).toEqual('FoO');
  });

  it('returns already capitalized word', () => {
    expect(capitalize('Foo')).toEqual('Foo');
  });

  it('capitalizes every word of given string', () => {
    expect(capitalize('foo bar baz')).toEqual('Foo Bar Baz');
  });
});

describe('count function', () => {
  it('properly counts occurences of values (even when slightly mistyped)', () => {
    // console.log(data);
    const counted = count(testData, 'exampleField');
    expect(counted).toEqual({
      foo: 3,
      bar: 1,
      baz: 1,
    });
  });

  it('properly counts code depth field values', () => {
    const counted = count(testData, 'codeDepth');
    expect(counted).toEqual({
      FOO: 5,
      BAR: 4,
      BOO: 3,
      BAZ: 1,
    });
  });

  it('properly counts color naming field values', () => {
    const counted = count(testData, 'colorNaming');
    expect(counted).toEqual({
      Natural: 3,
      Abstract: 1,
      Specific: 1,
    });
  });

  it('properly groups other values', () => {
    const counted = count(testData, 'otherField');
    expect(counted).toEqual({
      foo: 2,
      other: 3,
    });
  });
});

const sortData1 = {
  foo: 3,
  bar: 4,
  baz: 1,
};
const sortedData1 = [
  {
    key: 'bar',
    value: 4,
  },
  {
    key: 'foo',
    value: 3,
  },
  {
    key: 'baz',
    value: 1,
  },
];

const sortData2 = {
  other: 10,
  foo: 3,
};
const sortedData2 = [
  {
    key: 'foo',
    value: 3,
  },
  {
    key: 'other',
    value: 10,
  },
];

const sortData3 = {
  'no data': 10,
  foo: 3,
};
const sortedData3 = [
  {
    key: 'foo',
    value: 3,
  },
  {
    key: 'no data',
    value: 10,
  },
];

const sortData4 = {
  'no data': 10,
  'other': 9,
  foo: 3,
};
const sortedData4 = [
  {
    key: 'foo',
    value: 3,
  },
  {
    key: 'other',
    value: 9,
  },
  {
    key: 'no data',
    value: 10,
  },
];

describe('sort function', () => {
  it('returns sorted list of values', () => {
    const sorted = sort(sortData1);
    expect(sorted).toEqual(sortedData1);
  });
  
  it(`moves 'other' value to the end`, () => {
    const sorted = sort(sortData2);
    expect(sorted).toEqual(sortedData2);
  });

  it(`moves 'no data' value to the end`, () => {
    const sorted = sort(sortData3);
    expect(sorted).toEqual(sortedData3);
  });

  it(`moves both 'no data' and 'other' values to the end`, () => {
    const sorted = sort(sortData4);
    expect(sorted).toEqual(sortedData4);
  });
});
