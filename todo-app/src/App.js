import logo from './logo.svg';
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component"
import EditTodo from "./components/edit-todo.component"
import TodoList from "./components/todo-list.component"

function App() {
  return(<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-todo"} className="nav-link">
                TO DO APP
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-todo"} className="nav-link">
                  Create a task
                </Link>
              </Nav>
              <Nav>
              <Link to={"todo-list"} className="nav-link">
                Todo list
              </Link>
            </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={CreateTodo} />
                <Route exact path="/create-todo" component={CreateTodo} />
                <Route exact path="/edit-todo" component={EditTodo} />
                <Route exact path="/todo-list" component={TodoList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  )
}

export default App;
