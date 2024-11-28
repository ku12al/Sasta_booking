const express = require("express");
const CityModels = require("../models/City");
const {
  CreateNewCityInDBService,
  GetAllCityFromDBCity,
  updateCity,
  deleteCity,
} = require("../service/City.Service");

async function cityController(req, res) {
  try {
    const { CityName, image, description, cuisines } = req.body;

    const result = await CreateNewCityInDBService(
      CityName,
      image,
      description,
      cuisines
    );

    res.status(201).json({
      success: true,
      // message: "City created successfully",
      data: result.data,
    });

    await result.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}

async function cityAllController(req, res) {
  try {
    // const {CityName} = req.body;
    const result = await GetAllCityFromDBCity();

    if (result.success) {
      const DATA = result.data.map((element) => {
        const { _id, CityName, description, cuisines, image } = element;

        return {
          id: _id,
          CityName,
          description,
          cuisines,
          image,
        };
      });
      res.status(200).json({
        success: true,
        data: DATA,
      });
    } else {
      throw new Error("get all city unable to get the city");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}

async function updateController(req, res) {
  try {
    const { id } = req.query;
    const { cityId, CityName, description, image, cuisines } = req.body;

    const DATA = {};

    if (CityName) {
      DATA.CityName = CityName;
    }
    if (description) {
      DATA.description = description;
    }
    if (image) {
      DATA.image = image;
    }
    if (cuisines) {
      DATA.cuisines = cuisines;
    }
    const result = await updateCity(cityId, DATA);

    if (result.success) {
      return {
        success: true,
        data: DATA,
      };
    } else {
      throw new Error("update error");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}

async function deleteCityController(req, res) {
  try {
    const { id: cityId } = req.query;
    const result = await deleteCity(cityId);
    if (result.success) {
      return {
        success: true,
        message: "City deleted successfully",
      };
    } else {
      throw new Error("delete error");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
}
module.exports = {
  cityController,
  cityAllController,
  updateController,
  deleteCityController,
};
