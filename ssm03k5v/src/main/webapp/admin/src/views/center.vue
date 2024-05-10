<template>
  <div>
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      label-width="80px"
    >  
     <el-row>
                              <el-col :span="12">
        <el-form-item   v-if="flag=='jiaoshi'"  label="工号" prop="gonghao">
          <el-input v-model="ruleForm.gonghao" readonly              placeholder="工号" clearable></el-input>
        </el-form-item>
      </el-col>
                                          <el-col :span="12">
        <el-form-item   v-if="flag=='jiaoshi'"  label="教师" prop="jiaoshi">
          <el-input v-model="ruleForm.jiaoshi"               placeholder="教师" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item v-if="flag=='jiaoshi'"  label="职称" prop="zhicheng">
          <el-select v-model="ruleForm.zhicheng" placeholder="请选择职称">
            <el-option
                v-for="(item,index) in jiaoshizhichengOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item v-if="flag=='jiaoshi'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in jiaoshixingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='jiaoshi'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='jiaoshi'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='jiaoshi'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="24">  
        <el-form-item v-if="flag=='jiaoshi'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="jiaoshitouxiangUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
                                                <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="学号" prop="xuehao">
          <el-input v-model="ruleForm.xuehao" readonly              placeholder="学号" clearable></el-input>
        </el-form-item>
      </el-col>
                                          <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="学生" prop="xuesheng">
          <el-input v-model="ruleForm.xuesheng"               placeholder="学生" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="班级" prop="banji">
          <el-select v-model="ruleForm.banji" placeholder="请选择班级">
            <el-option
                v-for="(item,index) in xueshengbanjiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item v-if="flag=='xuesheng'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie" placeholder="请选择性别">
            <el-option
                v-for="(item,index) in xueshengxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="手机" prop="shouji">
          <el-input v-model="ruleForm.shouji"               placeholder="手机" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="12">
        <el-form-item   v-if="flag=='xuesheng'"  label="邮箱" prop="youxiang">
          <el-input v-model="ruleForm.youxiang"               placeholder="邮箱" clearable></el-input>
        </el-form-item>
      </el-col>
                        <el-col :span="24">  
        <el-form-item v-if="flag=='xuesheng'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="xueshengtouxiangUploadChange"
          ></file-upload>
        </el-form-item>
      </el-col>
                                                                                                                                          <el-form-item v-if="flag=='users'" label="用户名" prop="username">
        <el-input v-model="ruleForm.username" 
        placeholder="用户名"></el-input>
      </el-form-item>
      <el-col :span="24">
      <el-form-item>
        <el-button type="primary" @click="onUpdateHandler">修 改</el-button>
      </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
                                                                  jiaoshizhichengOptions: [],
                        jiaoshixingbieOptions: [],
                                                                                                                                    xueshengbanjiOptions: [],
                        xueshengxingbieOptions: [],
                                                                                                                                                                                        };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
                                            this.jiaoshizhichengOptions = "助教,讲师,副教授,教授".split(',')
                this.jiaoshixingbieOptions = "男,女".split(',')
                                                                                        this.$http({
      url: `option/banji/banjimingcheng`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.xueshengbanjiOptions = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
                this.xueshengxingbieOptions = "男,女".split(',')
                                                                                                                          },
  methods: {
                                                                                                                                                                                                                                                                                                                                                jiaoshitouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
                                                                                                xueshengtouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
                                                                                            onUpdateHandler() {
                              if((!this.ruleForm.gonghao)&& 'jiaoshi'==this.flag){
        this.$message.error('工号不能为空');
        return
      }
                                                                  if((!this.ruleForm.mima)&& 'jiaoshi'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
                                                                  if((!this.ruleForm.jiaoshi)&& 'jiaoshi'==this.flag){
        this.$message.error('教师不能为空');
        return
      }
                                                                                                                                                                                    if( 'jiaoshi' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
       this.$message.error(`年龄应输入整数`);
        return
      }
                                                                                    if( 'jiaoshi' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
                                                                        if( 'jiaoshi' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
                                                                                                                  if((!this.ruleForm.xuehao)&& 'xuesheng'==this.flag){
        this.$message.error('学号不能为空');
        return
      }
                                                                  if((!this.ruleForm.mima)&& 'xuesheng'==this.flag){
        this.$message.error('密码不能为空');
        return
      }
                                                                  if((!this.ruleForm.xuesheng)&& 'xuesheng'==this.flag){
        this.$message.error('学生不能为空');
        return
      }
                                                                                                                                                                                    if( 'xuesheng' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
       this.$message.error(`年龄应输入整数`);
        return
      }
                                                                                    if( 'xuesheng' ==this.flag && this.ruleForm.shouji&&(!isMobile(this.ruleForm.shouji))){
        this.$message.error(`手机应输入手机格式`);
        return
      }
                                                                        if( 'xuesheng' ==this.flag && this.ruleForm.youxiang&&(!isEmail(this.ruleForm.youxiang))){
        this.$message.error(`邮箱应输入邮箱格式`);
        return
      }
                                                                                                                                                                                                            this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
