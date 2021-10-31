package com.blog.service;

import com.blog.dao.pojo.SysUser;
import com.blog.vo.Result;
import com.blog.vo.params.LoginParam;

public interface LoginService {
    /**
     * 登录功能
     * @param loginParam
     */
    Result login(LoginParam loginParam);

    SysUser checkToken(String token);

    /**
     * 退出登录功能
     * @param token
     * @return
     */
    Result logout(String token);

    /**
     * 注册
     * @param loginParam
     * @return
     */
    Result register(LoginParam loginParam);
}
