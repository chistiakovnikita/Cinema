import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "kino-82a49.firebaseapp.com",
      projectId: "kino-82a49",
      storageBucket: "kino-82a49.appspot.com",
      messagingSenderId: "807701075843",
      appId: process.env.APP_ID
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
