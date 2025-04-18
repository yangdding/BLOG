---
title: "개발 후기 - 블로그 만들기"
description:
date: 2025-04-08
update: 2021-04-04
tags:
  - 개발후기
series: "블로그 개발기"
---
최근에 Gatsby 기반의 블로그를 개발하고, Vercel을 통해 배포까지 완료했다. 배포하면서 꽤 다양한 시행착오를 겪었다. 이번 포스트에서는 그 과정과 느낀 점을 간단히 정리해보려고 한다.
---

## 🔧 개발 스택

- **Gatsby**  
  정적 사이트 생성기로, React 기반이라 커스터마이징이 쉬웠다.
- **Vercel**  
  CI/CD와 배포가 정말 간편했다. GitHub에 push만 해도 자동으로 배포되는 점이 특히 편리했다.
- **Markdown**  
  글 작성은 전부 Markdown으로! 간결하고 직관적인 문법 덕분에 에디터 없이도 작성이 가능했다.

---

## ⚠️ 삽질했던 부분

1. `pathPrefix` 설정이 안 맞아서 루트 경로에서 404가 발생했었다.
2. 댓글 컴포넌트인 `giscus` 설정을 안 했더니 오류가 발생해서, 결국 삭제했다.
3. robots.txt 관련 GraphQL 에러도 있었는데, `siteMetadata`에 `siteUrl`을 누락해서 생긴 문제였다.

---

## ✨ 깨달은 점

- 테마 하나 수정하는 것도 결국은 **React 컴포넌트 구조 이해**가 중요하다는 걸 다시 느낌.
- Gatsby 버전이 올라가면서 호환 안 되는 플러그인도 많아졌기 때문에 **패키지 업데이트는 신중히** 해야 한다.
- 배포 전에 로컬에서 한 번 더 `gatsby build` 테스트는 필수!

---

## 💬 마무리

지금은 기본적인 구조를 완성했지만, 앞으로는 완벽한 블로그를 만들기 위해 차근 차근 도전 해볼 생각이다. 블로그를 직접 만드는 건 생각보다 재밌는 일이었고, 나의 기록 공간으로도, 개발 실력 향상에도 큰 도움이 됐다.

앞으로 더 많이 작성하고, 발전시켜 나가보자.  


