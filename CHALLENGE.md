# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a widely used high-level programming language primarily known for its use in web development. It is an essential technology for building dynamic and interactive websites.
```

## About values

### What is a primitive value?

```
A primitive value is a basic data type in programming that represents a single simple value, such as a number, a text string, or a Boolean value. Primitive values ​​are immutable, meaning they cannot be changed once they are created. These data types are fundamental in programming and are used to store simple, individual data in memory. Examples of primitive values ​​in JavaScript include numbers, strings, booleans, nulls, and undefined
```

### Which are primitive values? Explain them with at least one example for primitive.

```
In JavaScript, there are six primitive data types:

1. **Number**: Represents numeric values. Examples include integers and floating-point numbers.

   ```
   var age = 25; 
   ```

2. **String**: Represents text or character data enclosed in single or double quotes.

   ```
   var name = "John"; 
   ```

3. **Boolean**: Represents true or false values.

   ```
   var isStudent = true; 
   ```

4. **Undefined**: Represents a variable that has been declared but has not been assigned a value.

   ```
   var x; 
   ```

5. **Null**: Represents an intentional absence of any object value.

   ```
   var data = null; 
   ```

6. **Symbol**: Introduced in ECMAScript 6, symbols are unique and immutable values often used as object property keys.

   ```
   const uniqueKey = Symbol('description'); 
   ```

These primitive data types are the simplest and most fundamental building blocks for data in JavaScript. They are immutable, meaning their values cannot be changed once they are created. When you perform operations on these primitive values, you create new values rather than modifying the original.
```

## About variables

### What is a variable in JS?

```
In JavaScript, a variable is a container used to store data values. Variables are fundamental in programming and allow you to name and store data so that you can reference and manipulate it throughout your code.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```

In JavaScript, you can define a variable using one of three ways:
- Var
- let
- const
 
 Using var to declare variables is not recommended in modern JavaScript development. It has some issues, including function scope and potential hoisting problems. Variables declared with var are not block-scoped, which can lead to unexpected behavior in your code.

In modern JavaScript, it's generally recommended to use let and const instead of var. let provides block scope, allowing you to have more predictable and understandable code, while const is useful for declaring variables that should not be reassigned after their initial value is set.

```

### Which are the most used var naming conventions in JS?

```
In JavaScript, two of the most commonly used variable naming conventions are:

Camel Case: This convention involves writing compound words or phrases with the first word lowercase and subsequent words capitalized. For example: myVariableName, firstName, totalAmount.

Snake Case: In this convention, compound words are written by separating them with underscores. For example: my_variable_name, first_name, total_amount.

The following monenclatures are also used: 
Pascal Case
Kebab Case
Hungarian Notation
Abbreviations
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
JavaScript provides several comparison operators to compare values. Here are the main comparison operators along with examples using primitive values:

1. **Equal (==)**: Checks if two values are equal, but it performs type coercion if the operands have different types. This can lead to unexpected results in some cases.

 
   ```
   5 == '5' 
   ```

2. **Not Equal (!=)**: Checks if two values are not equal, and like the equal operator, it performs type coercion.

   
   ```
   5 != '3' 
   ```

3. **Strict Equal (===)**: Checks if two values are equal without performing type coercion. It requires both the value and the type to be the same.

   
   ```
   5 === 5 
   'Hello' === 'World'
   ```

4. **Strict Not Equal (!==)**: Checks if two values are not equal without performing type coercion.

   
   ```
   5 !== '5' 
   ```

5. **Greater Than (>)**: Checks if the left operand is greater than the right operand.

   
   ```
   8 > 3 
   ```

6. **Less Than (<)**: Checks if the left operand is less than the right operand.

   ```
   2 < 7 
   ```

7. **Greater Than or Equal (>=)**: Checks if the left operand is greater than or equal to the right operand.

  
   ```
   5 >= 5 
   ```

8. **Less Than or Equal (<=)**: Checks if the left operand is less than or equal to the right operand.

   
   ```
   3 <= 3 
   ```

These operators are used to compare values and return Boolean results (true or false) based on the specified conditions. The strict equality operators (`===` and `!==`) are often recommended over the non-strict ones to avoid unexpected type coercion behavior.
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
JavaScript provides several logical operators that allow you to work with Boolean values or expressions. Here are the main logical operators along with examples using primitive values:

Logical AND (&&): Returns true if both operands are true.

true && true 
true && false 

Logical OR (||): Returns true if at least one of the operands is true.

true || false 
false || false

Logical NOT (!): Returns the opposite Boolean value of the operand.

!true 
!false 

Logical XOR (Exclusive OR): Returns true if exactly one of the operands is true.

true ^ false 
true ^ true

```
