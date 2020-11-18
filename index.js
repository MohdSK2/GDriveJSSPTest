!function(){async function e(e,t){return new Promise((i,o)=>{var r=new XMLHttpRequest;if(r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(200!==r.status)throw new Error("FETCH_GET - Failed with status "+r.status);i(r.responseText)}catch(e){console.log(`FETCH_GET - error: ${e}; ResponseText: ${r.responseText}`),o(e)}},r.onerror=function(){throw console.log("FETCH_GET - onError occured"),new Error("FETCH_GET - onError occured")},t){let i="?";for(let e in t){i+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}e+=i}console.log("FETCH_GET URL: "+e),r.open("GET",e),r.withCredentials=!0,r.send()})}const t="string",i="boolean",o="dateTime",r="number",a="extendedString",n="list",s="read",d="id",p="filename",c="size",l="URL",m="modifiedDateTime",u="CreatedDateTime",f="ParentId",h="tags",y="File",w="sourceid",T="targetid",g="totrash",E="description",D="result",N="getinfo",v="getlist",F="getinfo",I="delete",b="GetDrives",S="id",C="name",k="id",R="foldername",L="URL",G="modifiedDateTime",x="CreatedDateTime",H="ParentId",q="tags",O="size",U="trashed",P="desc",$="dir",_="mimetype",J={objects:{Drive:{displayName:"Drive",description:"Operations related to a Google (Shared) Drive",properties:{[S]:{displayName:"Drive Id",description:"The ID of this shared drive which is also the ID of the top level folder of this shared drive.",type:t},[C]:{displayName:"Name",description:"The name of this shared drive.",type:t}},methods:{[b]:{displayName:"Get Drives",description:"Get all Google (shared) drives.",type:n,outputs:[S,C]}}},Folder:{displayName:"Folder",description:"Operations related to a folder in Google Drive",properties:{[k]:{displayName:"Id",description:"The unique ID of a folder (or drive).",type:t},[R]:{displayName:"Name",description:"The name of the item.",type:t},[P]:{displayName:"Description",description:"The description of the item.",type:a},[L]:{displayName:"URL",description:"Direct URL to the item.",type:t},[G]:{displayName:"Modified DateTime",description:"Date/Time on which the item was last modified.",type:o},[x]:{displayName:"Created DateTime",description:"Date on which the tiem was created Date",type:o},[H]:{displayName:"Parent ID",description:"ID of the parent object/folder.",type:t},[q]:{displayName:"Tags",description:"JSON of all tags associated with the folder.",type:t},[_]:{displayName:"MimeType",description:"The mimetype of the item.",type:t},[O]:{displayName:"Size",description:"Size of the item in google drive (bytes).",type:r},[U]:{displayName:"Trashed",description:"Weather the item is in the trash or not.",type:i},[$]:{displayName:"Directory",description:"Weather the item is a directory or not.",type:i}},methods:{[F]:{displayName:"Get Info",description:"Get info for the folder by it's ID.",type:s,inputs:[k],requiredInputs:[k],outputs:[k,R,H,q,G,x,L,P,U]},[v]:{displayName:"Get List",description:"Get List of all items in a folder.",type:n,inputs:[k],requiredInputs:[k],outputs:[k,R,P,q,O,U,$,_,G,x,L]}}},File:{displayName:"File",description:"Operations related to a single file in Google Drive",properties:{[d]:{displayName:"File Id",description:"The unique id of the file.",type:t},[p]:{displayName:"File Name",description:"The File Name.",type:t},[l]:{displayName:"URL",description:"Direct URL to the file.",type:t},[y]:{displayName:"File",description:"The content of the file.",type:"attachment"},[c]:{displayName:"File Size",description:"Size of the file in Google Drive in bytes.",type:r},[m]:{displayName:"Modified DateTime",description:"Date/Time on which the file was last modified.",type:o},[u]:{displayName:"Created DateTime",description:"Date on which teh file was created Date",type:o},[f]:{displayName:"Parent ID",description:"ID of the parent object/folder.",type:t},[h]:{displayName:"Tags",description:"JSON of all tags associated with the file.",type:t},["tagName"]:{displayName:"Tag Name",description:"Tag Name",type:t},["tagValue"]:{displayName:"Tag Value",description:"Tag Value",type:t},[w]:{displayName:"Source File Id",description:"The unique Id of the file that should be used as the source of the operation.",type:t},[w]:{displayName:"Target Folder Id",description:"The unique Id of the folder to which the file should be copied/moved/uploaded.",type:t},[g]:{displayName:"Delete to Trash",description:"Indicate if the file should go to the trash folder or be deleted permanently.",type:i},[E]:{displayName:"File Description",description:"File description",type:a},[E]:{displayName:"File Description",description:"File description",type:a},[D]:{displayName:"Result",description:"Result",type:i}},methods:{[F]:{displayName:"Get Info",description:"Get info for the file by a given ID.",type:s,inputs:[d],requiredInputs:[d],outputs:[d,p,f,h,m,u,l,E,g]},["download"]:{displayName:"Download",type:s,inputs:[d],requiredInputs:[d],outputs:[d,p,f,h,c,m,u,l,y]},[I]:{displayName:"Delete File",description:"Delete a file.",type:"delete",inputs:[d,g],requiredInputs:[d],outputs:[D]},["upload"]:{displayName:"Upload File",description:"Upload a File",type:"create",inputs:[y,T],requiredInputs:[y,T],outputs:[d,p,f,h,c,m,u,l]}}}}},z="https://www.googleapis.com/drive/v3/drives",j="https://www.googleapis.com/drive/v3/files";async function A(t,i,o){switch(t){case F:await async function(t,i){let o=await e(j+"/"+t[d]+"?fields=*"),r=JSON.parse(o);var a=function(e){var t="";switch(function(e){var t="";e.indexOf("vnd.google-apps.document")>0?t="Word":e.indexOf("vnd.openxmlformats-officedocument.spreadsheetml.sheet")>0?(t="Excel",console.log("Inside excel condition")):t="Invalid";return t}(e.mimeType)){case"Word":Object.keys(e.exportLinks).forEach((function(i){"application/vnd.openxmlformats-officedocument.wordprocessingml.document"==i&&(t=e.exportLinks[i])}));break;case"Excel":t=e.webContentLink;break;case"Invalid":t="Sorry, This file type is not configured yet!";break;default:t=""}return t}(r);postResult({[d]:r.id,[p]:r.name,[f]:r.parents[0],[h]:r.mimeType,[m]:new Date(r.modifiedTime),[u]:new Date(r.createdTime),[g]:r.trashed,[l]:a})}(i);break;case I:await async function(t,i){let o;if(await async function(t){var i=!1,o=await e(j+"/"+t[d]+"?fields=*");JSON.parse(o).kind.indexOf("Folder")>0&&(i=!0);return i}(t))throw new Error(`Object with Id ${t[d]} is not a file. Do not delete the object`);var r=JSON.stringify({trashed:t[g]});o=1==t[g]&&null!=t[g]?await async function(e,t,i){return new Promise((o,r)=>{var a=new XMLHttpRequest;if(a.onreadystatechange=function(){try{if(4!==a.readyState)return;if(200!==a.status)throw new Error("FETCH_GET - Failed with status "+a.status);o(a.responseText)}catch(e){console.log(`FETCH_GET - error: ${e}; ResponseText: ${a.responseText}`),r(e)}},a.onerror=function(){throw console.log("FETCH_GET - onError occured"),new Error("FETCH_GET - onError occured")},i){let t="?";for(let e in i){t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e])+"&"}e+=t}console.log("FETCH_PATCH URL: "+e),a.open("PATCH",e),a.withCredentials=!0,a.setRequestHeader("Accept","application/json"),a.setRequestHeader("Content-Type","application/json"),a.send(t)})}(j+"/"+t[d],r):await async function(e,t){return new Promise((i,o)=>{var r=new XMLHttpRequest;if(r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(204!==r.status)throw new Error("FETCH_DELETE - Failed with status "+r.status)}catch(e){console.log(`FETCH_DELETE - error: ${e}; ResponseText: ${r.responseText}`),o(e)}},r.onerror=function(){throw console.log("FETCH_DELETE - onError occured"),new Error("FETCH_DELETE - onError occured")},t){let i="?";for(let e in t){i+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}e+=i}console.log("FETCH_DELETE URL: "+e),r.open("DELETE",e),r.withCredentials=!0,r.send()})}(j+"/"+t[d])}(i);break;default:throw new Error(`The method ${t} is not supported.`)}}async function M(t){switch(t){case b:await async function(){const t=await async function t(i,o=[]){let r={pageToken:i||"",fields:"nextPageToken,drives(id,name)",pageSize:50};const a=await e(z,r),n=JSON.parse(a);o.push(...n.drives);const s=n.nextPageToken;if(s)return await t(s,o);return o.push({name:"My Drive",id:"root"}),o}();postResult(t.map(e=>({[S]:e.id,[C]:e.name})))}();break;default:throw new Error(`The method ${t} is not supported.`)}}const V="application/vnd.google-apps.folder";function W(e){return void 0!==e&&e===V}function X(e){if(void 0!==e&&Array.isArray(e))return e[0]}async function B(t,i,o){switch(t){case v:await async function(t,i){if("string"!=typeof t[k])throw new Error(`properties[${k}] is not of type number`);const o=await function(e){switch(e){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}}(i.ShowTrashed),r=t[k],a=await async function t(i,o,r,a=[]){let n={pageToken:r||"",fields:"nextPageToken,files(id,name,description,properties,size,trashed,mimeType,modifiedTime,createdTime,webViewLink)",q:`'${i}' in parents`,pageSize:5,supportsAllDrives:!0,includeItemsFromAllDrives:!0};o||(n.q=n.q+" and trashed = false");const s=await e(j,n),d=JSON.parse(s);a.push(...d.files);const p=d.nextPageToken;if(p)return await t(i,o,p,a);return a}(r,o);postResult(a.map(e=>({[k]:e.id,[R]:e.name,[P]:e.description?e.description:"",[q]:JSON.stringify(e.properties),[O]:e.size?e.size:0,[U]:e.trashed,[$]:W(e.mimeType),[_]:e.mimeType,[G]:new Date(e.modifiedTime),[x]:new Date(e.createdTime),[L]:e.webViewLink})))}(i,o);break;case N:await async function(t){if("string"!=typeof t[k])throw new Error(`properties[${k}] is not of type number`);const i=t[k],o=await async function(t){const i=j+"/"+t,o=await e(i,{fields:"id,name,description,properties,trashed,mimeType,modifiedTime,createdTime,webViewLink,parents",supportsAllDrives:!0}),r=JSON.parse(o);if(!W(r.mimeType))throw new Error(`Item with ID '${t}' is not a folder. It's of type: ${r.mimeType}`);return r}(i);postResult({[k]:o.id,[R]:o.name,[H]:X(o.parents),[q]:JSON.stringify(o.properties),[G]:new Date(o.modifiedTime),[x]:new Date(o.createdTime),[L]:o.webViewLink,[P]:o.description?o.description:"",[U]:o.trashed})}(i);break;default:throw new Error(`The method ${t} is not supported.`)}}metadata={systemName:"googledriveJSSPbroker",displayName:"Google Drive JSSP Broker",description:"JSSP Broker to utilize Google Drive functionality.",configuration:{ShowTrashed:{displayName:"Show trashed items in return set.",type:"boolean",value:"false",required:!0}}},ondescribe=async function({configuration:e}){postSchema(J)},onexecute=async function({objectName:e,methodName:t,parameters:i,properties:o,configuration:r,schema:a}){switch(e){case"File":await A(t,o);break;case"Drive":await M(t);break;case"Folder":await B(t,o,r);break;default:throw new Error("The object "+e+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
