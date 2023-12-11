exports.getRandomNumber = (req, res, next) => {
    const randomNum = Math.floor(Math.random() * 100); 
  res.status(200).json({ randomNumber: randomNum });
};
