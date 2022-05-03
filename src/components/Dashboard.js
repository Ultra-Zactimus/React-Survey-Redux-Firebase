import React from "react";
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import Survey from './Survey';

const Dashboard = (props) => {
  const db = useFirestore();

  // const q = query(collection(db, "surveys"), where("userEmail", "==", props.uid));

  // const querySnapshot = getDocs(q);
  // console.log(querySnapshot);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  let output = []; 
  db.collection("surveys").where("userEmail", "==", props.uid)
    .get()
    .then((querySnapshot) => {
      // output = querySnapshot; //?
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            output.push(doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  
  return (
    <React.Fragment>
        {console.log(output)} 
        {output.map(survey => (  
          console.log(survey)
        ))};
        {/* {userList.map((survey) => {
          return (
          <Survey
            // whenSurveyClicked = { props.onSurveySelection }
            title={survey.title}
            q1={survey.q1}
            q2={survey.q2}
            q3={survey.q3}
            q4={survey.q4}
            q5={survey.q5}
            id={survey.id}
            key={survey.id}
            />
          )
        })} */}
      </React.Fragment>
  );
}

export default Dashboard;