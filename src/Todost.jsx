import React, { Component } from 'react'

export default class Todost extends Component {
    constructor(props){
        super(props);
        this.state={
            Todos:[],
            Todo:'',
            todoEditing:null,
            editingText:'',
        }
    }
    Submit =(e)=>{
        e.preventDefault();
        const Addtodo={
            id:this.state.Todos.length+1,
            text:this.state.Todo,
            completed:false,
        }
        this.setState({Todos:[...this.state.Todos,Addtodo]})
        this.setState({Todo:''})
    }
    Delete=(id)=>{
        const Update=this.state.Todos.filter((todo)=>todo.id!==id)
        this.setState({Todos:Update})
    }
    Edit=(e)=>{
        const Update=this.state.Todos.map((todo)=>{
            if(this.state.todoEditing==todo.id){
                todo.text=this.state.editingText
            }
            return todo;
        })
        this.setState({Todos:Update})
        this.setState({todoEditing:null})
        this.setState({editingText:''})
    }
    toggle=(id)=>{
        const Tog=this.state.Todos.map((todo)=>{
            if(todo.id==id){
                todo.completed=!todo.completed
            }
            return todo;
        })
        this.setState({Todos:Tog})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.Submit}>
                    <label ><h4>ENTER TODO ITEM </h4> </label>
                    <input type="text" onChange={(e)=>this.setState({Todo:e.target.value})} value={this.state.Todo}/>
                    <button >Add Todo</button>
                </form>
                {
                    this.state.Todos.map((todo)=>
                    <>
                    {this.state.todoEditing==todo.id?
                    (<input type="text" onChange={(e)=>this.setState({editingText:e.target.value})} value={this.state.editingText} />):
                    (<div key={todo.id}><h3>{todo.text}</h3></div>)}
                    
                    
                    <button onClick={()=>this.Delete(todo.id)}>Delete</button>
                    <input type="checkbox" onChange={()=>this.toggle(todo.id)} checked={todo.completed} />
                    {this.state.todoEditing==todo.id?
                    (<button onClick={()=>this.Edit(todo.id)}>Submit</button>):
                    ( <button onClick={()=>this.setState({todoEditing:todo.id})}>Update Todo</button>)}<hr></hr>
                   
                    
                    </>
                    )
                }
            </div>
        )
    }
}
