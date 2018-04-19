import { prefix, prefix2 } from './UrlsConfig';

const employees = 'employees';

const MemberUrls = {
    // 根据部门获取员工列表
    POSITION_INFO_LIST: `${prefix}/${employees}/list`,
    // 获取员工详情
    GET_DETAILS_INFO: `${prefix}/${employees}/getEmp`,
    // 获取已停用员工列表
    GET_DEACTIVEDMEMBER_LIST: `${prefix}/${employees}/outInfo`,
};

export default MemberUrls;
