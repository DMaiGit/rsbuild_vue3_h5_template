module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'style', // 代码格式(不影响代码运行的变动)
        'merge', // 分支合并
        'release', // 打包
        'revert', // 回退
        'perf', // 性能优化
        'docs', // 文档注释
        'chore', // 构建过程或辅助工具的变动
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'test', // 增加测试
      ]
    ],
    // subject 大小写不做校验
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          'feat': {
            description: '✨一个新功能',
            title: 'Features',
            emoji: '✨'
          },
          'fix': {
            description: '🐛一个bug修复',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          'style': {
            description: '💎代码风格的更改(空格，逗号，缺少分号等)',
            title: 'Styles',
            emoji: '💎'
          },
          'merge': {
            description: '🔀合并分支',
            title: 'Merge',
            emoji: '🔀'
          },
          'release': {
            description: '📦创建发布提交',
            title: 'Release',
            emoji: '📦'
          },
          'revert': {
            description: '⏪恢复以前的提交（如git revert）',
            title: 'Reverts',
            emoji: '⏪'
          },
          'perf': {
            description: '🚀性能提升',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          'docs': {
            description: '📚文档更新',
            title: 'Documentation',
            emoji: '📚'
          },
          'chore': {
            description: '🧰构建过程或辅助工具的变动，如 travis、gitlab-ci',
            title: 'Chore Integrations',
            emoji: '🧰'
          },
          'refactor': {
            description: '🔨代码重构(即不修复bug也不增加新功能)',
            title: 'Code Refactoring',
            emoji: '🔨'
          },
          'test': {
            description: '🚨添加测试文件或者更改测试文件',
            title: 'Tests',
            emoji: '🚨'
          },
        }
      },
      scope: {
        description: '影响范围，模块或者文件名(可跳过)'
      },
      subject: {
        description: '写一个简短的描述(必填项,以空格开头)'
      },
      body: {
        description: '提供更改的详细说明(可skip)'
      },
      isBreaking: {
        description: '是否有破坏性更新'
      },
      breakingBody: {
        description: '破坏性变更的详细描述'
      },
      breaking: {
        description: '破坏性变更的详细描述简短描述'
      },
      isIssueAffected: {
        description: '此更改是否影响任何未决问题?'
      },
      issuesBody: {
        description: '如果问题已解决，则提交需要正文。请输入提交的详细说明'
      },
      issues: {
        description: '添加问题参考，例如：(e.g. "fix #123", "re #123".)'
      }
    }
  }
};
