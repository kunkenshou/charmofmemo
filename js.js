// document.addEventListener("DOMContentLoaded", (event) => {
      //console.log("DOM fully loaded and parsed");
      
      var submitForm = function () {
        var formData = new FormData(document.getElementById('form-example'));
        console.log(formData)
      };

      var myfunc1 = function () {
      console.log("Hello world!");
    };
    
    //HTMLのフォームから値を取得する関数サンプル
/*           var check = function () {
              console.log(mail_form.mail.value);
            }
*/
var example = localStorage.getItem('sample')
            if (example == null){
              console.log("ローカルストレージnull");
              let fruit = [];
              const obj = JSON.stringify(fruit);
              localStorage.setItem('sample', obj);
            }
            
            
//HTMLのフォームから値を取得する関数サンプル
           const check = function () {
            /*HTMLフォームの値を変数に代入するサンプル
              const title = memo_form.title.value;
              const text = memo_form.text.value;
              const tag = memo_form.tag.value;
              console.log(title,text,tag);
              */
            /*HTMLフォームの値を連想配列に代入するサンプル、このままだと、ローカルストレージ保存して呼び出すと扱いづらい*/
            
            const test = localStorage.getItem('sample');
            var ObjJson = JSON.parse(test);
            console.log(typeof ObjJson);

            
            var contents = {
              "title":memo_form.title.value,
              "text":memo_form.text.value,
              "tag":memo_form.tag.value
            }
            
            ObjJson.push(contents);
            console.log(ObjJson);
            
            const obj = JSON.stringify(ObjJson);
            const sample = localStorage.setItem('sample', obj);
            //const hoge = localStorage.getItem('sample');
            //const sample = localStorage.setItem('sample', hoge);
            console.log(sample);
          };
            const hoge = localStorage.getItem('sample');
            var ObjJson = JSON.parse(hoge);
            //console.log(ObjJson[0].text);
            var outputDiv = document.getElementById("output");
            
            //ObjJson.forEach(obj => {
             for (let i = 0 ; i < ObjJson.length ; i++){
     const objDiv = document.createElement('div');
     objDiv.innerHTML = `title: ${ObjJson[i].title}, text: ${ObjJson[i].text}, tag: ${ObjJson[i].tag}`;
     outputDiv.appendChild(objDiv);
console.log(ObjJson[i].title);
            }
             
            /*
            for(var i = 0; i < ObjJson.length; i++ ){
              console.log(ObjJson[i].text);
            }
            */
            
            
            /*console.log(ObjJson);
            

            
            ObjJson.push(contents);
            console.log(Object);
            */
            //const obj = JSON.stringify(fruit);
            
            
/*
            let fruit = [];

            var contents = {
              "title":memo_form.title.value,
              "text":memo_form.text.value,
              "tag":memo_form.tag.value
            }
            
            fruit.push(contents);
            
            //const count = memory.push("test2");
            //console.log(fruit);
            
            const StrJson = JSON.stringify(fruit);
            //const obj = memory.toString()
            localStorage.setItem('sample', StrJson);
            //console.log(StrJson);
            
//    });
const sample = localStorage.getItem('sample')

//console.log(sample)

if (sample == null) {
  console.log("sampleがありません");
  myh1.innerHTML = "sampleがありません"
} else {
  const ObjJson = JSON.parse(sample);
  console.log(typeof ObjJson);
  

  //myh1.innerHTML = ObjJson.title + ObjJson.text + ObjJson.tag
//console.log(ObjJson.tag);
/*
ObjJson.title = memo_form.title.value;
              ObjJson.text = memo_form.text.value;
              ObjJson.tag = memo_form.tag.value;
*/
//console.log(typeof memory);
//console.log(typeof ObjJson);
//const count = memory.push(ObjJson);
//console.log(typeof count);
//memory[memory.length] = ObjJson;
//console.log(memory);
//var myh1 = document.getElementById("myh1");
//myh1.innerHTML = sample.title
        

//          });
