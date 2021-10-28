// import firestore from "./firestore";

// const cleanRecord = (docSnapshot) => ({
//     id: docSnapshot.id,
//     ...docSnapshot.data(),
// });

// export const getProducts = async () => {
//     const colRef = firestore.collection("chairs");
//     const snapshot = await colRef.get();
//     const docs = snapshot.docs;
//     return docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//     }));
// };

// export const findProduct = async (id) => {
//     const colRef = firestore.collection("chairs");
//     const docRef = colRef.doc(id);
//     const docSnap = await docRef.get();
//     return cleanRecord(docSnap);
// };

// export const updateProduct = async (id, partial) => {
//     const colRef = firestore.collection("chairs");
//     const docRef = colRef.doc(id);
//     await docRef.update(partial);
// };

import firestore from "./firestore";

export const createProduct = async (product) => {
    const colRef = firestore.collection("products");
    const docRef = colRef.doc();
    await docRef.set(product);
};

export const getProducts = async () => {
    const colRef = firestore.collection("products");
    const snapshot = await colRef.get(); //returns a promise
    return cleanedRecord(snapshot);
};

export const findProduct = async (id) => {
    const colRef = firestore.collection("products");
    const docRef = colRef.doc(id);
    const snapshot = await docRef.get();
    return cleanRecord(snapshot);
};

export const updateProduct = async (id, partial) => {
    const colRef = firestore.collection("products");
    const docRef = colRef.doc(id);
    await docRef.update(partial);
};

// export const deleteProduct = async (id) => {
//     const colRef = firestore.collection("products");
//     const docRef = colRef.doc(id);
//     await docRef.delete(id);
// };

export const cleanRecord = (docSnapshot) => ({
    id: docSnapshot.id,
    ...docSnapshot.data(),
});

export const cleanedRecord = (querySnapshot) => {
    return querySnapshot.docs.map(cleanRecord);
};
