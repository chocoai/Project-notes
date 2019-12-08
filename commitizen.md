# commitizen 

## 我们在每次提交代码时，都需要编写Commit Message，否则是不允许提交的。
  ```txt
    使用commitizen 规范commit message
  ```
### 安装
  ```
    npm install -g commitizen conventional-changelog conventional-changelog-cli conventional-commits-detector conventional-recommended-bump@0.3.0
  ```

### 在当前package.json 目录执行
  ```
    commitizen init cz-conventional-changelog --save --save-exact
  ```

### 使用
  ```
    git cz
  ```