// 문제 3. 만약 인스턴스가 동일한 이름의 프로퍼티 또는 메서드를 가지고 있는 상황이라면 출력결과는 어떻게 될까?
// 힌트. console.dir(iu)에 대한 그림을 한번 그려보길 바란다. (콘솔 찍지 말고!)

var Person = function (name) {
  this._name = name;
};

Person.prototype.getName = function () {
  return this._name;
};

var iu = new Person("IU");
iu.getName = function () {
  return "대세는 " + this._name;
};
console.log(iu.getName()); // ??
