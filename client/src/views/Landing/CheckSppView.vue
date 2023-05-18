<template>
  <div>
    <input type="file" @change="uploadFile">
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref } from 'vue'; // Import the ref function

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

export default {
  setup() {
    const store = useStore(); // Get the store object
    const storageRef = ref(null); // Create a ref for storage reference

    // Konfigurasi Firebase
    const firebaseConfig = {
  apiKey: "AIzaSyCHNIEAyxiXTHFdenCP35IYLW-uCX3fPUQ",
  authDomain: "bm3-spp.firebaseapp.com",
  projectId: "bm3-spp",
  storageBucket: "bm3-spp.appspot.com",
  messagingSenderId: "228839284788",
  appId: "1:228839284788:web:c62991e62f32449c756a61",
  measurementId: "G-MLXF89ZYF4"
};

    // Inisialisasi Firebase
    firebase.initializeApp(firebaseConfig);
    storageRef.value = firebase.storage().ref(); // Assign the storage reference

    const uploadFile = (event) => {
      const file = event.target.files[0];

      const fileRef = storageRef.value.child(file.name);

      fileRef.put(file)
        .then(() => {
          console.log('File berhasil diupload');
          fileRef.getDownloadURL()
            .then((url) => {
              console.log('URL file:', url);
              // Do something with the file URL, such as save to database or display in UI
              store.commit("setLoading", false, { root: true });
              store.commit(
                "setToast",
                { show: "true", type: "success", msg: "Berhasil Upload Filenya!" },
                { root: true }
              );
            })
            .catch((error) => {
              console.log('Gagal mendapatkan URL file:', error);
            });
        })
        .catch((error) => {
          console.log('Gagal mengupload file:', error);
        });
    };

    return {
      uploadFile
    };
  }
}
</script>
