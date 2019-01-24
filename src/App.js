import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer"
import friends from "./friends.json"

// function shuffleArray(arr) {
//   var i,j,temp;
//   for (i = arr.length - 1; i > 0; i--) {
//       j = Math.floor(Math.random() * (i + 1));
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//   }
//   return arr;    
// }

// var tempFriend = shuffleArray(friends);
// const imageArr = ["./assets/img1.png", "./assets/img2.png","./assets/img3.png","./assets/img4.png","./assets/img5.png","./assets/img6.png","./assets/img7.png","./assets/img8.png","./assets/img9.png","./assets/img10.png","./assets/img11.png","./assets/img12.png"];

class App extends React.Component {
  state= {
    score:0,
    highscore:0,
    clicky:[],
    friends
  }

  shuffleArray = (arr) => {
    let i,j,temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
  }
  
  // tempFriend = shuffleArray(friends);

  highScore = () => {
    if(this.state.score>=0 && this.state.score >= this.state.highscore){
      this.setState({highscore: this.state.score});
    }
  }

 clickCount = (id) => {
   console.log(id);
   console.log(this.state.clicky);
   console.log(this.state.clicky.includes(id));
    if(this.state.clicky.includes(id)=== false){
      this.setState({score: this.state.score+1})
      this.setState({clicky:[...this.state.clicky, id]});
      this.setState({friends:this.shuffleArray(friends)})
      // this.highScore();
      console.log(this.state.clicky);
    }else{
      this.setState({score:0, clicky:[]});
      this.highScore();
    }
 }

  render(){
  return (
    <div className="container">
      <Navbar score={this.state.score} highscore={this.state.highscore}/>
      <Header />
      {friends.map(friend => {
        return (
          <Card 
          highScre={this.highScore}
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
