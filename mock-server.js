const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

/*
 * PC
 * /
 */

server.post('/pc/apartment/list', (req, res) => {

    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "dateList": [
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [1, 2],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称777777",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:44:35.166Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [1, 2],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                }
            ]
        }
    })

});

server.post('/pc/apartment/recommend', (req, res) => {

    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "recommendList": [
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称777777",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:44:35.166Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                },
                {
                    "logo": "http://sm01.alicdn.com/L1/272/6837/static/wap/img/index/v7/logo2.png",
                    "name": "公寓名称7",
                    "phone": "1833333333",
                    "min_price": 2000,
                    "max_price": 3000,
                    "weight": 10,
                    "create_time": "2017-06-05T06:41:51.511Z",
                    "status": 1,
                    "introduction": "公寓简介",
                    "price_description": "费用说明",
                    "advantage": "优势与服务",
                    "promotion_activity": "优惠活动",
                    "favourable_title": "",
                    "district": "热门小区",
                    "position": "热门板块",
                    "city": 10,
                    "classify": 2,
                    "service": [],
                    "tags": [
                        2
                    ],
                    "short_introduction": "一句话介绍",
                    "__v": 0,
                    "id": null
                }
            ]
        }
    })

});

server.get('/getcity', (req, res) => {
    res.send({});
});
//公寓首页banner
server.get('/pc/banner/list', (req, res) => {
    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "banner_list": [
                {
                    "id": "59366141a478050ee84cd03f",
                    "image": "./img/apartment-banner1.png",
                    "url": "http://yuefu.58.com/pc/index",
                    "city": "北京",
                    "sort": 1,
                    "type": 1,
                    "status": 1,
                    "create_time": "2017-05-27 00:00:00",
                    "option_time": "2017-05-27 00:00:00"

                }, {
                    "id": "59366141a478050ee84cd03f",
                    "image": "./img/cooperation-light.png",
                    "url": "http://yuefu.58.com/pc/index",
                    "city": "北京",
                    "sort": 1,
                    "type": 1,
                    "status": 1,
                    "create_time": "2017-05-27 00:00:00",
                    "option_time": "2017-05-27 00:00:00"
                }, {
                    "id": "59366141a478050ee84cd03f",
                    "image": "./img/apartment-banner2.png",
                    "url": "http://yuefu.58.com/pc/index",
                    "city": "北京",
                    "sort": 1,
                    "type": 1,
                    "status": 1,
                    "create_time": "2017-05-27 00:00:00",
                    "option_time": "2017-05-27 00:00:00"
                }
            ]
        }
    })

});
//合作申请form
server.post('/pc/application/add', (req, res) => {
    console.log(req.body);
    res.send({
        "code": 0,
        "msg": '',
        "data": {}
    });
});
//意见与反馈
server.post('/pc/opinion/add', (req, res) => {
    console.log(req.body);
    res.send({
        "code": 0,
        "msg": '',
        "data": {}
    });
});
//公寓推荐活动列表
server.get('/pc/promotion/recommend', (req, res) => {

    res.send({
        "code": 0,
        "msg": "query apartments success",
        "data": {
            "promotion_list": [
                {
                    "id": "@122",
                    "description": "1000以下特价房源",
                    "sort": 1,
                    "status": 1,
                    "type": 1,
                    "apartment": {
                        "code":"610100",
                        "logo": "./img/city1.png",
                        "name": "公寓名称7",
                        "phone": "1833333333",
                        "min_price": 2000,
                        "max_price": 3000,
                        "weight": 10,
                        "create_time": "2017-06-05T06:41:51.511Z",
                        "status": 1,
                        "introduction": "公寓简介",
                        "price_description": "费用说明",
                        "advantage": "优势与服务",
                        "promotion_activity": "优惠活动",
                        "favourable_title": "O中介费，只需押一付一",
                        "district": "热门小区",
                        "position": "热门板块",
                        "city": 10,
                        "classify": 2,
                        "service": [],
                        "tags": ["有优惠", "白领公寓"],
                        "short_introduction": "一句话介绍",
                        "__v": 0,
                        "id": 11111
                    }
                }, {
                    "id": "@222",
                    "description": "1000以下特价房源",
                    "sort": 1,
                    "status": 1,
                    "type": 1,
                    "apartment": {
                        "code":"610100",
                        "logo": "./img/city2.png",
                        "name": "公寓名称7",
                        "phone": "1833333333",
                        "min_price": 2000,
                        "max_price": 3000,
                        "weight": 10,
                        "create_time": "2017-06-05T06:41:51.511Z",
                        "status": 1,
                        "introduction": "公寓简介",
                        "price_description": "费用说明",
                        "advantage": "优势与服务",
                        "promotion_activity": "优惠活动",
                        "favourable_title": "O中介费，只需押一付一",
                        "district": "热门小区",
                        "position": "热门板块",
                        "city": 10,
                        "classify": 2,
                        "service": [],
                        "tags": ["有优惠", "白领公寓"],
                        "short_introduction": "一句话介绍",
                        "__v": 0,
                        "id": 11112
                    }
                }, {
                    "id": "@222",
                    "description": "1000以下特价房源",
                    "sort": 1,
                    "status": 1,
                    "type": 1,
                    "apartment": {
                        "code":"610100",
                        "logo": "./img/city3.png",
                        "name": "公寓名称7",
                        "phone": "1833333333",
                        "min_price": 2000,
                        "max_price": 3000,
                        "weight": 10,
                        "create_time": "2017-06-05T06:41:51.511Z",
                        "status": 1,
                        "introduction": "公寓简介",
                        "price_description": "费用说明",
                        "advantage": "优势与服务",
                        "promotion_activity": "优惠活动",
                        "favourable_title": "O中介费，只需押一付一",
                        "district": "热门小区",
                        "position": "热门板块",
                        "city": 10,
                        "classify": 2,
                        "service": [],
                        "tags": ["有优惠", "白领公寓"],
                        "short_introduction": "一句话介绍",
                        "__v": 0,
                        "id": 333
                    }
                }, {
                    "id": "@222",
                    "description": "1000以下特价房源",
                    "sort": 1,
                    "status": 1,
                    "type": 1,
                    "apartment": {
                        "code":"610100",
                        "logo": "./img/city4.png",
                        "name": "公寓名称7",
                        "phone": "1833333333",
                        "min_price": 2000,
                        "max_price": 3000,
                        "weight": 10,
                        "create_time": "2017-06-05T06:41:51.511Z",
                        "status": 1,
                        "introduction": "公寓简介",
                        "price_description": "费用说明",
                        "advantage": "优势与服务",
                        "promotion_activity": "优惠活动",
                        "favourable_title": "O中介费，只需押一付一",
                        "district": "热门小区",
                        "position": "热门板块",
                        "city": 10,
                        "classify": 2,
                        "service": [],
                        "tags": ["有优惠", "白领公寓"],
                        "short_introduction": "一句话介绍",
                        "__v": 0,
                        "id": 333
                    }
                }, {
                    "id": "@222",
                    "description": "1000以下特价房源",
                    "sort": 1,
                    "status": 1,
                    "type": 1,
                    "apartment": {
                        "logo": "./img/city1.png",
                        "name": "公寓名5",
                        "tags": ["有优惠", "白领公寓"],
                        "short_introduction": "一句话描述",
                        "favourable_title": "O中介费，只需押一付一"
                    }
                }
            ]
        }
    })

});


server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running')
});