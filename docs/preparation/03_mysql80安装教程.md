# MySQL安装教程



> 我在这里写的是前提是已经下载好了响应的 mysql 数据库安装包了，如果还没有下载，可以搜索 mysql，然后去[官网](https://www.mysql.com/)上找到对应自己系统版本的安装包进行下载

##### 1、点击选择 I accept the license terms 然后点击 Next，然后进入下一个页面

 <img src="https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70.png" alt="这里写图片描述" />

##### 2、选择 Developer Default ，然后点击 Next，我这里选择的是默认安装所有配置环境，当然你也可以选择 Custon（自定义）安装

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-16371607334805.png)

##### 3、进入如图所示的页面，点击 Next 之后再弹出来的页面点击 Yes 即可

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-16371607408827.png)

##### 4、在下面的页面点击 Excute，这是要执行安装上面的一些环境，我这张图是已经点击过的，所以显示的是灰色不可点击状态

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-16371607479339.png)

##### 5、当环境全部安装完成之后就会如下图所示，左侧的对号意思是环境安装成功，是不用选择（页不能选择）的，点击 Next 即可

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716075551411.png)

##### 6、这里是配置数据库环境的，点 Next 就行了

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716076227413.png)

##### 7、选中框住的内容，点击 Next

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716076771515.png)

##### 8、在这里注意上面的一些参数，在这里就不要改了，点击 Next 就行了

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716077337117.png)

##### 9、选择途中标注之后，点击 Next，然后会进入账户配置页面

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716078058519.png)

##### 10、按照图中提示完成即可，这里面那两个输入框分别是输入密码和确密码，两次输入要一致，密码可以随意设置，个人建议自己用的设置简单好记的最好

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716078541721.png) 

##### 11、在这个页面，如果是第一次安装 mysql 的话没什么问题，但是要不是第一次安装，而且之前安装的时候，在计算机服务里面的 MySQL80 服务没有删除掉的话，在 Windows Swevice Name 的输入框后面会显示一个黄色感叹号。

这时候有两种解决方法：

通过 cmd 命令把之前安装的 MySQL80 服务卸载掉，注意：计算机服务里面的都系只能通过 cmd 命令来删除（删除方法百度搜索一下即可）
第二种方法就是直接 MySQL80 的名字改了，我第二次安装的时候就直接改为了 MySQL8 不影响使用是直接 MySQL80 的名字改了，我第二次安装的时候就直接改为了 MySQL8 不影响使用

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716081138823.png)

##### 12、在这个页面，那些个圈不是让选的（也不可以选），点击 Execute 即可

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716081798825.png)

##### 13、上面那一步执行完成之后，就会如下图所示，这时点击 Finish，然后会进入下一个页面

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716082326527.png)

##### 14、这个页面不用管了，直接往下走

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716082923929.png)

##### 15、按照图片上的提示做即可

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716083377231.png)

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716083864733.png)

##### 16、点击 Execute 即可

 ![](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716084389835.png)

##### 17、点击 Finish 即可完成安装

 ![这里写图片描述](https://raw.githubusercontent.com/zjp693/Zhang_blog/main/docs/public/images/mysql80%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B.assets/70-163716084867137.png)
