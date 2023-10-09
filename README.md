# MCQ TEST

#### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).


javascript
let greeting;
greetign = {};
console.log(greetign);


- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

#### Answer: B: ReferenceError: greetign is not defined

### Explanation:
In the code, there is a typo when declaring the variable greeting as greetign. As a result, JavaScript does not recognize greetign, and it throws a ReferenceError because the variable is not defined.

#### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");


- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

#### Answer:D: 3

### Explanation:
The sum function is called with arguments 1 and "2". JavaScript performs type coercion and converts the number 1 to a string to perform the addition, resulting in the string concatenation of "1" and "2", which equals "12". Finally, JavaScript converts "12" back to a number, resulting in 3.

#### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

#### Answer:A: ['🍕', '🍫', '🥑', '🍔']

### Explanation:
The info.favoriteFood property is initially set to the first element of the food array, which is "🍕". Later, it is reassigned to "🍝". However, this reassignment does not affect the original food array. Therefore, when you log food, it remains unchanged.

#### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());


- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

#### Answer:B: Hi there, undefined

### Explanation:
The sayHi function expects an argument name, but it is called without an argument. When you call sayHi() without providing a name, the name variable inside the function is undefined. The function returns "Hi there, undefined" as the output.

#### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);


- A: 1
- B: 2
- C: 3
- D: 4

#### Answer:A: 1

### Explanation:
The forEach loop iterates over the nums array and increments the count variable whenever a truthy value is encountered. In JavaScript, 0 is considered falsy, so it does not increment the count. Therefore, the final value of count is 1

# Laska

## [LaskaLiveLink Here)


Welcome to the Yoga Training Event Management Website! This website is designed to provide you with a seamless experience in managing your yoga training events, accessing class schedules, learning about our top yoga trainers, reading informative blogs, and more. Below are some of the website's key specialties and functionalities:

## Specialties:

1. *Responsive Design:* Our website is designed to be fully responsive, ensuring an optimal viewing experience on all devices, including desktops, tablets, and mobile phones.

2. *Comprehensive Class Information:* Navigate to the "Classes" section to access detailed schedules of yoga classes. Get in-depth reviews of each class and explore additional information about our experienced trainers. Click on the "Learn More" button to find out more about a particular trainer.

3. *Yoga Trainer Profiles:* Under the "Trainers" section, we showcase our top yoga trainers. You can learn about their backgrounds, expertise, and philosophies, helping you make an informed decision about your training.

4. *Event Management:* We provide a platform for you to create and manage yoga events. Whether you're an instructor or a participant, this feature streamlines the event management process.

5. *Informative Blog Section:* Explore our blog section to access insightful articles and resources related to yoga. Learn and enhance your knowledge of yoga practices, techniques, and wellness.

## Functionality/Features:

- *User Authentication:* We use Google Firebase authentication to ensure secure and seamless login and logout functionality. Your personal information is kept safe, and you can access your account securely.

- *Restricted Access:* Certain content and features are restricted to authenticated users only. After logging in with valid credentials, you can access exclusive content and resources.

---

Thank you for choosing our Yoga Training Event Management Website. We're committed to providing you with a holistic yoga experience and assisting you in your journey towards better health and well-being. Explore our website, enroll in classes, connect with our trainers, and enjoy our informative blog posts. Namaste!
