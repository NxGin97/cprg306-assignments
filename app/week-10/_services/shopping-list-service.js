import { db } from "@/app/utils/firebase";
import {collection, doc, getDocs, addDoc, deleteDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    try {
        //any param following db are the paths to get where you want. Get doc fetches all doc from that collection
        const querySnapshot = await getDocs(collection(db, "users", userId, "items"));
        querySnapshot.forEach((doc) => {
            items.push({
            id: doc.id, ...doc.data(),
        })
    });

    return items;

    } catch(error) {
        console.error("Error reading collection: 'users'" );
        return [];
    }
}

export async function addItem(userId, item) {
    try {
        //"item" is where the object array goes in
        const querySnapshot = await addDoc(collection(db, "users", userId, "items"), item);
        return querySnapshot.id;
    } catch (error)
    {
        console.error("Error adding to collection: 'users'");
        return null;
    }
}

export async function removeItem(userId, itemId) {
    try {
        await deleteDoc(doc(db, "users", userId, "items", itemId));
        return true;
    } catch (error) {
        console.error("Error removing item: ", error);
        return false;
    }
}