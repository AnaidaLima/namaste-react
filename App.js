import React from "react";
import ReactDOM from "react-dom/client";

// JSX

        // const heading = <h1 id="heading" className="heading">This is JSX Heading</h1>;  //Single line

//JSX returns a React Element


// multi line
// This is a react Element
        // const heading2 = (<div>
        //     <h1>Heading inside div</h1>         
        // </div>);

        // const root = ReactDOM.createRoot(document.getElementById("root"));

        // root.render(heading2)


//What is react COmponent

        // const HeadingComponent = () => {
        //     return <h1>Hello from JSX</h1>
        // }

        // const HeadingComponent2 = () => <h1>Hello from JSX2</h1>

        // const HeadingComponent3 = () => (
        //     <div>
        //         <h1>Hello from JSX3</h1>
        //     </div>
        // );




//What is component Composition

        // const Title = () => (
        //     <div>Hello JSX topic</div>
        // );

        // const HeadingComponent4 = () => (
        //     <div>
        //         <Title />
        //         <div>This is content</div>
        //     </div>
        // );
        // root.render(<HeadingComponent4 />)


// We can evaluate any javascript inside a JSX using {} 

// 1. React element inside react element

        // const header1 = <h1>Hello from JSX</h1>;

        // const header2 = (
        // <div>Hello 2 from jSX
        //     {header1}
        // </div>)

        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(header2)

// 2. React element inside React component

        // const header = <h1>Hello from JSX</h1>;

        // const HeadingComponent = () => (<div>
        //         Hello 2 from JSXXX{header}
        //     </div>)
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(<HeadingComponent />)

// 3. React component inside react Element

        // const HeadingComponent = () => (<h1>
        //         Hello 2 from JSXXX
        //     </h1>)

        // const header = (<div>
        //     <HeadingComponent></HeadingComponent>
        //     <HeadingComponent/>
        //     {HeadingComponent()}
        // </div>)

        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(header)

// 4. React component inside React Component (Component Composition)
        
        const HeadingComponent1 = () => (<h1>
            Hello 2 from JSXXX
        </h1>)

        const HeadingCOmponent2 = () => (
            <div>
                <h2>Hello h2</h2>
                <HeadingComponent1/>
            </div>
        )

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(<HeadingCOmponent2/>)


// const parent = React.createElement("div", {id: "parent"}, 
//                 React.createElement("div", {id: "child"}, 
//                     [React.createElement("h1", {}, "Hello"), React.createElement("h2", {}, "JIII")]));

// const parent2 = React.createElement("div", {id:"parent"}, [
//     React.createElement("div", {id:"child1"}, [
//         React.createElement("h1", {}, "Im h1 tag from child 1"),
//         React.createElement("h2", {}, "Im h2 tag from child 1")
//     ]), 
//     React.createElement("div", {id:"child2"}, [
//         React.createElement("h1", {}, "Im h1 tag from child 1"),
//         React.createElement("h2", {}, "Im h2 tag from child 1")
//     ]),
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(parent2);
// root.render(parent2);