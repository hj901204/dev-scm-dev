import { prefix, prefix2 } from './UrlsConfig';
import BasicUrls from './BasicUrls';
import LoginUrls from './LoginUrls';
import MemberManage from './MemberUrls';
import ManageUrls from './ManageUrls';

import BaseDataUrls from './BaseDataUrls';
import DeptUrls from './DeptUrls';
import AddressUrls from './AddressUrls';

const employees = 'employees';
const company='company';
const login = 'login';

const Urls = {
    ...AddressUrls,
    ...BaseDataUrls,
    ...DeptUrls,

    EMPLOYEE_ADD: `${prefix}/${employees}/modify`,
    EMPLOYEE_UPDATE: `${prefix}/${employees}/modify`,
    GET_DETAILS_INFO: `${prefix}/${employees}/getEmp`,
    IMPORT_FILE: `${prefix}/${employees}/importfile`,
    GET_PERSONAL_INFO:`${prefix}/${employees}/getWithToken`,
    BATCH_EDITSITE:`${prefix}/${employees}/batcheditsite`,
    LOGIN_GETMENUES:`${prefix}/${login}/getmenues`,
    SET_ENTERPRISE_INFO: `${prefix}/${company}/getCompanyByUser`,
    
};




export { Urls, BasicUrls , LoginUrls, MemberManage ,ManageUrls };