const mongoose = require('mongoose')

const mongoURI ='mongodb+srv://AvishekhThakur:Avishekh%40159@cluster0.azvout0.mongodb.net/foodapp?retryWrites=true&w=majority'


// const connectToMongo = async () => {
//     try {
//       mongoose.set("strictQuery", false);
//      await mongoose.connect(mongoURI);
//       console.log("Connected to Mongo Successfully!");
//       console.log("Start");
//       const fetched_data = await mongoose.connection.db.collection("food_items");
//       console.log("fetched data "+fetched_data);
//       console.log("Here");
//       fetched_data.find({}).toArray(function(err,data){
//         console.log("Inside");
//         if(err)
//         {
//            console.log(err);
//         }
//         else 
//         {
//            console.log(data);
//         }
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   module.exports = connectToMongo;

  const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      let foodCategory = mongoose.connection.db.collection("foodCategory");
      let catData=await foodCategory.find({}).toArray()
      global.food_items=data;
      global.foodCategory=catData;
     // console.log(global.food_items);
    } catch (error) {
      console.log('err: ', error);
    }
  };
  module.exports = mongoDB;