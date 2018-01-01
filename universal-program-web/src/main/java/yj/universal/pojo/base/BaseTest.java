package yj.universal.pojo.base;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "t_test")
public class BaseTest implements Serializable {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;  //设置主键自增
	@Column
	private String	name; //名字
	@Column
	private Integer sex; //性别 0:女,1:男
	@Column
	private Integer age;//年龄
	@Column
	private String email;//电子邮箱
	@Column
	private String address; //家庭住址
	@Column(name = "create_time")
	private Date createTime; //创建时间
	@Column(name = "create_time")
	private Date updateTime; //修改时间
	
	
	public BaseTest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getSex() {
		return sex;
	}
	public void setSex(Integer sex) {

		this.sex = sex;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	
	@Override
	public String toString() {
		return "Test [id=" + id + ", name=" + name + ", sex=" + sex + ", age="
				+ age + ", email=" + email + ", address=" + address
				+ ", createTime=" + createTime + ", updateTime=" + updateTime
				+ "]";
	}
	
	
	
			
}
