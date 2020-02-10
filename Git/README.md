# &#x1F527; 常用命令 
**&#x1F381; 必备知识点**
+ 仓库
  ```txt
    Remote: 远程主仓库；
    Repository/History： 本地仓库；
    Stage/Index： Git追踪树,暂存区；
    workspace： 本地工作区（即你编辑器的代码）
  ```

**&#x1F381; `git add` 提交到暂存区，出错怎么办？**
+ 一般流程为
  ```txt
    工作区 -> 
    git status 查看状态 -> 
    git add . 将所有修改加入暂存区-> 
    git commit -m "提交描述" 将代码提交到 本地仓库 -> 
    git push 将本地仓库代码更新到 远程仓库
  ```
+ 场景一
  ```txt
    当你改乱了暂存区某个文件的内容，想直接丢弃暂存区的修改时，用命令git checkout -- file。
  ```
  ```txt
    // 丢弃暂存区的修改
    git checkout -- <文件名>
  ```

+ 场景二
  ```txt
    当你不但改乱了暂存区某个文件的内容，还添加到了本地仓库时，想丢弃修改，分两步，第一步用命令 git reset HEAD file，就回到了场景1，第二步按场景1操作。
  ```
  ```txt
    git reset HEAD file
    // 丢弃暂存区的修改
    git checkout -- <文件名>
  ```

**&#x1F381; `git commit` 提交到本地仓库，出错怎么办？**
+ 提交信息出错
  ```txt
    更改 commit 信息
    git commit --amend -m "新提交消息"
  ```
+ 漏提交 -> commit 时，遗漏提交部分更新，有两种解决方案

  + 方案一： 再次commit
    ```txt
      git commit -m "提交消息"
    ```
  + 方案二： 遗漏文件提交到之前 commit 上
    ```txt
      git add missed-file // missed-file 为遗漏提交文件
      git commit --amend --no-edit
    ```
+ 提交错误文件，回退到上一个 `commit` 版本，再 `commit` (回退需谨慎 最好回退之前保留一个分支)
  + git reset
    ```txt
      删除指定的 commit

      // 修改版本库，修改暂存区，修改工作区
      git reset HEAD <文件名> // 把暂存区的修改撤销掉（unstage），重新放回工作区。

      // git版本回退，回退到特定的commit_id版本，可以通过git log查看提交历史，以便确定要回退到哪个版本(commit 之后的即为ID);
      git reset --hard commit_id 

      //将版本库回退1个版本，不仅仅是将本地版本库的头指针全部重置到指定版本，也会重置暂存区，并且会将工作区代码也回退到这个版本
      git reset --hard HEAD~1

      // 修改版本库，保留暂存区，保留工作区
      // 将版本库软回退1个版本，软回退表示将本地版本库的头指针全部重置到指定版本，且将这次提交之后的所有变更都移动到暂存区。
      git reset --soft HEAD~1
    ```
  + git revert
    ```txt
      撤销 某次操作，此次操作之前和之后的commit和history都会保留，并且把这次撤销作为一次最新的提交

      // 撤销前一次 commit
      git revert HEAD

      // 撤销前前一次 commit
      git revert HEAD^
      
      // (比如：fa042ce57ebbe5bb9c8db709f719cec2c58ee7ff）撤销指定的版本，撤销也会作为一次提交进行保存。
      git revert commit
    ```
  ```txt
    git revert是提交一个新的版本，将需要revert的版本的内容再反向修改回去，版本会递增，不影响之前提交的内容
  ```
**&#x1F381; `git revert` 和 `git reset` 的区别**

  `git revert` | `git reset`
  ------------ | -----------
  用一次新的commit来回滚之前的commit | 是直接删除指定的commit
  用一次逆向的commit“中和”之前的提交，因此日后合并老的branch时，导致这部分改变不会再次出现 | 是之间把某些commit在某个branch上删除，因而和老的branch再次merge时，这些被回滚的commit应该还会被引入
  HEAD继续前进，只是新的commit的内容和要revert的内容正好相反，能够抵消要被revert的内容 | 把HEAD向后移动了一下

**&#x1F381; 常用命令**
+ &#x1F3A8; 初始开发 `git` 操作流程
  + 克隆最新主分支项目代码 `git clone 地址`
  + 创建本地分支 `git branch 分支名`
  + 查看本地分支 `git branch`
  + 查看远程分支 `git branch -a`
  + 切换分支  `git checkout 分支名` (一般修改未提交则无法切换，大小写问题经常会有，可强制切换  `git checkout 分支名 -f`  非必须慎用)
  + 将本地分支推送到远程分支 `git push <远程仓库> <本地分支>:<远程分支>`

+ &#x1F3A8; `git fetch`
  + 将某个远程主机的更新，全部/分支 取回本地（此时之更新了Repository）它取回的代码对你本地的开发代码没有影响，如需彻底更新需合并或使用git pull

+ &#x1F3A8; `git pull`
  + 拉取远程主机某分支的更新，再与本地的指定分支合并（相当与fetch加上了合并分支功能的操作）

+ &#x1F3A8; `git push`
  + 将本地分支的更新，推送到远程主机，其命令格式与git pull相似

+ &#x1F3A8; 分支操作
  + 使用 Git 下载指定分支命令为：`git clone -b 分支名仓库地址`
  + 拉取远程新分支：`git checkout -b 本地分支 origin/远程分支`
  + 合并本地分支 `git merge dev（将dev合并到当前分支）`
  + 合并远程分支 `git merge origin/dev`
  + 删除本地分支 `git branch -D dev`
  + 删除远程分支 `git push origin --delete dev`
  + 上传新命名的本地分支 `git push origin newName`
  + 创建新分支 `git branch newName`
  + 切换分支 `git checkout newName`
  + 创建并切换分支 `git checkout -b newName(创建并切换到newName 分支)`
  + 查看本地分支  `git beanch`
  + 查看远程仓库所有分支 `git branch -a`
  + 本地分支重命名 `git branch -m oldName newName`
  + 重命名远程分支对应的本地分支 `git branch -m oldName newName`
  + 把修改过的本地分支与远程分支关联 `git branch --set-upstream origin/newName`
  + 切换到上一个分支  `git checkout -`

**&#x1F381; 优化操作**
+ &#x1F3A8; 合并代码 `merge --no-ff`
  + 不同分支的合并会多出来一条路线图

**&#x1F381; 标签**
+ &#x1F3A8; 标签
  + 列出所有标签
  ```git
    git tag
  ```
  + 新建一个tag在当前commit
  ```git
    git tag [tag]
  ```
  + 删除本地tag
  ```git
    git tag -d [tag]
  ```
  + 删除远程tag
  ```git
    git push origin :refs/tags/[tagName]
  ```
  + 查看tag信息
  ```git
    git show [tag]
  ```
  + 提交指定tag
  ```git
    git push [remote] [tag]
  ```
  + 提交所有tag
  ```git
    git push [remote] --tags
  ```
  + 新建一个分支，指向某个tag
  ```git
    git checkout -b [branch] [tag]
  ```

**&#x1F381; 查看信息**
+ &#x1F3A8; 查看信息
  + 显示有变更的文件
  ```git
    git status
  ```
  + 显示当前分支的版本历史
  ```git
    git log
  ```
  + 显示commit 历史 以及每次commit发生变更的文件
  ```git
    git log --stat
  ```
  + 搜索提交历史  根据关键词
  ```git
    git log -S [ketword]
  ```
  + 显示某个文件的版本历史  包括改名
  ```git
    git log --follow [file]
    git whatchanged [file]
  ```
  + 显示过去3次的提交
  ```git
    git log -3 --pretty --oneline
  ```
  + 显示所有提交过的用户，按照提交顺序排序
  ```git
    git shortlog -sn
  ```
  + 显示指定文件是什么人在什么时间修改
  ```git
    git blame [file]
  ```
  + 显示暂存区和工作区的差异
  ```git
    git diff
  ```
  + 显示工作区与当前分支最新commit之间的差异
  ```git
    git diff HEAD
  ```
  + 显示你今天写了多少行代码
  ```git
    git diff --shortstat '@{0 day ago}'
  ```
  + 显示当前分支最新的几次提交
  ```git
    git reflog
  ```

**&#x1F381; 远程同步**
  + &#x1F3A8; 远程同步
    + 下载远程仓库所有变动
    ```git
      git fetch [remote]
    ```
    + 显示所有远程仓库
    ```git
      git remote -v
    ```
    + 取回远程仓库的变化 并合并和本地分支
    ```git
      git pull [remote] [branch]
    ```
    + 推送所有分支当远程仓库
    ```git
      git push [remote] --all
    ```
**&#x1F381; 撤销**
  + &#x1F3A8; 撤销
    + 恢复暂存区的指定文件到工作区
    ```
      git checkout [file]
    ```

    + 恢复某个commit的指定文件到暂存区和工作区
    ```
      git checkout [commit] [file]
    ```

    + 恢复暂存区的所有文件到工作区
    ```
      git checkout .
    ```

    + 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
    ```
      git reset [file]
    ```

    + 重置暂存区与工作区，与上一次commit保持一致
    ```
      git reset --hard
    ```

    + 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
    ```
      git reset [commit]
    ```

    + 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
    ```
      git reset --hard [commit]
    ```

    + 重置当前HEAD为指定commit，但保持暂存区和工作区不变
    ```
      git reset --keep [commit]
    ```

    + 新建一个commit，用来撤销指定commit
    + 后者的所有变化都将被前者抵消，并且应用到当前分支
    ```
      git revert [commit]
    ```

    + 暂时将未提交的变化移除，稍后再移入 强制合并

      - 比如我正在写代码  同事过来让我拉代码（就是现在 必须是现在拉）
      - 我可以
      ```
        将此时未提交到本地仓库的代码先暂时push到暂存区
        git add . 是将代码提交到工作区
        git commit -m '' 保存到本地仓库
        git stash push到暂存区

        git pull将同事代码拉下来
        git stash pop 出栈

        之前未保存到工作区的代码需要再次保存

      ```
**&#x1F381; 同时将本地仓库的修改提交到不同的线上仓库**
  +  使用 git remote add 命令
    ```txt
      1. 本地仓库与远程仓库关联起来，再查看一下远程仓库情况
        git remote add origin https://xxxxx1.git
        git remote -v
      2. 使用如下命令再添加另一个远程仓库
        git remote add sudnyn https://xxxxx2.git
        git remote -v
      3. 之后就是push  但是要Push两次
        git push origin master:master
        git push sudnyn master:master
      
      上面的方法可以修改为只提交一次 将仓库名都修改为origin 这样默认提交origin 只需要一次
    ```