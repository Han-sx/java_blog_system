package com.blog.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.blog.dao.mapper.CategoryMapper;
import com.blog.dao.pojo.Category;
import com.blog.service.CategoryService;
import com.blog.vo.CategoryVo;
import com.blog.vo.Result;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public CategoryVo findCategoryById(Long categoryId) {
        Category category = categoryMapper.selectById(categoryId);
        CategoryVo categoryVo = new CategoryVo();
        BeanUtils.copyProperties(category,categoryVo);

        return categoryVo;
    }

    @Override
    public Result findAll() {
        LambdaQueryWrapper<Category> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.select(Category::getId,Category::getCategoryName);
        List<Category> categories = categoryMapper.selectList(queryWrapper);
        //页面交互对象
        return Result.success(copyList(categories));
    }

    @Override
    public Result findAllDetail() {
        LambdaQueryWrapper<Category> queryWrapper = new LambdaQueryWrapper<>();
        List<Category> categories = categoryMapper.selectList(queryWrapper);
        //页面交互对象
        return Result.success(copyList(categories));
    }

    @Override
    public Result categoriesDetailById(Long id) {
        Category category = categoryMapper.selectById(id);
        //转换为CategoryVo
        CategoryVo categoryVo = copy(category);
        return Result.success(categoryVo);
    }

    //id不一致要重新设立
    public CategoryVo copy(Category category){
        CategoryVo categoryVo = new CategoryVo();
        BeanUtils.copyProperties(category,categoryVo);
        //id不一致要重新设立
//        categoryVo.setId(String.valueOf(category.getId()));
        return categoryVo;
    }
    public List<CategoryVo> copyList(List<Category> categoryList){
        List<CategoryVo> categoryVoList = new ArrayList<>();
        for (Category category : categoryList) {
            categoryVoList.add(copy(category));
        }
        return categoryVoList;
    }
}
