import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'

export default class CreateTodo extends Component {
    
    constructor(props) {
        super(props)

        this.onChangeTaskName = this.onChangeTaskName.bind(this)
        this.onChangeTaskCategory = this.onChangeTaskCategory.bind(this)
        this.onChangeTaskPriority = this.onChangeTaskPriority.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            category: '',
            priority: ''
        }
    }

    onChangeTaskName(e){
        this.setState({name: e.target.value})
    }

    onChangeTaskCategory(e){
        this.setState({category: e.target.value})
    }

    onChangeTaskPriority(e){
        this.setState({priority: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        console.log("Task successfully created!");
        console.log(`Name: ${this.state.name}`)
        console.log(`Category: ${this.state.category}`)
        console.log(`Priority: ${this.state.priority}`)

        this.setState({name: '', category: '', priority: ''})
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form>
                    <Form.Group controlId="Name">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Task Category</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="Name">
                        <Form.Label>Task Priority</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Create Task
                    </Button>
                </Form>
            </div>
        )
    }
}