import firestore from "./firestore";

export const createProduct = async (product) => {
    const colRef = firestore.collection("products");
    const docRef = colRef.doc();
    await docRef.set(product);
};

export const getProducts = async () => {
    const colRef = firestore.collection("products").orderBy("colour", "asc");
    const snapshot = await colRef.get();
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
    const docRef = colRef.doc(id).update();
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
