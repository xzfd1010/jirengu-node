/**
 * Created by nick on 2017/7/27.
 */
const router = require('express').Router();

// router.get('/', (req, res) => {
//     // code:0也是一种习惯写法
//     res.json({code: 0, msg: "simple router root"});
// });

// 另一种写法
router.route('/')
    .get((req, res, next) => {
        res.json({code: 0, msg: "getting router router mw1"});
        next();
    })
    .post((req, res, next) => {
        console.log('posting simple router mw1');
        // res.json({code: 0, msg: "posting router router mw1"});
        next('route');// 此时传入route不会走到下面，而是直接跳转到下一个router ； 其他字符串会跳转到错误中
    }, (req, res, next) => {
        console.log('posting simple router mw2');
        res.json({code: 0, msg: "posting router router mw2"});
    });


router.get('/simple_demo', (req, res, next) => {
    console.log('r1 called');
    res.json({code: 0, msg: `your simple demo here router1`});
    next('route');
});

module.exports = router;