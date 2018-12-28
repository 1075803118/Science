<template>
  <transition name="fade">
    <div>
      <div class="back" v-if="flag"></div>
      <div class="m-modal-container" v-if="flag">
        <div class="m-modal-header">
          <div class="tab-container">
            <div v-for="(item,index) in list" :class="['tab',{active:index === Index}]" @click="toggle(index)">
              {{item}}
            </div>
          </div>
          <button type="button" data-dismiss="modal" aria-label="Close" class="close" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="m-modal-body">
          <div>
            <form class="sms-login-form" v-if="Index === 0">
              <div class="m-mobile-code modal-form-group">
                <div class="m-validation">
                  <div class="form-group">
                    <label>手机</label>
                    <div class="form-control dropdown-trigger">
                      +86
                    </div>
                    <!--<ul class="dropdown-list" style="display: none;">-->
                    <!--<li class="dropdown-list-item active">-->
                    <!--中国 +86-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--美国 +1-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--日本 +81-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--中国香港 +852-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--中国台湾 +886-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马来西亚 +60-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--澳大利亚 +61-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--加拿大 +1-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--英国 +44-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--新加坡 +65-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--德国 +49-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--俄罗斯 +7-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--埃及 +20-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--南非 +27-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--希腊 +30-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--荷兰 +31-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--比利时 +32-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--法国 +33-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--西班牙 +34-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--匈牙利 +36-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--意大利 +39-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--罗马尼亚 +40-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--瑞士 +41-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--奥地利 +43-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--丹麦 +45-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--瑞典 +46-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--挪威 +47-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--波兰 +48-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--秘鲁 +51-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--墨西哥 +52-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--古巴 +53-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿根廷 +54-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴西 +55-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--智利 +56-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--哥伦比亚 +57-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--委内瑞拉 +58-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--印度尼西亚 +62-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--菲律宾 +63-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--新西兰 +64-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--泰国 +66-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--哈萨克斯坦 +7-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--韩国 +82-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--越南 +84-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--土耳其 +90-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--印度 +91-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴基斯坦 +92-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿富汗 +93-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--斯里兰卡 +94-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--缅甸 +95-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--伊朗 +98-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--摩洛哥 +212-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿尔及利亚 +213-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--突尼斯 +216-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--利比亚 +218-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--冈比亚 +220-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--塞内加尔 +221-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马里 +223-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--几内亚 +224-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--科特迪瓦 +225-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--布基纳法索 +226-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--尼日尔 +227-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--多哥 +228-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--贝宁 +229-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--毛里求斯 +230-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--利比里亚 +231-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--塞拉利昂 +232-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--加纳 +233-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--尼日利亚 +234-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--乍得 +235-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--中非共和国 +236-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--喀麦隆 +237-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--圣多美和普林西比 +239-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--加蓬 +241-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--刚果民主共和国 +243-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--安哥拉 +244-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿森松岛 +247-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--塞舌尔 +248-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--苏丹 +249-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--埃塞俄比亚 +251-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--索马里 +252-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--吉布提 +253-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--肯尼亚 +254-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--坦桑尼亚 +255-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--乌干达 +256-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--布隆迪 +257-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--莫桑比克 +258-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--赞比亚 +260-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马达加斯加 +261-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--津巴布韦 +263-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--纳米比亚 +264-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马拉维 +265-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--莱索托 +266-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--博茨瓦纳 +267-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--斯威士兰 +268-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--直布罗陀 +350-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--葡萄牙 +351-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--卢森堡 +352-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--爱尔兰 +353-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--冰岛 +354-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿尔巴尼亚 +355-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马耳他 +356-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--塞浦路斯 +357-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--芬兰 +358-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--保加利亚 +359-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--立陶宛 +370-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--拉脱维亚 +371-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--爱沙尼亚 +372-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--摩尔多瓦 +373-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--亚美尼亚 +374-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--白俄罗斯 +375-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--安道尔共和国 +376-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--摩纳哥 +377-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--圣马力诺 +378-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--乌克兰 +380-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--斯洛文尼亚 +386-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--捷克 +420-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--斯洛伐克 +421-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--列支敦士登 +423-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--伯利兹 +501-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--瓜地马拉 +502-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--萨尔瓦多 +503-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--洪都拉斯 +504-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--尼加拉瓜 +505-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--哥斯达黎加 +506-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴拿马 +507-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--海地 +509-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--玻利维亚 +591-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--圭亚那 +592-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--厄瓜多尔 +593-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--法属圭亚那 +594-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴拉圭 +595-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马提尼克 +596-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--苏里南 +597-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--乌拉圭 +598-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--文莱 +673-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴布亚新几内亚 +675-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--汤加 +676-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--所罗门群岛 +677-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--斐济 +679-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--库克群岛 +682-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--法属波利尼西亚 +689-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--中国澳门 +853-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--柬埔寨 +855-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--老挝 +856-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--孟加拉国 +880-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--马尔代夫 +960-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--黎巴嫩 +961-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--约旦 +962-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--叙利亚 +963-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--伊拉克 +964-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--科威特 +965-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--沙特阿拉伯 +966-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--也门 +967-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿曼 +968-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿拉伯联合酋长国 +971-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--以色列 +972-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴林 +973-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--卡塔尔 +974-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--蒙古 +976-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--尼泊尔 +977-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--塔吉克斯坦 +992-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--土库曼斯坦 +993-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--阿塞拜疆 +994-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--格鲁吉亚 +995-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--吉尔吉斯斯坦 +996-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--乌兹别克斯坦 +998-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴哈马 +1242-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--巴巴多斯 +1246-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--安圭拉岛 +1264-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--安提瓜和巴布达 +1268-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--开曼群岛 +1345-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--百慕大群岛 +1441-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--格林纳达 +1473-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--蒙特塞拉特岛 +1664-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--关岛 +1671-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--圣露西亚 +1758-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--波多黎各 +1787-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--多明尼加共和国 +1809-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--特立尼达和多巴哥 +1868-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--牙买加 +1876-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--塞尔维亚共和国 +381-->
                    <!--</li><li class="dropdown-list-item">-->
                    <!--毛里塔尼亚 +222-->
                    <!--</li></ul>-->
                    <input name="username" type="text" placeholder="请输入您的手机号" class="form-control phone-text" v-model="loginUser.phone">
                  </div>
                </div>
                <div class="m-validation">
                  <div class="form-group">
                    <label>验证码</label>
                    <input type="text" name="code" placeholder="请输入您的验证码" class="form-control code-text" v-model="loginUser.code">
                    <button type="button" class="m-btn btn-primary btn-send-code">发送验证码</button>
                  </div>
                </div>
              </div>
              <p class="sms-login-hint">首次登录将自动注册迈科技账号且同意
                <router-link to="/registration" tag="a" style="display: inline-block; width: 144px; color: rgb(31, 134, 237);">
                  《迈科技注册条款》
                </router-link>
              </p>
              <button type="submit" class="m-btn btn-primary btn-login">登&nbsp;录
              </button>
            </form>
            <form class="pwd-login-form" v-if="Index === 1">
              <div class="m-mobile-code modal-form-group">
                <div class="m-validation">
                  <div class="form-group">
                    <label>手机</label>
                    <div class="form-control dropdown-trigger">
                      +86
                    </div>
                    <ul class="dropdown-list" style="display: none;">
                      <li class="dropdown-list-item active">
                        中国 +86
                      </li>
                      <li class="dropdown-list-item">
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
                    </li>
                    </ul>
                    <input name="username" type="text" placeholder="请输入您的手机号" class="phone-text" v-model="loginUser.phone"></div>
                </div>
                <div class="m-validation">
                  <div class="form-group">
                    <label>密码</label>
                    <input :type="passwordType" name="pwd-text" placeholder="请输入您的密码" class="pwd-text" v-model="loginUser.pass">
                    <span class="m-icon m-icon-pwd" @click="showPwd">
                      <i aria-hidden="true" class="fa" :class="passwordType ==='password'?'fa-eye':'fa-eye-slash'"></i>
                  </span>
                  </div>
                  <p class="m-validation-text" style="display: none;">
                    <i class="m-icon"></i>
                    <span></span>
                  </p>
                </div>
                <a href="/password/code" class="m-link m-link-forget-pwd">忘记密码？</a>
                <button type="submit" class="m-btn btn-primary btn-login">登&nbsp;录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "back",
    props:{
      flag:false
    },
    data(){
      return{
        list:['短信快捷登录','账户登录'],
        fl:null,
        Index:0,
        passwordType:"password",
        loginUser:{
          phone:'',
          pass:'',
          code:''
        }
      }
    },
    watch: {
      $route( to , from ){
        this.close()
      }
    },
    methods:{
      toggle(index){
        this.Index = index
        this.loginUser.phone = ''
        this.loginUser.pass = ''
        this.loginUser.code = ''
      },
      close(){
        this.$emit('close',false)
      },
      showPwd(){
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
      }
    }
  }
</script>

<style  lang="less">
  .m-modal-container{
    padding: 40px;
    width: 572px;
    overflow: visible;
    position: relative;
    margin: 0 auto;
    max-height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.33);
    font-family: inherit;
    z-index: 2;
    .m-modal-header{
      margin-bottom: 26px;
      border-bottom: 2px solid #eee;
      .tab-container{
        display: flex;
        width: 100%;
        .tab{
          flex: 1;
          margin-bottom: -2px;
          padding-bottom: 10px;
          text-align: center;
          color: #d9dadc;
          font-size: 26px;
          cursor: pointer;
          &.active{
            color: #343a52;
            border-bottom: 2px solid #1f86ed;
          }
        }
      }
      .close{
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 30px;
        -webkit-appearance: none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        border: 0;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        font-weight: 700;
        opacity: .2;
      }
    }
    .m-modal-body{
      box-sizing: border-box;
      margin: 0;
      .sms-login-form{
        width: 490px;
        .sms-login-hint{
          margin-bottom: 20px;
          color: #999;
          text-align: center;
        }
        .btn-login{
          color: #fff;
          width: 100%;
          background-color: #1f86ed;
          display: inline-block;
          height: 50px;
          font-size: 18px;
          letter-spacing: 1px;
          box-sizing: border-box;
          text-align: center;
          border: 1px solid #1f86ed;
        }
        .modal-form-group{
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: -ms-flexbox;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 490px;
              height: 50px;
              label{
                width: 80px;
                min-width: 80px;
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
                padding-left: 0;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                border-radius: 2px;
                color: #1f86ed;
                border: none;
                box-shadow: none;
              }
              .phone-text{
                width: 315px;
                padding-left: 16px;
                padding-right: 16px;
                border-radius: 2px;
                box-shadow: none;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .code-text{
                padding-left: 16px;
                padding-right: 16px;
                width: 300px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
                border-radius: 2px;
                box-shadow: none;
              }
              .btn-send-code{
                width: 128px;
                background-color: #1f86ed;
                display: inline-block;
                height: 50px;
                font-size: 18px;
                letter-spacing: 1px;
                min-width: 128px;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #1f86ed;
                color: #fff;
              }
            }
          }
        }
      }
      .pwd-login-form{
        width: 490px;
        .modal-form-group{
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: -ms-flexbox;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 490px;
              height: 50px;
              label{
                width: 80px;
                min-width: 80px;
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
                padding-left: 0;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                border-radius: 2px;
                color: #1f86ed;
                border: none;
                box-shadow: none;
              }
              .phone-text{
                width: 315px;
                padding-left: 16px;
                padding-right: 16px;
                border-radius: 2px;
                box-shadow: none;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .pwd-text{
                padding-left: 16px;
                padding-right: 16px;
                width: 410px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
                border-radius: 2px;
                box-shadow: none;
              }
              .btn-send-code{
                width: 128px;
                background-color: #1f86ed;
                display: inline-block;
                height: 50px;
                font-size: 18px;
                letter-spacing: 1px;
                min-width: 128px;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #1f86ed;
                color: #fff;
              }
              .m-icon-pwd{
                position: absolute;
                top: 18px;
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
            display: block;
          }
          .btn-login{
            display: inline-block;
            height: 50px;
            font-size: 18px;
            letter-spacing: 1px;
            width: 100%;
            background-color: #1f86ed;
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #1f86ed;
          }
        }
      }
    }
  }
  .back{
    display: table;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    background-color: rgba(0,0,0,.5);
    transition: opacity .3s ease;
    overflow: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
