var express = require('express');
var router = express.Router();

/* GET calendarForm listing. */
router.get('/CalendarForm', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
