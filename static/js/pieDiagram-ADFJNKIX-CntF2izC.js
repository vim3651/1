import{t as e}from"./ordinal-FWbvqqRY.js";import{t}from"./arc-DAC9NAdl.js";import{Cc as n,Ic as r,Is as i,Kc as a,Nc as o,Ns as s,Pc as c,Po as l,Xs as u,Zs as d,bc as f,gc as p,ko as m,pc as h,qc as g,vc as _,wc as v,xc as y}from"./index-hvLbsAjx.js";import"./chunk-FPAJGGOC-BH-bhSVy.js";import"./chunk-O7ZBX7Z2-BGmFs3Td.js";import"./chunk-S6J4BHB3-8H7rg1mZ.js";import"./chunk-LBM3YZW2-D-2XqYXb.js";import"./chunk-76Q3JFCE-XLWZz6AI.js";import"./chunk-T53DSG4Q-DZCflQDY.js";import"./chunk-LHMN2FUI-B2TWDg4h.js";import"./chunk-FWNWRKHM-D9qzxtQM.js";import{t as b}from"./chunk-4BX2VUAB-CoKP4BQO.js";import{t as x}from"./mermaid-parser.core-EAfRNh3J.js";function S(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function C(e){return e}function w(){var e=C,t=S,n=null,r=d(0),a=d(u),o=d(0);function s(s){var c,l=(s=i(s)).length,d,f,p=0,m=Array(l),h=Array(l),g=+r.apply(this,arguments),_=Math.min(u,Math.max(-u,a.apply(this,arguments)-g)),v,y=Math.min(Math.abs(_)/l,o.apply(this,arguments)),b=y*(_<0?-1:1),x;for(c=0;c<l;++c)(x=h[m[c]=c]=+e(s[c],c,s))>0&&(p+=x);for(t==null?n!=null&&m.sort(function(e,t){return n(s[e],s[t])}):m.sort(function(e,n){return t(h[e],h[n])}),c=0,f=p?(_-l*b)/p:0;c<l;++c,g=v)d=m[c],x=h[d],v=g+(x>0?x*f:0)+b,h[d]={data:s[d],index:c,value:x,startAngle:g,endAngle:v,padAngle:y};return h}return s.value=function(t){return arguments.length?(e=typeof t==`function`?t:d(+t),s):e},s.sortValues=function(e){return arguments.length?(t=e,n=null,s):t},s.sort=function(e){return arguments.length?(n=e,t=null,s):n},s.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:d(+e),s):r},s.endAngle=function(e){return arguments.length?(a=typeof e==`function`?e:d(+e),s):a},s.padAngle=function(e){return arguments.length?(o=typeof e==`function`?e:d(+e),s):o},s}var T=_.pie,E={sections:new Map,showData:!1,config:T},D=E.sections,O=E.showData,k=structuredClone(T),A={getConfig:a(()=>structuredClone(k),`getConfig`),clear:a(()=>{D=new Map,O=E.showData,h()},`clear`),setDiagramTitle:r,getDiagramTitle:v,setAccTitle:c,getAccTitle:y,setAccDescription:o,getAccDescription:f,addSection:a(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);D.has(e)||(D.set(e,t),g.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:a(()=>D,`getSections`),setShowData:a(e=>{O=e},`setShowData`),getShowData:a(()=>O,`getShowData`)},j=a((e,t)=>{b(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},`populateDb`),M={parse:a(async e=>{let t=await x(`pie`,e);g.debug(t),j(t,A)},`parse`)},N=a(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),P=a(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),n=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return w().value(e=>e.value)(n)},`createPieArcs`),F={parser:M,db:A,renderer:{draw:a((r,i,a,o)=>{g.debug(`rendering pie chart
`+r);let c=o.db,u=n(),d=m(c.getConfig(),u.pie),f=s(i),h=f.append(`g`);h.attr(`transform`,`translate(225,225)`);let{themeVariables:_}=u,[v]=l(_.pieOuterStrokeWidth);v??=2;let y=d.textPosition,b=t().innerRadius(0).outerRadius(185),x=t().innerRadius(185*y).outerRadius(185*y);h.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+v/2).attr(`class`,`pieOuterCircle`);let S=c.getSections(),C=P(S),w=[_.pie1,_.pie2,_.pie3,_.pie4,_.pie5,_.pie6,_.pie7,_.pie8,_.pie9,_.pie10,_.pie11,_.pie12],T=0;S.forEach(e=>{T+=e});let E=C.filter(e=>(e.data.value/T*100).toFixed(0)!==`0`),D=e(w);h.selectAll(`mySlices`).data(E).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>D(e.data.label)).attr(`class`,`pieCircle`),h.selectAll(`mySlices`).data(E).enter().append(`text`).text(e=>(e.data.value/T*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),h.append(`text`).text(c.getDiagramTitle()).attr(`x`,0).attr(`y`,-400/2).attr(`class`,`pieTitleText`);let O=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=h.selectAll(`.legend`).data(O).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*O.length/2;return`translate(216,`+(t*22-n)+`)`});k.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,e=>D(e.label)).style(`stroke`,e=>D(e.label)),k.append(`text`).attr(`x`,22).attr(`y`,14).text(e=>c.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));f.attr(`viewBox`,`0 0 ${A} 450`),p(f,450,A,d.useMaxWidth)},`draw`)},styles:N};export{F as diagram};