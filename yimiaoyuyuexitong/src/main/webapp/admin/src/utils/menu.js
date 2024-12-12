const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"地区管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryAddress"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"疫苗类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYimiao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"医院类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryYiyuanxinxi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗信息管理",
                        "menuJump":"列表",
                        "tableName":"yimiao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫苗评价管理",
                        "menuJump":"列表",
                        "tableName":"yimiaoCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"疫苗收藏管理",
                        "menuJump":"列表",
                        "tableName":"yimiaoCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"疫苗预约管理",
                        "menuJump":"列表",
                        "tableName":"yimiaoOrder"
                    }
                ],
                "menu":"疫苗信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医院信息管理",
                        "menuJump":"列表",
                        "tableName":"yiyuanxinxi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"医院留言管理",
                        "menuJump":"列表",
                        "tableName":"yiyuanxinxiLiuyan"
                    }
                ],
                "menu":"医院信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"疫苗信息管理",
	                    "menuJump":"列表",
	                    "tableName":"yimiao"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                        "修改"
	                    ],
	                    "menu":"疫苗评价管理",
	                    "menuJump":"列表",
	                    "tableName":"yimiaoCommentback"
	                }
	                ,
	                {
	                    "buttons":[
	                        "订单",
	                        "查看"
	                    ],
	                    "menu":"疫苗预约管理",
	                    "menuJump":"列表",
	                    "tableName":"yimiaoOrder"
	                }
	            ],
	            "menu":"疫苗信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "修改"
	                    ],
	                    "menu":"医院留言管理",
	                    "menuJump":"列表",
	                    "tableName":"yiyuanxinxiLiuyan"
	                }
	            ],
	            "menu":"医院留言管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"医院",
	    "tableName":"yiyuanxinxi"
	}
]
    }
}
export default menu;
