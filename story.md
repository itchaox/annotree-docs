# 开发 Annotree 的故事

本项目基于 [folder-explorer](https://github.com/d2-projects/folder-explorer) 进行二次开发，感谢 [FairyEver](https://github.com/FairyEver) 的创意和贡献！

## 起源

- 2023 年 6 月我负责搭建公司内部前端基础框架，然后在框架搭建好以后，我希望给框架的目录结构编写一些注释来方便其他组员快速理解框架的结构。
- 我了解到 tree 命令可以扫描项目目录结构，但是也仅仅是扫描目录结构，编写目录注释以及注释的对齐都需要手动调整，很不方便。
- 然后我继续查找相关工具，后来发现了 folder-explorer 这个利器，它提供了目录注释的编写，以及对齐的功能，已经很方便了。
- 但是就像我下方提到的一些问题，folder-explorer 并不能满足我的需求，所以我就基于 folder-explorer 进行二次开发了 Annotree。
- 其实本来 2024 年 3 月就打算二次开发了，但是当时在忙其他的事情，以及对 Electron 相关 Api 不太熟悉，所以才一直拖到了 2024 年 7 月才开始开发。

## 为何二次开发

1. folder-explorer 部分功能我用不上，对我而言比较冗余，不符合自己的使用习惯。
2. folder-explorer 每次配置导出文本后，都需要到处后才能看到配置后的效果，我希望有实时预览效果。
3. folder-explorer 在编辑备注时，每次都需要右键打开编辑备注菜单，我个人使用起来觉得不是很方便。
