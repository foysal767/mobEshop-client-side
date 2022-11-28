import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    1. What are the different ways to manage a state in React Application?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps:

                    Local state
                    Global state
                    Server state
                    URL state
                    Let's cover each of these in detail:

                    Local (UI) state – Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                    Global (UI) state – Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global.

                    Server state – Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                    URL state – Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                </p>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    2. How does prototypical inheritance works?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </p>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    3. What is Unit Testing? Why Do We Need Unit Testing?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    JUnit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                    Reasons of unit testing:

                    To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                    Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                    Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results. Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application. In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
                </p>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    4. React vs Angular vs Vue?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    Angular vs React vs Vue
                    Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at!

                    Let’s get started:

                    Angular vs React:
                    If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready. React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React. React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.

                    React vs Vue:
                    The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either. Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.

                    Angular vs Vue:
                    In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps. A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps. It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                </p>
            </div>
        </div>
    );
};

export default Blogs;