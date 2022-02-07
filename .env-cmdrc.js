/**
 * env-cmd 注入 node 运行环境变量
 *  - env-cmd 支持定义任意多的环境，自动注入定义的环境变量，仅需在 package.json scripts 启动时，通过 -e 指定运行时对应的环境；
 *  - https://github.com/toddbluhm/env-cmd
 */

const apiEndpoint = 'https://wpdc.api.hydroinfo.cc/api';

module.exports = {
  development: {
    NEXT_PUBLIC_API_ENDPOINT: apiEndpoint,
  },
  production: {
    NEXT_PUBLIC_API_ENDPOINT: apiEndpoint,
    GENERATE_SOURCEMAP: true, // 是否开启 sourcemap
    REMOVE_FILENAME_HASH: false, // 是否移除文件哈希
    SHOULD_DROP_DEBUGGER: true, // 打包时是否移除 debugger
    SHOULD_DROP_CONSOLE: true, // 打包时是否移除 console
  },
};
