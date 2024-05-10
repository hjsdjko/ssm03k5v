package com.entity.vo;

import com.entity.ShishengjiaoliuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 师生交流
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2021-03-08 22:39:14
 */
public class ShishengjiaoliuVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 学号
	 */
	
	private String xuehao;
		
	/**
	 * 学生
	 */
	
	private String xuesheng;
		
	/**
	 * 头像
	 */
	
	private String touxiang;
		
	/**
	 * 工号
	 */
	
	private String gonghao;
		
	/**
	 * 教师
	 */
	
	private String jiaoshi;
		
	/**
	 * 学生留言
	 */
	
	private String xueshengliuyan;
		
	/**
	 * 教师回复
	 */
	
	private String jiaoshihuifu;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：学号
	 */
	 
	public void setXuehao(String xuehao) {
		this.xuehao = xuehao;
	}
	
	/**
	 * 获取：学号
	 */
	public String getXuehao() {
		return xuehao;
	}
				
	
	/**
	 * 设置：学生
	 */
	 
	public void setXuesheng(String xuesheng) {
		this.xuesheng = xuesheng;
	}
	
	/**
	 * 获取：学生
	 */
	public String getXuesheng() {
		return xuesheng;
	}
				
	
	/**
	 * 设置：头像
	 */
	 
	public void setTouxiang(String touxiang) {
		this.touxiang = touxiang;
	}
	
	/**
	 * 获取：头像
	 */
	public String getTouxiang() {
		return touxiang;
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
				
	
	/**
	 * 设置：学生留言
	 */
	 
	public void setXueshengliuyan(String xueshengliuyan) {
		this.xueshengliuyan = xueshengliuyan;
	}
	
	/**
	 * 获取：学生留言
	 */
	public String getXueshengliuyan() {
		return xueshengliuyan;
	}
				
	
	/**
	 * 设置：教师回复
	 */
	 
	public void setJiaoshihuifu(String jiaoshihuifu) {
		this.jiaoshihuifu = jiaoshihuifu;
	}
	
	/**
	 * 获取：教师回复
	 */
	public String getJiaoshihuifu() {
		return jiaoshihuifu;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
