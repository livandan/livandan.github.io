# 李文桢的个人主页

网站地址：<https://livandan.github.io/>

中英文个人主页，使用 HTML、CSS 和 JavaScript 编写。无需安装依赖或编译，可以直接用 GitHub Pages 托管，也可以迁移到其他静态网站托管平台。

## 文件说明

| 文件 | 内容 |
| --- | --- |
| `index.html` | 个人介绍、科研、论文、课程项目、教育与助教经历 |
| `style.css` | 黑白配色、字体、单栏排版及手机适配 |
| `script.js` | 中英文切换、语言偏好保存和页面导航 |
| `favicon.svg` | 浏览器标签页图标 |
| `.nojekyll` | 让 GitHub Pages 直接发布这些静态文件 |

## 直接在 GitHub 修改

1. 打开需要修改的文件，例如 `index.html`，点击铅笔图标进入编辑。
2. 找到要改的文字。`data-en="…"` 是英文，`data-zh="…"` 是中文。
3. 如果修改英文，也同步修改对应标签之间的初始英文文字，方便搜索引擎和未启用 JavaScript 的浏览器读取。
4. 点击 **Commit changes**，提交到 `main` 分支。GitHub Pages 启用后，会自动发布更新。

例如：

```html
<p data-en="My research interests include embodied AI."
   data-zh="我的研究兴趣包括具身智能。">
  My research interests include embodied AI.
</p>
```

中文不必逐句翻译英文，但修改时请保持姓名、论文状态和个人贡献等事实一致。

## 常改内容的位置

- 个人介绍：`index.html` 中的 `id="about"`。
- 科研与论文：`id="research"`；论文条目使用 `class="paper"`。
- 课程项目：`id="projects"`；每个项目使用 `class="project"`。
- 教育、助教和奖项：`id="experience"`。
- 页面底部的更新时间：搜索 `Updated November 2026`，同时修改中文日期和初始英文文字。
- 以后添加简历：把更新后的 PDF 放进仓库，例如 `assets/Wenzhen_Li_CV.pdf`，再在页面中添加指向该文件的链接。

## GitHub Pages 发布设置

个人主页仓库名称应为 `livandan.github.io`，发布后的地址为 `https://livandan.github.io/`。

在仓库 **Settings → Pages → Build and deployment** 中设置：

- **Source**：Deploy from a branch
- **Branch**：main
- **Folder**：/(root)

保存后等待 GitHub 完成发布。此后修改并提交 `main` 分支即可更新网站，无需手动上传构建产物。

本仓库及 GitHub Pages 网站已按所有者要求公开。后续提交到 `main` 分支的网页内容会公开发布。

官方文档：[创建 GitHub Pages 网站](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)、[设置发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 在本地预览

直接用浏览器打开 `index.html` 即可查看。也可以在此目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
