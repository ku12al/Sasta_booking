const Adventure = require("../models/Adventure");


async function CreateNewAdventureInDBService(cityId, name, category, images, duration, pricePerHead){
      try {

            const result = await Adventure.create({
                  cityId,
                  name,
                  category,
                  images,
                  duration,
                  pricePerHead
            })

            if(result){
                  return{
                        success: true,
                        data: result
                  }
            }else{
                  throw new Error("CreateNewAdventureInDBService unable to create")
            }

            
      } catch (error) {
            console.error(error);
            return{
                  status: false,
            }
            
      }
}

module.exports ={
      CreateNewAdventureInDBService
}
      