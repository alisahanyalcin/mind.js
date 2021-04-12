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
* [listening()](https://github.com/aliyilmaz/mind.js#listening)

##### Element

* [appendItem()](https://github.com/aliyilmaz/mind.js#appenditem)
* [changeContent()](https://github.com/aliyilmaz/mind.js#changecontent)
* [copyItem()](https://github.com/aliyilmaz/mind.js#copyitem)
* [itemSetAttr()](https://github.com/aliyilmaz/mind.js#itemsetattr)
* [hideItem()](https://github.com/aliyilmaz/mind.js#hideitem)
* [showItem()](https://github.com/aliyilmaz/mind.js#showitem)
* [removeItem()](https://github.com/aliyilmaz/mind.js#removeitem)

##### Olaylar

* [clickItem()](https://github.com/aliyilmaz/mind.js#clickitem)
* [keyupItem()](https://github.com/aliyilmaz/mind.js#keyupitem)
* [changeItem()](https://github.com/aliyilmaz/mind.js#changeitem)
* [formReset()](https://github.com/aliyilmaz/mind.js#formreset)
* [charCounter()](https://github.com/aliyilmaz/mind.js#charcounter)
* [foreachArray()](https://github.com/aliyilmaz/mind.js#foreacharray)

##### Doğrulama

* [is_array()](https://github.com/aliyilmaz/mind.js#is_array)
* [is_json()](https://github.com/aliyilmaz/mind.js#is_json)
* [is_object()](https://github.com/aliyilmaz/mind.js#is_object)
* [internet()](https://github.com/aliyilmaz/mind.js#internet)

---

## getLocation()

Ziyaretçi konumunu enlem,boylam söz diziminde belirtilen element(ler)e veya ikinci parametrede belirtilen fonksiyon içine atamaya yarar. 

[Demo](https://aliyilmaz.github.io/mindjs/examples/getLocation.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/actionGet.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/actionPost.html)

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
Ziyaretçiyi belirtilen adrese yönlendirmeye yarar. Üç parametre alır. İlk parametre yönlenecek adresi, ikinci parametre saniye cinsinden bekleme süresini, üçüncü parametre ise kalan saniyelerin gösterileceği element(ler)i temsil eder.

[Demo](https://aliyilmaz.github.io/mindjs/examples/redirect.html)

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

## listening()

Belirtilen kodların gerçek zamanlı veya belirli aralıklarla çalışmasını sağlar.

[Demo](https://aliyilmaz.github.io/mindjs/examples/listening.html)

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>listening</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <h4>Gerçek zamanlı</h4>
        <div id="real-time"></div>
        <hr>
        <h4>Belirli aralıkta (5 saniyede bir)</h4>
        <div id="pedding-time"></div>
        <script>
            
            listening(()=>{

                if(internet()){
                    itemSetAttr('#real-time', 'style', 'color:green;');
                    changeContent('#real-time', 'İnternet bağlantısı var');
                } else {
                    itemSetAttr('#real-time', 'style', 'color:red;');
                    changeContent('#real-time', 'İnternet bağlantısı yok');
                }

            });

            listening(()=>{

                if(internet()){
                    itemSetAttr('#pedding-time', 'style', 'color:green;');
                    changeContent('#pedding-time', 'İnternet bağlantısı var');
                } else {
                    itemSetAttr('#pedding-time', 'style', 'color:red;');
                    changeContent('#pedding-time', 'İnternet bağlantısı yok');
                }

            }, 5000);
        </script>
    </body>
    </html>

---

## appendItem()

Belirtilen element(ler)'in, sahip oldukları içeriğinin sonuna içerik eklemeye yarar. Element(ler) eğer bir form elemanıysa `value` olarak atama yapar, eğer başka tür element(ler)se içeriğine `innerHTML` yaklaşımıyla atama yapar.

[Demo](https://aliyilmaz.github.io/mindjs/examples/appendItem.html)

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

Belirtilen element(ler)'in içeriğini, belirtilen içerikle değiştirmeye yarar. Element(ler) eğer bir form elemanıysa `value` olarak güncelleme yapar, eğer başka tür element(ler)se içeriğine `innerHTML` yaklaşımıyla değiştirir.

[Demo](https://aliyilmaz.github.io/mindjs/examples/changeContent.html)

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
        <textarea id="status"></textarea>
        <hr>
        <input type="text" id="status">
        <hr>
        <select>
            <option id="status">Test1</option>
            <option value="">Test2</option>
        </select>
        <hr>
        <input type="checkbox" id="status" value="Test 1">
        <label> Test 1</label><br>
        <input type="checkbox" value="Test 2">
        <label> Test 2</label><br>
        <input type="checkbox" value="Test 3">
        <label> Test 3</label><br><br>
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

## copyItem()

Belirtilen element(ler)i belirtilen element(ler)e kopyalamaya yarar.

[Demo](https://aliyilmaz.github.io/mindjs/examples/copyItem.html)


    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>copyItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <button>Ekle</button>
        <hr>
        <div id="elements">
            <div class="form-group">
                <input type="checkbox" value="Test 1">
                <label> Test 1</label><br>
                <input type="checkbox" value="Test 2">
                <label> Test 2</label><br>
            </div>
            <div class="form-group">
                <input type="file">
            </div>
            <div class="form-group">
                <input type="file" multiple>
            </div>
            <div class="form-group">
                <input type="text">
            </div>
            <div class="form-group">
                <input type="text">
            </div>
            <div class="form-group">
                <textarea cols="30" rows="4"></textarea>
            </div>
            <div class="form-group">
                <label for="type">Single select 1</label>
                <select>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Volvo">Volvo</option>
                </select>
            </div>
            <div class="form-group">
                <label for="type">Single select 2</label>
                <select>
                    <option value="Audi1">Audi1</option>
                    <option value="BMW1">BMW1</option>
                    <option value="Mercedes1">Mercedes1</option>
                    <option value="Volvo1">Volvo1</option>
                </select>
            </div>
            <div class="form-group">
                <label for="type">Multi select 1</label>
                <select name="cars" id="cars" multiple>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div class="form-group">
                <label for="type">Multi select 2</label>
                <select name="cars" id="cars" multiple>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <br>
        <hr>
        <div id="example">

        </div>
        <script>
            clickItem('button', function(){
                //removeItem('#example div.form-group select');
                //copyItem('#elements div.form-group select', '#example');

                removeItem('#example div.form-group');
                copyItem('#elements div.form-group', '#example');
            })
            
        </script>
    </body>
    </html>


---

## itemSetAttr()

HTML element(ler)ine alt özellik belirtmeye yarar.

[Demo](https://aliyilmaz.github.io/mindjs/examples/itemSetAttr.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/hideItem.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/showItem.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/removeItem.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/clickItem.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/keyupItem.html)


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

## changeItem()

`select`, `radio` veya `checkbox` gibi seçim yapmaya izin veren element(ler)in değişimini yakalamaya yarar.

[Demo](https://aliyilmaz.github.io/mindjs/examples/changeItem.html)


    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>changeItem</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>

        <p>Select a new car from the list.</p>

        <select>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Volvo">Volvo</option>
        </select>
        
        <p>When you select a new car, a function is triggered which outputs the value of the selected car.</p>
        
        <p id="demo"></p>
        <h1 id="demo"></h1>
        <input id="demo"><br>
        <textarea id="demo"></textarea><br>
        <input type="checkbox" id="demo" value="Test 1">
        <label> Test 1</label><br>
        <input type="checkbox" value="Test 2">
        <label> Test 2</label><br>
        <input type="checkbox" value="Test 3">
        <label> Test 3</label><br><br>
        <select>
            <option id="demo">Test1</option>
            <option value="">Test2</option>
        </select>
        
        <script>
            changeItem('select', function(e){
                changeContent('#demo', 'Seçiminiz: '+e.value);
            });
            
        </script>
    </body>
    </html>

---

## formReset()

Belirtilen form'un tüm alanlarını temizlemek için kullanılır.

[Demo](https://aliyilmaz.github.io/mindjs/examples/formReset.html)

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

Belirtilen yazı yazma alan(lar)ında, belirtilen karakter uzunluğunda karakter belirtilmesini sağlar, girilen her karakter belirtilen karakter uzunluğundan düşülür ve yine belirtilen element(ler)de kaç karakter daha yazılabileceği gösterilir.

[Demo](https://aliyilmaz.github.io/mindjs/examples/charCounter.html)

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

## foreachArray()

Object, Json ve Array türündeki kümelerin elemanlarını, varsa anahtarlarını tek tek elde etmeye yarayan döngüdür.

[Demo](https://aliyilmaz.github.io/mindjs/examples/foreachArray.html)

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>foreachArray</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <div id="items"></div>
        <script>
            
            /* -------------------------------------------------------------------------- */
            /*                              ARRAY FOR FOREACH                             */
            /* -------------------------------------------------------------------------- */
            var cars = ["Saab", "Volvo", "BMW"];
            foreachArray(cars, function(type, value){
                appendItem('#items', value+'<br>');
            });

            appendItem('#items', '<hr>');

            /* -------------------------------------------------------------------------- */
            /*                             OBJECT FOR FOREACH                             */
            /* -------------------------------------------------------------------------- */
            var person = {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
            };
            
            foreachArray(person, function(type, value){
                appendItem('#items', value+'<br>');
            });
            
            appendItem('#items', '<hr>');

            /* -------------------------------------------------------------------------- */
            /*                              JSON FOR FOREACH                              */
            /* -------------------------------------------------------------------------- */
            var text = '{ "employees" : [' +
            '{ "firstName":"John" , "lastName":"Doe" },' +
            '{ "firstName":"Anna" , "lastName":"Smith" },' +
            '{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 
            foreachArray(text, function(type, value){
                appendItem('#items', type+'<br>'); // employees
                if(is_array(value)){
                    foreachArray(value, function(key, user){
                        appendItem('#items', '<br> ---'+user.firstName+' '+user.lastName);
                    })
                }
                
            });
        </script>
    </body>
    </html>

## is_array()

Belirtilen verinin dizi türünde olup olmadığını kontrol etmeye yarar.

[Demo](https://aliyilmaz.github.io/mindjs/examples/is_array.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/is_json.html)

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

[Demo](https://aliyilmaz.github.io/mindjs/examples/is_object.html)

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

---

## internet()

İnternet bağlantısının olup olmadığını öğrenmek için kullanılır.

[Demo](https://aliyilmaz.github.io/mindjs/examples/internet.html)

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>internet</title>
        <link rel="shortcut icon" href="#">
        <script src="../src/mind.js"></script>
    </head>
    <body>
        <div id="status"></div>
        <script>
            listening(()=>{

                if(internet()){
                    itemSetAttr('#status', 'style', 'color:green;');
                    changeContent('#status', 'İnternet bağlantısı var');
                } else {
                    itemSetAttr('#status', 'style', 'color:red;');
                    changeContent('#status', 'İnternet bağlantısı yok');
                }

            });
        </script>
    </body>
    </html>