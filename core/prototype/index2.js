// 문제 2. 배열에 대해 살펴보면서 어떻게 배열 내장함수(forEach, map, filter 등)을 사용할 수 있었는지에 대해 프로토타입 관점에서 설명해보기

var arr = [1, 2];
arr.forEach((v) => console.log(v)); // forEach 사용이 가능한 이유는?

// 힌트. arr와 Array를 콘솔에 찍어보면서 관계에 대한 도식도를 한번 그려보길 바란다.
console.dir(arr);
console.dir(Array);
