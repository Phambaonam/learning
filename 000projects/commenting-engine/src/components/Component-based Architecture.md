*******************************************************************************

F:\Books\CodeSchool-JS\React\???.pdf

*******************************************************************************
# Component-based Architecture  


In React, we solve problems by creating components. 
If a component gets too complex, we break it into smaller, simpler components.

*******************************************************************************
## Components
*******************************************************************************


A component in React works similarly to JavaScript functions: 
It generates an output every time it is invoked.

*******************************************************************************
## virtual DOM
*******************************************************************************

The virtual DOM is an in-memory representation of real DOM elements generated by React components before any changes are made to the page.


In-memory representation of what will become real elements.

Actual elements displayed on the browser.


Virtual DOM diffing allows React to minimize changes to the DOM as a result of user actions — therefore, increasing browser performance.


Only this paragraph has changed and only this paragraph is replaced.

Other elements remain untouche.

*******************************************************************************
## ES6
*******************************************************************************

We want to simply print a message to the screen using a React component.


Components in React are JavaScript classes that inherit from the React.Component base class.

class StoryBox extends React.Component {
    render() {
        return( <div>Story Box</div> );
    }
}


1. Components are written in upper camel case.

2. Component class inherits from a React base class.

3. Every component needs a render() function.

4. No quotes needed — don't freak out.


Now we need to tell our application where to put the result into our web page.


We use ReactDOM to render components to our HTML page as it reads output from a supplied React component and adds it to the DOM.


ReactDOM.render(
    <StoryBox />,
    document.getElementById('story-app')
);

1. Invoke StoryBox — again, we don't need quotes.

2. Target container where component will be rendered to html target where Element'id="story-app" (Target container)




Every time we create a new React component, we use it by writing an element named after the class.


// Using StoryBox component  


*******************************************************************************
*******************************************************************************


## // defualt props ??? 


// ES6 constructor (no getInitialState: function )
// ES6 constructor (no getDefaultProps: function)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
http://react2.xgqfrms.xyz/docs/reusable-components.html

## 默认 Prop 值
React 支持以声明式的方式来定义 props 的默认值。


var ComponentWithDefaultProps = React.createClass({
    getDefaultProps: function() {
        return {
            value: 'default value'
        };
    },
    /* ... */
});


## State 初始值

var TickTock = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        };
    },
    /* ... */
});


## ES6 Classes

// ES6 constructor (no getInitialState: function )
// ES6 constructor (no getDefaultProps: function)

ES6 Class API近似于 React.createClass 除了 getInitialState。

你应该在构造函数里设置你的state，而不是提供一个单独的 getInitialState 方法。
就像 getInitialState 的返回值，你赋给 this.state 的值会被作为组件的初始 state。

另一个不同是 propTypes 和 defaultProps 是在构造函数里被定义为属性，而不是在 class body 里。


export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    },
    tick() {
        this.setState({count: this.state.count + 1});
    },
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}

Counter.propTypes = { initialCount: React.PropTypes.number };

Counter.defaultProps = { initialCount: 0 };



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

http://react2.xgqfrms.xyz/docs/reusable-components.html#es6-classes

react2 API docs codes bugs :


*************************
{ a b c } missing "," 


{ a, b, c }

*************************

## ES6 Classes

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    },
    tick() {
        this.setState({count: this.state.count + 1});
    },
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


*******************************************************************************
## Application Structure
*******************************************************************************

// components.js
...
ReactDOM.render(
    <StoryBox />, document.getElementById('story-app')
);

// index.html

<!DOCTYPE html>
<html>
    <body>
        <div id="story-app">
            <!-- Target container -->
        </div>
    </body>
</html>

That’s all there is to creating a component. Now we just need to add libraries.



<!DOCTYPE html>
<html>
    <body>
        <div id="story-app">
            <!-- Target container -->
        </div>
        <!--  -->
        <script src="vendors/react.js"></script>
        <script src="vendors/react-dom.js"></script>
        <script src="vendors/babel.js"></script>
        <!-- babel  -->
        <script type="text/babel" src="components.js"></script>
    </body>
</html>

## React libraries

vendors
----react.js
----react-dom.js
----babel.js(standalone)


Babel: Allows using latest features of JavaScript (class syntax, fat arrow, etc.)


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


G:\wwwRoot\learning\Front-End\React\React\ES6-React-App\libs

G:\wwwRoot\learning\Front-End\React\React\app01\libs


# JSX (babel-standalone)


# JSX => JS  


https://cdn.xgqfrms.xyz/babel/babel.min.js

babel-standalone/babel.min.js & type="text/babel" 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


*******************************************************************************
## React Application Flow
*******************************************************************************

To clarify, here is what takes place when we load a page with a React component:

1. First, the static HTML page is loaded...

2. ...then then React library and our custom component is loaded...

3. ...then the ReactDOM renderer renders the component....

4. ...returning a virtual representation of the DOM, which is turned into real DOM elements.


*******************************************************************************

## Quick Recap on React

React was built to solve one problem:
building large applications with data that changes over time.

In React, we write apps in terms of components.

We use JavaScript classes when declaring React components.

Components must extend the React.Component class and must contain a render() method.

We call the ReactDOM.render() function to render components to a
web page.

*******************************************************************************


*******************************************************************************
## Understanding JSX
*******************************************************************************

The markup we use when writing React apps is not a string. 
This markup is called JSX (JavaScript XML).

1. HTML elements are written in lowercase.

<div>Story Box</div>

2. React components are written in upper camel case.

<StoryBox />

JSX is just another way of writing JavaScript with a transpile step.


## JSX to JS

React.createElement('div', null, 'Story Box')

React.createElement(StoryBox, null)


JSX looks similar to HTML, and it is ultimately transformed into JavaScript.

class StoryBox extends React.Component {
    render() {
        return(
            <div>
                <h3>Stories App</h3>
                <p className="lead">Sample paragraph</p>
            </div>
        );
    }
}

Notice we are using className and not class, which is a JavaScript-reserved keyword.


## Transpiled JSX code

React.createElement(
    "div", 
    null,
    React.createElement(
        "h3",
        null,
        "Stories App"
    ),
    React.createElement(
        "p",
        {className:"lead"},
        "Sample paragraph"
    )
);


## From JSX to HTML


1. All JSX gets transformed to JavaScript.

2. Rendered by the browser

3. Generated HTML


## Using the Date Object in JSX


Here, we’re displaying the current time using JavaScript’s native Date object and JSX.

const now = new Date();

<p className="lead">
    Current time: {now.toTimeString()}
</p>

Code written within curly braces gets interpreted as literal JavaScript


## Iterating Arrays in JSX

Here, we’re displaying a list of elements using JSX and JavaScript’s native map function.

const topicsList = ['HTML', 'JavaScript', 'React'];

{topicsList.map( topic => <li>{topic}</li> )}


This function returns this JSX array.




Quick Recap on JSX

JSX stands for JavaScript XML.

JSX markup looks similar to HTML, but ultimately gets transpiled to JavaScript function calls, which React will know how to render to the page.

Code written within curly braces is interpreted as literal JavaScript.

It is a common pattern to map arrays to JSX elements.






*******************************************************************************
## Talk Through Props
*******************************************************************************

We are building a commenting engine that will allow visitors to post comments on a blog post, picture, etc.


What the structure of our React app should look like.


CommentBox
----Comment
----Comment
----...


There are some common things we always do when creating new components.


1. New class

2. Inherit from React.Component

3. Return JSX from render function


++++++++++++++++++++++++++++++++++++++
# React-ES6-Snippets

rcc + tab

react component skeleton (rcc,tab)
++++++++++++++++++++++++++++++++++++++ 

class NewComponent extends React.Component {
    ...
    render() {
        return ( ... );
    }
}


Let’s start with an HTML mockup and identify potential components by looking at the markup.

CommentBox component
Comment component

<div class="comment-box">
    <h3>Comments</h3>
    <h4 class="comment-count">2 comments</h4>
    <div class="comment-list">
        <div ="comment">
            <p class="comment-header">
                Anne Droid
            </p>
            <p class="comment-body">
                I wanna know what love is...
            </p>
            <div class="comment-footer">
                <a href="#" class="comment-footer-delete">
                    Delete comment
                </a>
            </div>
        </div>
    </div>
</div>


The Comment component renders the markup for each comment, including its author and body.


class becomes className in JSX

Can now be used as JSX, like this: <Comment />



Now we’ll declare the CommentBox component and use the previously declared Comment component.

Using the Comment component

<div class="comment-box">
    <h3>Comments</h3>
    <h4 class="comment-count">2 comments</h4>
    <div class="comment-list">
        // comment
        <Comment />
        <Comment />
        <Comment />
        ...
    </div>
</div>

## React Components Accept Arguments

Arguments passed to components are called props. 
They look similar to regular HTML element attributes.

Passing arguments to Comment

<Comment author="Morgan McCircuit" body="Great picture!" />
<Comment author="Bending Bender" body="Excellent stuff" />

## Reading Props in the Comment Component

Arguments passed to components can be accessed using the this.props object.


Reading the author prop

Reading the body prop

class Comment extends React.Component {
    render() {
        return(
            <div className="comment">
                <p className="comment-header">{this.props.author}</p>
                <p className="comment-body">
                    {this.props.body}
                </p>
                <div className="comment-footer">
                    <a href="#" className="comment-footer-delete">
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}


## Passing and Receiving Arguments Review

We use the this.props object to read parameters that were passed to the component.

Passing Props

<Comment
    author="Morgan McCircuit"
    body="Great picture!" />

Receiving Props

// Reads arguments passed to a component

class Comment extends React.Component {
    render() {
        return(
            ...
            <p className="comment-header">{this.props.author}</p>
            <p className="comment-body">
                {this.props.body}
            </p>
            ...
        );
    }
}

## Quick Recap on Props

We just covered a lot of content — here’s a summary of what we learned.


Convert HTML mockup to React components

Created two components: CommentBox and Comment

How to pass arguments to components using props

Props look like HTML element attributes


## Passing Dynamic Arguments  

Problem: Props Aren’t Dynamic Yet

We are passing literal strings as props, but what if we wanted to traverse an array of objects?


// Hardcoded values

<Comment
    author="Morgan McCircuit" body="Great picture!" />
<Comment
    author="Bending Bender" body="Excellent stuff" />


JavaScript Object Arrays (JSON Data)

Typically, when we consume data from API servers, we are returned object arrays.

const commentList = [
    { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
    { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
];


Excellent stuff & Great picture!


## Mapping an Array to JSX


We can use JavaScript’s map function to create an array with Comment components.

// Underscore

Underscore helps distinguish custom methods from React methods

New method that will return array of JSX elements

_getComments() {
    const commentList = [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
    ];
    return commentList.map(() => {
        return (<Comment />);
    });
}


Returns an array with a new component built for each element present in commentList.

## Passing Dynamic Props

The callback to map takes an argument that represents each element from the calling object.


Each element from commentList is passed as argument...

...which we can use to access properties and pass them as props.


_getComments() {
    const commentList = [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
    ];
    return commentList.map((comment) => {
        return (
            <Comment 
                author={comment.author}
                body={comment.body} />
        );
    });
}


## Using Unique Keys on List of Components

Specifying a unique key when creating multiple components of the same type can help improve performance.


Unique key


_getComments() {
    const commentList = [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
    ];
    return commentList.map((comment) => {
        return (
            <Comment 
                author={comment.author}
                body={comment.body}
                key={comment.id} />
        );
    });
}


## Using the _getComments() method

We’ll store the returned value in a variable named comments and use it for display purposes.

// JSX knows how to render arrays


const comments = this._getComments();

render() {
    return (
        <div class="comment-box">
            <h3>Comments</h3>
            <h4 class="comment-count">{comments.length} comments </h4>
            <div class="comment-list">
                {comments}
            </div>
        </div>
    );
}


## Incorrect Grammar on the Comments Title

The title has incorrect grammar in some cases.

## Fixing the Title With Comment Count

Let’s write a new method called _getCommentsTitle() that handles the plural case in our title.

// Uses same convention with starting underscore

_getCommentsTitle(commentCount) {
    if (commentCount === 0) {
        return 'No comments yet';
    } else if (commentCount === 1) {
        return '1 comment';
    } else {
        return `${commentCount} comments`;
    }
}


## Getting the Correct Comments Title

Let’s call the method we just created from our component’s render function.


{this._getCommentsTitle(comments.length)}


Get proper title for our component


    render() {
        return (
            <div class="comment-box">
                <h3>Comments</h3>
                <h4 class="comment-count">
                    //{comments.length} comments
                    {this._getCommentsTitle(comments.length)}
                </h4>
                <div class="comment-list">
                    {comments}
                </div>
            </div>
        );
    }

## Title Issue Is Fixed

The title now handless different quantities of comments accordingly.


## Quick Recap on Dynamic Props

Dynamic props can be a bit mind boggling. Here’s a summary of what we learned.

1. How to pass dynamic props using variables

2. How to map object arrays to JSX arrays for display purposes

3. Used JavaScript to handle plural case on the title




*******************************************************************************
## Component State
*******************************************************************************

Handling Data Changes With State

## Show and Hide Comments


We’d like to add a button to the page that will let users toggle the comments.


Click to show comments & Click to hide comments


How can we show and hide comments based on button clicks?


## Different Ways to Manipulate the DOM

1. Direct DOM Manipulation

Events => DOM updates

jQuery, Backbone, etc.


2. Indirect DOM Manipulation

Events => Update state => DOM updates

React, Vue (Virtual DOM)




One way to manipulate the DOM API is by modifying it directly via JavaScript in response to browser events.


Events =1=> DOM updates


1. User code does this.


# Example using jQuery:

$('.show-btn').on('click', function() {
    $('.comment-list').show();
})

$('.hide-btn').on('click', function() {
    $('.comment-list').hide();
})


Manually manipulating the DOM


In React, we don’t modify the DOM directly. Instead, we modify a component state object in response to user events and let React handle updates to the DOM.


Events =1=> Update state =2=> DOM updates

1. User code does this.

2. React does this.


# Example using React:

render() {
    if (this.state.showComments) {
        // code displaying comments
    } else {
        // code hiding comments
    }
}

Display logic based on state


## How to Use State in a Component

The state is a JavaScript object that lives inside each component. 
We can access it via this.state


Create list of comments if state is true.

We also need to move these comments into the conditional.


if (this.state.showComments){
    // add code for displaying comments
}

Showing Comments Only if State Is true

let commentNodes;
if (this.state.showComments){
    commentNodes = <div className="comment-list">{comments}</div>;
}


Hiding Comments on the Initial State

We set the initial state of our component in the class constructor.

super() must be called in our constructor.

Initial state hides comments.


constructor() {
    super();
    this.state = {
        showComments: false
    };
}

## How to Update a Component’s State

We don’t assign to the state object directly — instead, we call setState by passing it an object.


Setting state this way won't work.

this.state.showComments = true


Updates the showComments property and re-renders component

this.setState({showComments: true })


Calling setState will only update the properties passed as an argument, not replace the entire state object.


## Causing State Change

State changes are usually triggered by user interactions with our app.


Things that could cause state change:


• Button clicks
• Link clicks
• Form submissions
• AJAX requests
• And more!


Button clicks can cause a change of state.

Loading comments from a remote server can also cause a change of state


## Handling Click Events


Let’s add a button that will toggle the showComments state when a click event is fired.


Button that will toggle state on click event

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    http://react2.xgqfrms.xyz/docs/reusable-components.html

    React & ES6 无自动绑定 ??? 

    .bind(this)

    => 


    http://react2.xgqfrms.xyz/docs/reusable-components.html#无自动绑定

    ## 无自动绑定

    class eextends React.Component 方法遵循正式的ES6 class的语义，意味着它们不会自动绑定this到实例上。

    你必须显示的使用.bind(this) or 箭头函数 =>：

    // 你可以使用 bind() 来绑定 `this`
    <div onClick={this.tick.bind(this)}>

    // 或者你可以使用箭头函数
    <div onClick={() => this.tick()}>
    我们建议你在构造函数中绑定事件处理器，这样对于所有实例它们只需绑定一次：

    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
        this.tick = this.tick.bind(this);
    }
    现在你可以直接使用 this.tick 因为它已经在构造函数里绑定过一次了。

    // 它已经在构造函数里绑定过了
    <div onClick={this.tick}>
    这对应用的性能有帮助，特别是当你用 浅层比较 实现 shouldComponentUpdate() 时。

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


<button onClick={this._handleClick.bind(this)}> Show comments </button>

Button click calls _handleClick()

Shows and hides comments

Toggles state of showComments between true and false


_handleClick() {
    this.setState({
        showComments: !this.state.showComments
    });
}


## Button Text Logic Based on State

We can switch the button text based on the component’s state.


let buttonText = 'Show comments';
    if (this.state.showComments) {
        buttonText = 'Hide comments';
    ...
}

Switch button text based on current state

Renders button with according text

return(
    ...
    <button onClick={this._handleClick.bind(this)}>
        {buttonText}
    </button>
    ...
);



Demo: Hide and Show Comments


Our app shows and hides comments when the button is clicked.




## Quick Recap on State

The state is a vital part of React apps, making user interfaces interactive.

1. State represents data that changes over time.

2. We declare an initial state in the component’s constructor.

3. We update state by calling this.setState().

4. Calling this.setState() causes our component to re-render.




*******************************************************************************
## Synthetic Events : Capturing User Actions
*******************************************************************************

## Adding New Comments

We want to let users add new comments to our app.


How should we build this new form in React?


New Component: CommentForm

CommentForm is a new component that will allow users to add comments to our app.


<form className="comment-form">
    <label>Join the discussion</label>
    <div className="comment-form-fields">
        <input placeholder="Name:" />
        <textarea placeholder="Comment:"></textarea>
    </div>
    <div className="comment-form-actions">
        <button type="submit">
            Post comment
        </button>
    </div>
</form>


## Adding an Event Listener to Our Form

To add an event listener to the form, we use the onSubmit prop and pass a handler to it.

onSubmit={this._handleSubmit.bind(this)}

Adds an event listener to the submit event

Don't forget to bind event handlers,
otherwise this will not work!

_handleSubmit(event) {
    event.preventDefault();
}

Prevents page from reloading


https://github.com/codeschool/WatchUsBuild-React


https://www.codeschool.com/screencasts/add-a-build-system-to-a-react-application#resources

https://github.com/xgqfrms-GitHub/underscore/blob/gh-pages/Tutorials/readme.md

https://github.com/xgqfrms-GitHub/underscore/blob/gh-pages/Tutorials/readme.md


https://github.com/codeschool/WatchUsBuild-React/issues/5

______________________________________________

??? Underscore ._getComments() error

const comments = this._getComments();

// Underscore

Underscore helps distinguish custom methods from React methods

New method that will return array of JSX elements

Underscore(下划线) 有助于区分自定义方法和React方法 

将返回JSX元素数组的新方法

_getComments() {
    const commentList = [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
    ];
    return commentList.map(() => {
        return (<Comment />);
    });
}
______________________________________________



## Problem: Can’t Access User Input in handleSubmit()



pdf 81/128



??? github codeschool source codes ???















*******************************************************************************
## Talking to Remote Servers : Using Lifecycle Methods to Load Comments
*******************************************************************************







*******************************************************************************
## Talking to Remote Servers : Adding and Deleting Comments on the Server Side
*******************************************************************************





















*******************************************************************************
## 
*******************************************************************************















































































































