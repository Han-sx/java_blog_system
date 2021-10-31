package com.blog.dao.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.blog.dao.pojo.Tag;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface TagMapper extends BaseMapper<Tag> {
    /**
     * 根据文章ID查询标签列表
     * @param articleId
     * @return
     */
    List<Tag> findTagsByArticleId(Long articleId);

    /**
     * 查询最热的标签前N条
     * @param limit
     * @return
     */
    List<Long> findHotsTagIds(int limit);

    List<Tag> findTagsByTagIds(List<Long> tagIds);
}
