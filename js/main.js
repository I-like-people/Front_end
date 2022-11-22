// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
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
  const commentSnapshot = await getDocs(commentCollection);
  const commentList = commentSnapshot.docs.map((doc) => doc.data());

  let commentListSection = document.querySelector("#comment-list");

  for (let i = 0; i < commentList.length; i++) {
    const element = commentList[i];
    commentListSection.innerHTML += `
        <div class="card">
        <div class="card-body">
        <blockquote class="blockquote mb-0">
            <p>${element.comment}</p>
            <small>${element.star}</small>
            <footer class="blockquote-footer">${element.nickname}</footer>
            <small>${element.age}</small>
        </blockquote>
        </div>
    </div>
    `;
  }
  return commentList;
}
getComments(db);

async function write_comments(db) {
  let star = document.querySelector("#id_text_rating").innerHTML;
  let nickname = document.querySelector("#name").value;
  let comment = document.querySelector("#comment").value;
  let age = document.querySelector("#age").value;
  console.log(star, nickname, comment);
  if (star == "" || nickname == "" || comment == "") {
    alert("별점과 닉네임과 댓글은 비어있으면 안됩니다. ");
  } else {
    await addDoc(commentCollection, {
      nickname: nickname,
      star: star,
      comment: comment,
      age: age,
    });
    alert("댓글이 등록됐습니다.");
    window.location.reload();
  }
}

window.write_comments = write_comments;
