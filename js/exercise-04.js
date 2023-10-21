/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
1. true && console.log("moo");
   /* In an AND operation (&&), both operands must be true for the result to be true. 
   Since the first operand is true, the expression evaluates the second operand, which is the console.log("moo") statement.*/

2. false && console.log("moo moo?");
   /*  In an AND operation (&&), if the first operand is false, 
   the expression immediately returns false without evaluating the second operand. Therefore, the console.log("moo moo?") statement is not executed.*/

3. true || console.log("hello friend");
   /*  In an OR operation (||), if the first operand is true,
    the expression immediately returns true without evaluating the second operand. Therefore, the console.log("hello friend") statement is not executed.*/

4. false || console.log("bye friend");
   /*  In an OR operation (||), if the first operand is false,
    the expression evaluates the second operand, which is the console.log("bye friend") statement. As a result,
     "bye friend" is logged to the console*/
     
