import React from 'react';

const Question3 = () => {
    return (
        <div>
            <h4 className="text-xl text-slate-600 font-bold mb-6">How does prototypical inheritance work?</h4>
            <p className='mb-4'>Javascript is object oriented programming language. And Prototypical inheritance is a huge and powerful topic in Javascript. Let's cover up how does prototypical inheritance works.</p>
            <p className='mb-4'>Every Javascript veriable has a default property named __proto__ and every Javascript function & class constructor has a default empty property called prototype and that __proto__. For example if we have string veriable called a with 'name' value(const a = 'name'), then 'name' comes from String and the String will come from Object.</p>

            <p className='mb-4'>If we look at funciton object, it has default property called prototype and __proto__. __proto__ is a default object that has lots of methods and objects inside it. That's it's called as Master Object. We can set any object or method to that prototype. if we create a function name x, it's basically created from function and the function is created from the Master Object. Each of them has the default prototype property that has lots of properties and methods. So x can have access all of them to prototype chain. Whenever a property or method called, if it's available inside x it will be inherited from x, if not available it looks it up, will if it's available inside the function or not, if not finally it will look it inside the Master Object, if available the Master Object inherits the invoked property or method, if not available inherits undefined. If we create a object from x It will also have access the properties and methods defined into entire prototype chain. If any invoked property or method that doesn't available into the entire prototype chain, the prototype chain will inherit undefined. Thus, Prototypical inheritance works.</p>
        </div>
    );
};

export default Question3;