import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer"
import friends from "./friends.json"

// const imageArr = ["./assets/img1.png", "./assets/img2.png","./assets/img3.png","./assets/img4.png",
// "./assets/img5.png","./assets/img6.png","./assets/img7.png","./assets/img8.png","./assets/img9.png",
// "./assets/img10.png","./assets/img11.png","./assets/img12.png"];

class App extends React.Component {
  state= {
    score:0,
    highscore:0,
    clicky:[]
  }

  highScore = () => {
    if(this.state.score>0 && this.state.score >= this.state.highscore){
      this.setState({highscore: this.state.score});
    }
  }

 clickCount = (id) => {
   console.log(id);
   console.log(this.state.clicky);
   console.log(this.state.clicky.includes(id));
    if(this.state.clicky.includes(id)){
      this.setState({score:0, clicky:[]})
    }else{
      this.setState({score: this.state.score+1})
      this.setState({clicky:[...this.state.clicky, id]});
      this.highScore();
      console.log(this.state.clicky);
    }
 }

  render(){
  return (
    <div>
      <Navbar score={this.state.score} highscore={this.state.highscore}/>
      <Header />
      {friends.map(friend => {
        return (
          <Card 
          clickCount={this.clickCount}
          name={friend.name}
          id={friend.id}
          image={friend.image}
          key={friend.id}/>
        )})}
      <Footer />
    </div>
  );
  }
}

export default App;
