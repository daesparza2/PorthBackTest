const {Router} = require('express');
const router = Router();
const {getMessages, saveMessage} = require('../controllers/message.controller');

router.get('/messages', getMessages);

router.post('/messages', saveMessage)


module.exports = router;