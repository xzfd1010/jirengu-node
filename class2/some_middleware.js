/**
 * Created by nick on 2017/7/27.
 */
module.exports = function (options) {
    // 为什么这么写？是为了给middleware做一些配置
    // 如果传入四个参数，就应该是错误处理，所以要根据options中的配置来设置
    return (req, res, next) => {

        if(options.handsome){

        }else{

        }

        // middleware thing
    }
}