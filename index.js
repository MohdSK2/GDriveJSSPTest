!function(){async function e(e,t){return new Promise((i,a)=>{var o=new XMLHttpRequest;if(o.onreadystatechange=function(){try{if(4!==o.readyState)return;if(200!==o.status)throw new Error("FETCH_GET - Failed with status "+o.status);i(o.responseText)}catch(e){console.log(`FETCH_GET - error: ${e}; ResponseText: ${o.responseText}`),a(e)}},o.onerror=function(){throw console.log("FETCH_GET - onError occured"),new Error("FETCH_GET - onError occured")},t){let i="?";for(let e in t){i+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}e+=i}console.log("FETCH_GET URL: "+e),o.open("GET",e),o.withCredentials=!0,o.send()})}const t="string",i="boolean",a="dateTime",o="number",s="extendedString",r="list",n="read",d="id",p="filename",l="size",c="URL",m="modifiedDateTime",h="CreatedDateTime",f="ParentId",u="tags",y="File",w="sourceid",T="targetid",g="totrash",N="description",D="getinfo",v="getlist",I="getinfo",b="GetDrives",S="id",F="name",E="id",k="foldername",G="URL",x="modifiedDateTime",q="CreatedDateTime",R="ParentId",L="tags",O="size",z="trashed",C="desc",P="dir",J="mimetype",U={objects:{Drive:{displayName:"Drive",description:"Operations related to a Google (Shared) Drive",properties:{[S]:{displayName:"Drive Id",description:"The ID of this shared drive which is also the ID of the top level folder of this shared drive.",type:t},[F]:{displayName:"Name",description:"The name of this shared drive.",type:t}},methods:{[b]:{displayName:"Get Drives",description:"Get all Google (shared) drives.",type:r,outputs:[S,F]}}},Folder:{displayName:"Folder",description:"Operations related to a folder in Google Drive",properties:{[E]:{displayName:"Id",description:"The unique ID of a folder (or drive).",type:t},[k]:{displayName:"Name",description:"The name of the item.",type:t},[C]:{displayName:"Description",description:"The description of the item.",type:s},[G]:{displayName:"URL",description:"Direct URL to the item.",type:t},[x]:{displayName:"Modified DateTime",description:"Date/Time on which the item was last modified.",type:a},[q]:{displayName:"Created DateTime",description:"Date on which the tiem was created Date",type:a},[R]:{displayName:"Parent ID",description:"ID of the parent object/folder.",type:t},[L]:{displayName:"Tags",description:"JSON of all tags associated with the folder.",type:t},[J]:{displayName:"MimeType",description:"The mimetype of the item.",type:t},[O]:{displayName:"Size",description:"Size of the item in google drive (bytes).",type:o},[z]:{displayName:"Trashed",description:"Weather the item is in the trash or not.",type:i},[P]:{displayName:"Directory",description:"Weather the item is a directory or not.",type:i}},methods:{[I]:{displayName:"Get Info",description:"Get info for the folder by it's ID.",type:n,inputs:[E],requiredInputs:[E],outputs:[E,k,R,L,x,q,G,C,z]},[v]:{displayName:"Get List",description:"Get List of all items in a folder.",type:r,inputs:[E],requiredInputs:[E],outputs:[E,k,C,L,O,z,P,J,x,q,G]}}},File:{displayName:"File",description:"Operations related to a single file in Google Drive",properties:{[d]:{displayName:"File Id",description:"The unique id of the file.",type:t},[p]:{displayName:"File Name",description:"The File Name.",type:t},[c]:{displayName:"URL",description:"Direct URL to the file.",type:t},[y]:{displayName:"File",description:"The content of the file.",type:"attachment"},[l]:{displayName:"File Size",description:"Size of the file in Google Drive in bytes.",type:o},[m]:{displayName:"Modified DateTime",description:"Date/Time on which the file was last modified.",type:a},[h]:{displayName:"Created DateTime",description:"Date on which teh file was created Date",type:a},[f]:{displayName:"Parent ID",description:"ID of the parent object/folder.",type:t},[u]:{displayName:"Tags",description:"JSON of all tags associated with the file.",type:t},["tagName"]:{displayName:"Tag Name",description:"Tag Name",type:t},["tagValue"]:{displayName:"Tag Value",description:"Tag Value",type:t},[w]:{displayName:"Source File Id",description:"The unique Id of the file that should be used as the source of the operation.",type:t},[w]:{displayName:"Target Folder Id",description:"The unique Id of the folder to which the file should be copied/moved/uploaded.",type:t},[g]:{displayName:"Delete to Trash",description:"Indicate if the file should go to the trash folder or be deleted permanently.",type:i},[N]:{displayName:"File Description",description:"File description",type:s}},methods:{[I]:{displayName:"Get Info",description:"Get info for the file by a given ID.",type:n,inputs:[d],requiredInputs:[d],outputs:[d,p,f,u,m,h,c,N,g]},["download"]:{displayName:"Download",type:n,inputs:[d],requiredInputs:[d],outputs:[d,p,f,u,l,m,h,c,y]},["delete"]:{displayName:"Delete File",description:"Delete a file.",type:"delete",inputs:[d,g],requiredInputs:[d],outputs:[]},["upload"]:{displayName:"Upload File",description:"Upload a File",type:"create",inputs:[y,T],requiredInputs:[y,T],outputs:[d,p,f,u,l,m,h,c]}}}}},$="https://www.googleapis.com/drive/v3/drives",V="https://www.googleapis.com/drive/v3/files";async function H(t,i,a){switch(t){case I:await async function(t,i){let a=await e(V+"/"+t[d]+"?fields=*"),o=JSON.parse(a);postResult({[d]:o.id,[p]:o.name,[f]:o.parents[0],[u]:o.mimeType,[m]:new Date(o.modifiedTime),[h]:new Date(o.createdTime),[g]:o.trashed,[c]:j(o)})}(i);break;default:throw new Error(`The method ${t} is not supported.`)}}function j(e){var t="";switch(function(e){var t="";e.indexOf("vnd.google-apps.document")>0?t="Word":e.indexOf("vnd.openxmlformats-officedocument.spreadsheetml.sheet")>0?(t="Excel",console.log("Inside excel condition")):t="Invalid";return t}(e.mimeType)){case"Word":console.log("This is word case");break;case"Excel":console.log("This is excel case");break;case"Invalid":console.log("This is invalid case");break;default:t=""}return t}async function A(t){switch(t){case b:await async function(){const t=await async function t(i,a=[]){let o={pageToken:i||"",fields:"nextPageToken,drives(id,name)",pageSize:50};const s=await e($,o),r=JSON.parse(s);a.push(...r.drives);const n=r.nextPageToken;if(n)return await t(n,a);return a.push({name:"My Drive",id:"root"}),a}();postResult(t.map(e=>({[S]:e.id,[F]:e.name})))}();break;default:throw new Error(`The method ${t} is not supported.`)}}const M="application/vnd.google-apps.folder";function _(e){return void 0!==e&&e===M}function W(e){if(void 0!==e&&Array.isArray(e))return e[0]}async function B(t,i,a){switch(t){case v:await async function(t,i){if("string"!=typeof t[E])throw new Error(`properties[${E}] is not of type number`);const a=await function(e){switch(e){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}}(i.ShowTrashed),o=t[E],s=await async function t(i,a,o,s=[]){let r={pageToken:o||"",fields:"nextPageToken,files(id,name,description,properties,size,trashed,mimeType,modifiedTime,createdTime,webViewLink)",q:`'${i}' in parents`,pageSize:5,supportsAllDrives:!0,includeItemsFromAllDrives:!0};a||(r.q=r.q+" and trashed = false");const n=await e(V,r),d=JSON.parse(n);s.push(...d.files);const p=d.nextPageToken;if(p)return await t(i,a,p,s);return s}(o,a);postResult(s.map(e=>({[E]:e.id,[k]:e.name,[C]:e.description?e.description:"",[L]:JSON.stringify(e.properties),[O]:e.size?e.size:0,[z]:e.trashed,[P]:_(e.mimeType),[J]:e.mimeType,[x]:new Date(e.modifiedTime),[q]:new Date(e.createdTime),[G]:e.webViewLink})))}(i,a);break;case D:await async function(t){if("string"!=typeof t[E])throw new Error(`properties[${E}] is not of type number`);const i=t[E],a=await async function(t){const i=V+"/"+t,a=await e(i,{fields:"id,name,description,properties,trashed,mimeType,modifiedTime,createdTime,webViewLink,parents",supportsAllDrives:!0}),o=JSON.parse(a);if(!_(o.mimeType))throw new Error(`Item with ID '${t}' is not a folder. It's of type: ${o.mimeType}`);return o}(i);postResult({[E]:a.id,[k]:a.name,[R]:W(a.parents),[L]:JSON.stringify(a.properties),[x]:new Date(a.modifiedTime),[q]:new Date(a.createdTime),[G]:a.webViewLink,[C]:a.description?a.description:"",[z]:a.trashed})}(i);break;default:throw new Error(`The method ${t} is not supported.`)}}metadata={systemName:"googledriveJSSPbroker",displayName:"Google Drive JSSP Broker",description:"JSSP Broker to utilize Google Drive functionality.",configuration:{ShowTrashed:{displayName:"Show trashed items in return set.",type:"boolean",value:"false",required:!0}}},ondescribe=async function({configuration:e}){postSchema(U)},onexecute=async function({objectName:e,methodName:t,parameters:i,properties:a,configuration:o,schema:s}){switch(e){case"File":await H(t,a);break;case"Drive":await A(t);break;case"Folder":await B(t,a,o);break;default:throw new Error("The object "+e+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
