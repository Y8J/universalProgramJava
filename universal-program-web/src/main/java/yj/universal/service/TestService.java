package yj.universal.service;

import java.util.List;
import java.util.Map;

import yj.universal.pojo.Test;

public interface TestService {
	/**
	  * 按条件查找所有的用户返回实体类List
	  * @param bean
	  * @return
	  */
	 public List<Test> queryTestList(Test bean);
	 
	 /**
	  * 按条件查找所有的用户返回map list
	  * @param bean
	  * @return
	  */
	 public List<Map<Object,Object>> queryTestMap(Test bean);
	 /**
	  * 保存实体bean
	  * @param bean
	  */
	 public Integer saveTest(Test bean);
	 /**
	  * 按条件删除实体
	  * @param bean
	  */
	 public Integer deleteTest(Test bean);
	 /**
	  * 更新实体
	  * @param bean
	  */
	 public Integer updateTest(Test bean);
}

