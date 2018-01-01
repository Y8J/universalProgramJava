package yj.universal.pojo.base;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Administrator on 2018/1/1.
 */
@Table(name = "t_user")
public class BaseUser implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id; //主键(自增长)
    @Column
    private String userName; // 用户名 unique自动值唯一性约束
    @Column
    private String password; // 用户密码
    @Column
    private String mobile; //用户手机号码
    @Column
    private String email; // 用户邮箱
    @Column
    private int age; // 年龄
    @Column
    private int sex; // 性别，1:男，2:女
    @Column
    private int type; // 1:启用，2:禁用 默认值为1启用

    @Column(name = "createTime")
    private Date createTime; //创建时间

    @Column(name = "updateTime")
    private Date updateTime; //修改时间

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getUserName(){
        return userName;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getMobile(){
        return mobile;
    }

    public void setMobile(String mobile){
        this.mobile = mobile;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public int getSex(){
        return sex;
    }

    public void setSex(int sex){
        this.sex = sex;
    }

    public int getType(){
        return type;
    }

    public void setType(int type){
        this.type = type;
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
}

