

## 📌 1. `getElementById()`

* Used to select an element by its unique `id`.
* **Syntax:**

  ```js
  document.getElementById("idName");
  ```

---

## 📌 2. `setAttribute()`

* Used to set or update an attribute of an element.
* Example: setting `src`, `href`, `alt`, `id`, `class`, etc.
* **Syntax:**

  ```js
  element.setAttribute("attributeName", "value");
  ```

---

## 📌 3. `style`

* Used to apply CSS styles directly to an element using JavaScript.
* **Syntax:**

  ```js
  element.style.propertyName = "value";
  ```

---

## 📌 4. Difference between `innerText`, `innerHTML`, and `textContent`

* **`innerText`** → Gets/sets **visible text** inside an element (ignores hidden text).

  ```js
  element.innerText;
  ```

* **`innerHTML`** → Gets/sets **HTML + text** inside an element (includes tags).

  ```js
  element.innerHTML;
  ```

* **`textContent`** → Gets/sets **all text**, including hidden text, without HTML tags.

  ```js
  element.textContent;
  ```

---

 ## Stores that element in the variable variableExample.
* const variableExample=document.getElementById("id-name")