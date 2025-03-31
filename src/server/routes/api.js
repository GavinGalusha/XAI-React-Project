const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/users", function(req, res, next) {
  console.log('get "users" route hit');
  res.send({ users: ["joe", "bernie", "tulsi", "donald", "bill"] });
});



router.post('/contact', (req, res) => {
  const { name, email, subject, comment } = req.body;
  // Here you can handle the data, e.g., save it to a database or send an email
  console.log('Received contact form data:', { name, email, subject, comment });

  // Simulate a successful response
  res.status(200).send('Message received successfully!');
});



module.exports = router;