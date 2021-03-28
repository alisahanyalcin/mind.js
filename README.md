# mindjs nedir?

mind.js, geliştiriciler için tasarlanmış javascript kod çerçevesidir. Proje arayüzlerinde gerek duyulan javascript ihtiyaçlarını, geliştirici deneyimini iyileştirerek sunmayı amaçlar. 

## Edinme

İndirmek için [TIKLAYIN](https://github.com/aliyilmaz/mind.js/archive/refs/heads/main.zip)

## Kullanım
İndirdiğiniz zip dosyasında bulunan `src` alt dizini içindeki mind.js dosyasını kullanmanız gerekmektedir.

##### Örnek

    <script src="https://github.com/aliyilmaz/mind.js/raw/main/src/mind.js"></script>


## Metotlar

##### Sistem

* [getLocation()](https://github.com/aliyilmaz/mind.js#getlocation)
* [actionGet()](https://github.com/aliyilmaz/mind.js#actionget)
* [actionPost()](https://github.com/aliyilmaz/mind.js#actionpost)
* [redirect()](https://github.com/aliyilmaz/mind.js#redirect)

##### Element

* [appendItem()](https://github.com/aliyilmaz/mind.js#appenditem)
* changeContent()
* itemSetAttr()
* hideItem()
* showItem()
* removeItem()

##### Olaylar

* clickItem()
* keyupItem()
* formReset()

##### Doğrulama

* is_array()
* is_json()
* is_object()

---

### getLocation()

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

### actionGet()

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

Belirtilen adrese, belirlenen verileri göndermeye, ikinci parametrede ise yanıtını fonksiyonun içine atamaya yarar.

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
                actionPost('../../form/api/form', formSerialize('form'), function(response){
                    console.log(response);
                    changeContent('#status', response);
                });
            // console.log('Hello world');
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

Belirtilen element(ler)'e içerik eklemeye yarar. Element eğer bir form elemanıysa `value` olarak atama yapar, eğer başka tür bir elementse içeriğine `innerHTML` yaklaşımıyla atama yapar.

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

