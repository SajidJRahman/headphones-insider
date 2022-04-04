import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h1 className='faq text-center my-5'>Frequently Asked Questions</h1>
            <div className='questions'>
                <div className='text-center m-5'>
                    <h1>What is Context API?</h1>
                    <p>The Context API is a way to pass data through the component tree without having to pass props down at every level. Normally data in React is passed via props, so if data is needed to be passed through prop drilling, it can be a cause of performance issue & bad user experience. For these reasons React introduced Context API in version 16.3. Context API creates a way where data can be passed across the entire app! <code>React.createContext()</code> with a default value is needed to be used to create a Context API, then child content must be wrapped using VariableName.Provider, then <code>useContext()</code> hook must be used where data needed to be sent and that's it! Using Context API, we can avoid passing props through every single elements, increase performance & improve user experience.</p>
                </div>
                <div className='text-center m-5'>
                    <h1>What is a Semantic Tag?</h1>
                    <p>The meaning of semantic is relating to meaning in language or logic. In the same way Semantic Tag describes its meaning to both the browser and the developer. For example a non-semantic tag like <code>div</code> or <code>span</code> doesn't describe anything about its content or element. Whereas semantic tags like <code>article</code>, <code>nav</code>, <code>footer</code>, <code>section</code> & <code>aside</code> are meaningful tag names, they're easily understandable by both browser & the developer. For example, the <code>nav</code> tag defines it is a navigation tag, the <code>footer</code> tag defines it contains footer of a website etc.  With the release of HTML-5 in 2008, semantic tags were brought to life.</p>
                </div>
                <div className='text-center m-5'>
                    <h1>What are the differences between Inline, Block & Inline-Block?</h1>
                    <p>The <code>display: inline</code>, <code>display: block</code> & <code>display: inline-block</code> are all different. <code>display: inline</code> means its content will be in a row line, the <code>a</code>, inline element does not start on a new line. <code>button</code>, <code>input</code> & <code>span</code> tags are inline elements. Whereas <code>display: block</code> means all its content will be in a column. Block elements start on a new line. For example, <code>p</code>, <code>h1-h6</code> & <code>div</code> are all block elements. Compared to <code>display: block</code>, the main difference is that <code>display: inline-block</code> does not add a line-break after the element, so the element can sit next to other elements. <code>display: inline-block</code> simply means that the elements will be in a shape of a block, but will act like they're inline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;