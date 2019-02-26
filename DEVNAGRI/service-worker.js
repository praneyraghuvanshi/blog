/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9b7b11646771dec068f2be3c4aa7fb62"
  },
  {
    "url": "Api.html",
    "revision": "6e2656c63f4d5d44912ac6245d6fcfc9"
  },
  {
    "url": "assets/css/0.styles.88d4ad1f.css",
    "revision": "381d17eefb70b11f97d9ed04c1927638"
  },
  {
    "url": "assets/img/accesstoken.e7fe701f.png",
    "revision": "e7fe701f30e57f08d080567e8b7b8ff2"
  },
  {
    "url": "assets/img/accesstoken1.a8952694.png",
    "revision": "a89526942d7aac9ba01d6a992b688a0f"
  },
  {
    "url": "assets/img/Account_Setting.2b7eb9f1.png",
    "revision": "2b7eb9f18f3989199187ab2e568e0aff"
  },
  {
    "url": "assets/img/AccountSettings.e11e6a35.png",
    "revision": "e11e6a35fa4aada1ece10fc0b3b10315"
  },
  {
    "url": "assets/img/Active_Projects2.12c4ab5f.png",
    "revision": "12c4ab5f82c2b8275ba7e7cb4d352c9f"
  },
  {
    "url": "assets/img/Add_file.a6e2a1ae.png",
    "revision": "a6e2a1ae7ef928cc68341e3495d59d4f"
  },
  {
    "url": "assets/img/Add_Picture2.561ded3b.png",
    "revision": "561ded3bb6abe4cdc4c680c451e12507"
  },
  {
    "url": "assets/img/addglossary.a7df89c0.png",
    "revision": "a7df89c0050d7d0473fa0008de43b685"
  },
  {
    "url": "assets/img/AddTranslator.c75153a4.png",
    "revision": "c75153a4260022b299fe8d3808a08d86"
  },
  {
    "url": "assets/img/Billing_Details.7d7461a6.png",
    "revision": "7d7461a6c2845a7fdcdd3311ad0d2014"
  },
  {
    "url": "assets/img/Comment.dd0e0dbe.png",
    "revision": "dd0e0dbe8af14f02e3f0535522a0a81c"
  },
  {
    "url": "assets/img/Completed_Project2.efcf1c8c.png",
    "revision": "efcf1c8c8063aae425012d545de7e4ca"
  },
  {
    "url": "assets/img/CreateNewProject.3d3dc5f0.png",
    "revision": "3d3dc5f0c42753266b249e3fc4be5b19"
  },
  {
    "url": "assets/img/Dashboard.bed3bc1d.png",
    "revision": "bed3bc1db7fb5af17f1703723cbf2eab"
  },
  {
    "url": "assets/img/devnagri.bfdd00e2.png",
    "revision": "bfdd00e223adebba7bc44d8af5ca6738"
  },
  {
    "url": "assets/img/donotdisp.99794087.png",
    "revision": "9979408773a3e0eda45a4f1a0017b642"
  },
  {
    "url": "assets/img/Donottrans.07bd06ed.png",
    "revision": "07bd06ed370d7d9c09847c1d930af59c"
  },
  {
    "url": "assets/img/FileUpload.1342fd76.png",
    "revision": "1342fd763d8810c933d20ac8ac81cad2"
  },
  {
    "url": "assets/img/glossaryadd.4e8ce98a.png",
    "revision": "4e8ce98a5a69f9aafb8655b3a1be881f"
  },
  {
    "url": "assets/img/Glossaryview.26278d39.png",
    "revision": "26278d391d1c65f02464d2f23b3c3137"
  },
  {
    "url": "assets/img/help.5d53fc04.png",
    "revision": "5d53fc04189213c5394775c2877dbfc3"
  },
  {
    "url": "assets/img/instalingplugin.6d8d9329.png",
    "revision": "6d8d9329e82be5a94c9504921a0d384e"
  },
  {
    "url": "assets/img/Instructiondisplay.81723060.png",
    "revision": "817230601f8f0c9b8583e24a0ae4490f"
  },
  {
    "url": "assets/img/nav_notification.5cc96f7e.png",
    "revision": "5cc96f7ee72c31686b4eb231bd5a73fb"
  },
  {
    "url": "assets/img/navigation_panel.e8702663.png",
    "revision": "e8702663f6d191d78700e99a90656346"
  },
  {
    "url": "assets/img/oauthclient.3dc1bc1a.png",
    "revision": "3dc1bc1aa3b77e6281691875f083cece"
  },
  {
    "url": "assets/img/oauthclient2.6c244f10.png",
    "revision": "6c244f10b73fcba084b9c89791af86f2"
  },
  {
    "url": "assets/img/OrderPlan.b42c7ec6.png",
    "revision": "b42c7ec60d002efcabde66440563098e"
  },
  {
    "url": "assets/img/orders_2.d17902eb.png",
    "revision": "d17902eb0cd2f9acea4307bf8b9f2ca8"
  },
  {
    "url": "assets/img/Orders_progress.bee36344.png",
    "revision": "bee36344c26e9eca234e1e3c437a5eff"
  },
  {
    "url": "assets/img/OrderSystem.2e7f31b0.png",
    "revision": "2e7f31b0e95b07a72e90784fa3ead3ea"
  },
  {
    "url": "assets/img/pageview.bcad00fc.jpg",
    "revision": "bcad00fca8cef20a7974a703bd183a64"
  },
  {
    "url": "assets/img/password_recovery.c548e2df.png",
    "revision": "c548e2df64a8f57d6e276aaaf000a8d9"
  },
  {
    "url": "assets/img/plugin.851b008e.png",
    "revision": "851b008eeadb1f8055aeaf42fbbd3f23"
  },
  {
    "url": "assets/img/plugininstall.1b128d12.png",
    "revision": "1b128d12504324e2855269cc9a6b6f2c"
  },
  {
    "url": "assets/img/pluginsearch.281705d1.png",
    "revision": "281705d1ee3e4be050cb506a39415a1d"
  },
  {
    "url": "assets/img/pluginsearch2.a9463bf0.png",
    "revision": "a9463bf04511ceb36fe7dac0befd19f5"
  },
  {
    "url": "assets/img/Profile.7ce56ade.png",
    "revision": "7ce56adeee59dce64c145ccbc4887e06"
  },
  {
    "url": "assets/img/Project_Description.fe6e753c.png",
    "revision": "fe6e753c9e195e10b90937fa06ae3fb3"
  },
  {
    "url": "assets/img/ProjectDescription.15cd94b0.png",
    "revision": "15cd94b07d81e9856b9cc62daec574a9"
  },
  {
    "url": "assets/img/ProjectDetail.efb1f0be.png",
    "revision": "efb1f0be164460caebe9fdd690e01b28"
  },
  {
    "url": "assets/img/ProjectKey.98bfab3a.png",
    "revision": "98bfab3a999e1f79856822f9b9831902"
  },
  {
    "url": "assets/img/Projectkey1.50fb640c.png",
    "revision": "50fb640c84fcfafd903ddfb0c2abcfaf"
  },
  {
    "url": "assets/img/pull.4d2c119a.png",
    "revision": "4d2c119a3d66da647450262985e66120"
  },
  {
    "url": "assets/img/pull1.86624f55.png",
    "revision": "86624f558f394366f5bbd35f6b8e268f"
  },
  {
    "url": "assets/img/pull3.bc846e17.png",
    "revision": "bc846e1714ca9736e4c1819371a766b2"
  },
  {
    "url": "assets/img/push.e01be717.png",
    "revision": "e01be717c279a6924a26d65870fd169d"
  },
  {
    "url": "assets/img/push1.a919fe0d.png",
    "revision": "a919fe0d22561d516f4051c32f1651ff"
  },
  {
    "url": "assets/img/restartstudio.115e5849.png",
    "revision": "115e584904a2014a4cf41c635bc51690"
  },
  {
    "url": "assets/img/screenshot-app.devnagri.com-2018.07.18-10-32-34.7edc99a1.png",
    "revision": "7edc99a1dc6937fce576322aabca084e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Select_All.1cb7850f.png",
    "revision": "1cb7850ffeba10dfb5fbeabda36c3133"
  },
  {
    "url": "assets/img/Select_Language.5a0a2816.png",
    "revision": "5a0a28164b80ef719ec2d137ce74a859"
  },
  {
    "url": "assets/img/setting1.8a891f11.png",
    "revision": "8a891f11fb3ed1e7cb414a1824d83580"
  },
  {
    "url": "assets/img/settings0.433b5367.png",
    "revision": "433b536731a74ce6ddf45969efcd7b5c"
  },
  {
    "url": "assets/img/settingscreen.9e28986b.png",
    "revision": "9e28986b96db7261c720cd3e5ba2291a"
  },
  {
    "url": "assets/img/Sign_in_client.9a3cbc7f.png",
    "revision": "9a3cbc7fae115bd46cb22e660f22a7a6"
  },
  {
    "url": "assets/img/Sign_in_trans.1c2d9e19.jpg",
    "revision": "1c2d9e191db7af214a5c77bca2aea302"
  },
  {
    "url": "assets/img/Sign_up_Client.0b9c984f.png",
    "revision": "0b9c984fb3e6cf6868fdc28e4e299bec"
  },
  {
    "url": "assets/img/status.9d526383.png",
    "revision": "9d5263839e8c960fae937caaf08c5185"
  },
  {
    "url": "assets/img/status1.21ba3ecb.png",
    "revision": "21ba3ecb56ac62502f29c4b0011e8bfe"
  },
  {
    "url": "assets/img/summary.8aae0b49.png",
    "revision": "8aae0b498567ea692ea3d87a5b2f7871"
  },
  {
    "url": "assets/img/sync.81bd95db.png",
    "revision": "81bd95db24008e9fd6a1bace39138a50"
  },
  {
    "url": "assets/img/sync1.c0a9dd82.png",
    "revision": "c0a9dd82dc3e21da33e78ac3a40e97f4"
  },
  {
    "url": "assets/img/T1at.20571ade.jpg",
    "revision": "20571ade2799f6a818423744ec9a3f38"
  },
  {
    "url": "assets/img/T1auto-fill.0bb68fa7.jpg",
    "revision": "0bb68fa7c03740228f164e6630f98eee"
  },
  {
    "url": "assets/img/T1comment1.a24c1eb6.jpg",
    "revision": "a24c1eb678ff6f6a82e238dc125b9e61"
  },
  {
    "url": "assets/img/T1comment2.d9cfe9e6.jpg",
    "revision": "d9cfe9e6c2a2271bec110c47c8a83a5e"
  },
  {
    "url": "assets/img/T1complete.f343f8f9.jpg",
    "revision": "f343f8f9cdf73d5133b67a456716a225"
  },
  {
    "url": "assets/img/T1completed.2272eace.jpg",
    "revision": "2272eace39f55b43fb556932570e0173"
  },
  {
    "url": "assets/img/T1file.1c9c8ca4.jpg",
    "revision": "1c9c8ca406d95d899d90762141f550a6"
  },
  {
    "url": "assets/img/T1i.53607d43.jpg",
    "revision": "53607d43817619e188fc13fcc4117deb"
  },
  {
    "url": "assets/img/T1keyboard.120a1a40.jpg",
    "revision": "120a1a402c023fb9e4393a5493b8946a"
  },
  {
    "url": "assets/img/T1languages.dcc50e2a.jpg",
    "revision": "dcc50e2af3833492f66211fc18c0b7c9"
  },
  {
    "url": "assets/img/T1level-of-politeness.45cf9f68.jpg",
    "revision": "45cf9f68b57f782a3e4098c327a45d54"
  },
  {
    "url": "assets/img/T1main-screen.020eaad6.jpg",
    "revision": "020eaad6708ebe708229782a805d6574"
  },
  {
    "url": "assets/img/T1non-translated.d5914e1c.jpg",
    "revision": "d5914e1ce34521a1eee2382be656a829"
  },
  {
    "url": "assets/img/T1orignal-text.56b18cf7.jpg",
    "revision": "56b18cf7503bed67bc81e2e9f6cdf934"
  },
  {
    "url": "assets/img/T1percentage.cad846cf.jpg",
    "revision": "cad846cfef9552aeb74e35bdef8d6c68"
  },
  {
    "url": "assets/img/T1project-industry.1e55d7de.jpg",
    "revision": "1e55d7def6cb7f0e3f3896279e6de2ac"
  },
  {
    "url": "assets/img/T1project-type.22950e6d.jpg",
    "revision": "22950e6d468f1a49390ab5d9bd124f1c"
  },
  {
    "url": "assets/img/T1rejected.fe369edb.jpg",
    "revision": "fe369edb0e79eaae338baee916d2ff53"
  },
  {
    "url": "assets/img/T1revision-history.7181f369.jpg",
    "revision": "7181f3693d68cc24e56fc138efce228c"
  },
  {
    "url": "assets/img/T1save.de04381d.jpg",
    "revision": "de04381dec9cfc1d5f77b6b7a840f2b0"
  },
  {
    "url": "assets/img/T1target-audience.6441df3e.jpg",
    "revision": "6441df3ece5e5a1ccebfd9efa5d9de47"
  },
  {
    "url": "assets/img/T1tm.2ab37016.jpg",
    "revision": "2ab37016457a0e65db558d79ca2318b8"
  },
  {
    "url": "assets/img/T1toggle1.5efb4f4a.jpg",
    "revision": "5efb4f4aa0084b0d86eaca14c2ab63e6"
  },
  {
    "url": "assets/img/T1toggle2.8f17d4ff.jpg",
    "revision": "8f17d4ffe16fb64960a210a714f11c9e"
  },
  {
    "url": "assets/img/T1Total_words.b6708829.jpg",
    "revision": "b6708829d41b5db8e933498e10bce901"
  },
  {
    "url": "assets/img/T1translated-text.e4ceef67.jpg",
    "revision": "e4ceef673692fc244eeb7a5285633d76"
  },
  {
    "url": "assets/img/T1translated-words.41fcf69d.jpg",
    "revision": "41fcf69d61892bf8532ad24dd7045387"
  },
  {
    "url": "assets/img/T1translated.237741c9.jpg",
    "revision": "237741c9fbee02175d478a1a6831debf"
  },
  {
    "url": "assets/img/T1zoom.95e93dfe.jpg",
    "revision": "95e93dfe8a50b339f6b223c188d97e8e"
  },
  {
    "url": "assets/img/Total_Projects2.8d7141c1.png",
    "revision": "8d7141c1ee9a11c9947ba13cd0cf051f"
  },
  {
    "url": "assets/img/trans_bank.06680d85.jpg",
    "revision": "06680d8541fa7f0dd05845fa0491489c"
  },
  {
    "url": "assets/img/trans_domain.12fc2fad.png",
    "revision": "12fc2fad17ceac3405ecd81fc98d9e02"
  },
  {
    "url": "assets/img/trans_edit_lang.4cf192cc.png",
    "revision": "4cf192cce731037dc8491fbe8c7be22b"
  },
  {
    "url": "assets/img/trans_info.380b9859.png",
    "revision": "380b985945a7f302981681993d834031"
  },
  {
    "url": "assets/img/trans_signup_form1.cd9e7690.jpg",
    "revision": "cd9e7690de038c79c40ee1e72f879c88"
  },
  {
    "url": "assets/img/trans_signup_form2_1.e6a06bd1.jpg",
    "revision": "e6a06bd177aaf288254e6a49779cf9d9"
  },
  {
    "url": "assets/img/trans_signup_form2_2.8ca87861.jpg",
    "revision": "8ca878610dca943ef91e2aee847f170b"
  },
  {
    "url": "assets/img/trans_signup_form3.6742f1ae.png",
    "revision": "6742f1ae9d71c38b4099119da718fc7c"
  },
  {
    "url": "assets/img/trans_signup_form4.59edd988.jpg",
    "revision": "59edd988e2b4592c87eab4a0cf962255"
  },
  {
    "url": "assets/img/trans_signup.190b8844.png",
    "revision": "190b884404c76e8ab421607351f4d550"
  },
  {
    "url": "assets/img/trans_social.7a78d16d.png",
    "revision": "7a78d16dd32c722a496a97cc489c22d7"
  },
  {
    "url": "assets/img/trans_test.7aa50e4a.png",
    "revision": "7aa50e4a53b092e8c39103b81004431f"
  },
  {
    "url": "assets/img/TranslateTerm.921cbe3d.png",
    "revision": "921cbe3de6c7c4e13f70c40ce3aeeb87"
  },
  {
    "url": "assets/img/Translation_order_plan.e5f11e60.png",
    "revision": "e5f11e60eb0fe1a3e2de5c83b704cced"
  },
  {
    "url": "assets/img/Translation.9cc279c0.png",
    "revision": "9cc279c048d3d28f1108c74ca61b3ea2"
  },
  {
    "url": "assets/img/Try_Proofreading.2501951a.png",
    "revision": "2501951a43e59acbd836dfff80073df0"
  },
  {
    "url": "assets/img/yml.721713e9.png",
    "revision": "721713e9e676e410d0593196d825270a"
  },
  {
    "url": "assets/js/2.f811647c.js",
    "revision": "0bedfc4a56add0eb0297d81322b0fa1a"
  },
  {
    "url": "assets/js/3.f296d4b4.js",
    "revision": "d1c5aa79ac3c5257d0ba0c20b72e5f86"
  },
  {
    "url": "assets/js/4.4203187b.js",
    "revision": "50a243a8189fc6d4f86b800687d51ca0"
  },
  {
    "url": "assets/js/5.4da611ca.js",
    "revision": "884e901b5fdc21ec7202315ac40a50c5"
  },
  {
    "url": "assets/js/6.edbdc0b9.js",
    "revision": "f0ec869df484d112f4512be4c1e50aa7"
  },
  {
    "url": "assets/js/7.ad6a0802.js",
    "revision": "eab9d38a5c3b2dc80550b41a07a960dc"
  },
  {
    "url": "assets/js/8.6fb28ae4.js",
    "revision": "65c72f8d23810b3b39a94d6baa18e898"
  },
  {
    "url": "assets/js/9.35938304.js",
    "revision": "bef63ce9f76aa819c7718a5bcea0f09b"
  },
  {
    "url": "assets/js/app.f24b559a.js",
    "revision": "4c323d917e50192f72f3d24edd2feffa"
  },
  {
    "url": "bg.png",
    "revision": "5e300e1f36978df477715d45e9dddf16"
  },
  {
    "url": "cropped-fav-192x192.png",
    "revision": "8bcd35c4c0beb7f60041660fae94b3e9"
  },
  {
    "url": "cropped-fav-32x32.png",
    "revision": "32bc79cb606a6fb62de2f4d1ef2b544e"
  },
  {
    "url": "glossary.html",
    "revision": "db1fa20b3e06648d9937d49af022a49a"
  },
  {
    "url": "hero.png",
    "revision": "7d464de30a65b371e920e6b549a9b860"
  },
  {
    "url": "i1.png",
    "revision": "6e899178b17c87904e222713d7259145"
  },
  {
    "url": "i2.png",
    "revision": "93fb9db3cb434c06c2b25ccf05d59c37"
  },
  {
    "url": "i3.png",
    "revision": "e7bd8241265445f9208ac83dc01666b4"
  },
  {
    "url": "i4.png",
    "revision": "6ebe2282b27b3cb33ddae89b2c612f97"
  },
  {
    "url": "i5.png",
    "revision": "760e7b76c92fd96972dbe9e01d4df1f7"
  },
  {
    "url": "i6.png",
    "revision": "b19ff792b869f5283d1e401f512e4146"
  },
  {
    "url": "index.html",
    "revision": "657816e89a083d27d1cebf2f4e0eb2f5"
  },
  {
    "url": "IntelliJPlugin.html",
    "revision": "4559aa33749ebdbfe2f0000ab27cbb0d"
  },
  {
    "url": "logo-dark.png",
    "revision": "8e1257edb3c9d94e1fe2b0c8005460b0"
  },
  {
    "url": "logo.png",
    "revision": "ff5aa24891fcc8c65199325c00bc4ebe"
  },
  {
    "url": "translator.html",
    "revision": "fb7cca02625452db7b718f961ee85453"
  },
  {
    "url": "user.html",
    "revision": "4c4cb0a3582e43ca2387dfe5d3d6fd42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
