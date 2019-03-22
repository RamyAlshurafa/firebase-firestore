import { firebase, storage } from './index';
import initialDishes from '../data/dishes';

const db = firebase.firestore();

export const addNewDish = dishData => db.collection('dishes').doc(dishData.name).set(dishData, { merge: true });


export const initializeData = () => {
  const promises = initialDishes.map(dish => addNewDish(dish));
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

export const uploadImage = file => new Promise((resolve, reject) => {
// Create a root reference
  const storageRef = storage.ref();

  // // Create a reference to 'mountains.jpg'
  // const mountainsRef = storageRef.child('mountains.jpg');

  // Create a reference to 'images/mountains.jpg'
  const mountainImagesRef = storageRef.child(`images/${file.name}`);


  mountainImagesRef.put(file).then((snapshot) => {
    console.log(snapshot.ref.fullPath);
    resolve(snapshot.ref.fullPath);

    console.log('Uploaded a blob or file!');
  });
});

export const getImageURL = ref => new Promise((resolve, reject) => {
  const pathReference = storage.ref(ref);
  pathReference.getDownloadURL().then((url) => {
    // Insert url into an <img> tag to "download"
    resolve(url);
  });
});

export const createNewDishAndUploadImage = (file, name, rate) => new Promise((resolve, reject) => {
  uploadImage(file).then((ref) => {
    getImageURL(ref).then((url) => {
      const newDish = {
        name,
        rate,
        url,
      };
      addNewDish(newDish).then(resolve);
    });
  });
});
