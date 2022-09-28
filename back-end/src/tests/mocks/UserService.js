const mockListAll = [
  {
    "id": 1,
    "name": "Delivery App Admin",
    "email": "adm@deliveryapp.com",
    "password": "a4c86edecc5aee06eff8fdeda69e0d04",
    "role": "administrator"
  },
  {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "password": "3c28d2b0881bf46457a853e0b07531c6",
    "role": "seller"
  },
  {
    "id": 3,
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "password": "1c37466c159755ce1fa181bd247cb925",
    "role": "customer"
  }
];

const mockDeleteList = [
  {
    "id": 1,
    "name": "Delivery App Admin",
    "email": "adm@deliveryapp.com",
    "password": "a4c86edecc5aee06eff8fdeda69e0d04",
    "role": "administrator"
  },
  {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "password": "3c28d2b0881bf46457a853e0b07531c6",
    "role": "seller"
  }
];

const mockDeleteUser = {
    "id": 3,
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "password": "1c37466c159755ce1fa181bd247cb925",
    "role": "customer"
  };

const mockGoodUser = {
  email:'hanna@hanna.com',
  name:'Hanna',
  password:'$#zebirita#$'
};

const mockQuery = { dataValues: {
  id:4,
  email:'hanna@hanna.com',
  name: 'Hanna',
  password:'1c37466c159755ce1fa181bd247cb925',
  role:'customer'
}};

const mockCreateService = {
  email: "hanna@hanna.com",
  name: "Hanna",
  role: "customer",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

const mockListSeller = [
  {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "password": "3c28d2b0881bf46457a853e0b07531c6",
    "role": "seller"
  }
]

module.exports = {
  mockListAll,
  mockGoodUser, 
  mockQuery,
  mockCreateService,
  mockListSeller,
  mockDeleteList,
  mockDeleteUser,
}
