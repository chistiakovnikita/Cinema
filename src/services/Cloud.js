import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "cinema-b5985.firebaseapp.com",
      projectId: "cinema-b5985",
      storageBucket: "cinema-b5985.appspot.com",
      messagingSenderId: "1044254185469",
      appId: process.env.APP_ID,
      measurementId: "G-0DVGVYNR6T",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
