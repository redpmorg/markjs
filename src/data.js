// RULE: Data must have an unqueID


export const data = {};
data.data = [
  {id: 1, name: "leonard", age: 43, sex: 'men', location: "constanta"},
  {id: 2, name: "tiberiu", age: 43, sex: 'men', location: "bucharest"},
  {id: 3, name: "diana", age: 20, sex: 'women', location: "constanta"},
  {id: 4, name: "daria", age: 6, sex: 'women', location: "constanta"},
  {id: 5, name: "luca", age: 3.3, sex: 'men', location: "constanta"},
];

data.columnProperties = [
  {id:'name',      numeric: false, disablePadding: true,  label: 'Name', style: {textTransform: "capitalize"} },
  {id:'age',       numeric: true,  disablePadding: false, label: 'Age', style: {textTransform: "none"} },
  {id:'sex',       numeric: false, disablePadding: false, label: 'Sex', style: {textTransform: "uppercase"} },
  {id:'location',  numeric: false, disablePadding: false, label: 'Location', style: {textTransform: "none"} }
]

export const dataExperimental = {};
dataExperimental.data = [
  {id: 1, name: "leonard", age: 43, sex: 'men', location: "constanta"},
];

dataExperimental.columnProperties = [
  {id:'name',      numeric: false, disablePadding: true,  label: 'Name', style: {textTransform: "capitalize"} },
  {id:'age',       numeric: true,  disablePadding: false, label: 'Age', style: {textTransform: "none"} },
  {id:'sex',       numeric: false, disablePadding: false, label: 'Sex', style: {textTransform: "uppercase"} },
  {id:'location',  numeric: false, disablePadding: false, label: 'Location', style: {textTransform: "none"} }
]
