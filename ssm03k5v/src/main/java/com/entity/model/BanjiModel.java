package com.entity.model;

import com.entity.BanjiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 班级
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2021-03-08 22:39:14
 */
public class BanjiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 班级人数
	 */
	
	private Integer banjirenshu;
		
	/**
	 * 班级导师
	 */
	
	private String banjidaoshi;
		
	/**
	 * 联系方式
	 */
	
	private String lianxifangshi;
				
	
	/**
	 * 设置：班级人数
	 */
	 
	public void setBanjirenshu(Integer banjirenshu) {
		this.banjirenshu = banjirenshu;
	}
	
	/**
	 * 获取：班级人数
	 */
	public Integer getBanjirenshu() {
		return banjirenshu;
	}
				
	
	/**
	 * 设置：班级导师
	 */
	 
	public void setBanjidaoshi(String banjidaoshi) {
		this.banjidaoshi = banjidaoshi;
	}
	
	/**
	 * 获取：班级导师
	 */
	public String getBanjidaoshi() {
		return banjidaoshi;
	}
				
	
	/**
	 * 设置：联系方式
	 */
	 
	public void setLianxifangshi(String lianxifangshi) {
		this.lianxifangshi = lianxifangshi;
	}
	
	/**
	 * 获取：联系方式
	 */
	public String getLianxifangshi() {
		return lianxifangshi;
	}
			
}
