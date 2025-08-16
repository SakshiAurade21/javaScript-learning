Here's the complete `README.md` file in a single code block for easy copying:

```markdown
# 🚀 JavaScript Execution Context & Call Stack

This guide explains **JavaScript Execution Context** and **Call Stack** in a beginner-friendly way.  
It's based on examples and step-by-step breakdowns often used in interviews.

---

## 🔹 What is Execution Context?

Execution Context is the environment in which JavaScript code is **evaluated and executed**.  
It always runs in **two phases**:

---

## 🔹 1. Memory Creation Phase (Creation Phase)

* Space is allocated for all **variables** and **functions**.
* **Variables** are initialized with `undefined`.
* **Functions** are stored **with their complete definition**.

📌 Example:

```js
let val1 = 10
let val2 = 5

function addNum(num1, num2) {
  let total = num1 + num2
  return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
```

➡️ In **Memory Phase**:

* `val1 → undefined`
* `val2 → undefined`
* `addNum → function definition`
* `result1 → undefined`
* `result2 → undefined`

---

## 🔹 2. Execution Phase

* Code is executed **line by line**.
* Variables get actual values.
* Function calls create **new Function Execution Contexts**.

➡️ Execution:

* `val1 = 10`
* `val2 = 5`
* `result1 = addNum(10, 5)` → creates new FEC

Inside `addNum(10, 5)`:

* **Memory Phase:**
  * `num1 → undefined`
  * `num2 → undefined`
  * `total → undefined`
* **Execution Phase:**
  * `num1 = 10`
  * `num2 = 5`
  * `total = 15`
* Function returns `15`.

So:

* `result1 = 15`
* `result2 = 12`

👉 After execution, the **Function Execution Context is deleted**.

---

## 🔹 Types of Execution Context

1. **Global Execution Context (GEC)**
   * Created first.
   * Runs the entire script.
   * In browsers: `this = window`.

2. **Function Execution Context (FEC)**
   * Created each time a function is invoked.
   * Has its own Memory + Execution Phases.
   * Destroyed after function completes.

3. **Eval Execution Context**
   * Created when `eval()` is used.
   * Rarely used in practice.

---

## 🔹 Call Stack

The **Call Stack** manages all Execution Contexts.
It works on **LIFO (Last In, First Out)**:

* GEC is created and pushed first.
* Each function call pushes a new FEC on top.
* After execution, the top FEC is popped.
* Finally, the GEC is popped when program ends.

📌 Example (`addNum`):

1. Push **GEC**
2. Call `addNum(val1, val2)` → Push **FEC1**
3. Execute & return → Pop **FEC1**
4. Call `addNum(10, 2)` → Push **FEC2**
5. Execute & return → Pop **FEC2**
6. End → Pop **GEC**

---

## 🔹 Visual Call Stack Example

For nested functions:

```js
function first() {
  second();
  console.log("First done");
}

function second() {
  third();
  console.log("Second done");
}

function third() {
  console.log("Third done");
}

first();
```

👉 Stack changes step by step:

```
[Start]       -> [ GEC ]
Call first()  -> [ GEC, FEC1 ]
Call second() -> [ GEC, FEC1, FEC2 ]
Call third()  -> [ GEC, FEC1, FEC2, FEC3 ]
Finish third  -> [ GEC, FEC1, FEC2 ]
Finish second -> [ GEC, FEC1 ]
Finish first  -> [ GEC ]
End program   -> [ ]
```

---

## ✅ Summary for Beginners

* JavaScript runs inside **Execution Contexts**.
* Each context has **two phases**:
  1. **Memory Phase** → set up variables & functions.
  2. **Execution Phase** → execute line by line.
* **Global Execution Context (GEC)** is created first.
* **Each function call creates a new FEC**.
* The **Call Stack** controls the order of execution using **LIFO**.
```
