import{N as i}from"./assets/vendor-Bm5d5vy0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const a={mainForm:document.querySelector("#mainForm"),list:document.querySelector(".js-list"),loader:document.querySelector(".js-loader")},c="https://671cfe1509103098807be37b.mockapi.io",d=()=>fetch(`${c}/todos`).then(t=>{if(!t.ok)throw new Error(`Error while getting tasks: ${t.status}`);return t.json()}),f=t=>{const e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};return fetch(`${c}/todos`,e).then(o=>{if(!o.ok)throw new Error(`Error while posting task: ${o.status}`);return o.json()})},h=t=>{const e={method:"DELETE"};return fetch(`${c}/todos/${t}`,e).then(o=>{if(!o.ok)throw new Error(`Error while deleting task ${t}: ${o.status}`);return o.json()})},m=(t,e)=>{const o={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return fetch(`${c}/todos/${t}`,o).then(r=>{if(!r.ok)throw new Error(`Error while updating task ${t}: ${r.status}`);return r.json()})};function u(t){return`<li data-id="${t.id}" class="${t.isDone?"line-through":""}"><div><span>${t.text}</span><button>Delete</button></div></li>`}function p(){d().then(t=>{const e=t.length;if(i.Notify.info(`You have ${e} task${e>1?"s":""}.`),e===0)return;const o=t.map(u).join("");a.list.innerHTML=o}).catch(t=>{console.error(t),i.Notify.failure(t.message)}).finally(()=>a.loader.classList.add("hidden"))}function g(t){t.preventDefault();const e=t.target,o=e.elements.task.value.trim();f({text:o,isDone:!1}).then(r=>{a.list.insertAdjacentHTML("beforeend",u(r))}).catch(r=>{console.error(r),i.Notify.failure(r.message)}).finally(()=>e.reset())}function y(t){if(t.target.tagName==="SPAN"||t.target.tagName==="LI"){const e=t.target.closest("li"),o=Number(e.dataset.id);m(o,{isDone:!e.classList.contains("line-through")}).then(()=>e.classList.toggle("line-through")).catch(r=>{console.error(r),i.Notify.failure(r.message)})}else if(t.target.tagName==="BUTTON"){const e=t.target.closest("li"),o=Number(e.dataset.id);h(o).then(()=>e.remove()).catch(r=>{console.error(r),i.Notify.failure(r.message)})}}p();a.mainForm.addEventListener("submit",g);a.list.addEventListener("click",y);
//# sourceMappingURL=index.js.map
