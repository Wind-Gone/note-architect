(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{645:function(a,s,t){"use strict";t.r(s);var e=t(13),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"开启-mybatis-日志-sql-打印"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-mybatis-日志-sql-打印"}},[a._v("#")]),a._v(" 开启 Mybatis 日志 sql 打印")]),a._v(" "),t("p",[a._v("在 application.yml 中的 mybatis 中配置日志的实现")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mybatis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type-aliases-package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cn.mrcode.foodiedev.pojo    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 实体层")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mapper-locations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" classpath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mapper/"),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("*.xml")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mapper 层")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("log-impl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" org.apache.ibatis.logging.stdout.StdOutImpl\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("我们配置了 log4j 在控制台打印日志的格式，这里只要选择将日志打印在控制台，就可以了。")]),a._v(" "),t("p",[a._v("需要注意的是：在生产环境一般是不开启的，只在开发或则测试环境开启。")]),a._v(" "),t("p",[a._v("打印的日志信息如下")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("==>  Preparing: SELECT id,username,password,nickname,realname,face,mobile,email,sex,birthday,created_time,updated_time FROM users WHERE ( ( username = ? and password = ? ) ) \n==> Parameters: test(String), 4QrcOUm6Wau+VuBX8g+IPg==(String)\n<==    Columns: id, username, password, nickname, realname, face, mobile, email, sex, birthday, created_time, updated_time\n<==        Row: 210213BX4KY0M5AW, test, 4QrcOUm6Wau+VuBX8g+IPg==, test, null, http://localhost:900/xx.jpg, null, null, 2, 1899-12-31, 2021-02-13 08:40:20, 2021-02-13 08:40:20\n<==      Total: 1\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);