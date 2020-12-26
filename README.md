# Noovies

Learning React Native with Expo building a Movie & TV Shows Discovery App from NomadCoder. 

## Summary

  - [Example](#example)
  - [How it Works](#how-it-works)
  - [Getting Started](#getting-started)
  - [Installing & Starting](#installing--starting)
  - [Deployment](#deployment)
  - [Built With](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Example

> Movie & TV List and Detail by Android

<div style="display:flex;">

<img src="https://user-images.githubusercontent.com/37660333/103150483-0518d480-47b8-11eb-8ee2-b28b17876bdf.png" width="200px" height="400px" style="margin-right:60px">

<img src="https://user-images.githubusercontent.com/37660333/103150486-0813c500-47b8-11eb-8a43-a2ce902821b3.png" width="200px" height="400px" style="margin-right:60px">

<img src="https://user-images.githubusercontent.com/37660333/103150670-9ccaf280-47b9-11eb-8154-bb078f9fe3a5.png" width="200px" height="400px">

</div>
</br>

> Search & Discovery by Android and IOS

<div style="display:flex;">
  
<img src="https://user-images.githubusercontent.com/37660333/103150484-05b16b00-47b8-11eb-820a-e1597945de7f.gif" width="200px" height="400px" style="margin-right:60px"/>

<img src="https://user-images.githubusercontent.com/37660333/103150481-034f1100-47b8-11eb-83f3-7f115d647e1e.gif" width="200px" height="400px" style="margin-right:60px"/>

<img src="https://user-images.githubusercontent.com/37660333/103150995-30ea8900-47bd-11eb-8d68-56b203746ab8.png" width="200px" height="400px" style="margin-right:60px"/>

</div>
</br>

> WEB

![web](https://user-images.githubusercontent.com/37660333/103150805-fa137380-47ba-11eb-95b7-45ad0c647d6e.png)



</br>

## How it Works

### 영화 & TV 프로그램 로딩

>1. 영화 혹은 TV 페이지 접근 시 해당 스크린의 Data Logic Component에서 axios를 통해 'TMDB'에서 제공하는 API에 최신, 상영 혹은 방영 예정, 인기 영화 혹은 TV 프로그램 데이터 요청
>2. Response로 나온 결과값 안에 각 영화 정보를 수평 혹은 수직 리스트에 존재하는 각각의 Slider, Poster Component 등에 Data를 Mapping 시킨 후 화면에 출력

<br>

### 영화 & TV 프로그램 작품 검색

>1. 스크린 내부의 검색 바를 통해 검색 값(Search Term) 제출
>2. 해당 스크린의 Data Logic Component에서 axios를 통해 'TMDB'에서 제공하는 API에 검색 값을 바탕으로 영화 혹은 TV 프로그램 작품 검색 결과 데이터 요청
>3. Response로 나온 결과값 안에 각 영화 혹은 TV 프로그램 정보를 각각 Poster Component에 Mapping 시킨 후 화면에 출력

<br>

### 영화 & TV 프로그램 상세 페이지

>1. 영화 리스트, TV 프로그램 리스트 와 검색결과 스크린의 포스터를 클릭하면 상세 페이지로 이동
>2. 해당 스크린에 접근 시 스크린 내부의 Data Logic Component에서 axios를 통해 'TMDB'에서 제공하는 API에 해당 작품의 상세 정보 요청
>3. Response로 나온 결과값 안에 모든 정보를 각각의 형태에 맞춰 Component에 Mapping 시킨 후 화면에 출력

<br>

### 영화 추천 페이지

>1. 해당 스크린에 접근 시 스크린 내부의 Data Logic Component에서 axios를 통해 'TMDB'에서 제공하는 API에 별도의 필터가 존재하지 않는 Discover API를 통한 무작위의 영화 포스터 Data 요청

>2. Response로 나온 결과값 안에 모든 정보를 각각의 형태에 맞춰 Component에 Mapping 시킨 후 Stack 형태로 겹쳐 보이도록 화면에 출력

>3. Animated와 PanResponder를 통해 Tinder에서 제공하는 슬라이더와 같은 효과를 갖추어 보이도록 구성

</br>

## Getting Started

이 지침을 따르시면 로컬 PC에서 개발과 테스트를 위한 해당 프로젝트의 사본을 실행, 설치, 배포시킬 수 있습니다.

### Prerequisites

프로젝트를 실행시키기 위해 다음 프로그램들이 필요합니다.

```
- NPM (https://nodejs.org/en)
- Git (https://git-scm.com)
```

프로젝트를 실행시키기 위해 다음 중 최소 1개가 필요합니다.

```
- Android Studio (https://developer.android.com/studio)
- Xcode (https://developer.apple.com/kr/xcode/ide/)
- Android / IOS Device (Your Private Device)
- Web Browser
```

## Installing & Starting
해당 프로젝트의 사본을 설치 및 실행하기 위해 다음 단계들을 거쳐야 합니다.

- git을 통해 로컬에 프로젝트 Clone 하기

  > 'https://github.com/gangslee/nomflix.git' 를 통해 사용자의 로컬 PC로 프로젝트를 Clone 합니다.

* Window의 경우 Git Bash 등을 통해 입력합니다.
* Linux, MacOS 등등에서는 Terminal을 통해 입력합니다.
* GitHub Desktop을 통해서도 Clone이 가능합니다.

- 로컬 프로젝트의 NPM Update 하기

  > 로컬 프로젝트가 설치 된 위치에서 다음 명령어를 통해 앞서 설치한 NPM 패키지들을 Update 합니다.

  ```
  npm update
  ```

- 에뮬레이터 / 시뮬레이터 설치 및 실행 하기

  > Android Studio 혹은 Xcode를 통해 가상 디바이스를 사용할 경우 에뮬레이터 혹은 시뮬레이터를 설치 및 샐행시켜야 합니다.

- 프로젝트 실행하기
  > 로컬 프로젝트가 설치 된 위치에서 다음 명령어를 통해 프로젝트를 실행합니다.
  ```
  npm start
  ```
  > 추가 옵션은 다음과 같습니다.
  ```
  a - Open as Android 
  i - Open as IOS
  w - Open as Web
  ```

## Deployment

> 로컬 프로젝트가 설치 된 위치에서 다음 명령어를 통해 프로젝트를 build 합니다.

```
expo build:android - Build with Android
expo build:ios - Build with IOS
expo build:web - Build with Web
```

- 생성된 build 산출물들을 플레이스토어 / 앱스토어에 등록, 웹의 경우 웹 서버의 root directory에 복사 후 서버를 재실행 시켜야 합니다.

## Built With

- [ReactNative](https://ko.reactjs.org/) - 모바일 애플리케이션 프레임워크
- [Expo](https://expo.io/) - React Native 개발, 배포 도구
- [TMDB](https://www.themoviedb.org/) - 영화 & TV 프로그램 API 제공

## Authors

- **이경수(grandnet1225@gmail.com)** - [gangselee](https://github.com/gangslee)

## License

[![License](https://img.shields.io/badge/license-mit-blue)](http://badges.mit-license.org)

- Licensed under the [MIT License](LICENSE)