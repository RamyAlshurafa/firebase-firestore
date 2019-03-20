import {firebase} from "./index"

var db = firebase.firestore();

export const addNewDish = (dishData) => {
  db.collection("dishes").add({
    title: "steamed rice with viand",
    rate: 3,
    price: 75,
    imageURL: "https://images.unsplash.com/photo-1543826173-1beeb97525d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=726&q=80"
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
}

export const getAllDishes = () => {
  db.collection("dishes").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}