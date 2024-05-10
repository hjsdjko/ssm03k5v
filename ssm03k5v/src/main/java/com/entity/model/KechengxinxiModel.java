package com.entity.model;

import com.entity.KechengxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;
 

/**
 * 课程信息
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2021-03-08 22:39:14
 */
public class KechengxinxiModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 班级
	 */
	
	private String banji;
		
	/**
	 * 星期
	 */
	
	private String xingqi;
		
	/**
	 * 课节
	 */
	
	private String kejie;
		
	/**
	 * 课程
	 */
	
	private String kecheng;
		
	/**
	 * 工号
	 */
	
	private String gonghao;
		
	/**
	 * 教师
	 */
	
	private String jiaoshi;
				
	
	/**
	 * 设置：班级
	 */
	 
	public void setBanji(String banji) {
		this.banji = banji;
	}
	
	/**
	 * 获取：班级
	 */
	public String getBanji() {
		return banji;
	}
				
	
	/**
	 * 设置：星期
	 */
	 
	public void setXingqi(String xingqi) {
		this.xingqi = xingqi;
	}
	
	/**
	 * 获取：星期
	 */
	public String getXingqi() {
		return xingqi;
	}
				
	
	/**
	 * 设置：课节
	 */
	 
	public void setKejie(String kejie) {
		this.kejie = kejie;
	}
	
	/**
	 * 获取：课节
	 */
	public String getKejie() {
		return kejie;
	}
				
	
	/**
	 * 设置：课程
	 */
	 
	public void setKecheng(String kecheng) {
		this.kecheng = kecheng;
	}
	
	/**
	 * 获取：课程
	 */
	public String getKecheng() {
		return kecheng;
	}
				
	
	/**
	 * 设置：工号
	 */
	 
	public void setGonghao(String gonghao) {
		this.gonghao = gonghao;
	}
	
	/**
	 * 获取：工号
	 */
	public String getGonghao() {
		return gonghao;
	}
				
	
	/**
	 * 设置：教师
	 */
	 
	public void setJiaoshi(String jiaoshi) {
		this.jiaoshi = jiaoshi;
	}
	
	/**
	 * 获取：教师
	 */
	public String getJiaoshi() {
		return jiaoshi;
	}
			
}
