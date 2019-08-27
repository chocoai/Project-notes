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

**&#x1F381; 优化操作**
+ &#x1F3A8; 合并代码 `merge --no-ff`
  + 不同分支的合并会多出来一条路线图



