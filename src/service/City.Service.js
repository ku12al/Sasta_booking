const CityModels = require('../models/City')

async function CreateNewCityInDBService(CityName, image, description, cuisines){
      try {
            const result = await CityModels.create({
                  CityName,
                  image,
                  description,
                  cuisines
            })

            if(result){
                  return{
                        success: true,
                        data: result
                  }
            }
            
            
      } catch (error) {
            console.log(error)
            return{
                  success:false
            }
      }
}

async function GetAllCityFromDBCity(req, res){
      try {
            const result = await CityModels.find();

            if(result){
                  
                  return{
                        success: true,
                        data: result
                  }
            }else{
                  throw new Error("get all city unable to get the city");
            }

            
      } catch (error) {
            console.log(error)
            return{
                  success:false
            }
      }
}

async function updateCity(cityId, data){
      try {
            const {CityName, description, cuisines, image} = data;
            const result = await CityModels.findById({cityId})

            if(CityName){
                  result.CityName = CityName;
            }

            if(description){
                  result.description = description;
            }

            if(cuisines){
                  result.cuisines = cuisines;
            }

            if(image){
                  result.image = image;
            }

            const tre = await result.save();
            if(tre){
                  return{
                        success: true,
                        data: tre,
                        message: "city name updated successfully"
                  }
            }
            else{
                  throw new Error(`update a city is unable to updata the with id : ${cityId}`)
            }

            
      }catch (error) {
            console.log(error)
            return{
                  success:false
            }
      }
}

async function deleteCity(cityId){
      try {
            const result = await CityModels.findByIdAndDelete({cityId})

            if(result.success){
                  return{
                        success: true,
                        message: "city deleted successfully"
                  };
            }
            else{
                  throw new Error(`delete a city is unable to delete the with id : ${cityId}`)
            }

            
      }catch (error) {
            console.log(error)
            return{
                  success:false
            }
      }
}

module.exports = {CreateNewCityInDBService,
      GetAllCityFromDBCity,
      updateCity,
      deleteCity,

}

