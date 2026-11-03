/**
 * ============================================================
 *  작업물(작품) 목록 — 여기에 본인의 스파인 작업물을 추가하세요.
 * ============================================================
 *
 * 1) assets/ 폴더 아래에 작업물별로 폴더를 하나씩 만드세요.
 *    예: assets/dragon-boss/dragon.json, dragon.atlas, dragon.png
 *
 * 2) 스파인 에디터에서 Export 할 때:
 *    - Format: Json (텍스트, 용량 크지만 디버깅 쉬움) 또는 Binary(.skel, 용량 작음)
 *    - Atlas 텍스처를 함께 내보내기 (Pack 체크)
 *    - "Nonessential data 포함" 여부는 취향껏 (포함 시 용량 증가)
 *
 * 3) 아래 works 배열에 항목을 하나 추가하세요. 필드 설명:
 *    id          : 고유 식별자 (영문/숫자, 공백 없이)
 *    title       : 카드에 표시될 작업물 이름
 *    role        : 담당 역할 (예: "리깅 & 애니메이션", "이펙트")
 *    tags        : 검색/필터용 태그 배열
 *    description : 작업물 설명 (짧게)
 *    skeleton    : json 또는 skel 파일 경로
 *    atlas       : atlas 파일 경로
 *    animation   : 처음 재생할 애니메이션 이름 (스파인 에디터에서 확인)
 *    skin        : (선택) 기본으로 보여줄 스킨 이름
 *    backgroundColor : 뷰어 배경색 (16진수 RGBA, 예: "#1a1a2eff")
 *    spineVersion : 이 작업물을 내보낸 스파인 에디터 버전 (예: "4.2"). 참고용 표시.
 *    thumbnail   : (선택) 카드에 보여줄 미리보기 이미지 경로. 클릭하기 전에도
 *                  작업물이 뭔지 보이게 해줌. 없으면 기본 플레이스홀더로 표시됨.
 *                  - 정적 이미지: .png/.jpg (스파인 에디터에서 캡처하거나 스크린샷)
 *                  - 움직이는 미리보기: .gif (브라우저에서 자동 재생됨, 별도 코드 불필요)
 *                  - 권장 비율 4:3, 너무 큰 용량은 로딩이 느려지니 1MB 이하 권장
 *
 * 팁: 스파인 버전은 내보낸 json 파일을 열어 최상단
 *     "skeleton": { "spine": "4.2.33", ... } 부분에서 확인할 수 있습니다.
 */

const works = [
  {
    id: "silent-battle",
    title: "사일런트 스킨 — 전투 모션",
    role: "원화 · 리깅 · 애니메이션",
    tags: ["슬레이 더 스파이어 2", "스킨 모드", "전투"],
    description:
      "슬레이 더 스파이어 2 사일런트 스킨 모드의 전투 애니메이션입니다. 달리기(RUN), 대기, 공격, 시전, 단검(shiv), 피격, 사망, 상점 대기 모션을 직접 제작했습니다. 아래 목록에서 애니메이션을 바꿔볼 수 있어요.",
    skeleton: "assets/silent-battle/silent.skel",
    atlas: "assets/silent-battle/silent.atlas",
    animation: "RUN",
    animations: ["RUN", "idle_loop", "attack", "cast", "shiv", "hurt", "die", "relaxed_loop"],
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/silent-battle/thumbnail.jpg",
  },

  {
    id: "silent-select",
    title: "사일런트 스킨 — 캐릭터 선택 화면",
    role: "원화 · 리깅 · 애니메이션",
    tags: ["슬레이 더 스파이어 2", "스킨 모드", "일러스트 애니메이션"],
    description:
      "캐릭터 선택 화면용 일러스트 애니메이션입니다. 망토가 바람에 흩날리는 12초 루프 연출입니다.",
    skeleton: "assets/silent-select/select_body.skel",
    atlas: "assets/silent-select/select_body.atlas",
    animation: "animation",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/silent-select/thumbnail.jpg",
  },

  {
    id: "silent-rest",
    title: "사일런트 스킨 — 휴식처",
    role: "원화 · 리깅 · 애니메이션",
    tags: ["슬레이 더 스파이어 2", "스킨 모드", "루프"],
    description:
      "휴식처(모닥불)에서 쉬는 모습의 루프 애니메이션입니다. 막(Act)별로 glory · hive · overgrowth 세 가지 버전이 있습니다.",
    skeleton: "assets/silent-rest/rest_char.skel",
    atlas: "assets/silent-rest/rest_char.atlas",
    animation: "glory_loop",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/silent-rest/thumbnail.jpg",
  },

  {
    id: "Hisui",
    title: "이터널 리턴 히스이 애니메이션",
    role: "리깅 & 애니메이션",
    tags: ["게임 일러스트 애니메이션", "액션", "리깅"],
    description: "이터널 리턴 히스이 일러스트를 리깅해 만든 애니메이션입니다.",
    skeleton: "assets/Hisui/할 수 있다 나라면.json",
    atlas: "assets/Hisui/할 수 있다 나라면.atlas",
    animation: "IDLE",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/Hisui/Hisui.png",
  },

  {
    id: "Hisuiskill",
    title: "히스이 스킬 연출 유니티 구동 영상",
    role: "이펙트 & 합성",
    tags: ["영상", "이펙트"],
    description: "유니티에서 스파인 캐릭터와 파티클 이펙트를 합성해 녹화한 영상입니다.",
    type: "video",
    media: "assets/Hisuiskill/Hisuiskill.mp4",
    thumbnail: "assets/Hisuiskill/thumbnail.png",
    backgroundColor: "#000000ff",
  },

  {
    id: "riding-dog",
    title: "탈것 — 개 몬스터",
    role: "리깅 & 애니메이션 (원화: 명일방주)",
    tags: ["몬스터", "4족 보행", "달리기"],
    description: "명일방주(Arknights)의 몬스터 이미지로 리깅과 애니메이션을 직접 작업했습니다. 걷기, 달리기, 공격, 피격 모션이 있습니다. 원화의 저작권은 원저작권자에게 있습니다.",
    skeleton: "assets/riding-dog/enemy_1000_gopro.skel",
    atlas: "assets/riding-dog/enemy_1000_gopro.atlas",
    animation: "run",
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/riding-dog/thumbnail.jpg",
  },

  {
    id: "spider",
    title: "거미 몬스터",
    role: "리깅 & 애니메이션 (원화: 명일방주)",
    tags: ["몬스터", "다족 보행"],
    description: "명일방주(Arknights)의 거미형 몬스터 이미지로 리깅과 애니메이션을 직접 작업했습니다. 이동, 공격 모션이 있습니다. 원화의 저작권은 원저작권자에게 있습니다.",
    skeleton: "assets/spider/enemy_1100_scorpn.skel",
    atlas: "assets/spider/enemy_1100_scorpn.atlas",
    animation: "Move",
    animations: ["Move", "Attack"],
    backgroundColor: "#1a1a2eff",
    spineVersion: "4.3",
    thumbnail: "assets/spider/thumbnail.jpg",
  },
];
