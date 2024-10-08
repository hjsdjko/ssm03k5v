package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 师生交流
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2021-03-08 22:39:14
 */
@TableName("shishengjiaoliu")
public class ShishengjiaoliuEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public ShishengjiaoliuEntity() {
		
	}
	
	public ShishengjiaoliuEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 标题
	 */
					
	private String biaoti;
	
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
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：标题
	 */
	public void setBiaoti(String biaoti) {
		this.biaoti = biaoti;
	}
	/**
	 * 获取：标题
	 */
	public String getBiaoti() {
		return biaoti;
	}
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
