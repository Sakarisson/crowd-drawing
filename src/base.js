import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBnnzgcnvyLG6wMyenvQtjrFhmkmMgSog4",
  authDomain: "crowd-drawing-react.firebaseapp.com",
  databaseURL: "https://crowd-drawing-react.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }
