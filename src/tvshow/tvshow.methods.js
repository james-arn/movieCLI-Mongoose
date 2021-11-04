const TVShow = require("./tvshow.model");
const mongoose = require("mongoose");

exports.addTVShow = async (tvObj) => {
  try {
    const show = new TVShow(tvObj);
    await show.save();
    mongoose.disconnect();
    console.log("TV Show successfully added to Tv Show DB.");
  } catch (error) {
    console.log(error);
  }
};
exports.findTVShow = async (tvObj) => {
  try {
    const list = await TVShow.find({ tvObj });
    console.log("Found tv shows =>", list);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.findRating = async (tvObj) => {
  try {
    const ratingList = await TVShow.find({ rating: tvObj.rating });
    console.log(`Found ${tvObj.rating} star rated TV Shows =>`, ratingList);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.updateRating = async (tvObj) => {
  try {
    await TVShow.findOneAndUpdate(
      { title: tvObj.title },
      { rating: tvObj.rating }
    );
    console.log(`Rating updated for ${tvObj.title}`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTVShow = async (tvObj) => {
  try {
    await TVShow.deleteOne({ title: tvObj.title });
    console.log(`${tvObj.title} deleted from database.`);
    mongoose.disconnect();
  } catch (error) {}
};
