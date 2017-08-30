export const menuTop = [
  {
    id: 1,
    label: "Home",
    route: {
      url: "/",
      exact: true
    },
    component: {
      path: "components",
      name: "home"
    }
  }, {
    id: 4,
    label: "Nomenclator",
    route: {
      url: "/nomenclator"
    },
    component: {
      path: "components",
      name: "nomenclator"
    }
  }, {
    id: 3,
    label: "Topics with Children",
    route: {
      url: "/topics"
    },
    component: {
      path: "components",
      name: "topics"
    },
    hasChildren: [
      {
        id: 1,
        label: "SubTopics_1",
        route: {
          url: "/topics/subtopics_1"
        },
        component: {
          path: "components",
          name: "subtopics_1"
        }
      }, {
        id: 2,
        label: "SubTopics_2",
        route: {
          url: "/topics/subtopics_2"
        },
        component: {
          path: "components",
          name: "subtopics_2"
        },
      },
    ],
  }
];

export const tableGeneralProperties = {
  url: 'http://127.0.0.1:80',
  tableTitle: 'MarkJS Nomenclator',
  rowsPerPage: 5,
  add: {
    uri: '/add',
    title: 'Adding new record',
    additionalText: 'adding is fun',
    submitLabel: 'Add',
    cancelLabel: 'Cancel'
  },
  edit: {
    uri: '/edit',
    title: 'Modify your data',
    additionalText: 'modify is not a pure function',
    submitLabel: 'Edit',
    cancelLabel: 'Cancel'

  },
  delete: {
    uri: "/delete",
    title: 'Are you sure?',
    additionalText: 'wiping data is irreversible',
    submitLabel: 'Yes',
    cancelLabel: 'No'
  }
}

//TODO adding field reference like [input, select checkbox], placeholders and format its
export const columnProperties = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
    style: {
      textTransform: "capitalize"
    },
    searchable: true
  }, {
    id: 'age',
    numeric: true,
    disablePadding: false,
    label: 'Age',
    style: {
      textTransform: "none"
    },
    searchable: true
  }, {
    id: 'sex',
    numeric: false,
    disablePadding: false,
    label: 'Sex',
    style: {
      textTransform: "uppercase"
    },
    searchable: true
  }, {
    id: 'location',
    numeric: false,
    disablePadding: false,
    label: 'Location',
    style: {
      textTransform: "none"
    },
    searchable: true
  }
]

// RULE: Data must have an unqueID
//hardcoded data
export const data = [
  {
    id: 1,
    name: "aleonard",
    age: 43,
    sex: 'men',
    location: "constanta"
  }, {
    id: 2,
    name: "btiberiu",
    age: 20,
    sex: 'men',
    location: "bucharest"
  }, {
    id: 3,
    name: "cdiana",
    age: 30,
    sex: 'women',
    location: "constanta"
  }, {
    id: 4,
    name: "ddaria",
    age: 6,
    sex: 'women',
    location: "constanta"
  }, {
    id: 5,
    name: "eluca",
    age: 3.3,
    sex: 'men',
    location: "constanta"
  }, {
    id: 6,
    name: "fleonard",
    age: 43,
    sex: 'men',
    location: "constanta"
  }, {
    id: 7,
    name: "gtiberiu",
    age: 20,
    sex: 'men',
    location: "bucharest"
  }, {
    id: 8,
    name: "hdiana",
    age: 30,
    sex: 'women',
    location: "constanta"
  }, {
    id: 9,
    name: "idaria",
    age: 6,
    sex: 'women',
    location: "constanta"
  }, {
    id: 10,
    name: "jluca",
    age: 3.3,
    sex: 'men',
    location: "constanta"
  }, {
    id: 11,
    name: "kleonard",
    age: 43,
    sex: 'men',
    location: "constanta"
  }, {
    id: 12,
    name: "ltiberiu",
    age: 20,
    sex: 'men',
    location: "bucharest"
  }, {
    id: 13,
    name: "mdiana",
    age: 30,
    sex: 'women',
    location: "constanta"
  }, {
    id: 14,
    name: "ndaria",
    age: 6,
    sex: 'women',
    location: "constanta"
  }, {
    id: 15,
    name: "oluca",
    age: 3.3,
    sex: 'men',
    location: "constanta"
  }, {
    id: 16,
    name: "pleonard",
    age: 43,
    sex: 'men',
    location: "constanta"
  }, {
    id: 17,
    name: "qtiberiu",
    age: 20,
    sex: 'men',
    location: "bucharest"
  }, {
    id: 18,
    name: "rdiana",
    age: 30,
    sex: 'women',
    location: "constanta"
  }, {
    id: 19,
    name: "sdaria",
    age: 6,
    sex: 'women',
    location: "constanta"
  }, {
    id: 20,
    name: "tluca",
    age: 3.3,
    sex: 'men',
    location: "constanta"
  }
];
