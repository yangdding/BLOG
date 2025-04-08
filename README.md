이 프로젝트는 [벨로그](https://velog.io)에서 영감을 얻었습니다.

## [라이브 데모](https://gatsby-starter-hoodie.netlify.app)

## 주요 기능

- 마크다운
- 코드 하이라이팅
- Katex 문법
- 다크모드 (OS 환경설정과 연동)
- 태그 분류
- 시리즈 분류
- 반응형 웹
- SEO
- Giscus

### 프로젝트 구조

아래 프로젝트 구조를 참고하여 커스터마이징 할 수 있습니다 🙊.

```
├── node_modules
├── contents
│   └── posts // your articles are here
├── public // build outputs are here
└── src
    ├── assets
    │   └── theme // theme config is here
    ├── components
    │   └── Article
    │       └── Body
    │           └── StyledMarkdown
    │               └── index.jsx // markdown styles are here
    │   ...
    ├── fonts // webfonts are here
    ├── hooks
    ├── images
    ├── pages // page components are here
    ├── reducers
    ├── templates // post components are here
    └── utils
```
---
