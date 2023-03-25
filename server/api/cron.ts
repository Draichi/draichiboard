import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'

export default defineEventHandler(async () => {
  const firebaseConfig = {
    apiKey: process.env.NUXT_FIREBASE_API_KEY || '',
    authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.NUXT_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.NUXT_FIREBASE_APP_ID || '',
    measurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID || '',
    databaseURL: process.env.NUXT_FIREBASE_DATABASE_URL || '',
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  // Initialize Cloud Firestore and get a reference to the service
  const db = getDatabase(app)

  const commitsTimelineRef = ref(db, '/apagar')

  push(commitsTimelineRef, { foo: 'bar' + new Date().toISOString() })

  // const data = await get(commitsTimelineRef)

  // const response = data.val()

  // return {
  //   response,
  // }
})