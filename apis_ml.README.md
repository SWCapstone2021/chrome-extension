Entry: https://findyouu.xyz



## 1. 신뢰도 계산(cos-similarity)

***이제 영상의 제목으로 비교하여 검색어를 보낼 필요가 없습니다.

***

API address: https://findyouu.xyz/api/ml/freq

methods: POST
location: /api/ml/freq
body: {
    "video_id": [string] (유튜브 검색창에 나오는 영상들의 video_id 배열. 개수는 5개 정도로..?)
}

return값 형식 ==> 

```json
{	
   "result": {[
{
"video_id": string,
"credibility": string
},
....
]}
}
```

** result가 자막의 배열임에 주의

요약:
Input: 유튜브 검색창에서 검색한 결과로 나오는 영상들의 id와 검색한 내용(키워드)을 보내시면
Output: 각 영상에 대한 신뢰도를 리턴받을 수 있습니다.



## 2.연관 자막 검색(Word-Embedding)

API address: https://findyouu.xyz/api/ml/association

methods: POST
location: /api/ml/association
body: {
    "video_id": [string] (유튜브 검색창에 나오는 영상들의 video_id 배열. 개수는 5개 정도로..?)
}

return 값 형식==> 

```json
{
    "video_id": string,
    "keyword": string,
    "result": [
        {
            "start" : string (시작시간),
            "text": string (자막 내용)
        },
        {   
        },
        ...
    ]
    
}
```

** result가 자막의 배열임에 주의

요약:  keyword와 video_id를 보내면

입력한 keyword와 비슷한 내용을 가진 자막을 리턴합니다.

(워드 임베딩은 테스트 결과 문제가 있어 에러가 많이 발생합니다.)

## 3.QA

API address: https://findyouu.xyz/api/ml/qa

methods: POST
location: /api/ml/qa
body: {
    "video_id": string(유튜브 영상의 url중 id),
    "question": string(자막 내에서의 질문 내용)
}

return값 형식 ==> 

```json
{
  "video_id": string,
  "question": string,
  "answer": string
}
```

요약:

Input: 영상의 id와 질문 내용을 보내면

Output: 해당 영상에서 질문에 대한 답을 리턴받을 수 있습니다.



## 4.summarization

API address: https://findyouu.xyz/api/ml/summarization

methods: POST
location: /api/ml/summarization
body: {
    "video_id": string(유튜브 영상의 url중 id)
}

return 값 형식 ==>  

```json
{
    "video_id": string,
    "summarization": string
}
```

요약:

Input: 영상의 id를 보내면

Output: 해당 영상의 요약 내용을 리턴받을 수 있습니다.
