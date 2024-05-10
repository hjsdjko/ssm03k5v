const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm03k5v/",
            name: "ssm03k5v",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm03k5v/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "移动学习平台小程序"
        } 
    }
}
export default base
