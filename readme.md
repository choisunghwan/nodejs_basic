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


참고:https://www.youtube.com/watch?v=pTm5E3jcOeY&list=PLfLgtT94nNq1qmsvIii_CAxFlD7tvB5NE&index=3