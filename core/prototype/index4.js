// 문제 4. 아래 예시에서 push는 이제 어떻게 해서 쓸 수 있는지 전에 문제를 풀었다면 알 수 있을 것이다.
// 그렇다면 hasOwnProperty는 어디서 나온 녀석이며 어떻게 쓸 수 있는 것인가에 대해 도식도를 그리면서 말해보자.

var arr = [1, 2];
arr.push(3);
arr.hasOwnProperty(2); // true
