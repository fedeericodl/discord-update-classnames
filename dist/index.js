import{createRequire as e}from"module";var t={};(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;t.d(r,{a:r});return r}})();(()=>{t.d=(e,r)=>{for(var o in r){if(t.o(r,o)&&!t.o(e,o)){Object.defineProperty(e,o,{enumerable:true,get:r[o]})}}}})();(()=>{t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})();if(typeof t!=="undefined")t.ab=new URL(".",import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/)?1:0,-1)+"/";var r={};const o=e(import.meta.url)("path");var n=t.n(o);const s=e(import.meta.url)("fs");var c=t.n(s);const a="https://canary.discord.com";const i=/<script defer src="\/assets\/[a-z0-9.]+\.js"><\/script>/g;const l=/src="[^"]+"/g;const d=/function\(\w+\){return""\+\(({(?:\w+:"\w+",)*\w+:"\w+"})\)/g;const u=/([a-z0-9]*):/g;function ensureCleanDirectory(e){c().rmSync(e,{recursive:true,force:true});c().mkdirSync(e,{recursive:true})}async function downloader(e){try{const t=await(await fetch(`${a}/app`)).text();const r=t.match(i)?.map((e=>e.match(l)?.[0].slice(13,-1)));if(!r||r.length===0)throw new Error("No scripts found");const o=await(await fetch(`${a}/assets/${r[0]}`)).text();const s=o.match(/versionHash:\s*"([a-zA-Z0-9]{40})"/)?.[1];const f=n().join(n().dirname(e),"VERSION_HASH");if(s){if(c().existsSync(f)){const e=c().readFileSync(f,"utf8");if(e===s){process.stdout.write("[32mFiles already downloaded, skipping download.[0m\n");return}}c().writeFileSync(f,s)}ensureCleanDirectory(e);let w;const p=[];while(w=d.exec(o)){if(w[1]){p.push(w[1].replace(u,'"$1":'))}}if(!p[1])throw new Error("No chunks found");const m=JSON.parse(p[1]);Object.values(m).forEach((e=>r.push(`${e}.js`)));let h=0;const y=r.length;for(const t of r){if(!t)continue;h++;process.stdout.write(`[2K\r(${h}/${y}) Downloading: ${t}`);const r=await(await fetch(`${a}/assets/${t}`)).text();c().writeFileSync(n().join(e,t),r)}process.stdout.write("\n[32mAll files downloaded successfully![0m\n")}catch(e){process.stdout.write("\n[31mDownload failed:[0m\n");console.error(e instanceof Error?e.message:e);process.exit(1)}}const f="./data";const w=n().join(f,"scripts");async function main(){await downloader(w)}main().catch((e=>{console.error("Unhandled error:",e);process.exit(1)}));