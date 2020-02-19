import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBJiepnvnD4IeZc5C1sjuE0wDT_WDiiNS4",
    authDomain: "expensify-d4121.firebaseapp.com",
    databaseURL: "https://expensify-d4121.firebaseio.com",
    projectId: "expensify-d4121",
    storageBucket: "expensify-d4121.appspot.com",
    messagingSenderId: "34627020773",
    appId: "1:34627020773:web:a3b8e8958d9571345ab10c",
    measurementId: "G-EX0DWML3BR"
  };

 firebase.initializeApp(config)

 const database = firebase.database();

 database.ref('expen').push({
  description:'rend',
  note:'',
  amount:109500,
  createAt:54545848484
})

//  database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses =[];
//     snapshot.forEach((childsnapshot)=>{
//          expenses.push({
//             id:childsnapshot.key,
//             ...childsnapshot.val() 
//          })
//     }) 
//   console.log(expenses);
// //  })

database.ref('expenses').on('child_removed',(snapshot)=>{
              console.log(snapshot.key,snapshot.val())        
})

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val())       
})

database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key,snapshot.val())       
})


//   const  test=(fuck={})=>{
    
//     const {  
//               id='',
//               name=''
//           } = fuck
    

//     const expense ={ id,name} 
    
//   database.ref('expensesss').push(expense).then((ref)=>{ 
//   return console.log(expense) 
// })
// }
 
// test({name:'krish',id:'fuck'});


// database.ref('expenses').once('value').then((dataSnapshot)=>{
//     const expenses =[];
//     dataSnapshot.forEach((childSnapshot)=>{
//              expenses.push({
//                  id:childSnapshot.key,
//              ...childSnapshot.val()})
//     })
//     console.log(expenses)
// }).catch((e)=>{
//   console.log(e,'some thing want worng')
// })

//    database.ref('expenses').push({
//       description:'',
//        note:'',
//        amount:109500,
//        createAt:45455454                                                
//    })
 
//    database.ref('expenses').push({
//       description:'',
//        note:'',
//        amount:5900,
//        createAt:445959266264             
//    })
 
//    database.ref('expenses').push({
//       description:'',
//        note:'',
//        amount:1200,
//        createAt:48629485648451
//    })
 
  






//  const firebaseNotes={
//      noetes:{
        
//         1:{
//             title:'fucking girl',
//             body:'beloved girl',  
             
//         },
//        2:{
//         id:'124343ias',
//         title:'fucking boy',
//         body:'beloved boys'
//        }  
//     },
//     porn:{
//         fuck:'djfkdlfdkjf'
//     }
     

//  }
 
//  database.ref('porn').set(firebaseNotes)

//  const notes=[{
//     id:'12',
//     title:'fucking girl',
//     body:'beloved girl'
//  },{
//     id:'124343ias',
//     title:'fucking boy',
//     body:'beloved boys'
//  }]


//  database.ref('notes').set(notes);



 //   database.ref().on('value',(snapshot)=>{
//        console.log(snapshot.val())
//   },(e)=>{
//     console.log('error with data fatching',e)
//   })
   
//   setTimeout(()=>{
//      database.ref('age').set(23);
//   },3500)
//   setTimeout(()=>{
//      database.ref().off();
//   },7000)
//   setTimeout(()=>{
//      database.ref('age').set(29);
//   },13500)

// database.ref().on('value',(snapshot)=>{
//        const val =  snapshot.val();
//       console.log(`${val.first_name} ${val.last_name}  and age ${val.age} city ${val.location.city}`)    
// },(e)=>{
//     console.log('error with fetching database',e)
// })



//  database.ref().set({
//       first_name:'krish',
//       last_name:'nishad',
//       age:21,
//       isSingle:true,
//       location:{
//           city:'azamgarh',
//           country:'india'
//       }
//  }).then(()=>{
//      console.log('data will saves')
//  }).catch((error)=>{
//      console.log('error',error)
//  })

// //   database.ref().set('this is my data')
// //   database.ref('age').set(22) 
// //   database.ref('location/city').set('greate noida')

//  database.ref('fuck').set({
//   name:'krish',
//   time:1.5,  
//   orgasam:true,
//   mistake:false
//  }).then(()=>{
//      console.log('all is well')
//  }).catch((error)=>{
//      console.log('error type of error!',error)
//  })



// //   database.ref('attributes').set({
// //       height:'5.4',
// //       weight:'71'
// //   })
  
//   console.log('date will change')


//  database.ref('fuck').remove().then(()=>{
//      console.log('data was remove')
//  }).catch((error)=>{
//      console.log('some error',error)
//  })


//update
 
// database.ref().update({
//     age:24,
//     // location:{
//     //     city:'noida'
//     // }(ye child me kal nhi krta hai)
//     'location/city':'noida'


// }).then(()=>{
//    console.log('data will saves')
// }).catch((error)=>{
//    console.log('error',error)
// })


// database.ref().once('value').then((snapshot)=>{
//     console.log('fetching the data',snapshot.val())
// }).catch((error)=>{
//     console.log('error',error)
// })
export {firebase,database as default} ;
