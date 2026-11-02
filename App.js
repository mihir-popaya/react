// const heading = React.createElement("h1",{
//     id:"heading"
// },"Hello react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const div=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am react 1"),React.createElement("h2",{},"I am react 2")]
    )
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div);