
// css 替换

/**
 * 读取 css 文件，内嵌到项目文件中。减少请求。
 *
 * @param {Object} project 项目模型.
 */

// 提供 css 是否替换处理插件. 
// 用户可以通过命令和package.json覆盖默认行为.
var argv = require('optimist')
    .usage('Usage: $0 -css [cssEmbed]')[
    'default']('css', false)
    .argv;

module.exports = function(project, callback) {
  var cssModPattern = project.getReqModRegByType('[^\"\']+\\.css');

  console.info('--- SPM CSS PLUGIN ---')
  console.empty();

  console.info('SPM css plugin execution successfully!');
  console.empty();
  callback();
  return ;
   
  return moduleCode.replace(tplModPattern,
      function(match, mark, tplModName) {
          // 模板内嵌.
          tplModName = path.join(path.dirname(modName), tplModName);
          var tplCode = project.getModuleCode(tplModName);
          tplCode = tplCode.replace(/'/g, '"');
          tplCode = tplCode.replace(spacePattern, '');
          return "'" + tplCode.split('\n').join('') + "'";
      });

};


