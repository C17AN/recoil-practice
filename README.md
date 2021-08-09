리코일은 페이스북에서 만든 전역 상태 라이브러리로, 기존 리덕스를 사용할 때 겪었던 상태 관리의 복잡함을 크게 줄일 수 있다.

# 기본 구성 요소

---

## Atom

리덕스의 스토어가 갖는 상태에 대응하는 값을 리코일에서는 `atom` 이라고 한다.
`atom`은 전역 상태처럼 여러 컴포넌트에서 공유될 수 있으며, 업데이트와 구독이 가능하다는 특징이 있다.

```jsx
const counterState = atom({
  key: "counterState",
  default: 0,
});
```

`atom`은 반드시 고유한 키를 가진다. (키의 이름이 상태값이라고 생각하자.)
`atom`을 읽고 쓰려면 `useRecoilState` 라는 훅을 사용한다.

```jsx
function Counter = () => {
	const [count, setCount] = useRecoilState(counterState);
	return (
		<button onClick = {() => setCount((count) => count + 1)}>+</button>
	)
}
```

`useRecoilState` 는 `useState` 와 아주 유사하지만, 전역 상태를 조작한다는 차이가 있다.

> `useState` 훅처럼 익숙한 방법으로 상태를 업데이트할 수 있다는 것이 아주 큰 장점인 것 같다.
> 리덕스를 사용할 때는 리덕스와 디스패치 등 비교적 복잡한 로직들을 일일히 구현해야 했던 것에 비해 굉장히 편리하다.

---

## Selector

`Selector`는 `atom` 이나 또다른 `Selector`를 입력으로 받아들여 구독하고 정해진 로직을 실행하는 **순수 함수다.**

(react-redux의 `useSelector`와는 다른 역할이다.
`useSelector` 가 전역 상태를 불러오는 역할이었다면, 리코일의 셀렉터는 `useEffect` 의 역할에 더 가까운 듯 하다.)

> 순수 함수란 : 동일한 인자를 주었을 때 언제나 동일한 값을 리턴하고, 외부로부터 영향을 받지도, 주지도 않는 함수

즉, Atom은 원자라는 뜻처럼 최소한의 상태값만을 갖고, 이를 기반으로 하는 데이터를 계산할 때 사용한다.

---

```jsx
const CounterUnitState = selector({
  key: "CounterUnitState",
  get: ({ get }) => {
    // 이전에 정의한 counterState 아톰에 접근한다.
    // 해당 아톰의 변화를 구독한다.
    const counter = get(counterState);
    const unit = "회";
    return `${counter}${unit}`;
  },
});
```

`selector` 함수의 `get` 프로퍼티는 계산을 수행할 함수가 된다.
이 함수에서는 다른 `atom` 이나 `selector` 에 접근할 수 있으며, 참조하는 `atom`과 `selector`의 변화를 구독한다.

`selector`를 읽고 쓸 때는 `useRecoilvalue` 라는 훅을 사용한다.

`useRecoilValue`는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환한다.

```jsx
function Counter = () => {
	const [count, setCount] = useRecoilState(counterState);
	const counterUnit = useRecoilValue(counterUnitState);

	return (
		<>
			<div>현재 클릭한 횟수 : {counterUnit}</div>
			<button onClick = {() => setCount((count) => count + 1)}>+</button>
		</>
	)
}
```

---

# 리코일 사용하기

## RecoilRoot

리덕스에서 `Provider` 같은 컴포넌트로 루트 컴포넌트를 감쌌던 것처럼, 리코일에서는 `RecoilRoot` 컴포넌트를 통해 모든 컴포넌트를 감싼다.

```jsx
import React from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <... 하위 컴포넌트들 />
    </RecoilRoot>
  );
}
```

별도의 스토어 설정은 필요하지 않은 듯 하며, `atom`과 `selector` 단위로 전역 상태를 조작하는 법만 익히면 너무나도 간단하게 상태를 전역으로 관리할 수 있다.
