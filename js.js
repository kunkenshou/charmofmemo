//  document.addEventListener("DOMContentLoaded", (event) => {
      //console.log("DOM fully loaded and parsed");
      
      var submitForm = function () {
        var formData = new FormData(document.getElementById('form-example'));
        console.log(formData)
      };

      var myfunc1 = function () {
      console.log("Hello world!");
    }
    
    //HTMLのフォームから値を取得する関数サンプル
/*           var check = function () {
              console.log(mail_form.mail.value);
            }
*/

//HTMLのフォームから値を取得する関数サンプル
           const check = function () {
            /*HTMLフォームの値を変数に代入するサンプル
              const title = memo_form.title.value;
              const text = memo_form.text.value;
              const tag = memo_form.tag.value;
              console.log(title,text,tag);
              */
            /*HTMLフォームの値を連想配列に代入するサンプル、このままだと、ローカルストレージ保存して呼び出すと扱いづらい*/
            let fruit = [];

            var contents = {
              "title":memo_form.title.value,
              "text":memo_form.text.value,
              "tag":memo_form.tag.value
            }
            
            fruit.push(contents);
            
            //const count = memory.push("test2");
            console.log(fruit);
            /*
            const StrJson = JSON.stringify(contents);
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
//myh1.innerHTML = ObjJson.title + ObjJson.text + ObjJson.tag
//}
}
