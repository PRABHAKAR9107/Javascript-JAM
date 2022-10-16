const url = "https://jsonplaceholder.typicode.com/users";

const options = {
  method: "POST",
  body: JSON.stringify({
    id: 11,
    name: " pdsfzxcsdds",
    username: "Kamrendsfgsdsafcad",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const options1 = {
  method: "PUT",
  body: JSON.stringify({
    id: 5,
    name: " pdsfds",
    username: "Kamrendsfgsd",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const options2 = {
  method: "PATCH",
  body: JSON.stringify({
    website: "sbfjbdk.info",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const options3 = {
  method: "DELETE",
  // body: JSON.stringify({
  //   website: "sbfjbdk.info",
  // }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

async function getData() {
  const response = await fetch(url);

  const result = await response.json();

  //   console.log(response.json());

  console.log(result);
  //   return response.json();
  return result;
}

getData().then(
  (data) => {
    document.getElementById("getData").innerHTML = data.map(
      (item) => item.name
    );
  },
  (error) => {
    console.log("error:", error);
  }
);

// // onst newDacta = getData();
// document.getElementById("getData").innerHTML = newData[[0]];

async function postData() {
  const response = await fetch(url, options);

  const result = await response.json();

  console.log(result);
  return result;
}

postData().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

async function putData() {
  const response = await fetch(`${url}/5`, options1);

  const result = await response.json();

  console.log(result);
  return result;
}

async function patchData() {
  const response = await fetch(`${url}/5`, options2);

  const result = await response.json();

  console.log(result);
  return result;
}

async function deleteData() {
  const response = await fetch(`${url}/5`, options3);

  const result = await response.json();

  console.log(result);
  return result;
}
