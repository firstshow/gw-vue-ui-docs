(self.webpackChunkgw_vue_ui=self.webpackChunkgw_vue_ui||[]).push([[313],{4065:(t,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>n});const n={key:"v-a69cd7f6",path:"/vue-doc/components/button.html",title:"Button",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"介绍",slug:"介绍",children:[]},{level:3,title:"引入",slug:"引入",children:[]},{level:2,title:"代码演示",slug:"代码演示",children:[{level:3,title:"基本用法",slug:"基本用法",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"Slots",slug:"slots",children:[]},{level:3,title:"Events",slug:"events",children:[]}]}],filePathRelative:"vue-doc/components/button.md",git:{updatedTime:1625626691e3,contributors:[{name:"WFSHAO",email:"wfshao@shaowenfendeMacBook-Pro.local",commits:3},{name:"zhangliping",email:"845333192@qq.com",commits:1},{name:"邵雯芬",email:"shaowenfang@126.com",commits:1}]}}},3556:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});const n=(0,a(6252).uE)('<h1 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> Button</h1><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>按钮组件</p><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gw-vue-ui&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    GwButton<span class="token operator">:</span> Button\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gw-vue-ui&#39;</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n<span class="token operator">&lt;</span>Button<span class="token operator">&gt;</span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:center;">值</th></tr></thead><tbody><tr><td style="text-align:left;">disabled</td><td style="text-align:left;">不可点击</td><td style="text-align:left;">Boolen</td><td style="text-align:center;">默认<code>false</code></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">大小</td><td style="text-align:left;">String</td><td style="text-align:center;"><code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code>，默认<code>normal</code></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">类型</td><td style="text-align:left;">String</td><td style="text-align:center;"><code>primary</code>、<code>ghost</code>、<code>default</code>, 默认<code>primary</code></td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">加载中</td><td style="text-align:left;">Boolen</td><td style="text-align:center;">默认<code>false</code></td></tr><tr><td style="text-align:left;">loading-type</td><td style="text-align:left;">加载中</td><td style="text-align:left;">Boolen</td><td style="text-align:center;">默认<code>false</code></td></tr><tr><td style="text-align:left;">loading-text</td><td style="text-align:left;">加载提示文字</td><td style="text-align:left;">String</td><td style="text-align:center;">默认<code>false</code></td></tr><tr><td style="text-align:left;">custom-style</td><td style="text-align:left;"></td><td style="text-align:left;">String</td><td style="text-align:center;">默认-</td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;">是否为圆形按钮</td><td style="text-align:left;">Boolen</td><td style="text-align:center;">默认<code>false</code></td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">左侧图标名称或图片链接</td><td style="text-align:left;">string</td><td style="text-align:center;">-</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th style="text-align:left;">插槽名</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">默认内容</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">图标</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th style="text-align:left;">event</th><th style="text-align:left;">说明</th><th style="text-align:left;">返回值</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">点击按钮，且状态不为禁用和加载中时触发</td><td style="text-align:left;">event</td></tr></tbody></table>',15),l={render:function(t,e){return n}}}}]);