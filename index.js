const MongoClint = require('mongodb').MongoClient;

const url = 'mongodb://jakariademo:ICErPYoxUMSCPznF@cluster0-shard-00-00.me6u3.mongodb.net:27017,cluster0-shard-00-01.me6u3.mongodb.net:27017,cluster0-shard-00-02.me6u3.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ad7jn4-shard-0&authSource=admin&retryWrites=true&w=majority'; // mogodb atlas 

// const url ="mongodb://127.0.0.1:27017/";

 
const Config = { useUnifiedTopology: true };


MongoClint.connect(url, Config, function(error, myMongoClient){
 
       if(error){
            console.log('database connect fail')
       }
       else{
            console.log('database connect success.   data insert start');
            insertData(myMongoClient);
            // deleteOnItemData(myMongoClient)
           // allDataDelete(myMongoClient)
          // findOneData(myMongoClient)
      // findAllData(myMongoClient)
      // findProjectionData(myMongoClient)
      // findAllDataQuery(myMongoClient)
      // findDataByLimit(myMongoClient)
      // findDataSort(myMongoClient)
      // updateData(myMongoClient)
       }
})


// insert data to sever first time in Sha Allha 

    
function insertData(myMongoClient){
      const data = {name:"Abdullha biswas", age:"16", address:'Gopalganj',phone: "01700831345",img:'https://scontent.fdac116-1.fna.fbcdn.net/v/t1.0-9/91412470_624405808145263_8172718599828406272_n.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=hWdS5sCvQXsAX-qm2E_&_nc_ht=scontent.fdac116-1.fna&oh=8c6f4ffc2ac8032e21b9e5a48474ff2a&oe=60588E08'}
      const myDataBase = myMongoClient.db('school');
      const myCollection = myDataBase.collection('students');
      myCollection.insertOne(data, function(error){
                if(error){
                      console.log('Data insert fail');
                }else{
                      console.log('Data insert success')
                }
      })
}


// delete data from data base

//   function deleteOnItemData(myMongoClient){
//      const myDataBase = myMongoClient.db('school');
//      const myCollection = myDataBase.collection('students');
//       const dataDeleteHince = {address:"Gopalganj Miar bag"}
//      myCollection.deleteOne(dataDeleteHince, function (error){
//          if(error){
//                  console.log('data delete fail')
//          }else{
//                console.log('data delete success')
//          }
// })
//   }


// may data delete from database

// function allDataDelete(myMongoClient){
//      const myDataBase = myMongoClient.db('school');
//      const myCollection = myDataBase.collection('students');
//      myCollection.deleteMany(function(error, result){
//             if(error){
//                    console.log('All data delete fail')
//             }else{
//                   console.log(result)
//             }
//      })
// }



// // find data 

// function findOneData(myMongoClient){
         
//           const myDataBase = myMongoClient.db('school');
//           const myCollection = myDataBase.collection('students');
//             const conditionObject = {phone:"01521372412"}
//           myCollection.findOne(conditionObject, function(error, result){
//                     console.log(result)
//           })
// }


/// find all data from to server

// function findAllData(myMongoClient){
//         const myDataBase = myMongoClient.db('school');
//         const myCollection = myDataBase.collection('students');
//         myCollection.find().toArray(function(error, result){
//                  console.log(result)
//         })
// }


// projection colum get data from database through find method

// function findProjectionData(myMongoClient){
//         var myDataBase = myMongoClient.db('school');
//         var myCollection = myDataBase.collection('students');
//         var itemObject = {};
//          var itemProjection ={projection:{address:''}}
//         myCollection.find(itemObject,itemProjection).toArray(function(error, result){
//                console.log(result)
//         })
        

      
// }


//data query from database

// function findAllDataQuery(myMongoClient){
//         const myDataBase = myMongoClient.db('school');
//         const myCollection = myDataBase.collection('students');
      
//         const Query = {address:"Gopalganj"}
//         myCollection.find(Query).toArray((error, result) => {
//                    console.log(result)
//         })
// }


// find limit data get from database

// function findDataByLimit(myMongoClient){
//        const myDataBase = myMongoClient.db('school');
//        const myCollection = myDataBase.collection('students');
//        myCollection.find().limit(4).toArray(function(error, result){
//                console.log(result)
//        })
// }


// data sort by - assinding and desinding order

// function findDataSort(myMongoClient){
//          const myDataBase = myMongoClient.db('school');
//          const myCollection = myDataBase.collection('students');
//           const sortData = {age:1}
//          myCollection.find().sort(sortData).toArray(function(error, result){
//                  console.log(result)
//          })
// }


// update data to database

// function updateData(myMongoClient){
//       const myDataBase = myMongoClient.db('school');
//       const myCollection = myDataBase.collection('students');


//         const queryItem = {name:"Sabbir Sorder"};
//         const updateData = {$set:{address:"পারকুশলি"}}
//       myCollection.updateOne(queryItem, updateData, function(error, result){
//                console.log(result)
//       })
// }