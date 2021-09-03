import React from 'react';
import axios from 'axios';
import Trainer from './component.js/Trainer.js'; 
import Loading from './component.js/Loading.js';
import SingleTrainer from './component.js/SingleTrainer.js';
import MyHeader from './component.js/Header.js';
import PostForm from './component.js/PostForm.js';
import './App.css';


class App extends React.Component {
  state = {
    loading: false,
    trainers: [],
    deletePost: [],
    singleTrainer: null
  }

  async componentDidMount () {
    this.setState({loading: true})
    const res = await axios.get("http://localhost:5500/api/trainer")
    this.setState({loading: false, trainers: res.data})
  }

    render() {
      console.log("WTF is signleTrainer", this.state.trainers)
      const {loading, trainers, singleTrainer} = this.state
      const getTrainer = async (id) => {
      this.setState({loading: true})
      const res = await axios.get(`http://localhost:5500/api/trainer/${id}`)
      this.setState({singleTrainer: res.data})
      this.setState({loading: false})
      
    }

    const deleteTrainer = async (id) => {
    this.setState({loading: true})
    await axios.delete(`http://localhost:5500/api/trainer/${id}`)
    const res = await axios.get("http://localhost:5500/api/trainer")
    this.setState({loading: false, trainers: res.data})
  }

  const postTrainer = async (obj) => {
    this.setState({loading: true})
    const res = await axios.post(`/api/trainer/`, obj)
    this.setState({loading: false, trainers:[...trainers,...res.data]})
  }

  const editTrainer = async (id, fixedTrainer) => {
    this.setState({loading: true})
    const res = await axios.patch(`/api/trainer/${id}`, fixedTrainer)
    console.log("this is res from the patch request", res)
    this.setState({loading: false, singleTrainer: null})
    this.componentDidMount()
  };


    const changeLoadingAndSingleTrainer = () => {
      this.setState({singleTrainer: null})
      this.setState({loading: false})
    }

    if(singleTrainer) {
      return <SingleTrainer singleTrainer={singleTrainer} editTrainer ={editTrainer} changeLoadingAndSingleTrainer={changeLoadingAndSingleTrainer}/>
    } else if(loading) {
      return <Loading />
    } else {
      return (
        <div>
          <MyHeader/>
          <PostForm postTrainer={postTrainer}/>
          <Trainer trainers={trainers} getTrainer={getTrainer} deleteTrainer={deleteTrainer}/>
        </div>
        
      );
      
        
       
    }
  } 
}
export default App;
