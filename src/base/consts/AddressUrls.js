import { prefix, prefix2 } from './UrlsConfig';

const basic = 'basic';
const address = 'basic/address';
const site = 'site';

const AddressUrls = {

    SITE_LIST: `${prefix}/${basic}/${site}/getList`,
    SITE_DEL: `${prefix}/${basic}/${site}/delete`,

    //国家,区域,省份，城市下拉框数据URL
    COUNTRY_SELECTED: `${prefix}/${basic}/country/getSelected`,
    REGION_SELECTED: `${prefix}/${basic}/region/getSelected`,
    PROVINCE_SELECTED: `${prefix}/${basic}/province/getSelected`,
    CITY_SELECTED: `${prefix}/${basic}/city/getSelected`,

    //地址
    ADDRESS_ADD: `${prefix}/${address}/add`,
    ADDRESS_EDIT: `${prefix}/${address}/update`,
    ADDRESS_DETAIL: `${prefix}/${address}/getAddressByCode`,
    ADDRESS_LIST: `${prefix}/${address}/getlist`,
    ADDRESS_DEL: `${prefix}/${address}/delete`,
    ADDRESS_ISDISABLE: `${prefix}/${address}/isdisable`,

};

export default AddressUrls ;