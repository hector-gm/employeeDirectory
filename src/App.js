import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import DirectoryContainer from "./components/DirectoryContainer";

function App() {
    return (
    <div className="App"> 
        <Wrapper>
            <Header />
                <DirectoryContainer />
        </Wrapper>
    </div>
    );
}

export default App;

