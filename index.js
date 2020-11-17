!function(){async function e(e,t){return new Promise((i,a)=>{var o=new XMLHttpRequest;if(o.onreadystatechange=function(){try{if(4!==o.readyState)return;if(200!==o.status)throw new Error("FETCH_GET - Failed with status "+o.status);i(o.responseText)}catch(e){console.log(`FETCH_GET - error: ${e}; ResponseText: ${o.responseText}`),a(e)}},o.onerror=function(){throw console.log("FETCH_GET - onError occured"),new Error("FETCH_GET - onError occured")},t){let i="?";for(let e in t){i+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}e+=i}console.log("FETCH_GET URL: "+e),o.open("GET",e),o.withCredentials=!0,o.send()})}const t="string",i="boolean",a="dateTime",o="number",r="list",s="read",n="id",d="filename",p="size",l="URL",c="modifiedDateTime",m="CreatedDateTime",h="ParentId",y="tags",u="File",f="sourceid",w="targetid",T="totrash",g="getinfo",N="getlist",D="getinfo",v="GetDrives",I="id",b="name",S="id",F="foldername",E="URL",G="modifiedDateTime",k="CreatedDateTime",q="ParentId",R="tags",L="size",z="trashed",C="desc",P="dir",J="mimetype",O={objects:{Drive:{displayName:"Drive",description:"Operations related to a Google (Shared) Drive",properties:{[I]:{displayName:"Drive Id",description:"The ID of this shared drive which is also the ID of the top level folder of this shared drive.",type:t},[b]:{displayName:"Name",description:"The name of this shared drive.",type:t}},methods:{[v]:{displayName:"Get Drives",description:"Get all Google (shared) drives.",type:r,outputs:[I,b]}}},Folder:{displayName:"Folder",description:"Operations related to a folder in Google Drive",properties:{[S]:{displayName:"Id",description:"The unique ID of a folder (or drive).",type:t},[F]:{displayName:"Name",description:"The name of the item.",type:t},[C]:{displayName:"Description",description:"The description of the item.",type:"extendedString"},[E]:{displayName:"URL",description:"Direct URL to the item.",type:t},[G]:{displayName:"Modified DateTime",description:"Date/Time on which the item was last modified.",type:a},[k]:{displayName:"Created DateTime",description:"Date on which the tiem was created Date",type:a},[q]:{displayName:"Parent ID",description:"ID of the parent object/folder.",type:t},[R]:{displayName:"Tags",description:"JSON of all tags associated with the folder.",type:t},[J]:{displayName:"MimeType",description:"The mimetype of the item.",type:t},[L]:{displayName:"Size",description:"Size of the item in google drive (bytes).",type:o},[z]:{displayName:"Trashed",description:"Weather the item is in the trash or not.",type:i},[P]:{displayName:"Directory",description:"Weather the item is a directory or not.",type:i}},methods:{[D]:{displayName:"Get Info",description:"Get info for the folder by it's ID.",type:s,inputs:[S],requiredInputs:[S],outputs:[S,F,q,R,G,k,E,C,z]},[N]:{displayName:"Get List",description:"Get List of all items in a folder.",type:r,inputs:[S],requiredInputs:[S],outputs:[S,F,C,R,L,z,P,J,G,k,E]}}},File:{displayName:"File",description:"Operations related to a single file in Google Drive",properties:{[n]:{displayName:"File Id",description:"The unique id of the file.",type:t},[d]:{displayName:"File Name",description:"The File Name.",type:t},[l]:{displayName:"URL",description:"Direct URL to the file.",type:t},[u]:{displayName:"File",description:"The content of the file.",type:"attachment"},[p]:{displayName:"File Size",description:"Size of the file in Google Drive in bytes.",type:o},[c]:{displayName:"Modified DateTime",description:"Date/Time on which the file was last modified.",type:a},[m]:{displayName:"Created DateTime",description:"Date on which teh file was created Date",type:a},[h]:{displayName:"Parent ID",description:"ID of the parent object/folder.",type:t},[y]:{displayName:"Tags",description:"JSON of all tags associated with the file.",type:t},["tagName"]:{displayName:"Tag Name",description:"Tag Name",type:t},["tagValue"]:{displayName:"Tag Value",description:"Tag Value",type:t},[f]:{displayName:"Source File Id",description:"The unique Id of the file that should be used as the source of the operation.",type:t},[f]:{displayName:"Target Folder Id",description:"The unique Id of the folder to which the file should be copied/moved/uploaded.",type:t},[T]:{displayName:"Delete to Trash",description:"Indicate if the file should go to the trash folder or be deleted permanently.",type:i}},methods:{[D]:{displayName:"Get Info",description:"Get info for the file by a given ID.",type:s,inputs:[n],requiredInputs:[n],outputs:[n,d,h,y,p,c,m,l]},["download"]:{displayName:"Download",type:s,inputs:[n],requiredInputs:[n],outputs:[n,d,h,y,p,c,m,l,u]},["delete"]:{displayName:"Delete File",description:"Delete a file.",type:"delete",inputs:[n,T],requiredInputs:[n],outputs:[]},["upload"]:{displayName:"Upload File",description:"Upload a File",type:"create",inputs:[u,w],requiredInputs:[u,w],outputs:[n,d,h,y,p,c,m,l]}}}}};async function U(t,i,a){switch(t){case D:await async function(){let t=await e("https://jsonplaceholder.typicode.com/todos/192"),i=JSON.parse(t);postResult({id:i.id})}();break;default:throw new Error(`The method ${t} is not supported.`)}}const $="https://www.googleapis.com/drive/v3/drives",x="https://www.googleapis.com/drive/v3/files";async function V(t){switch(t){case v:await async function(){const t=await async function t(i,a=[]){let o={pageToken:i||"",fields:"nextPageToken,drives(id,name)",pageSize:50};const r=await e($,o),s=JSON.parse(r);a.push(...s.drives);const n=s.nextPageToken;if(n)return await t(n,a);return a.push({name:"My Drive",id:"root"}),a}();postResult(t.map(e=>({[I]:e.id,[b]:e.name})))}();break;default:throw new Error(`The method ${t} is not supported.`)}}const j="application/vnd.google-apps.folder";function H(e){return void 0!==e&&e===j}function A(e){if(void 0!==e&&Array.isArray(e))return e[0]}async function M(t,i,a){switch(t){case N:await async function(t,i){if("string"!=typeof t[S])throw new Error(`properties[${S}] is not of type number`);const a=await function(e){switch(e){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}}(i.ShowTrashed),o=t[S],r=await async function t(i,a,o,r=[]){let s={pageToken:o||"",fields:"nextPageToken,files(id,name,description,properties,size,trashed,mimeType,modifiedTime,createdTime,webViewLink)",q:`'${i}' in parents`,pageSize:5,supportsAllDrives:!0,includeItemsFromAllDrives:!0};a||(s.q=s.q+" and trashed = false");const n=await e(x,s),d=JSON.parse(n);r.push(...d.files);const p=d.nextPageToken;if(p)return await t(i,a,p,r);return r}(o,a);postResult(r.map(e=>({[S]:e.id,[F]:e.name,[C]:e.description?e.description:"",[R]:JSON.stringify(e.properties),[L]:e.size?e.size:0,[z]:e.trashed,[P]:H(e.mimeType),[J]:e.mimeType,[G]:new Date(e.modifiedTime),[k]:new Date(e.createdTime),[E]:e.webViewLink})))}(i,a);break;case g:await async function(t){if("string"!=typeof t[S])throw new Error(`properties[${S}] is not of type number`);const i=t[S],a=await async function(t){const i=x+"/"+t,a=await e(i,{fields:"id,name,description,properties,trashed,mimeType,modifiedTime,createdTime,webViewLink,parents",supportsAllDrives:!0}),o=JSON.parse(a);if(!H(o.mimeType))throw new Error(`Item with ID '${t}' is not a folder. It's of type: ${o.mimeType}`);return o}(i);postResult({[S]:a.id,[F]:a.name,[q]:A(a.parents),[R]:JSON.stringify(a.properties),[G]:new Date(a.modifiedTime),[k]:new Date(a.createdTime),[E]:a.webViewLink,[C]:a.description?a.description:"",[z]:a.trashed})}(i);break;default:throw new Error(`The method ${t} is not supported.`)}}metadata={systemName:"googledriveJSSPbroker",displayName:"Google Drive JSSP Broker",description:"JSSP Broker to utilize Google Drive functionality.",configuration:{ShowTrashed:{displayName:"Show trashed items in return set.",type:"boolean",value:"false",required:!0}}},ondescribe=async function({configuration:e}){postSchema(O)},onexecute=async function({objectName:e,methodName:t,parameters:i,properties:a,configuration:o,schema:r}){switch(e){case"File":await U(t);break;case"Drive":await V(t);break;case"Folder":await M(t,a,o);break;default:throw new Error("The object "+e+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
