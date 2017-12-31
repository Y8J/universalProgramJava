package yj.universal.action.admin;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import yj.universal.pojo.Test;
import yj.universal.service.TestService;

@RequestMapping(value="/test/*")
@Controller
public class TestAct {

	@Autowired
	TestService testService;
	
	@ResponseBody
	@RequestMapping(value="queryTest.do")
	public List<Test>  queryTest(HttpServletRequest request,HttpServletResponse response,ModelMap modelMap,Test bean){
		Test test = new Test();
		
		bean.setName(bean.getName());
		
		List<Test> queryTestList = testService.queryTestList(test);
		
		return queryTestList;
	}
}
