import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees";

class App extends React.Component {
    state = {
        employees
    }

    render() {
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                {this.state.employees.map(employee => (
                    <EmployeeCard
                    id={employee.id}
                    key={employee.id}
                    name={employee.name}
                    picture={employee.picture.medium}
                    email={employee.email}
                    phone={employee.phone}
                    cell={employee.cell}
                    timezone={employee.location.timezone}
                    />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

