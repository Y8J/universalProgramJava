package yj.universal.dao;


import yj.universal.pojo.User;

import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/1/1.
 */
public interface UserDao {
    /**
     * 按条件查找所有的用户返回实体类List
     * @param bean
     * @return
     */
    public List<User> queryTestList(User bean);

    /**
     * 按条件查找所有的用户返回map list
     * @param bean
     * @return
     */
    public List<Map<Object,Object>> queryTestMap(User bean);
    /**
     * 保存实体bean
     * @param bean
     */
    public Integer saveTest(User bean);
    /**
     * 按条件删除实体
     * @param bean
     */
    public Integer deleteTest(User bean);
    /**
     * 更新实体
     * @param bean
     */
    public Integer updateTest(User bean);
}
