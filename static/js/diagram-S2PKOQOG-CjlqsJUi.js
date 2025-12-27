import{Ic as e,Kc as t,Nc as n,Ns as r,Pc as i,Sc as a,bc as o,gc as s,ko as c,pc as l,qc as u,vc as d,wc as f,xc as p}from"./index-hvLbsAjx.js";import"./chunk-FPAJGGOC-BH-bhSVy.js";import"./chunk-O7ZBX7Z2-BGmFs3Td.js";import"./chunk-S6J4BHB3-8H7rg1mZ.js";import"./chunk-LBM3YZW2-D-2XqYXb.js";import"./chunk-76Q3JFCE-XLWZz6AI.js";import"./chunk-T53DSG4Q-DZCflQDY.js";import"./chunk-LHMN2FUI-B2TWDg4h.js";import"./chunk-FWNWRKHM-D9qzxtQM.js";import{t as m}from"./chunk-4BX2VUAB-CoKP4BQO.js";import{t as h}from"./mermaid-parser.core-EAfRNh3J.js";var g=d.packet,_=class{constructor(){this.packet=[],this.setAccTitle=i,this.getAccTitle=p,this.setDiagramTitle=e,this.getDiagramTitle=f,this.getAccDescription=o,this.setAccDescription=n}static{t(this,`PacketDB`)}getConfig(){let e=c({...g,...a().packet});return e.showBits&&(e.paddingY+=10),e}getPacket(){return this.packet}pushWord(e){e.length>0&&this.packet.push(e)}clear(){l(),this.packet=[]}},v=1e4,y=t((e,t)=>{m(e,t);let n=-1,r=[],i=1,{bitsPerRow:a}=t.getConfig();for(let{start:o,end:s,bits:c,label:l}of e.blocks){if(o!==void 0&&s!==void 0&&s<o)throw Error(`Packet block ${o} - ${s} is invalid. End must be greater than start.`);if(o??=n+1,o!==n+1)throw Error(`Packet block ${o} - ${s??o} is not contiguous. It should start from ${n+1}.`);if(c===0)throw Error(`Packet block ${o} is invalid. Cannot have a zero bit field.`);for(s??=o+(c??1)-1,c??=s-o+1,n=s,u.debug(`Packet block ${o} - ${n} with label ${l}`);r.length<=a+1&&t.getPacket().length<v;){let[e,n]=b({start:o,end:s,bits:c,label:l},i,a);if(r.push(e),e.end+1===i*a&&(t.pushWord(r),r=[],i++),!n)break;({start:o,end:s,bits:c,label:l}=n)}}t.pushWord(r)},`populate`),b=t((e,t,n)=>{if(e.start===void 0)throw Error(`start should have been set during first phase`);if(e.end===void 0)throw Error(`end should have been set during first phase`);if(e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);if(e.end+1<=t*n)return[e,void 0];let r=t*n-1,i=t*n;return[{start:e.start,end:r,label:e.label,bits:r-e.start},{start:i,end:e.end,label:e.label,bits:e.end-i}]},`getNextFittingBlock`),x={parser:{yy:void 0},parse:t(async e=>{let t=await h(`packet`,e),n=x.parser?.yy;if(!(n instanceof _))throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);u.debug(t),y(t,n)},`parse`)},S=t((e,t,n,i)=>{let a=i.db,o=a.getConfig(),{rowHeight:c,paddingY:l,bitWidth:u,bitsPerRow:d}=o,f=a.getPacket(),p=a.getDiagramTitle(),m=c+l,h=m*(f.length+1)-(p?0:c),g=u*d+2,_=r(t);_.attr(`viewbox`,`0 0 ${g} ${h}`),s(_,h,g,o.useMaxWidth);for(let[e,t]of f.entries())C(_,t,e,o);_.append(`text`).text(p).attr(`x`,g/2).attr(`y`,h-m/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),C=t((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),w={draw:S},T={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},E={parser:x,get db(){return new _},renderer:w,styles:t(({packet:e}={})=>{let t=c(T,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},`styles`)};export{E as diagram};