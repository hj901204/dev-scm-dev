export const base_columns = [{
        title:"状态",
        dataIndex:"status",
        key:"status"
    },{
        title:"类别",
        dataIndex:"type",
        key:"type"
    },{
        title:"创建人",
        dataIndex:"createBy",
        key:"createBy"
    },{
        title:"创建时间",
        dataIndex:"createDate",
        key:"createDate"
    },{
        title:"更新人",
        dataIndex:"updateBy",
        key:"updateBy"
    },{
        title:"更新时间",
        dataIndex:"updateDate",
        key:"updateDate"
    }
];
export const base_config = [{
        c_name:"国家列表",
        e_name:"country",
        columns:[{
            title:"国家编号",
            dataIndex:"countryCode",
            key:"countryCode"
        },{
            title:"国家名称",
            dataIndex:"countryName",
            key:"countryName"
        },{
            title:"国家描述",
            dataIndex:"countryDesc",
            key:"countryDesc"
        }],
        inputs:[]
    },{
        c_name:"地区列表",
        e_name:"region",
        columns:[{
            title:"地区编号",
            dataIndex:"regionCode",
            key:"regionCode"
        },{
            title:"国家名称",
            dataIndex:"countryName",
            key:"countryName"
        },{
            title:"地区名称",
            dataIndex:"regionName",
            key:"regionName"
        },{
            title:"地区描述",
            dataIndex:"regionDesc",
            key:"regionDesc"
        }],
        inputs:[{
            label:"所属国家",
            selectType:"country",
            optionName:"countryName",
            optionCode:"countryCode",
            handleChange:"setRegion"
        }]
    },{
        c_name:"省份列表",
        e_name:"province",
        columns:[{
            title:"省份编号",
            dataIndex:"provinceCode",
            key:"provinceCode"
        },{
            title:"国家名称",
            dataIndex:"countryName",
            key:"countryName"
        },{
            title:"地区名称",
            dataIndex:"regionName",
            key:"regionName"
        },{
            title:"省份名称",
            dataIndex:"provinceName",
            key:"provinceName"
        },{
            title:"省份描述",
            dataIndex:"provinceDesc",
            key:"provinceDesc"
        }],
        inputs:[{
            label:"所属国家",
            selectType:"country",
            optionName:"countryName",
            optionCode:"countryCode",
            handleChange:"setRegion"
        },{
            label:"所属地区",
            selectType:"region",
            optionName:"regionName",
            optionCode:"regionCode",
            handleChange:"setProvince"
        }]
    },{
        c_name:"城市列表",
        e_name:"city",
        columns:[{
            title:"城市编号",
            dataIndex:"cityCode",
            key:"cityCode"
        },{
            title:"国家名称",
            dataIndex:"countryName",
            key:"countryName"
        },{
            title:"地区名称",
            dataIndex:"regionName",
            key:"regionName"
        },{
            title:"省份名称",
            dataIndex:"provinceName",
            key:"provinceName"
        },{
            title:"城市名称",
            dataIndex:"cityName",
            key:"cityName"
        },{
            title:"城市描述",
            dataIndex:"cityDesc",
            key:"cityDesc"
        }],
        inputs:[{
            label:"所属国家",
            selectType:"country",
            optionName:"countryName",
            optionCode:"countryCode",
            handleChange:"setRegion"
        },{
            label:"所属地区",
            selectType:"region",
            optionName:"regionName",
            optionCode:"regionCode",
            handleChange:"setProvince"
        },{
            label:"所属省",
            selectType:"province",
            optionName:"provinceName",
            optionCode:"provinceCode",
            handleChange:"setCity"
        }]
    },{
        c_name:"区县列表",
        e_name:"county",
        columns:[{
            title:"区县编号",
            dataIndex:"countyCode",
            key:"countyCode"
        },{
            title:"国家名称",
            dataIndex:"countryName",
            key:"countryName"
        },{
            title:"地区名称",
            dataIndex:"regionName",
            key:"regionName"
        },{
            title:"省份名称",
            dataIndex:"provinceName",
            key:"provinceName"
        },{
            title:"城市名称",
            dataIndex:"cityName",
            key:"cityName"
        },{
            title:"区县名称",
            dataIndex:"countyName",
            key:"countyName"
        },{
            title:"区县描述",
            dataIndex:"countyDesc",
            key:"countyDesc"
        }],
        inputs:[{
            label:"所属国家",
            selectType:"country",
            optionName:"countryName",
            optionCode:"countryCode",
            handleChange:"setRegion"
        },{
            label:"所属地区",
            selectType:"region",
            optionName:"regionName",
            optionCode:"regionCode",
            handleChange:"setProvince"
        },{
            label:"所属省份",
            selectType:"province",
            optionName:"provinceName",
            optionCode:"provinceCode",
            handleChange:"setCity"
        },{
            label:"所属市区",
            selectType:"city",
            optionName:"cityName",
            optionCode:"cityCode",
            handleChange:"setCity"
        }]
    },{
        c_name:"币种列表",
        e_name:"currency",
        columns:[{
            title:"币种编号",
            dataIndex:"curCode",
            key:"curCode"
        },{
            title:"币种名称",
            dataIndex:"curName",
            key:"curName"
        },{
            title:"币种描述",
            dataIndex:"curDesc",
            key:"curDesc"
        }],
        inputs:[]
    },{
        c_name:"计量单位",
        e_name:"measure",
        columns:[{
            title:"计量单位编号",
            dataIndex:"meaCode",
            key:"meaCode"
        },{
            title:"计量单位名称",
            dataIndex:"meaName",
            key:"meaName"
        },{
            title:"计量单位描述",
            dataIndex:"meaDesc",
            key:"meaDesc"
        }],
        inputs:[]
    },
    // {
    //     c_name:"业务类型",
    //     e_name:"measure",
    //     columns:[{
    //         title:"计量单位编号",
    //         dataIndex:"meaCode",
    //         key:"meaCode"
    //     },{
    //         title:"计量单位名称",
    //         dataIndex:"meaName",
    //         key:"meaName"
    //     },{
    //         title:"计量单位描述",
    //         dataIndex:"meaDesc",
    //         key:"meaDesc"
    //     }],
    //     inputs:[]
    // },{
    //     c_name:"库存状态",
    //     e_name:"measure",
    //     columns:[{
    //         title:"计量单位编号",
    //         dataIndex:"meaCode",
    //         key:"meaCode"
    //     },{
    //         title:"计量单位名称",
    //         dataIndex:"meaName",
    //         key:"meaName"
    //     },{
    //         title:"计量单位描述",
    //         dataIndex:"meaDesc",
    //         key:"meaDesc"
    //     }],
    //     inputs:[]
    // }
];