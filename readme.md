
![ezgif com-gif-maker](https://user-images.githubusercontent.com/33335762/181879138-e2a32b80-55c0-4f71-80ed-80a6675d85fd.gif)




요약
- Node.js
- NoSQLDatabase (MongoDB)
- DB에 데이터 저장/출력법
- 서버제작(API)
+서버 배포,npm,bootstrp 등..


사전 지식
- html/css 기초
- javascript 기초문법



node.js 를 이용해서 javascript 문법으로 서버구축





--개발하면서 개념 정리--


***day 01 

서버 :  요청을 하면 요청한 내용을 보내주는 프로그램

서버 요청은 4개 방식이 있음
1. 읽기 (GET)
2. 쓰기 (POST)
3. 수정 (PUT)
4. 삭제 (DELETE)

예를 들어 
' 어떤 사람이 /list 라는 페이지를 GET 요청하면..
거기 해당하는 list.html파일을 보내줌 ' 이라고 코드를 작성하면 서버 개발이라고 할 수 있다.



***day 02 
HTML : 웹페이지에 글쓰고 그림 넣는 언어 / 특징: 안움직이고, 글 넣고 그림 넣고가 끝임.

javascript: html 조작과 변경을 위해 만들어짐, 다이나믹한 웹페이지를 바꿔주기 가능.

- javascript 해석은 누가할까? => 브라우저의 엔진 (크롬,익스플로어,파이어폭스,사파리..)
각 브라우저마다 사용하는 엔진이 다르다.
크롬:V8(겁나 좋음) / 익스플로어 : chakra

Node.js: 브라우저내에서 말고도 다른환경에서도 javascript 실행할 수 있게 도와줌
쉽게 말하면 자바스크립트 실행창,실행환경이다.(= 런타임)
그래서 브라우저 안켜도 node.js만 있으면 자바스크립트 문법 실행이 됨.

왜 하필 node.js로 서버를 만들어 쓰는것일까?
=> non-blocking i/o 이게 좋아서 그렇다고 함.
non-blocking i/o 란
예를 들어 영화사이트 서버가 있다고하자.
그럼 티켓 한장 두장 예매하는 사람이 있는가하면 200장을 예매하려는 사람이 있을 수 도 있다?ㅎ 
A: 1장
B: 1장
C: 200장
D: 2장
그렇다면 차례대로 1 장 처리 -> 1장 -> 200장 처리 -> 2장 처리 를 하게 되는데 이때 D 는 앞에 C가 예매한 200장 처리를 하는 동안 게속 기다려야된다.

하지만 non-blocking i/o는 빠르게 처리되는 순으로 처리하기 때문에
A B D C 순으로 처리가 된다고 보면된다.

***day 03
서버: 그냥 요청 처리하는 기계

Node.js 의 강점 : sns 나 채팅서비스 (특징: 요청이 매우 많음)
+ 요청이 많거나 오래걸리는 요청이 있어도 멈추거나 요청대기시간 X
+ 코드가 매우 짧고 쉬워서 빠른 개발 가능
+ pivoting 잘됨
+ 웹서비스에 많이 사용함. 웹서비스가 아닌경우에는 좀..(이미지 처리 서버가 필요하다면..c나 파이썬 추천)

일반서버: 요청이 많거나 오래걸리는 요청이 있으면 멈추거나 대기시간이 발생한다.

***day 04
express 라는 라이브러리를 사용해서 서버를 만들것임.
라이브러리: 코드를 쉽게 짜기위해 빌려쓰는 코드 모음집
npm: 라이브러리 설치를 도와주는 도구

package.jason: 어떤 라이브러리 설치를 했는지 기록하면 좋으니까 package.json 파일에다가 기록함

node_modules: 라이브러리에 필요한 자료를 담는 공간

=> node server.js (node 파일명 이름)

***day 05
npm install -g nodemon : nodemon 라이브러리 설치
nodemon 은 서버 수정후 저장시 자동으로 서버 껏다가 다시 켜주는 역할을 해준다.
이전에는 ctrl+c 를 직접 명령해주어야 했지만 nodemon을 사용하면 그러한 불편함 해소된다.

-g : 우리의 컴퓨터 모든 폴더에서도 nodemon을 사용할수 있게 해주세요~ (global)

=> nodemon server.js 로 실행해주면 된다.(nodemon 파일명 이름)
![image](https://user-images.githubusercontent.com/33335762/181879156-20850101-66ba-4540-bb81-440ad3415b8f.png)
참고:https://www.youtube.com/playlist?list=PLfLgtT94nNq1qmsvIii_CAxFlD7tvB5NE
