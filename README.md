# mind.js nedir?

mind.js, geliştiriciler için tasarlanmış javascript kod çerçevesidir. Proje arayüzlerinde gerek duyulan javascript ihtiyaçlarını, geliştirici deneyimini iyileştirerek sunmayı amaçlar. 

## Edinme

İndirmek için [TIKLAYIN](https://github.com/aliyilmaz/mind.js/archive/refs/heads/main.zip)

## Kullanım
İndirdiğiniz zip dosyasında bulunan `src` alt dizini içindeki mind.js dosyasını kullanmanız gerekmektedir.

    <script src="https://github.com/aliyilmaz/mind.js/raw/main/src/mind.js"></script>


## Metotlar

##### Sistem

* [getLocation()](https://github.com/aliyilmaz/mind.js#getlocation)
* [actionGet()](https://github.com/aliyilmaz/mind.js#actionget)
* [actionPost()](https://github.com/aliyilmaz/mind.js#actionpost)
* [redirect()](https://github.com/aliyilmaz/mind.js#redirect)

##### Element

* [appendItem()](https://github.com/aliyilmaz/mind.js#appenditem)
* [changeContent()](https://github.com/aliyilmaz/mind.js#changecontent)
* [itemSetAttr()](https://github.com/aliyilmaz/mind.js#itemsetattr)
* [hideItem()](https://github.com/aliyilmaz/mind.js#hideitem)
* [showItem()](https://github.com/aliyilmaz/mind.js#showitem)
* [removeItem()](https://github.com/aliyilmaz/mind.js#removeitem)

##### Olaylar

* [clickItem()](https://github.com/aliyilmaz/mind.js#clickitem)
* [keyupItem()](https://github.com/aliyilmaz/mind.js#keyupitem)
* [formReset()](https://github.com/aliyilmaz/mind.js#formreset)
* [charCounter()](https://github.com/aliyilmaz/mind.js#charcounter)

##### Doğrulama

* [is_array()](https://github.com/aliyilmaz/mind.js#is_array)
* [is_json()](https://github.com/aliyilmaz/mind.js#is_json)
* [is_object()](https://github.com/aliyilmaz/mind.js#is_object)

---

## getLocation()

Ziyaretçi konumunu enlem,boylam söz diziminde belirtilen elementlere veya ikinci parametrede belirtilen fonksiyon içine atamaya yarar. 

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>getLocation</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        <div id="status"></div>
        <script>

            getLocation('input, input#key, textarea#key1, #status');
            
            // getLocation('', function(position){
            //    console.log(position.coords.latitude);
            // });
            
            // getLocation('input, input#key, textarea#key1', function(position){
            //    console.log(position.coords.latitude);
            // });
        </script>
    </body>
    </html>

--- 

## actionGet()

Belirtilen adresin varış noktasındaki sayfanın kaynak kodunu elde ederek, ikinci parametrede belirtilen fonksiyonun içine atamaya yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>actionGet</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <div id="status"></div>
        <script>
            actionGet('sample.txt', function(response){
                console.log(response);
                changeContent('#status', response);
            });
        </script>
    </body>
    </html>

--- 

## actionPost()

Belirtilen adrese, belirtilen form verilerini göndermeye yarar, üçüncü parametre ise yanıtı fonksiyonun içine atamayı sağlar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>actionPost</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <form>
            <input type="text" name="username">
            <input type="password" name="password">
            <button type="button">save 1</button>
            <button type="button">save 2</button>
            <a id="save" href="#">save 1</a>
            <a id="save" href="#">save 2</a>
            <p><a id="save" href="#">save 3</a></p>
        </form>
        <div id="status"></div>
        <script>
            clickItem('button, a#save', function(){
                actionPost('../../form/api/form', 'form', function(response){
                    console.log(response);
                    changeContent('#status', response);
                });
            });
            
        </script>
    </body>
    </html>

---

## redirect()
Ziyaretçiyi belirtilen adrese yönlendirmeye yarar. Üç parametre alır. İlk parametre yönlenecek adresi, ikinci parametre saniye cinsinden bekleme süresini, üçüncü parametre ise kalan saniyelerin gösterileceği element(ler)'i temsil eder.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>redirect</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <h2></h2>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>
        <div id="status"></div>
        <script>
            // redirect('http://google.com');
            // redirect('http://google.com', 5);
            redirect('http://google.com', 5, 'h2, input, input#key, textarea#key1');
        </script>
    </body>
    </html>

---

## appendItem()

Belirtilen element(ler)'e, element içeriğinin sonuna içerik eklemeye yarar. Element eğer bir form elemanıysa `value` olarak atama yapar, eğer başka tür bir elementse içeriğine `innerHTML` yaklaşımıyla atama yapar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>appendItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <div id="status"></div>
        <span id="status"></span>
        <hr>
        <div id="status1"></div>
        <script>
            appendItem("#status", 'Hello World!<br>');
            appendItem("#status1", 'Hello World! 1');
            appendItem("#status", 'Hello World! 1');
        </script>
    </body>
    </html>

---

## changeContent()

Belirtilen element(ler)'in içeriğini, belirtilen içerikle değiştirmeye yarar. Element eğer bir form elemanıysa `value` olarak güncelleme yapar, eğer başka tür bir elementse içeriğini `innerHTML` yaklaşımıyla değiştirir.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>changeContent</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <div id="status"></div>
        <span id="status"></span>
        <hr>
        <div id="status1"></div>
        <script>
            changeContent("#status", 'Hello World!');
            changeContent("#status1", 'Hello World! 1');
            changeContent("#status", 'Hello World! 1');
        </script>
    </body>
    </html>

    
---

## itemSetAttr()

HTML element(ler)ine alt özellik belirtmeye yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>itemSetAttr</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        <div id="status"></div>
        <script>
            itemSetAttr('input, input#key, textarea#key1', 'maxlength', 5);
            
        </script>
    </body>
    </html>

---

## hideItem()

Belirtilen element(ler)i gizlemeye yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>hideItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        <div id="status"></div>
        <script>
            // hideItem('input, input#key, textarea#key1, br, p');
            hideItem('input, input#key, textarea#key1, br, p', function(e){
                changeContent('#status', 'Öğeler gizlendi.');
            });
        </script>
    </body>
    </html>

---

## showItem()

Belirtilen element(ler)i göstermeye yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>showItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        <div id="status"></div>
        <script>
            hideItem('input, input#key, textarea#key1');
            showItem('input, input#key, textarea#key1', function(e){
                changeContent('#status', 'Öğeler gösterildi.');
            });
        </script>
    </body>
    </html>

---

## removeItem()

Belirtilen element(ler)i kaldırmaya yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>removeItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        <div id="status"></div>
        <script>
            // removeItem('input, input#key, textarea#key1, br, p');
            removeItem('input, input#key, textarea#key1, br, p', function(e){
                changeContent('#status', 'Öğeler silindi.');
            });
        </script>
    </body>
    </html>

---

## clickItem()

Belirtilen element(ler)in tıklamasını yakalamaya yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>clickItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <button type="button">click 1</button>
        <button type="button">click 2</button>
        <a id="save" href="#">save 1</a>
        <a id="save" href="#">save 2</a>
        <p><a id="save" href="#">save 3</a></p>

        <div id="status"></div>
        <script>
            let text = 'Hello world';
            clickItem('button, a#save', function(e){
                changeContent('#status', text);
                console.log(e.innerText);
            });
            
        </script>
    </body>
    </html>

---

## keyupItem()

Belirtilen form element(ler)inde, basılan klavye tuşlarını yakalamaya yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>keyupItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        <div id="status"></div>
        <script>
            keyupItem('input, input#key, textarea#key1', function(e){
                changeContent('#status', e.value);
                console.log(e.value);
            });
            
        </script>
    </body>
    </html>

---

## formReset()

Belirtilen form'un tüm alanlarını temizlemek için kullanılır.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>formReset</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <form id="example-1">
            <input type="text" name="username">
            <input type="password" name="password">
            <button type="button">reset 1</button>
            <button type="button">reset 2</button>
            <a id="reset" href="#">reset 3</a>
            <a id="reset" href="#">reset 4</a>
            <p><a id="reset" href="#">reset 5</a></p>
        </form>
        <form id="example-2">
            <input type="text" name="username">
            <input type="password" name="password">
            <button type="button">reset 7</button>
            <button type="button">reset 8</button>
            <a id="reset" href="#">reset 9</a>
            <a id="reset" href="#">reset 10</a>
            <p><a id="reset" href="#">reset 11</a></p>
        </form>
        <script>
            clickItem('button, a#reset', function(){
                formReset('form');
                // formReset('form#example-1, form#example-2');
                // formReset('form#example-1, form#example-2', function(){
                //     console.log('Formlar temizlendi');
                // });
            });
            
        </script>
    </body>
    </html>

---

## charCounter()

Belirtilen yazı yazma alan(lar)ında, belirtilen karakter uzunluğunda karakter belirtilmesini sağlar, girilen her karakter belirtilen karakter uzunluğundan düşülür ve yine belirtilen elementte kaç karakter daha yazılabileceği gösterilir.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>charCounter</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <input type="text"><br>
        <input id="key" type="text"><br>
        <textarea id="key1" cols="30" rows="10"></textarea><br>
        <p><textarea id="key1" cols="30" rows="10"></textarea></p>

        Kalan karakter: <strong id="status"></strong>
        <script>
            let scheme = {'element':'input, input#key, textarea#key1', 'limit':10};
            charCounter(scheme, function(e){
                changeContent('#status', e);
            });
            
        </script>
    </body>
    </html>


---

## is_array()

Belirtilen verinin dizi türünde olup olmadığını kontrol etmeye yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>is_array</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <script>

            let item = ["user1", "User2", "user3", "User4"];
            
            if(is_array(item)){
                console.log('Bu bir dizidir.');
            } else {
                console.log('Bu bir dizi değildir.');
            }

        </script>
    </body>
    </html>

---

## is_json()

Belirtilen verinin json türünde olup olmadığını kontrol etmeye yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>is_json</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <script>
            let item = '{"status":"error","messages":{"username":{"required":"Kullan\u0131c\u0131 ad\u0131 belirtilmelidir."},"password":{"min-char":"Parola minumum 6 karakter uzunlu\u011funda olmal\u0131d\u0131r."},"email":{"email":"Ge\u00e7erli bir email adresi belirtilmelidir."}}}';

            if(is_json(item)){
                console.log('Bu bir json verisidir.');
            } else {
                console.log('Bu bir json verisi değildir.');
            }

        </script>
    </body>
    </html>


---

## is_object()

Belirtilen verinin nesne türünde olup olmadığını kontrol etmeye yarar.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>is_object</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <script>
            let item = '{"status":"error","messages":{"username":{"required":"Kullan\u0131c\u0131 ad\u0131 belirtilmelidir."},"password":{"min-char":"Parola minumum 6 karakter uzunlu\u011funda olmal\u0131d\u0131r."},"email":{"email":"Ge\u00e7erli bir email adresi belirtilmelidir."}}}';

            if(is_object(JSON.parse(item))){
                console.log('Bu bir nesnedir');
            } else {
                console.log('Bu bir nesne değildir');
            }

        </script>
    </body>
    </html>