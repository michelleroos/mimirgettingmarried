import { useEffect, useState } from "react";
import { projectFirestore, projectStorage, timestamp } from "../firebase/config";
// import firebase from 'firebase/app';
// import 'firebase/firestore';

export default function useStorage(file) {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('profile-photos');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: url, createdAt: createdAt })
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }
}