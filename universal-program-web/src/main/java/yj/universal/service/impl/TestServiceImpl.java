package yj.universal.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import yj.universal.dao.TestDao;
import yj.universal.pojo.Test;
import yj.universal.service.TestService;

@Service
public class TestServiceImpl implements TestService {
	@Autowired
    private TestDao testDao;
	
	@Override
	public List<Test> queryTestList(Test bean) {
		return testDao.queryTestList(bean);
	}

	@Override
	public List<Map<Object, Object>> queryTestMap(Test bean) {
		return testDao.queryTestMap(bean);
	}

	@Override
	public Integer saveTest(Test bean) {
		return testDao.saveTest(bean);
	}

	@Override
	public Integer deleteTest(Test bean) {
		return testDao.deleteTest(bean);
	}

	@Override
	public Integer updateTest(Test bean) {
		 return testDao.updateTest(bean);
	}

}
