## （￣︶￣）↗　

现在是什么时代？serverless的时代！某校自动打卡脚本。每天7点自动打卡。

**不对任何后果负责**

## 食用方法

有兴趣的可以看看这篇[和这个仓库一点关系都没有的博文。](https://blog.2333332.xyz/2022/03/02/2022-03-02-punch-with-script/)

在腾讯云开通[SCF](https://cloud.tencent.com/product/scf)。（免费的）注意创建时一定要用node12.16环境，环境太新没依赖还只有残血IDE。
什么？你问我为什么不用GitHub Actions？显然是因为学校屏蔽了国外ip:(

![image](https://user-images.githubusercontent.com/44920131/160606543-d781b718-8d19-431a-bf93-36d7d17b2729.png)

把本仓库的index.js代码复制到这里。其中3-8行需要改成自己的值，含义在最后表格。

![image](https://user-images.githubusercontent.com/44920131/160606629-0e9f3494-7e95-4996-a1c5-c6acd2f6430c.png)

内存和超时时间需要调大点。

![image](https://user-images.githubusercontent.com/44920131/160607849-62753f1d-fbf5-44e6-a476-5d5d8fc1f555.png)

触发器设完就好了。
![image](https://user-images.githubusercontent.com/44920131/160608064-e4bb73ae-def6-486a-9734-3d69b03d94af.png)

## 接收提醒

那天抽风失败了怎么办？在监控信息右边有一个设置警告按钮。

![image](https://user-images.githubusercontent.com/44920131/160608939-12e13481-88fc-43cc-81d9-d82b5ac5b432.png)

这么设置，然后添加一下模板，失败了就会给你发短信了捏。

## 参数说明

| USERNAME        | PASSWORD | LOCATIONURL                   | LOGINURL                 | LATITUDE              | LONGITUDE             |
|-----------------|----------|-------------------------------|--------------------------|-----------------------|-----------------------|
| 登录用户名，学号 | 登录密码 | 需要位置授权的域名，包括协议头 | 跳转到打卡页前的登录网址 | 纬度，建议小数精度六位 | 经度，建议小数精度六位 |
