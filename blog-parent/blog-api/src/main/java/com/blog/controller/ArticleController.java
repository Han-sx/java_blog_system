package com.blog.controller;

import com.blog.common.aop.LogAnnotation;
import com.blog.service.ArticleService;
import com.blog.vo.Result;
import com.blog.vo.params.ArticleParam;
import com.blog.vo.params.PageParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("articles")
public class ArticleController {

    @Autowired
    private ArticleService articleService;
    //Result是统一结果返回

    /**
     * 首页文章列表
     * @param pageParams
     * @return
     */
    @PostMapping
    //加上此注解，代表要对此接口记录日志
    @LogAnnotation(module = "文章",operator = "获取文章列表")
    public Result listArticle(@RequestBody PageParams pageParams) {
        //ArticleVo 页面接收的数据
//        List<ArticleVo> articles = articleService.listArticlesPage(pageParams);
//        return Result.success(articles);
        return articleService.listArticle(pageParams);
    }

    /**
     * 首页最热文章
     * @return
     */
    @PostMapping("hot")
    public Result hotArticle() {
        int limit = 5;//最热文章取前5条
        return articleService.hotArticle(limit);
    }

    /**
     * 首页最新文章
     * @return
     */
    @PostMapping("new")
    public Result newArticles() {
        int limit = 5;//最热文章取前5条
        return articleService.newArticles(limit);
    }

    /**
     * 首页文章归档
     * @return
     */
    @PostMapping("listArchives")
    public Result listArchives() {
        return articleService.listArchives();
    }

    @PostMapping("view/{id}")
    public Result findArticleById(@PathVariable("id") Long articleId){
        return articleService.findArticleById(articleId);
    }

    //  @RequestBody主要用来接收前端传递给后端的json字符串中的数据的(请求体中的数据的)；
    //  而最常用的使用请求体传参的无疑是POST请求了，所以使用@RequestBody接收数据时，一般都用POST方式进行提交。
    @PostMapping("publish")
    public Result publish(@RequestBody ArticleParam articleParam){
        return articleService.publish(articleParam);
    }
}

