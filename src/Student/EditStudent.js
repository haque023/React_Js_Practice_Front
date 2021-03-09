import React from 'react';
import {Container, Col,From,Row,
    FormGroup,Label,Input,Button, Form} from 'reactstrap';

import axios from 'axios';
import '../Student/AddStudent.css';
var url='';
class Edit extends React.Component{
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeRollNo=this.onChangeRollNo.bind(this);
        this.onChangeClass=this.onChangeClass.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            Name:'',
            RollNo:'',
            Class:'',
            Address:''
        }
    }
    
    componentDidMount(){
        axios.get(url)
        .then(response=>{
            this.setState({
                Name:response.data.Name,
                RollNo:response.data.RollNo,
                Class:response.data.Address
            })
            
        })
        .catch(function(error){
            console.log(error);
        })
    }
    onChangeName(e){
        this.setState({
           Name:e.target.value 
        });
    }
    onChangeRollNo(e){
        this.setState({
            RollNo:e.target.value
        });
    }
    onChangeClass(e){
        this.setState({
            Class:e.target.value
        })
    }
    onChangeAddress(e){
        this.setState({
            Address:e.target.value
        });
    }

    onSubmit(e){
        debugger;
        e.preventDefault();
        const obj={
            Id:this.props.match.params.Id,
            Name:this.state.RollNo,
            Class:this.state.Class,
            Address: this.state.Address
        };
        axios.post(url)
        .then(res=>console.log(res.data));
        debugger;
        this.props.history.push('/StudentList')
    }
    render(){
        return(
            <Container className="App">
                <h4 className="PageHeading">
                    Update Student Information
                </h4>
                <Form 
                className="from"
                onSubmit={this.onSubmit}
                >
                    <Col>

                    <FormGroup row>
                        <Label for="Name" sm={2}>
                            Name
                        </Label>
                        <Col sm={10}>
                            <Input
                             type="text"
                             name="Name"
                             value={this.state.Name}
                             onChange={this.onChangeName}
                             placeholder="Enter Name"
                             />
                        </Col>
                    
                    </FormGroup>




                    <FormGroup row>
                        <Label for="RollNo" sm={2}>
                            RollNo
                        </Label>
                        <Col sm={10}>
                            <Input
                             type="text"
                             name="RollNO"
                             value={this.state.RollNo}
                             onChange={this.onChangeName}
                             placeholder="Enter Roll"
                             />
                        </Col>
                    
                    </FormGroup>


                    <FormGroup row>
                        <Label for="class" sm={2}>
                            Name
                        </Label>
                        <Col sm={10}>
                            <Input
                             type="text"
                             name="Class"
                             value={this.state.Class}
                             onChange={this.onChangeName}
                             placeholder="Enter Class"
                             />
                        </Col>
                    
                    </FormGroup>

    
                    <FormGroup row>
                        <Label for="Address" sm={2}>
                            Name
                        </Label>
                        <Col sm={10}>
                            <Input
                             type="text"
                             name="Address"
                             value={this.state.Address}
                             onChange={this.onChangeName}
                             placeholder="Enter Address"
                             />
                        </Col>
                    
                    </FormGroup>
                    </Col>

                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  


                </Form>
            </Container>

        )
    }

}

export default Edit;
