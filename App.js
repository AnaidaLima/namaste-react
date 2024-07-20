const parent = React.createElement("div", {id: "parent"}, 
                React.createElement("div", {id: "child"}, 
                    [React.createElement("h1", {}, "Hello"), React.createElement("h2", {}, "JIII")]));

const parent2 = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "Im h1 tag from child 1"),
        React.createElement("h2", {}, "Im h2 tag from child 1")
    ]), 
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "Im h1 tag from child 1"),
        React.createElement("h2", {}, "Im h2 tag from child 1")
    ]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent2);
root.render(parent2);