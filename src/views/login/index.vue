<template>
  <div>
    <v-Head :backgrounds="this.$route.meta.background" :classFixed="this.$route.meta.classFixed" :classShadow="this.$route.meta.boxShadow"></v-Head>
    <div class="register-login-container">
      <div class="holy-grail register-index-body">
        <div class="card m-cover body-content"></div>
        <div class="card body-sidebar login-modal-container">
          <h2 class="title">{{state}}</h2>
          <form class="sms-login-form" v-if="!toggle">
            <div class="m-validation">
              <div class="form-group">
                <label>手机</label>
                <div class="dropdown-trigger">+86</div>
                <ul class="dropdown-list" style="display:none;">
                  <li class="dropdown-list-item active">
                    中国 +86
                  </li><li class="dropdown-list-item">
                  美国 +1
                </li><li class="dropdown-list-item">
                  日本 +81
                </li><li class="dropdown-list-item">
                  中国香港 +852
                </li><li class="dropdown-list-item">
                  中国台湾 +886
                </li><li class="dropdown-list-item">
                  马来西亚 +60
                </li><li class="dropdown-list-item">
                  澳大利亚 +61
                </li><li class="dropdown-list-item">
                  加拿大 +1
                </li><li class="dropdown-list-item">
                  英国 +44
                </li><li class="dropdown-list-item">
                  新加坡 +65
                </li><li class="dropdown-list-item">
                  德国 +49
                </li><li class="dropdown-list-item">
                  俄罗斯 +7
                </li><li class="dropdown-list-item">
                  埃及 +20
                </li><li class="dropdown-list-item">
                  南非 +27
                </li><li class="dropdown-list-item">
                  希腊 +30
                </li><li class="dropdown-list-item">
                  荷兰 +31
                </li><li class="dropdown-list-item">
                  比利时 +32
                </li><li class="dropdown-list-item">
                  法国 +33
                </li><li class="dropdown-list-item">
                  西班牙 +34
                </li><li class="dropdown-list-item">
                  匈牙利 +36
                </li><li class="dropdown-list-item">
                  意大利 +39
                </li><li class="dropdown-list-item">
                  罗马尼亚 +40
                </li><li class="dropdown-list-item">
                  瑞士 +41
                </li><li class="dropdown-list-item">
                  奥地利 +43
                </li><li class="dropdown-list-item">
                  丹麦 +45
                </li><li class="dropdown-list-item">
                  瑞典 +46
                </li><li class="dropdown-list-item">
                  挪威 +47
                </li><li class="dropdown-list-item">
                  波兰 +48
                </li><li class="dropdown-list-item">
                  秘鲁 +51
                </li><li class="dropdown-list-item">
                  墨西哥 +52
                </li><li class="dropdown-list-item">
                  古巴 +53
                </li><li class="dropdown-list-item">
                  阿根廷 +54
                </li><li class="dropdown-list-item">
                  巴西 +55
                </li><li class="dropdown-list-item">
                  智利 +56
                </li><li class="dropdown-list-item">
                  哥伦比亚 +57
                </li><li class="dropdown-list-item">
                  委内瑞拉 +58
                </li><li class="dropdown-list-item">
                  印度尼西亚 +62
                </li><li class="dropdown-list-item">
                  菲律宾 +63
                </li><li class="dropdown-list-item">
                  新西兰 +64
                </li><li class="dropdown-list-item">
                  泰国 +66
                </li><li class="dropdown-list-item">
                  哈萨克斯坦 +7
                </li><li class="dropdown-list-item">
                  韩国 +82
                </li><li class="dropdown-list-item">
                  越南 +84
                </li><li class="dropdown-list-item">
                  土耳其 +90
                </li><li class="dropdown-list-item">
                  印度 +91
                </li><li class="dropdown-list-item">
                  巴基斯坦 +92
                </li><li class="dropdown-list-item">
                  阿富汗 +93
                </li><li class="dropdown-list-item">
                  斯里兰卡 +94
                </li><li class="dropdown-list-item">
                  缅甸 +95
                </li><li class="dropdown-list-item">
                  伊朗 +98
                </li><li class="dropdown-list-item">
                  摩洛哥 +212
                </li><li class="dropdown-list-item">
                  阿尔及利亚 +213
                </li><li class="dropdown-list-item">
                  突尼斯 +216
                </li><li class="dropdown-list-item">
                  利比亚 +218
                </li><li class="dropdown-list-item">
                  冈比亚 +220
                </li><li class="dropdown-list-item">
                  塞内加尔 +221
                </li><li class="dropdown-list-item">
                  马里 +223
                </li><li class="dropdown-list-item">
                  几内亚 +224
                </li><li class="dropdown-list-item">
                  科特迪瓦 +225
                </li><li class="dropdown-list-item">
                  布基纳法索 +226
                </li><li class="dropdown-list-item">
                  尼日尔 +227
                </li><li class="dropdown-list-item">
                  多哥 +228
                </li><li class="dropdown-list-item">
                  贝宁 +229
                </li><li class="dropdown-list-item">
                  毛里求斯 +230
                </li><li class="dropdown-list-item">
                  利比里亚 +231
                </li><li class="dropdown-list-item">
                  塞拉利昂 +232
                </li><li class="dropdown-list-item">
                  加纳 +233
                </li><li class="dropdown-list-item">
                  尼日利亚 +234
                </li><li class="dropdown-list-item">
                  乍得 +235
                </li><li class="dropdown-list-item">
                  中非共和国 +236
                </li><li class="dropdown-list-item">
                  喀麦隆 +237
                </li><li class="dropdown-list-item">
                  圣多美和普林西比 +239
                </li><li class="dropdown-list-item">
                  加蓬 +241
                </li><li class="dropdown-list-item">
                  刚果民主共和国 +243
                </li><li class="dropdown-list-item">
                  安哥拉 +244
                </li><li class="dropdown-list-item">
                  阿森松岛 +247
                </li><li class="dropdown-list-item">
                  塞舌尔 +248
                </li><li class="dropdown-list-item">
                  苏丹 +249
                </li><li class="dropdown-list-item">
                  埃塞俄比亚 +251
                </li><li class="dropdown-list-item">
                  索马里 +252
                </li><li class="dropdown-list-item">
                  吉布提 +253
                </li><li class="dropdown-list-item">
                  肯尼亚 +254
                </li><li class="dropdown-list-item">
                  坦桑尼亚 +255
                </li><li class="dropdown-list-item">
                  乌干达 +256
                </li><li class="dropdown-list-item">
                  布隆迪 +257
                </li><li class="dropdown-list-item">
                  莫桑比克 +258
                </li><li class="dropdown-list-item">
                  赞比亚 +260
                </li><li class="dropdown-list-item">
                  马达加斯加 +261
                </li><li class="dropdown-list-item">
                  津巴布韦 +263
                </li><li class="dropdown-list-item">
                  纳米比亚 +264
                </li><li class="dropdown-list-item">
                  马拉维 +265
                </li><li class="dropdown-list-item">
                  莱索托 +266
                </li><li class="dropdown-list-item">
                  博茨瓦纳 +267
                </li><li class="dropdown-list-item">
                  斯威士兰 +268
                </li><li class="dropdown-list-item">
                  直布罗陀 +350
                </li><li class="dropdown-list-item">
                  葡萄牙 +351
                </li><li class="dropdown-list-item">
                  卢森堡 +352
                </li><li class="dropdown-list-item">
                  爱尔兰 +353
                </li><li class="dropdown-list-item">
                  冰岛 +354
                </li><li class="dropdown-list-item">
                  阿尔巴尼亚 +355
                </li><li class="dropdown-list-item">
                  马耳他 +356
                </li><li class="dropdown-list-item">
                  塞浦路斯 +357
                </li><li class="dropdown-list-item">
                  芬兰 +358
                </li><li class="dropdown-list-item">
                  保加利亚 +359
                </li><li class="dropdown-list-item">
                  立陶宛 +370
                </li><li class="dropdown-list-item">
                  拉脱维亚 +371
                </li><li class="dropdown-list-item">
                  爱沙尼亚 +372
                </li><li class="dropdown-list-item">
                  摩尔多瓦 +373
                </li><li class="dropdown-list-item">
                  亚美尼亚 +374
                </li><li class="dropdown-list-item">
                  白俄罗斯 +375
                </li><li class="dropdown-list-item">
                  安道尔共和国 +376
                </li><li class="dropdown-list-item">
                  摩纳哥 +377
                </li><li class="dropdown-list-item">
                  圣马力诺 +378
                </li><li class="dropdown-list-item">
                  乌克兰 +380
                </li><li class="dropdown-list-item">
                  斯洛文尼亚 +386
                </li><li class="dropdown-list-item">
                  捷克 +420
                </li><li class="dropdown-list-item">
                  斯洛伐克 +421
                </li><li class="dropdown-list-item">
                  列支敦士登 +423
                </li><li class="dropdown-list-item">
                  伯利兹 +501
                </li><li class="dropdown-list-item">
                  瓜地马拉 +502
                </li><li class="dropdown-list-item">
                  萨尔瓦多 +503
                </li><li class="dropdown-list-item">
                  洪都拉斯 +504
                </li><li class="dropdown-list-item">
                  尼加拉瓜 +505
                </li><li class="dropdown-list-item">
                  哥斯达黎加 +506
                </li><li class="dropdown-list-item">
                  巴拿马 +507
                </li><li class="dropdown-list-item">
                  海地 +509
                </li><li class="dropdown-list-item">
                  玻利维亚 +591
                </li><li class="dropdown-list-item">
                  圭亚那 +592
                </li><li class="dropdown-list-item">
                  厄瓜多尔 +593
                </li><li class="dropdown-list-item">
                  法属圭亚那 +594
                </li><li class="dropdown-list-item">
                  巴拉圭 +595
                </li><li class="dropdown-list-item">
                  马提尼克 +596
                </li><li class="dropdown-list-item">
                  苏里南 +597
                </li><li class="dropdown-list-item">
                  乌拉圭 +598
                </li><li class="dropdown-list-item">
                  文莱 +673
                </li><li class="dropdown-list-item">
                  巴布亚新几内亚 +675
                </li><li class="dropdown-list-item">
                  汤加 +676
                </li><li class="dropdown-list-item">
                  所罗门群岛 +677
                </li><li class="dropdown-list-item">
                  斐济 +679
                </li><li class="dropdown-list-item">
                  库克群岛 +682
                </li><li class="dropdown-list-item">
                  法属波利尼西亚 +689
                </li><li class="dropdown-list-item">
                  中国澳门 +853
                </li><li class="dropdown-list-item">
                  柬埔寨 +855
                </li><li class="dropdown-list-item">
                  老挝 +856
                </li><li class="dropdown-list-item">
                  孟加拉国 +880
                </li><li class="dropdown-list-item">
                  马尔代夫 +960
                </li><li class="dropdown-list-item">
                  黎巴嫩 +961
                </li><li class="dropdown-list-item">
                  约旦 +962
                </li><li class="dropdown-list-item">
                  叙利亚 +963
                </li><li class="dropdown-list-item">
                  伊拉克 +964
                </li><li class="dropdown-list-item">
                  科威特 +965
                </li><li class="dropdown-list-item">
                  沙特阿拉伯 +966
                </li><li class="dropdown-list-item">
                  也门 +967
                </li><li class="dropdown-list-item">
                  阿曼 +968
                </li><li class="dropdown-list-item">
                  阿拉伯联合酋长国 +971
                </li><li class="dropdown-list-item">
                  以色列 +972
                </li><li class="dropdown-list-item">
                  巴林 +973
                </li><li class="dropdown-list-item">
                  卡塔尔 +974
                </li><li class="dropdown-list-item">
                  蒙古 +976
                </li><li class="dropdown-list-item">
                  尼泊尔 +977
                </li><li class="dropdown-list-item">
                  塔吉克斯坦 +992
                </li><li class="dropdown-list-item">
                  土库曼斯坦 +993
                </li><li class="dropdown-list-item">
                  阿塞拜疆 +994
                </li><li class="dropdown-list-item">
                  格鲁吉亚 +995
                </li><li class="dropdown-list-item">
                  吉尔吉斯斯坦 +996
                </li><li class="dropdown-list-item">
                  乌兹别克斯坦 +998
                </li><li class="dropdown-list-item">
                  巴哈马 +1242
                </li><li class="dropdown-list-item">
                  巴巴多斯 +1246
                </li><li class="dropdown-list-item">
                  安圭拉岛 +1264
                </li><li class="dropdown-list-item">
                  安提瓜和巴布达 +1268
                </li><li class="dropdown-list-item">
                  开曼群岛 +1345
                </li><li class="dropdown-list-item">
                  百慕大群岛 +1441
                </li><li class="dropdown-list-item">
                  格林纳达 +1473
                </li><li class="dropdown-list-item">
                  蒙特塞拉特岛 +1664
                </li><li class="dropdown-list-item">
                  关岛 +1671
                </li><li class="dropdown-list-item">
                  圣露西亚 +1758
                </li><li class="dropdown-list-item">
                  波多黎各 +1787
                </li><li class="dropdown-list-item">
                  多明尼加共和国 +1809
                </li><li class="dropdown-list-item">
                  特立尼达和多巴哥 +1868
                </li><li class="dropdown-list-item">
                  牙买加 +1876
                </li><li class="dropdown-list-item">
                  塞尔维亚共和国 +381
                </li><li class="dropdown-list-item">
                  毛里塔尼亚 +222
                </li></ul>
                <input name="username" type="text" placeholder="请输入您的手机号" value="" class="phone-text">
              </div>
            </div>
            <div class="m-validation">
              <div class="form-group">
                <label>验证码</label>
                <input type="text" name="code" placeholder="请输入您的验证码" value="" class="code-text">
                <button type="button" class="m-btn btn-primary btn-send-code">发送验证码</button>
              </div>
            </div>
            <p class="sms-login-hint">首次登录将自动注册迈科技账号且同意
              <a href="/footer/registrationTerms" target="_blank" style="display:inline-block;color:#1f86ed;" class="">
                《迈科技注册条款》
              </a>
            </p>
            <button type="submit" class="m-btn btn-primary btn-login">登录/注册</button>
            <a href="javascript:void(0)" class="m-link login-way-trigger" @click="login">账户登录</a>
          </form>
          <form class="pwd-login-form" v-if="toggle">
            <div class="m-validation">
              <div class="form-group">
                <label>手机</label>
                <div class="dropdown-trigger">+86</div>
                <ul class="dropdown-list" style="display:none;">
                  <li class="dropdown-list-item active">
                    中国 +86
                  </li><li class="dropdown-list-item">
                  美国 +1
                </li><li class="dropdown-list-item">
                  日本 +81
                </li><li class="dropdown-list-item">
                  中国香港 +852
                </li><li class="dropdown-list-item">
                  中国台湾 +886
                </li><li class="dropdown-list-item">
                  马来西亚 +60
                </li><li class="dropdown-list-item">
                  澳大利亚 +61
                </li><li class="dropdown-list-item">
                  加拿大 +1
                </li><li class="dropdown-list-item">
                  英国 +44
                </li><li class="dropdown-list-item">
                  新加坡 +65
                </li><li class="dropdown-list-item">
                  德国 +49
                </li><li class="dropdown-list-item">
                  俄罗斯 +7
                </li><li class="dropdown-list-item">
                  埃及 +20
                </li><li class="dropdown-list-item">
                  南非 +27
                </li><li class="dropdown-list-item">
                  希腊 +30
                </li><li class="dropdown-list-item">
                  荷兰 +31
                </li><li class="dropdown-list-item">
                  比利时 +32
                </li><li class="dropdown-list-item">
                  法国 +33
                </li><li class="dropdown-list-item">
                  西班牙 +34
                </li><li class="dropdown-list-item">
                  匈牙利 +36
                </li><li class="dropdown-list-item">
                  意大利 +39
                </li><li class="dropdown-list-item">
                  罗马尼亚 +40
                </li><li class="dropdown-list-item">
                  瑞士 +41
                </li><li class="dropdown-list-item">
                  奥地利 +43
                </li><li class="dropdown-list-item">
                  丹麦 +45
                </li><li class="dropdown-list-item">
                  瑞典 +46
                </li><li class="dropdown-list-item">
                  挪威 +47
                </li><li class="dropdown-list-item">
                  波兰 +48
                </li><li class="dropdown-list-item">
                  秘鲁 +51
                </li><li class="dropdown-list-item">
                  墨西哥 +52
                </li><li class="dropdown-list-item">
                  古巴 +53
                </li><li class="dropdown-list-item">
                  阿根廷 +54
                </li><li class="dropdown-list-item">
                  巴西 +55
                </li><li class="dropdown-list-item">
                  智利 +56
                </li><li class="dropdown-list-item">
                  哥伦比亚 +57
                </li><li class="dropdown-list-item">
                  委内瑞拉 +58
                </li><li class="dropdown-list-item">
                  印度尼西亚 +62
                </li><li class="dropdown-list-item">
                  菲律宾 +63
                </li><li class="dropdown-list-item">
                  新西兰 +64
                </li><li class="dropdown-list-item">
                  泰国 +66
                </li><li class="dropdown-list-item">
                  哈萨克斯坦 +7
                </li><li class="dropdown-list-item">
                  韩国 +82
                </li><li class="dropdown-list-item">
                  越南 +84
                </li><li class="dropdown-list-item">
                  土耳其 +90
                </li><li class="dropdown-list-item">
                  印度 +91
                </li><li class="dropdown-list-item">
                  巴基斯坦 +92
                </li><li class="dropdown-list-item">
                  阿富汗 +93
                </li><li class="dropdown-list-item">
                  斯里兰卡 +94
                </li><li class="dropdown-list-item">
                  缅甸 +95
                </li><li class="dropdown-list-item">
                  伊朗 +98
                </li><li class="dropdown-list-item">
                  摩洛哥 +212
                </li><li class="dropdown-list-item">
                  阿尔及利亚 +213
                </li><li class="dropdown-list-item">
                  突尼斯 +216
                </li><li class="dropdown-list-item">
                  利比亚 +218
                </li><li class="dropdown-list-item">
                  冈比亚 +220
                </li><li class="dropdown-list-item">
                  塞内加尔 +221
                </li><li class="dropdown-list-item">
                  马里 +223
                </li><li class="dropdown-list-item">
                  几内亚 +224
                </li><li class="dropdown-list-item">
                  科特迪瓦 +225
                </li><li class="dropdown-list-item">
                  布基纳法索 +226
                </li><li class="dropdown-list-item">
                  尼日尔 +227
                </li><li class="dropdown-list-item">
                  多哥 +228
                </li><li class="dropdown-list-item">
                  贝宁 +229
                </li><li class="dropdown-list-item">
                  毛里求斯 +230
                </li><li class="dropdown-list-item">
                  利比里亚 +231
                </li><li class="dropdown-list-item">
                  塞拉利昂 +232
                </li><li class="dropdown-list-item">
                  加纳 +233
                </li><li class="dropdown-list-item">
                  尼日利亚 +234
                </li><li class="dropdown-list-item">
                  乍得 +235
                </li><li class="dropdown-list-item">
                  中非共和国 +236
                </li><li class="dropdown-list-item">
                  喀麦隆 +237
                </li><li class="dropdown-list-item">
                  圣多美和普林西比 +239
                </li><li class="dropdown-list-item">
                  加蓬 +241
                </li><li class="dropdown-list-item">
                  刚果民主共和国 +243
                </li><li class="dropdown-list-item">
                  安哥拉 +244
                </li><li class="dropdown-list-item">
                  阿森松岛 +247
                </li><li class="dropdown-list-item">
                  塞舌尔 +248
                </li><li class="dropdown-list-item">
                  苏丹 +249
                </li><li class="dropdown-list-item">
                  埃塞俄比亚 +251
                </li><li class="dropdown-list-item">
                  索马里 +252
                </li><li class="dropdown-list-item">
                  吉布提 +253
                </li><li class="dropdown-list-item">
                  肯尼亚 +254
                </li><li class="dropdown-list-item">
                  坦桑尼亚 +255
                </li><li class="dropdown-list-item">
                  乌干达 +256
                </li><li class="dropdown-list-item">
                  布隆迪 +257
                </li><li class="dropdown-list-item">
                  莫桑比克 +258
                </li><li class="dropdown-list-item">
                  赞比亚 +260
                </li><li class="dropdown-list-item">
                  马达加斯加 +261
                </li><li class="dropdown-list-item">
                  津巴布韦 +263
                </li><li class="dropdown-list-item">
                  纳米比亚 +264
                </li><li class="dropdown-list-item">
                  马拉维 +265
                </li><li class="dropdown-list-item">
                  莱索托 +266
                </li><li class="dropdown-list-item">
                  博茨瓦纳 +267
                </li><li class="dropdown-list-item">
                  斯威士兰 +268
                </li><li class="dropdown-list-item">
                  直布罗陀 +350
                </li><li class="dropdown-list-item">
                  葡萄牙 +351
                </li><li class="dropdown-list-item">
                  卢森堡 +352
                </li><li class="dropdown-list-item">
                  爱尔兰 +353
                </li><li class="dropdown-list-item">
                  冰岛 +354
                </li><li class="dropdown-list-item">
                  阿尔巴尼亚 +355
                </li><li class="dropdown-list-item">
                  马耳他 +356
                </li><li class="dropdown-list-item">
                  塞浦路斯 +357
                </li><li class="dropdown-list-item">
                  芬兰 +358
                </li><li class="dropdown-list-item">
                  保加利亚 +359
                </li><li class="dropdown-list-item">
                  立陶宛 +370
                </li><li class="dropdown-list-item">
                  拉脱维亚 +371
                </li><li class="dropdown-list-item">
                  爱沙尼亚 +372
                </li><li class="dropdown-list-item">
                  摩尔多瓦 +373
                </li><li class="dropdown-list-item">
                  亚美尼亚 +374
                </li><li class="dropdown-list-item">
                  白俄罗斯 +375
                </li><li class="dropdown-list-item">
                  安道尔共和国 +376
                </li><li class="dropdown-list-item">
                  摩纳哥 +377
                </li><li class="dropdown-list-item">
                  圣马力诺 +378
                </li><li class="dropdown-list-item">
                  乌克兰 +380
                </li><li class="dropdown-list-item">
                  斯洛文尼亚 +386
                </li><li class="dropdown-list-item">
                  捷克 +420
                </li><li class="dropdown-list-item">
                  斯洛伐克 +421
                </li><li class="dropdown-list-item">
                  列支敦士登 +423
                </li><li class="dropdown-list-item">
                  伯利兹 +501
                </li><li class="dropdown-list-item">
                  瓜地马拉 +502
                </li><li class="dropdown-list-item">
                  萨尔瓦多 +503
                </li><li class="dropdown-list-item">
                  洪都拉斯 +504
                </li><li class="dropdown-list-item">
                  尼加拉瓜 +505
                </li><li class="dropdown-list-item">
                  哥斯达黎加 +506
                </li><li class="dropdown-list-item">
                  巴拿马 +507
                </li><li class="dropdown-list-item">
                  海地 +509
                </li><li class="dropdown-list-item">
                  玻利维亚 +591
                </li><li class="dropdown-list-item">
                  圭亚那 +592
                </li><li class="dropdown-list-item">
                  厄瓜多尔 +593
                </li><li class="dropdown-list-item">
                  法属圭亚那 +594
                </li><li class="dropdown-list-item">
                  巴拉圭 +595
                </li><li class="dropdown-list-item">
                  马提尼克 +596
                </li><li class="dropdown-list-item">
                  苏里南 +597
                </li><li class="dropdown-list-item">
                  乌拉圭 +598
                </li><li class="dropdown-list-item">
                  文莱 +673
                </li><li class="dropdown-list-item">
                  巴布亚新几内亚 +675
                </li><li class="dropdown-list-item">
                  汤加 +676
                </li><li class="dropdown-list-item">
                  所罗门群岛 +677
                </li><li class="dropdown-list-item">
                  斐济 +679
                </li><li class="dropdown-list-item">
                  库克群岛 +682
                </li><li class="dropdown-list-item">
                  法属波利尼西亚 +689
                </li><li class="dropdown-list-item">
                  中国澳门 +853
                </li><li class="dropdown-list-item">
                  柬埔寨 +855
                </li><li class="dropdown-list-item">
                  老挝 +856
                </li><li class="dropdown-list-item">
                  孟加拉国 +880
                </li><li class="dropdown-list-item">
                  马尔代夫 +960
                </li><li class="dropdown-list-item">
                  黎巴嫩 +961
                </li><li class="dropdown-list-item">
                  约旦 +962
                </li><li class="dropdown-list-item">
                  叙利亚 +963
                </li><li class="dropdown-list-item">
                  伊拉克 +964
                </li><li class="dropdown-list-item">
                  科威特 +965
                </li><li class="dropdown-list-item">
                  沙特阿拉伯 +966
                </li><li class="dropdown-list-item">
                  也门 +967
                </li><li class="dropdown-list-item">
                  阿曼 +968
                </li><li class="dropdown-list-item">
                  阿拉伯联合酋长国 +971
                </li><li class="dropdown-list-item">
                  以色列 +972
                </li><li class="dropdown-list-item">
                  巴林 +973
                </li><li class="dropdown-list-item">
                  卡塔尔 +974
                </li><li class="dropdown-list-item">
                  蒙古 +976
                </li><li class="dropdown-list-item">
                  尼泊尔 +977
                </li><li class="dropdown-list-item">
                  塔吉克斯坦 +992
                </li><li class="dropdown-list-item">
                  土库曼斯坦 +993
                </li><li class="dropdown-list-item">
                  阿塞拜疆 +994
                </li><li class="dropdown-list-item">
                  格鲁吉亚 +995
                </li><li class="dropdown-list-item">
                  吉尔吉斯斯坦 +996
                </li><li class="dropdown-list-item">
                  乌兹别克斯坦 +998
                </li><li class="dropdown-list-item">
                  巴哈马 +1242
                </li><li class="dropdown-list-item">
                  巴巴多斯 +1246
                </li><li class="dropdown-list-item">
                  安圭拉岛 +1264
                </li><li class="dropdown-list-item">
                  安提瓜和巴布达 +1268
                </li><li class="dropdown-list-item">
                  开曼群岛 +1345
                </li><li class="dropdown-list-item">
                  百慕大群岛 +1441
                </li><li class="dropdown-list-item">
                  格林纳达 +1473
                </li><li class="dropdown-list-item">
                  蒙特塞拉特岛 +1664
                </li><li class="dropdown-list-item">
                  关岛 +1671
                </li><li class="dropdown-list-item">
                  圣露西亚 +1758
                </li><li class="dropdown-list-item">
                  波多黎各 +1787
                </li><li class="dropdown-list-item">
                  多明尼加共和国 +1809
                </li><li class="dropdown-list-item">
                  特立尼达和多巴哥 +1868
                </li><li class="dropdown-list-item">
                  牙买加 +1876
                </li><li class="dropdown-list-item">
                  塞尔维亚共和国 +381
                </li><li class="dropdown-list-item">
                  毛里塔尼亚 +222
                </li></ul>
                <input name="username" type="text" placeholder="请输入您的手机号" value="" class="phone-text">
              </div>
            </div>
            <div class="m-validation">
              <div class="form-group">
                <label>密码</label>
                <input type="password" name="pwd-text" placeholder="请输入您的密码" autocomplete="no" value="" class="pwd-text">
                <span class="m-icon m-icon-pwd" @click="showPwd">
                      <i aria-hidden="true" class="fa" :class="passwordType ==='password'?'fa-eye':'fa-eye-slash'"></i>
                </span>
              </div>
            </div>
            <p class="pull-left not-exist-hint" style="display:none;">您还不是迈科技的会员！
              <a href="javascript:void(0)">马上快速注册</a></p><a href="/password/code" class="m-link m-link-forget-pwd">忘记密码？</a><button type="submit" class="m-btn btn-primary btn-login">登&nbsp;录
          </button>
            <a href="javascript:void(0)" class="m-link login-way-trigger" @click="login">短信快捷登录</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import oneHead from '@/components/oneHead/index.vue'
  export default {
    name: "index",
    data() {
      return {
        toggle:false,
        state:"短信验证码登录",
        passwordType:"password",
      }
    },
    methods:{
      login(){
        this.toggle = !this.toggle
        if(this.toggle === false){
          this.state = '短信验证码登录'
        }else{
          this.state = '账户登录'
        }
      },
      showPwd(){
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
      }
    },
    components: {
      "v-Head":oneHead,
    },
  }
</script>

<style scoped lang="less">
  .register-login-container{
    max-height: 98vh;
    overflow: hidden;
    background: url(../../assets/bg-register.jpg) no-repeat 50%;
    background-size: cover;
    padding-top: 200px;
    .register-index-body{
      position: relative;
      top: -33px;
      width: 960px;
      height: 600px;
      margin: 0 auto;
      max-width: 1240px;
      .body-content{
        float: left;
        padding: 18px;
        background-color: #fff;
        border: .5px solid #eee;
        width: 510px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        height: 558px;
        background-image: url(../../assets/register-index.png);
        box-shadow: 0 0 24px rgba(0,0,0,.3);
      }
      .login-modal-container{
        float: left;
        margin-left: 50px;
        width: 400px;
        height: 558px;
        border-radius: 10px;
        box-shadow: 0 0 24px rgba(0,0,0,.3);
        padding: 18px;
        background-color: #fff;
        border: .5px solid #eee;
        .title{
          margin-top: 40px;
          margin-bottom: 40px;
          font-size: 28px;
          color: #707070;
          text-align: center;
        }
        .sms-login-form{
          width: 340px;
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 340px;
              height: 50px;
              label{
                width: 60px;
                min-width: 60px;
                color: #333;
                font-weight: 400;
                font-size: 16px;
                display: inline-block;
                max-width: 100%;
                margin-bottom: 5px
              }
              .dropdown-trigger{
                position: relative;
                display: inline-block;
                margin-right: 20px;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                color: #1f86ed;
              }
              .phone-text{
                width: 180px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .code-text{
                width: 180px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .btn-send-code{
                width: 118px;
                font-size: 16px;
                background-color: #1f86ed;
                display: inline-block;
                height: 50px;
                color: #fff;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #1f86ed;
                letter-spacing: 1px;
              }
            }
          }
          .sms-login-hint{
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            text-align: center;
            a{
              display: inline-block;
              color: #1f86ed;
            }
          }
          .btn-login{
            width: 100%;
            background-color: #1f86ed;
            display: inline-block;
            height: 50px;
            font-size: 18px;
            letter-spacing: 1px;
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #1f86ed;
          }
          .login-way-trigger{
            float: right;
            margin-top: 10px;
            color: #1f86ed;
            text-decoration: none;
            font-size: 14px;
          }
        }
        .pwd-login-form{
          width: 340px;
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 340px;
              height: 50px;
              label{
                width: 60px;
                min-width: 60px;
                color: #333;
                font-weight: 400;
                font-size: 16px;
                display: inline-block;
                max-width: 100%;
                margin-bottom: 5px;
              }
              .dropdown-trigger{
                position: relative;
                display: inline-block;
                margin-right: 20px;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                color: #1f86ed;
              }
              .phone-text{
                width: 180px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .pwd-text{
                width: 410px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .m-icon-pwd{
                position: absolute;
                top: 13px;
                right: 10px;
                width: 24px;
                height: 24px;
                line-height: 1;
                font-size: 22px;
                color: #b5b5b5;
                cursor: pointer;
              }
            }
          }
          .m-link-forget-pwd{
            float: right;
            margin-bottom: 20px;
            color: #1f86ed;
          }
          .btn-login{
            width: 100%;
            background-color: #1f86ed;
            display: inline-block;
            height: 50px;
            font-size: 18px;
            letter-spacing: 1px;
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #1f86ed;
          }
          .login-way-trigger{
            float: right;
            margin-top: 10px;
            color: #1f86ed;
          }
        }
      }
    }
  }
</style>
