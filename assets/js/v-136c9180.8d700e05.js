(self.webpackChunkgw_vue_ui=self.webpackChunkgw_vue_ui||[]).push([[792],{9578:(a,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>s});const s={key:"v-136c9180",path:"/vue-doc/components/image.html",title:"Image 图片",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"介绍",slug:"介绍",children:[]},{level:3,title:"引入",slug:"引入",children:[]},{level:2,title:"代码演示",slug:"代码演示",children:[{level:3,title:"基础用法",slug:"基础用法",children:[]},{level:3,title:"填充模式",slug:"填充模式",children:[]},{level:3,title:"圆形图片",slug:"圆形图片",children:[]},{level:3,title:"加载中提示",slug:"加载中提示",children:[]},{level:3,title:"加载失败提示",slug:"加载失败提示",children:[]}]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"图片填充模式 \b",slug:"图片填充模式",children:[]},{level:3,title:"Events",slug:"events",children:[]},{level:3,title:"Slots",slug:"slots",children:[]},{level:3,title:"样式变量",slug:"样式变量",children:[]}]},{level:2,title:"常见问题",slug:"常见问题",children:[{level:3,title:"如何引用本地图片？",slug:"如何引用本地图片",children:[]}]}],filePathRelative:"vue-doc/components/image.md",git:{updatedTime:1616566555e3,contributors:[{name:"WFSHAO",email:"wfshao@shaowenfendeMacBook-Pro.local",commits:1}]}}},1398:(a,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>q});var s=t(6252);const e=(0,s.uE)('<h1 id="image-图片" tabindex="-1"><a class="header-anchor" href="#image-图片" aria-hidden="true">#</a> Image 图片</h1><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。</p><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Image <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gw-vue-ui&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    GwImage<span class="token operator">:</span> Image\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3><p>基础用法与原生 <code>img</code> 标签一致，可以设置 <code>src</code>、<code>width</code>、<code>height</code>、<code>alt</code> 等原生属性。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="填充模式" tabindex="-1"><a class="header-anchor" href="#填充模式" aria-hidden="true">#</a> 填充模式</h3><p>通过 <code>fit</code> 属性可以设置图片填充模式，可选值见下方表格。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span>\n  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10rem<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10rem<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">fit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contain<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="圆形图片" tabindex="-1"><a class="header-anchor" href="#圆形图片" aria-hidden="true">#</a> 圆形图片</h3><p>通过 <code>round</code> 属性可以设置图片变圆，注意当图片宽高不相等且 <code>fit</code> 为 <code>contain</code> 或 <code>scale-down</code> 时，将无法填充一个完整的圆形。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span>\n  <span class="token attr-name">round</span>\n  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10rem<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10rem<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="加载中提示" tabindex="-1"><a class="header-anchor" href="#加载中提示" aria-hidden="true">#</a> 加载中提示</h3><p><code>GwImage</code> 组件提供了默认的加载中提示，支持通过 <code>loading</code> 插槽自定义内容。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>loading</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-loading</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>spinner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gw-image</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="加载失败提示" tabindex="-1"><a class="header-anchor" href="#加载失败提示" aria-hidden="true">#</a> 加载失败提示</h3><p><code>GwImage</code> 组件提供了默认的加载失败提示，支持通过 <code>error</code> 插槽自定义内容。</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://img.yzcdn.cn/vant/cat.jpeg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>error</span><span class="token punctuation">&gt;</span></span>加载失败<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>gw-image</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图片链接</td><td><em>string</em></td><td>-</td></tr><tr><td>fit</td><td>图片填充模式</td><td><em>string</em></td><td><code>fill</code></td></tr><tr><td>alt</td><td>替代文本</td><td><em>string</em></td><td>-</td></tr><tr><td>width</td><td>宽度，默认单位为<code>px</code></td><td><em>number | string</em></td><td>-</td></tr><tr><td>height</td><td>高度，默认单位为<code>px</code></td><td><em>number | string</em></td><td>-</td></tr><tr><td>radius</td><td>圆角大小，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>show-error</td><td>是否展示图片加载失败提示</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-loading</td><td>是否展示图片加载中提示</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table><h3 id="图片填充模式" tabindex="-1"><a class="header-anchor" href="#图片填充模式" aria-hidden="true">#</a> 图片填充模式 \b</h3><table><thead><tr><th>名称</th><th>含义</th></tr></thead><tbody><tr><td>contain</td><td>保持宽高缩放图片，使图片的长边能完全显示出来</td></tr><tr><td>cover</td><td>保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边</td></tr><tr><td>fill</td><td>拉伸图片，使图片填满元素</td></tr><tr><td>none</td><td>保持图片原有尺寸</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>点击图片时触发</td><td><em>event: Event</em></td></tr><tr><td>load</td><td>图片加载完毕时触发</td><td>-</td></tr><tr><td>error</td><td>图片加载失败时触发</td><td>-</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义图片下方的内容</td></tr><tr><td>loading</td><td>自定义加载中的提示内容</td></tr><tr><td>error</td><td>自定义加载失败时的提示内容</td></tr></tbody></table><h3 id="样式变量" tabindex="-1"><a class="header-anchor" href="#样式变量" aria-hidden="true">#</a> 样式变量</h3><p>组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考: mixins/styles/var.scss</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>@image-placeholder-text-color</td><td><code>$gray-6</code></td><td>-</td></tr><tr><td>@image-placeholder-font-size</td><td><code>$font-size-md</code></td><td>-</td></tr><tr><td>@image-placeholder-background-color</td><td><code>$background-color</code></td><td>-</td></tr><tr><td>@image-loading-icon-size</td><td><code>32px</code></td><td>-</td></tr><tr><td>@image-loading-icon-color</td><td><code>$gray-4</code></td><td>-</td></tr><tr><td>@image-error-icon-size</td><td><code>32px</code></td><td>-</td></tr><tr><td>@image-error-icon-color</td><td><code>$gray-4</code></td><td>-</td></tr></tbody></table><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="如何引用本地图片" tabindex="-1"><a class="header-anchor" href="#如何引用本地图片" aria-hidden="true">#</a> 如何引用本地图片？</h3>',35),p=(0,s.Uk)("在 .vue 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 "),l=(0,s.Wm)("code",null,"require()",-1),o=(0,s.Uk)("，将图片 URL 转换为 webpack 模块请求，并结合 "),c={href:"https://github.com/webpack-contrib/file-loader",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("file-loader"),d=(0,s.Uk)(" 或者 "),u={href:"https://github.com/webpack-contrib/url-loader",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("url-loader"),h=(0,s.Uk)(" 进行处理。"),m=(0,s.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 错误写法 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./image.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!-- 正确写法 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>gw-image</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>require(<span class="token punctuation">&#39;</span>./image.png<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),k=(0,s.Uk)("对此更详细的解释可以参考 vue-loader 的"),g={href:"https://vue-loader.vuejs.org/zh/guide/asset-url.html",target:"_blank",rel:"noopener noreferrer"},b=(0,s.Uk)("处理资源路径"),v=(0,s.Uk)("章节。"),q={render:function(a,n){const t=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[e,(0,s.Wm)("p",null,[p,l,o,(0,s.Wm)("a",c,[r,(0,s.Wm)(t)]),d,(0,s.Wm)("a",u,[i,(0,s.Wm)(t)]),h]),m,(0,s.Wm)("blockquote",null,[(0,s.Wm)("p",null,[k,(0,s.Wm)("a",g,[b,(0,s.Wm)(t)]),v])])],64)}}}}]);