//서버를 띄우기 위한 기본 셋팅 (express 라이브러리)
const { response } = require('express');
const express = require('express'); 
const app = express();

app.listen(8080,function(){ //서버를 열수있다: app.listen(서버띄울 포트,띄운후 실행할 코드)<--8080포트에 서버 띄워주세요
    console.log('listening on 8080') //8080 port로 웹서버를 열고 잘 열리면 콘솔창 출려해주세요
}); 

app.get('/write',function(요청,응답){ //pet으로 방문을 하면 pet 관련 안내문을 띄워주자
 응답.sendFile(__dirname+'/write.html');
});

app.get('/',function(요청,응답){ //  '/' 하나만 쓰면 홈(home) 이다.
    응답.sendFile(__dirname+ '/index.html'); // .sendFile(보낼파일 경로)
   });