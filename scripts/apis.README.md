# Entry: https://findyouu.xyz



## 1. ctrl+F

API address: https://findyouu.xyz/api/scripts/find-word

methods: POST
location: /api/scripts/find-word
body: {
    "video_id": string(유튜브 영상의 url중 id),
    "keyword": string(영상 시청시 검색 내용)
}

return ==> 각 검색어를 포함하는 구절과 시간을 리턴.

요약: 
Input: 시청중인 영상의 video_id와 검색 내용을 보내시면
Output: 각 검색어를 포함하는 구절과 시간을 리턴받을 수 있습니다.



## 2. 영상 로드 및 다운

API address: https://findyouu.xyz/api/scripts/load

methods: POST
location: /api/scripts/load

body: {
    "video_id": string(유튜브 영상의 url중 id)
}

return ==> 요청한 영상의 자막을 리턴.

영상이 없으면 영상을 다운 받아서 보내주고,
영상이 있다면 영상을 그냥 보내줍니다.

요약:
Input: 동영상의 id를 전달하면
Output: 해당 영상의 자막을 받을 수 있습니다.



## 3. 신뢰도 계산

API address: https://findyouu.xyz/api/ml/freq

methods: POST
location: /api/ml/freq
body: {
    "video_id": [string] (유튜브 검색창에 나오는 영상들의 video_id 배열. 개수는 5~10개 정도로..?)
    "keyword": string(유튜브 검색창에서의 검색 내용)
}

return ==> 각 영상의 video_id에 대응하는 신뢰도 리턴.

요약:
Input: 유튜브 검색창에서 검색한 결과로 나오는 영상들의 id(5~10개)와 검색한 내용(키워드)을 보내시면
Output: 각 영상에 대한 신뢰도를 리턴받을 수 있습니다.



## 4.QA시스템

API address: https://findyouu.xyz/api/ml/qa

methods: POST
location: /api/ml/qa
body: {
    "video_id": string(유튜브 영상의 url중 id),
    "question": string(자막 내에서의 질문 내용)
}

return ==> QA모델을 이용해 질문(question)에 대한 답을 리턴받을 수 있습니다.

요약:

Input: 영상의 id와 질문 내용을 보내면

Output: 해당 영상에서 질문에 대한 답을 리턴받을 수 있습니다.



## 5.summarization

API address: https://findyouu.xyz/api/ml/summarization

methods: POST
location: /api/ml/summarization
body: {
    "video_id": string(유튜브 영상의 url중 id)
}

return ==> summarization을 통해 영상의 내용을 요약해준다.

요약:

Input: 영상의 id를 보내면

Output: 해당 영상의 요약 내용을 리턴받을 수 있습니다.



## 6.STT(아직 리턴값 미정)

API address: https://findyouu.xyz/api/ml/stt

methods: POST
location: /api/ml/summarization
body: {
    "video_id": string(유튜브 영상의 url중 id)
}

return ===> "자막 생성중.." 등의  진행 상황을  메세지로 전달.(STT가 시간이 오래걸리기 때문에)

​		  ===> STT가 다 될때까지 기다리면 자막을 전달.

요약:

input: 영상의 id를 보내면

Output: STT가 진행되고, 해당 영상의 STT 진행 상황을 리턴.