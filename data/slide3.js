(function(){var loadHandler=window['sl_{9593BF53-2296-4CCF-951D-FEEF1425466E}'];loadHandler&&loadHandler(2, '<div id="spr0_2b1e855"><div id="spr1_2b1e855" class="kern slide"><img id="img0_2b1e855" src="data/img1.png" width="1280px" height="720px" alt="" style="left:0px;top:0px;"/></div><div id="spr2_2b1e855" class="kern slide"><div id="spr3_2b1e855" style="left:88px;top:38.333px;"><div style="width:0px;"><span id="txt0_2b1e855" data-width="779.000000" style="left:138.56px;top:3.795px;">The Mule Runtime, E.S.B., and Event Lifecycle</span></div></div><div id="svg65_2b1e855" style="left:26.265px;top:129.938px;"><svg width="125" height="130" viewBox="-2 -2 125 130"><ellipse fill="#4472c4" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="60.026" cy="62.84" rx="59.36" ry="62.173"/></svg></div><div id="spr4_2b1e855" style="left:28.265px;top:131.938px;"><div style="width:0px;"><span id="txt1_2b1e855" data-width="57.312500" style="left:31.343px;top:41.616px;">Message</span></div><div style="width:0px;"><span id="txt2_2b1e855" data-width="44.500000" style="left:37.896px;top:60.816px;">Source</span></div></div><div id="svg66_2b1e855" style="left:116.801px;top:15.541px;"><svg width="1160" height="754" viewBox="-95.573 -95.573 1160 754"><path fill="#4472c4" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,94.24 a93.573,93.573 0 0,1 93.573,-93.573 h779.977 a93.573,93.573 0 0,1 93.573,93.573 v374.282 a93.573,93.573 0 0,1 -93.573,93.573 h-779.977 a93.573,93.573 0 0,1 -93.573,-93.573 Z" fill-rule="evenodd"/></svg></div><div id="svg67_2b1e855" style="left:265.552px;top:612.704px;"><svg width="282" height="44" viewBox="-6.712 -6.712 282 44"><path fill="#8faadc" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,5.379 a4.712,4.712 0 0,1 4.712,-4.712 h256.822 a4.712,4.712 0 0,1 4.712,4.712 v18.849 a4.712,4.712 0 0,1 -4.712,4.712 h-256.822 a4.712,4.712 0 0,1 -4.712,-4.712 Z" fill-rule="evenodd"/></svg></div><div id="spr5_2b1e855" style="left:272.265px;top:619.416px;"><div style="width:0px;"><span id="txt3_2b1e855" data-width="180.984375" style="left:43.997px;top:-2.632px;">JRE System Library</span></div></div><div id="spr6_2b1e855" style="left:524.943px;top:673.209px;"><div style="width:0px;"><span id="txt4_2b1e855" data-width="352.089844" style="left:9.6px;top:1.764px;">Java JVM running the Mule Runtime</span></div></div><div id="svg68_2b1e855" style="left:554.977px;top:612.704px;"><svg width="282" height="44" viewBox="-6.712 -6.712 282 44"><path fill="#8faadc" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,5.379 a4.712,4.712 0 0,1 4.712,-4.712 h256.822 a4.712,4.712 0 0,1 4.712,4.712 v18.849 a4.712,4.712 0 0,1 -4.712,4.712 h-256.822 a4.712,4.712 0 0,1 -4.712,-4.712 Z" fill-rule="evenodd"/></svg></div><div id="spr7_2b1e855" style="left:561.689px;top:619.416px;"><div style="width:0px;"><span id="txt5_2b1e855" data-width="118.488281" style="left:74.463px;top:-2.632px;">Mule Server</span></div></div><div id="svg69_2b1e855" style="left:844.402px;top:612.704px;"><svg width="282" height="44" viewBox="-6.712 -6.712 282 44"><path fill="#8faadc" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,5.379 a4.712,4.712 0 0,1 4.712,-4.712 h256.822 a4.712,4.712 0 0,1 4.712,4.712 v18.849 a4.712,4.712 0 0,1 -4.712,4.712 h-256.822 a4.712,4.712 0 0,1 -4.712,-4.712 Z" fill-rule="evenodd"/></svg></div><div id="spr8_2b1e855" style="left:851.114px;top:619.416px;"><div style="width:0px;"><span id="txt6_2b1e855" data-width="61.417969" style="left:103.04px;top:-2.632px;">Spring</span></div></div><div id="svg70_2b1e855" style="left:263.525px;top:525.353px;"><svg width="864" height="60" viewBox="-8.74 -8.74 864 60"><path fill="#2f5597" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,7.407 a6.74,6.74 0 0,1 6.74,-6.74 h831.616 a6.74,6.74 0 0,1 6.74,6.74 v26.959 a6.74,6.74 0 0,1 -6.74,6.74 h-831.616 a6.74,6.74 0 0,1 -6.74,-6.74 Z" fill-rule="evenodd"/></svg></div><div id="spr9_2b1e855" style="left:272.265px;top:534.093px;"><div style="width:0px;"><span id="txt7_2b1e855" data-width="450.035156" style="left:198.368px;top:3.45px;">E.S.B. – implemented with underlying libraries</span></div></div><div id="spr10_2b1e855" style="left:605.716px;top:109.654px;"><div style="width:0px;"><span id="txt8_2b1e855" data-width="138.914063" style="left:9.6px;top:1.764px;">Mule Runtime</span></div></div><div id="svg9_2b1e855" style="left:90.174px;top:560.627px;"><svg width="309" height="188" viewBox="-0.142 -2 309 188"><g fill="none"><g transform="translate(3.826439,0.666667)"><path stroke="#ed7d31" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M301.756,0 C246.179,-0 191.667,9.395 144.26,27.144 C56.624,59.956 2.314,117.929 0.072,180.602 L0.128,177.497"/><g fill="#ed7d31" stroke="none" transform="translate(-3.82644,176.632736)"><path transform="matrix(-0.017879,0.99984,-0.99984,-0.017879,3.898662,3.969086)" d="M4.039,0 L-3.899,3.969 V-3.969 Z"/></g></g></g></svg></div><div id="spr11_2b1e855" style="left:262.347px;top:144.977px;"><div id="svg71_2b1e855" style="left:-8.74px;top:-8.74px;"><svg width="874" height="60" viewBox="-8.74 -8.74 874 60"><path fill="#bf9000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,7.407 a6.74,6.74 0 0,1 6.74,-6.74 h841.534 a6.74,6.74 0 0,1 6.74,6.74 v26.959 a6.74,6.74 0 0,1 -6.74,6.74 h-841.534 a6.74,6.74 0 0,1 -6.74,-6.74 Z" fill-rule="evenodd"/></svg></div><div id="spr12_2b1e855"><div style="width:0px;"><span id="txt9_2b1e855" data-width="101.708336" style="left:377.424px;top:5.387px;">Mule App A</span></div></div><div id="svg72_2b1e855" style="left:2.568px;top:-3.644px;"><svg width="149" height="50" viewBox="-7.466 -7.466 149 50"><path fill="#c55a11" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,6.133 a5.466,5.466 0 0,1 5.466,-5.466 h120.866 a5.466,5.466 0 0,1 5.466,5.466 v21.863 a5.466,5.466 0 0,1 -5.466,5.466 h-120.866 a5.466,5.466 0 0,1 -5.466,-5.466 Z" fill-rule="evenodd"/></svg></div><div id="spr13_2b1e855" style="left:10.034px;top:3.822px;"><div style="width:0px;"><span id="txt10_2b1e855" data-width="77.824219" style="left:11.868px;top:4.032px;">Flow A1</span></div></div><div id="svg73_2b1e855" style="left:144.4px;top:-3.644px;"><svg width="149" height="50" viewBox="-7.466 -7.466 149 50"><path fill="#c55a11" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,6.133 a5.466,5.466 0 0,1 5.466,-5.466 h120.866 a5.466,5.466 0 0,1 5.466,5.466 v21.863 a5.466,5.466 0 0,1 -5.466,5.466 h-120.866 a5.466,5.466 0 0,1 -5.466,-5.466 Z" fill-rule="evenodd"/></svg></div><div id="spr14_2b1e855" style="left:151.866px;top:3.822px;"><div style="width:0px;"><span id="txt11_2b1e855" data-width="77.824219" style="left:11.868px;top:4.032px;">Flow A2</span></div></div><div id="svg74_2b1e855" style="left:515.474px;top:-3.644px;"><svg width="149" height="50" viewBox="-7.466 -7.466 149 50"><path fill="#c55a11" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,6.133 a5.466,5.466 0 0,1 5.466,-5.466 h120.866 a5.466,5.466 0 0,1 5.466,5.466 v21.863 a5.466,5.466 0 0,1 -5.466,5.466 h-120.866 a5.466,5.466 0 0,1 -5.466,-5.466 Z" fill-rule="evenodd"/></svg></div><div id="spr15_2b1e855" style="left:522.94px;top:3.822px;"><div style="width:0px;"><span id="txt12_2b1e855" data-width="71.167969" style="left:11.868px;top:4.032px;">Flow Ai</span></div></div><div id="svg75_2b1e855" style="left:674.117px;top:-3.644px;"><svg width="149" height="50" viewBox="-7.466 -7.466 149 50"><path fill="#c55a11" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,6.133 a5.466,5.466 0 0,1 5.466,-5.466 h120.866 a5.466,5.466 0 0,1 5.466,5.466 v21.863 a5.466,5.466 0 0,1 -5.466,5.466 h-120.866 a5.466,5.466 0 0,1 -5.466,-5.466 Z" fill-rule="evenodd"/></svg></div><div id="spr16_2b1e855" style="left:681.583px;top:3.822px;"><div style="width:0px;"><span id="txt13_2b1e855" data-width="78.269531" style="left:11.868px;top:4.032px;">Flow An</span></div></div></div><div id="svg76_2b1e855" style="left:203.901px;top:133.008px;"><svg width="974" height="457" viewBox="-58.446 -58.446 974 457"><path fill="#ffd966" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,57.113 a56.446,56.446 0 0,1 56.446,-56.446 h742.121 a56.446,56.446 0 0,1 56.446,56.446 v225.778 a56.446,56.446 0 0,1 -56.446,56.446 h-742.121 a56.446,56.446 0 0,1 -56.446,-56.446 Z" fill-rule="evenodd"/></svg></div><div id="spr17_2b1e855" style="left:262.347px;top:191.454px;"><div style="width:0px;"><span id="txt14_2b1e855" data-width="100.968750" style="left:377.757px;top:14.501px;">Mule App B</span></div></div><div id="svg77_2b1e855" style="left:461.648px;top:289.491px;"><svg width="577" height="190" viewBox="-25.066 -25.066 577 190"><path fill="#c55a11" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,23.733 a23.066,23.066 0 0,1 23.066,-23.066 h479.106 a23.066,23.066 0 0,1 23.066,23.066 v92.262 a23.066,23.066 0 0,1 -23.066,23.066 h-479.106 a23.066,23.066 0 0,1 -23.066,-23.066 Z" fill-rule="evenodd"/></svg></div><div id="spr18_2b1e855" style="left:486.714px;top:314.557px;"><div style="width:0px;"><span id="txt15_2b1e855" data-width="46.347656" style="left:17.023px;top:9.187px;">Flow</span></div><div style="width:0px;"><span id="txt16_2b1e855" data-width="25.218750" style="left:17.023px;top:37.987px;">B1</span></div></div><div id="svg78_2b1e855" style="left:586.683px;top:322.477px;"><svg width="96" height="84" viewBox="-2 -2 96 84"><ellipse fill="#4472c4" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="45.617" cy="39.79" rx="44.95" ry="39.123"/></svg></div><div id="spr19_2b1e855" style="left:588.683px;top:324.477px;"><div style="width:0px;"><span id="txt17_2b1e855" class="nokern" data-width="33.701824" style="left:28.784px;top:20.335px;">Event</span></div><div style="width:0px;"><span id="txt18_2b1e855" class="nokern" data-width="40.791668" style="left:25.284px;top:37.935px;">Source</span></div></div><div id="svg79_2b1e855" style="left:710.765px;top:322.477px;"><svg width="96" height="84" viewBox="-2 -2 96 84"><ellipse fill="#4472c4" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="45.617" cy="39.79" rx="44.95" ry="39.123"/></svg></div><div id="spr20_2b1e855" style="left:712.765px;top:324.477px;"><div style="width:0px;"><span id="txt19_2b1e855" class="nokern" data-width="24.510418" style="left:33.364px;top:25.641px;">Event</span></div><div style="width:0px;"><span id="txt20_2b1e855" class="nokern" data-width="42.359375" style="left:24.45px;top:38.441px;">Processor</span></div><div style="width:0px;"><span id="txt21_2b1e855" class="nokern" style="left:42.95px;top:51.241px;">0</span></div></div><div id="svg80_2b1e855" style="left:876.88px;top:322.477px;"><svg width="96" height="84" viewBox="-2 -2 96 84"><ellipse fill="#4472c4" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="45.617" cy="39.79" rx="44.95" ry="39.123"/></svg></div><div id="spr21_2b1e855" style="left:878.88px;top:324.477px;"><div style="width:0px;"><span id="txt22_2b1e855" class="nokern" data-width="24.510418" style="left:33.364px;top:25.641px;">Event</span></div><div style="width:0px;"><span id="txt23_2b1e855" class="nokern" data-width="42.359375" style="left:24.45px;top:38.441px;">Processor</span></div><div style="width:0px;"><span id="txt24_2b1e855" class="nokern" style="left:42.784px;top:51.241px;">n</span></div></div><div id="spr22_2b1e855" style="left:819.877px;top:344.88px;"><div style="width:0px;"><span id="txt25_2b1e855" style="left:9.6px;top:1.764px;">…</span></div></div><div id="svg19_2b1e855" style="left:297.015px;top:360.298px;"><svg width="293" height="200" viewBox="-2 -0.074 293 200"><g fill="none"><g transform="translate(0.666667,3.895264)"><path stroke="#ed7d31" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0,193.344 C28.618,193.344 56.604,187.682 80.406,177.078 C120.622,159.162 144.834,128.945 144.834,96.672 C144.834,64.399 169.047,34.182 209.263,16.266 C231.949,6.158 258.437,0.542 285.649,0.037 L282.525,0.066"/><g fill="#ed7d31" stroke="none" transform="translate(281.694336,-3.895276)"><path transform="matrix(0.999957,-0.009265,0.009265,0.999957,3.95459,3.932529)" d="M4.02,0 L-3.918,3.969 V-3.969 Z"/></g></g></g></svg></div><div id="spr23_2b1e855" style="left:575.482px;top:427.059px;"><div style="width:0px;"><span id="txt26_2b1e855" class="nokern" data-width="33.567707" style="left:9.6px;top:3.113px;">Free E</span></div></div><div id="svg29_2b1e855" style="left:619.438px;top:279.45px;"><svg width="62" height="23" viewBox="-2.271 -0.945 62 23"><g fill="none"><g transform="translate(1.532145,0.190735)"><path stroke="#5b9bd5" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M54.676,19.002 C48.566,19.002 42.499,18.646 36.727,17.949 C18.391,15.735 5.046,10.319 1.161,3.888 L2.044,6.846"/><g fill="#5b9bd5" stroke="none" transform="translate(-1.532152,-0.190725)"><path transform="matrix(-0.286087,-0.958204,0.958204,-0.286087,2.692885,4.078418)" d="M4.057,0 L-3.881,3.969 V-3.969 Z"/></g></g></g></svg></div><div id="svg81_2b1e855" style="left:11.438px;top:423.864px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr24_2b1e855" style="left:13.438px;top:425.864px;"><div style="width:0px;"><span id="txt27_2b1e855" style="left:15.186px;top:1.95px;">1</span></div></div><div id="svg82_2b1e855" style="left:517.224px;top:461.303px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr25_2b1e855" style="left:519.224px;top:463.303px;"><div style="width:0px;"><span id="txt28_2b1e855" style="left:15.186px;top:1.95px;">2</span></div></div><div id="svg83_2b1e855" style="left:567.882px;top:224.888px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr26_2b1e855" style="left:569.882px;top:226.888px;"><div style="width:0px;"><span id="txt29_2b1e855" style="left:15.186px;top:1.95px;">3</span></div></div><div id="svg84_2b1e855" style="left:802.411px;top:318.197px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr27_2b1e855" style="left:804.411px;top:320.197px;"><div style="width:0px;"><span id="txt30_2b1e855" style="left:15.186px;top:1.95px;">4</span></div></div><div id="svg85_2b1e855" style="left:958.934px;top:269.431px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr28_2b1e855" style="left:960.934px;top:271.431px;"><div style="width:0px;"><span id="txt31_2b1e855" style="left:15.186px;top:1.95px;">5</span></div></div><div id="svg86_2b1e855" style="left:325.975px;top:574.953px;"><svg width="772" height="44" viewBox="-6.712 -6.712 772 44"><path fill="#bdd7ee" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,5.379 a4.712,4.712 0 0,1 4.712,-4.712 h747.737 a4.712,4.712 0 0,1 4.712,4.712 v18.849 a4.712,4.712 0 0,1 -4.712,4.712 h-747.737 a4.712,4.712 0 0,1 -4.712,-4.712 Z" fill-rule="evenodd"/></svg></div><div id="spr29_2b1e855" style="left:332.688px;top:581.666px;"><div style="width:0px;"><span id="txt32_2b1e855" data-width="681.703125" style="left:40.328px;top:-2.632px;">Java Beans Added To The Project/App E.G. HTTP / JMS / DB / core etc.</span></div></div><div id="svg87_2b1e855" style="left:393.354px;top:437.181px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr30_2b1e855" style="left:395.354px;top:439.181px;"><div style="width:0px;"><span id="txt33_2b1e855" style="left:15.186px;top:1.95px;">6</span></div></div><div id="svg89_2b1e855" style="left:68.546px;top:228.239px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#ffffff" stroke="#c6e0b3" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div><div id="svg91_2b1e855" style="left:272.956px;top:542.074px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#ffffff" stroke="#c6e0b3" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div><div id="spr31_2b1e855" style="left:620.851px;top:252.556px;"><div id="svg92_2b1e855" style="left:-2px;top:-2px;"><svg width="54" height="63" viewBox="-2 -2 54 63"><path fill="#ed7d31" stroke="#ae5a21" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,0.667 h47.846 v57.408 h-47.846 Z"/></svg></div><div id="spr32_2b1e855"><div style="width:0px;"><span id="txt34_2b1e855" class="nokern" data-width="40.162758" style="left:4.507px;top:-1.02px;">Event E</span></div></div><div id="svg94_2b1e855" style="left:7.494px;top:13.172px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#f596ff" stroke="#7030a0" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div></div><div id="spr33_2b1e855" style="left:734.088px;top:254.181px;"><div id="svg95_2b1e855" style="left:-2px;top:-2px;"><svg width="54" height="63" viewBox="-2 -2 54 63"><path fill="#ed7d31" stroke="#ae5a21" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,0.667 h47.846 v57.408 h-47.846 Z"/></svg></div><div id="spr34_2b1e855"><div style="width:0px;"><span id="txt35_2b1e855" class="nokern" data-width="40.162758" style="left:4.507px;top:-1.02px;">Event E</span></div></div><div id="svg97_2b1e855" style="left:3.649px;top:14.407px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#f596ff" stroke="#7030a0" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div></div><div id="spr35_2b1e855" style="left:897.727px;top:250.947px;"><div id="svg98_2b1e855" style="left:-2px;top:-2px;"><svg width="54" height="63" viewBox="-2 -2 54 63"><path fill="#ed7d31" stroke="#ae5a21" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M0.667,0.667 h47.846 v57.408 h-47.846 Z"/></svg></div><div id="spr36_2b1e855"><div style="width:0px;"><span id="txt36_2b1e855" class="nokern" data-width="40.162758" style="left:4.507px;top:-1.02px;">Event E</span></div></div><div id="svg100_2b1e855" style="left:4.708px;top:18.307px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#f596ff" stroke="#7030a0" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div></div><div id="spr37_2b1e855" style="left:439.425px;top:349.325px;"><div style="width:0px;"><span id="txt37_2b1e855" style="left:9.6px;top:0.86px;">⦚</span></div></div><div id="svg40_2b1e855" style="left:624.313px;top:307.876px;"><svg width="313" height="140" viewBox="-8.157 -2 313 140"><g fill="none"><g transform="translate(0,0.666667)"><path stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" d="M291.019,0 C291.212,0.777 292.902,4.442 292.757,20.386 C292.613,36.331 301.224,93.666 259.367,111.393 C217.51,129.12 88.721,133.883 41.615,126.75 C-5.491,119.617 6.647,77.069 0,67.334"/></g></g></svg></div><div id="svg48_2b1e855" style="left:754.413px;top:296.667px;"><svg width="8" height="29" viewBox="-0 -0 8 29"><g fill="none"><g transform="translate(3.968994,0)"><g fill="#5b9bd5" stroke="none" transform="translate(-3.969001,-0)"><path stroke="#5b9bd5" stroke-width="1.333" stroke-linecap="butt" transform="translate(3.969001,0)" d="M0,7.144 V21.333"/><path transform="matrix(-0,1,-1,-0,3.969001,0)" d="M0,0 L7.938,-3.969 V3.969 Z M28.477,0 L20.539,3.969 V-3.969 Z"/></g></g></g></svg></div><div id="svg56_2b1e855" style="left:920.528px;top:296.06px;"><svg width="8" height="29" viewBox="-0 -0 8 29"><g fill="none"><g transform="translate(3.968994,0)"><g fill="#5b9bd5" stroke="none" transform="translate(-3.969001,-0)"><path stroke="#5b9bd5" stroke-width="1.333" stroke-linecap="butt" transform="translate(3.969001,0)" d="M0,7.144 V21.333"/><path transform="matrix(-0,1,-1,-0,3.969001,0)" d="M0,0 L7.938,-3.969 V3.969 Z M28.477,0 L20.539,3.969 V-3.969 Z"/></g></g></g></svg></div><div id="svg102_2b1e855" style="left:613.586px;top:346.186px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#ffffff" stroke="#c6e0b3" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div><div id="svg103_2b1e855" style="left:596.029px;top:456.281px;"><svg width="47" height="43" viewBox="-2 -2 47 43"><ellipse fill="#000000" stroke="#2f528f" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" cx="21.269" cy="19.386" rx="20.603" ry="18.72"/></svg></div><div id="spr38_2b1e855" style="left:598.029px;top:458.281px;"><div style="width:0px;"><span id="txt38_2b1e855" style="left:15.186px;top:1.95px;">7</span></div></div><div id="spr39_2b1e855" style="left:836.941px;top:677.802px;"><div style="width:0px;"><span id="txt39_2b1e855" data-width="255.460938" style="left:88.217px;top:7.543px;">(c) 2021, The Computer Classroom, Inc.</span></div></div><div id="svg64_2b1e855" style="left:128.155px;top:234.806px;"><svg width="142" height="82" viewBox="-1.401 -2.613 142 82"><g fill="none"><g transform="translate(0.708781,1.321981)"><g fill="#4472c4" stroke="none" transform="translate(-0.708783,-1.321975)"><path stroke="#4472c4" stroke-width="3" stroke-linecap="butt" transform="translate(0.708783,1.321975)" d="M7.083,3.798 L130.032,69.717"/><path transform="matrix(0.881319,0.472522,-0.472522,0.881319,0.708783,1.321978)" d="M0,0 L8.93,-4.465 V4.465 Z M155.58,0 L146.65,4.465 V-4.465 Z"/></g></g></g></svg></div><div id="svg105_2b1e855" style="left:576.897px;top:343.619px;"><svg width="38" height="32" viewBox="-2 -2 38 32"><g fill="none"><path fill="#ffffff" stroke="#c6e0b3" stroke-width="1.333" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" transform="translate(0.666667,0.666667)" d="M0,25.741 L16.039,0 L32.078,25.741 Z"/></g></svg></div></div></div>', '{"s":[]}');})();