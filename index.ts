// export 안하면 name 선언 못 함
// 이 파일이 모듈임
export {};

const name = "Park",
age = 27,
gender = "female";

const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

// 만약 sayHi(name, age) 이렇게 argument를 두개만 전달해주면 컴파일에러남
// argument가 세개인데 두개만 씀(내 실수), ts는 이걸 사전에 방지해줌
// 위의 함수 선언에서 argument옆에 ? 붙히면(gender? 이런식으로)
// 그 argument는 선택사항이 돼서 호출할 때 안써도 오류안남
sayHi(name, age, gender);
