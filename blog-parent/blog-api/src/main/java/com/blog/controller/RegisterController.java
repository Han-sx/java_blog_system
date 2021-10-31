package com.blog.controller;

import com.blog.service.LoginService;
import com.blog.vo.Result;
import com.blog.vo.params.LoginParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("register")
public class RegisterController {

    @Autowired
    private LoginService loginService;

    @PostMapping
    public Result register(@RequestBody LoginParam loginParam){
        //sso 单点登录，后期如果踢出去单独服务可以单独提供接口服务
        return loginService.register(loginParam);
    }
}
