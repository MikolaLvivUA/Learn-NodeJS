const router = require('express').Router(); //тиким чином ми підключаєм наш роутер

router.get('/xxx', (req, res) => {
    res.json('WE ARE IN HOUSE ROUTER');
});//таким чином ми прописуєм наші урли в роутері



module.exports = router;