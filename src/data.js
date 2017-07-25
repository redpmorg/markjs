// RULE: Data must have an unqueID

export const json = {};
json.data = [
  {id: 1, name: "leonard", age: 43, sex: 'men', location: "constanta"},
  {id: 2, name: "tiberiu", age: 20, sex: 'men', location: "bucharest"},
  {id: 3, name: "diana", age: 30, sex: 'women', location: "constanta"},
  {id: 4, name: "daria", age: 6, sex: 'women', location: "constanta"},
  {id: 5, name: "luca", age: 3.3, sex: 'men', location: "constanta"},
];

// adding field reference like [input, select checkbox], placeholders and format its
json.columnProperties = [
  {id:'name', numeric: false, disablePadding: true,  label: 'Name', style: {textTransform: "capitalize"}, searchable: true },
  {id:'age', numeric: true,  disablePadding: false, label: 'Age', style: {textTransform: "none"}, searchable: true },
  {id:'sex', numeric: false, disablePadding: false, label: 'Sex', style: {textTransform: "uppercase"}, searchable: true },
  {id:'location',numeric: false, disablePadding: false, label: 'Location', style: {textTransform: "none"}, searchable: true }
]
