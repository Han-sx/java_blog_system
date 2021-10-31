package com.blog.service;

import com.blog.vo.Result;
import com.blog.vo.params.CommentParam;

public interface CommentsService {
    /**
     * 根据文章ID查询所有的评论列表
     * @param id
     * @return
     */
    Result commentsByArticleId(Long id);

    Result comment(CommentParam commentParam);
}
