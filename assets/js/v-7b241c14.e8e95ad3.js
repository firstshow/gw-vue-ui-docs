(self.webpackChunkgw_vue_ui=self.webpackChunkgw_vue_ui||[]).push([[122],{1596:(t,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>a});const a={key:"v-7b241c14",path:"/vue-doc/components/imgClipping.html",title:"ImgClipping",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用指南",slug:"使用指南",children:[]},{level:2,title:"代码演示",slug:"代码演示",children:[{level:3,title:"基本用法",slug:"基本用法",children:[]}]},{level:2,title:"API",slug:"api",children:[]},{level:2,title:"Props",slug:"props",children:[]},{level:2,title:"Slots",slug:"slots",children:[]},{level:2,title:"Events",slug:"events",children:[]}],filePathRelative:"vue-doc/components/imgClipping.md",git:{updatedTime:1616566555e3,contributors:[{name:"WFSHAO",email:"wfshao@shaowenfendeMacBook-Pro.local",commits:1}]}}},448:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a=(0,s(6252).uE)('<h1 id="imgclipping"><a class="header-anchor" href="#imgclipping">#</a> ImgClipping</h1><h2 id="使用指南"><a class="header-anchor" href="#使用指南">#</a> 使用指南</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageClipping <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gw-vue-ui&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    gwImageClipping<span class="token operator">:</span> ImageClipping\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="代码演示"><a class="header-anchor" href="#代码演示">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法">#</a> 基本用法</h3><h2 id="api"><a class="header-anchor" href="#api">#</a> API</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageClipping <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gw-vue-ui&#39;</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n<span class="token operator">&lt;</span>image<span class="token operator">-</span>clipping <span class="token operator">:</span>imgUrl<span class="token operator">=</span><span class="token string">&quot;imgUrl&quot;</span> @confirmAction<span class="token operator">=</span><span class="token string">&quot;confirmAction&quot;</span> @cancelAction<span class="token operator">=</span><span class="token string">&quot;cancelAction&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>image<span class="token operator">-</span>clipping<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="props"><a class="header-anchor" href="#props">#</a> Props</h2><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">值</th><th style="text-align:left;">必填</th></tr></thead><tbody><tr><td style="text-align:left;">imgSrc</td><td style="text-align:left;">图片链接</td><td style="text-align:left;">String</td><td style="text-align:left;">默认 空</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">cropWidth</td><td style="text-align:left;">剪裁框的宽度</td><td style="text-align:left;">Number</td><td style="text-align:left;">默认200</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">cropHeight</td><td style="text-align:left;">剪裁框的高度</td><td style="text-align:left;">Number</td><td style="text-align:left;">默认200</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">confirmText</td><td style="text-align:left;">确定文案</td><td style="text-align:left;">String</td><td style="text-align:left;">默认确定</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">cancelText</td><td style="text-align:left;">取消文案</td><td style="text-align:left;">String</td><td style="text-align:left;">默认取消</td><td style="text-align:left;">否</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots">#</a> Slots</h2><table><thead><tr><th style="text-align:left;">插槽名</th><th style="text-align:left;">说明</th></tr></thead></table><h2 id="events"><a class="header-anchor" href="#events">#</a> Events</h2><table><thead><tr><th style="text-align:left;">event</th><th style="text-align:left;">说明</th><th style="text-align:left;">返回值</th></tr></thead><tbody><tr><td style="text-align:left;">confirmAction</td><td style="text-align:left;">确定操作</td><td style="text-align:left;">data</td></tr><tr><td style="text-align:left;">cancelAction</td><td style="text-align:left;">取消操作</td><td style="text-align:left;"></td></tr></tbody></table>',13),n={render:function(t,e){return a}}}}]);