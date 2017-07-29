/**
 * Created by nick on 2017/7/27.
 */
const router = require('express').Router();

router.use((req, res, next) => {
    console.log('r2.called');
    res.json({code: 1, msg: "your simple demo here router2"});
    next();
});

module.exports = router;