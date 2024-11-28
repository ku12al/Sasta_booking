const httpStatus = require("http-status")
const {CreateNewAdventureInDBService} = require("../service/Adventure.Service.js")

async function CreateNewAdventureController(req, res){
      try {
            const {cityid: cityId} = req.query;
            const {name, category, image, duration, pricePerHead} = req.body

            const result = CreateNewAdventureInDBService(cityId,name, category, image, duration, pricePerHead)

            if(!result.success){
                  throw new Error("CreateNewAdventureInDb not available")
            }

            res.status(201).json({
                  succcess: true,
                  data: result.data
            })
            
      } catch (error) {
            console.log(error)
            res.status(500).json({
                  success: false,
                  message: "Something went wrong",
            })
      }

}

module.exports ={
      CreateNewAdventureController
}