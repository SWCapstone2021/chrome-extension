### 2강

1. alert("Hello");

2. document.querySelector('body').remove();

3. var bodyText = document.querySelector('body').innerText;

4. // 주석

5. Shift + Enter -> multi line

   ```javascript
   // body안에 있는 모든 텍스트를 추출
   var bodyText = document.querySelector('body').innerText;
   // bodyText의 모든 단어를 추출하고 숫자를 센다
   var bodyNum = bodyText.split(' ').length;
   // bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 MyNum에 담는다.
   var myNum = bodyText.match(new RegExp('\\b(the|is|was|hello)\\b', 'gi')).length;
   myNum + '/' + bodyNum + '(' + (myNum/bodyNum*100) + '%)';
   ```

### 5강

1. 디버깅 하기

   ![image-20210318120915140](../../../Users/consi/AppData/Roaming/Typora/typora-user-images/image-20210318120915140.png)

2. pop.js에서 명령을 내리면(javascript)에서 

## Chrome Extension Structure

이 곳에서는 익스텐션의 구조를 어떻게 짜야할지, 특히 자바스크립트 오브젝트를 생성하고 이를 활용하는 방법에 대해서 배운다. 또한 background context를 이용해서 데이터를 일관성 있게 유지하는 방법에 대해서 배운다. 이는 공식 Document나 생활 코딩이 아니라 Youtube에 있는 하나의 강의 [동영상](https://www.youtube.com/watch?v=Q_55oY2jX8I&list=PLAaf3-EPzrYPpyeIsQ2GGqvMqaahMJzqU&index=11)에서 확인할 수 있다.

1. Popup(app) 
2. Background(background)

## Google Chrome Extension Study

1. Execute Script in Content page [Chrome API link](https://developer.chrome.com/docs/extensions/reference/scripting/)

   Chrome Extension은 Background, Popup으로 나눌 수 있다. Background나 Popup에서 Content 페이지에 접근하기 위해서는 `chrome.tabs.query` 함수를 사용해야 한다. 이 함수의 Callbackfunction을 통해서 현재 Active한 Tab의 id를 알 수 있다. 이 후에는 `tabs[0].id`를 이용해서 `chrome.scripting.executeScript` 함수를 호출하고 이 호출의 파라미터로 사용된 함수 내부에서는 Content Page에 접근할 수 있다. 하지만 사용된 함수는 Context가 Content Page로 바뀌기 때문에 Background나 Popup Context로 부터 변수를 받아오기 위해서는 `Chrome.runtime.SencMessage` 함수나 `Chrome.storage.sync` 함수를 사용해야 한다. 이는 아래에서 설명하겠다.

   ```javascript
   chrome.tabs.query({ active: true, currentWindow: true },
      // 2. callback function
      function(tabs) {
         // 3. execute function or script
         // tips: In this function document object is for content page
         chrome.scripting.executeScript({
               target: { tabId: tabs[0].id },
               function: print,
               // 4. this handling function
               // tips: all results are contained in array and you can get a result by .result property
         });
      }
   );
   ```

2. Accesse Storage API [Chrome API storage link](https://developer.chrome.com/docs/extensions/reference/storage/)
   
   `Chrome.storage.sync` or `Chrome.storage.local` API를 사용하면 익스텐션에 관련된 데이터를 저장할 수 있다.

   이건 `storage.sync` 버전이다. sync버전은 인터넷에 연결되어 있을 경우 구글 크롬 계정에 연결된 모든 계정에 데이터를 자동으로 공유하는 기능을 가지고 있다.
   ```javascript
   chrome.storage.sync.set({key: value}, function() {
   console.log('Value is set to ' + value);
   });

   chrome.storage.sync.get(['key'], function(result) {
   console.log('Value currently is ' + result.key);
   });
   ```

   `storage.local` 버전은 `storage.sync`버전 처럼 계정 간의 공유를 하지 않는다. 공유를 하지 않는다는 점이 유일한 차이점이다.
   ```javascript
   chrome.storage.local.set({key: value}, function() {
   console.log('Value is set to ' + value);
   });

   chrome.storage.local.get(['key'], function(result) {
   console.log('Value currently is ' + result.key);
   });
   ```

   `storage` API를 사용할 때 storage에 뭐가 저장되있는지 궁금할 때가 있다. 이 때 사용할 수 있는 코드이다.
   
   ```javascript
   chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
    ```

3. Communicate with other components [Chrome API passing message link](https://developer.chrome.com/docs/extensions/mv3/messaging/)

   `chrome.runtime` API 를 사용하면 다른 component간의 message를 주고 받을 수 있다. 이 기능은 content와 extension간의 메시지를 공유할 때 특히 자주 사용된다. 이 기능은 크게 3가지로 나눌 수 있다. 첫번째, send message from extension to content. 두번째, send message from content to extension. 세번째, receive message in any context. 아래에서 이 가능들에 대해서 코드와 함께 설명하겠다. 

   `send message from extension to content`
   ```javascript
   chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
   console.log(response.farewell);
   });
   ```

   `send message from content to extension`
   ```javascript
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
         console.log(response.farewell);
      });
   });
   ```

   `receive message in any context`
   ```javascript
   chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
         console.log(sender.tab ?
                     "from a content script:" + sender.tab.url :
                     "from the extension");
         if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
      }
   );
   ```

4. Background Service Workers [Chrome API service worker](https://developer.chrome.com/docs/extensions/mv3/background_pages/)
   
   Once it has been loaded, a service worker keeps running as long as it is performing an action, such as calling a Chrome API or issuing a network request. Additionally, the service worker won't unload until all visible views and all message ports are closed.

5. Content Scripts [Chrome API Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
   
   Content scripts live in an isolated world, allowing a content script to make changes to its JavaScript environment without conflicting with the page or other extensions' content Scripts.

   ```javascript
   var greeting = "hola, ";
   var button = document.getElementById("mybutton");
   button.person_name = "Roberto";
   button.addEventListener("click", () =>
   alert(greeting + button.person_name + ".")
   , false); // 이건 사용하면 에러 납니다.
   ```

   ```javascript
   var imgURL = chrome.runtime.getURL("images/good.png");
   var title = document.querySelectorAll('#metadata-line');
   for (i = 0; i < title.length; i++) {
      var node = document.createElement("SPAN");
      var textnode = document.createTextNode(`키워드 ${i}`);
      // var imagenode = document.createElement("img").src = imgURL; // 여기서 에러가 나서 중단 했는데 일단 조금 더 기달.
      node.style.color = "red";
      node.appendChild(textnode);
      // node.append(imagenode) // appendChild는 사용하면 Node 전용입니다. Append 사용
      title[i].appendChild(node);
   }
   ```

   ```javascript
   var imgURL = chrome.runtime.getURL("images/myimage.png");
   document.getElementById("someImage").src = imgURL;
   ```

## 크롬 익스텐션 참고

1. improve youtube [link](https://github.com/code4charity/YouTube-Extension)