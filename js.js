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
            const memory = {
              "title":memo_form.title.value,
              "text":memo_form.text.value,
              "tag":memo_form.tag.value
            }
            
            const StrJson = JSON.stringify(memory);
            //const obj = memory.toString()
            localStorage.setItem('sample', StrJson);
            console.log(StrJson);
            }
//    });
const ObjJson = JSON.parse(localStorage.getItem('sample'));
console.log(ObjJson.tag);

myh1.innerHTML = ObjJson.title + ObjJson.text + ObjJson.tag
