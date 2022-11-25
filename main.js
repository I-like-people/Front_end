// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVLrWB6BcW-LRX2aJtgvpymAWWVf99tyM",
  authDomain: "project22-d86ba.firebaseapp.com",
  projectId: "project22-d86ba",
  storageBucket: "project22-d86ba.appspot.com",
  messagingSenderId: "1075055192685",
  appId: "1:1075055192685:web:d4bd699defb189c1dfad64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const commentCollection = collection(db, "comment");
async function getComments(db) {
  const q = await query(commentCollection, orderBy("createdDate", "desc"));
  const commentSnapshot = await getDocs(q);
  const commentList = commentSnapshot.docs.map((doc) => doc.data());

  let commentListSection = document.querySelector("#comment-list");

  for (let i = 0; i < commentList.length; i++) {
    const element = commentList[i];
    commentListSection.innerHTML += `
    <div class="card">
      <div class="card-body">${element.comment}</div>
      
    </div>
    `;
  }
  return commentList;
}
getComments(db);

async function write_comments(db) {
  const comment = document.querySelector("#id_comment").value;
  const createdDate = new Date().getTime();
  console.log(comment, createdDate);
  if (comment == "") {
    alert("댓글은 비어있으면 안됩니다. ");
  } else {
    await addDoc(commentCollection, {
      comment: comment,
      createdDate: createdDate,
    });
    alert("등록되었습니다.");
    window.location.reload();
  }
}

window.write_comments = write_comments;
