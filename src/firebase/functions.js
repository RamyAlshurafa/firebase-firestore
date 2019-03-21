import { firebase, storage } from './index';
import initialDishes from '../data/dishes';

const db = firebase.firestore();

export const addNewDish = (ref, dishData) => db.collection('dishes').doc(ref).set(dishData, { merge: true });


export const initializeData = () => {
  const promises = initialDishes.map(dish => addNewDish(dish.name, dish));
  Promise.all(promises)
    .then(() => {
      console.log('Done');
    }).catch((err) => {
      console.log(err);
    });
};

export const getAllDishes = () => new Promise((resolve) => {
  db.collection('dishes').get().then((querySnapshot) => {
    const dishes = [];
    querySnapshot.forEach((doc) => {
      dishes.push(doc.data());
    });
    resolve(dishes);
  });
});

export const uploadImage = (file) => {
// Create a root reference
  const storageRef = storage.ref();

  // // Create a reference to 'mountains.jpg'
  // const mountainsRef = storageRef.child('mountains.jpg');

  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = storageRef.child('images/1f622.png');


  mountainImagesRef.put(file).then((snapshot) => {
    console.log(snapshot);

    console.log('Uploaded a blob or file!');
  });
};

export const getImageURL = () => {
  const pathReference = storage.ref('images/1f622.png');
  pathReference.getDownloadURL().then((url) => {
    // Insert url into an <img> tag to "download"
    console.log(url, 'url');
  });
};
