import React, { Component } from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Card from './Card';
import characters from '../characters.json';
import './PageContainer.css';

class PageContainer extends Component {

    state = {
        characters,
        score: 0,
        topScore: 0,
        pickedCharacter: "",
        lastPicked: ""
    };

   gameLogic = (name) => {

        this.state.pickedCharacter = name
        console.log("Picked Character: " + this.state.pickedCharacter);
        console.log("Last Picked: " + this.state.lastPicked);

        if(this.state.pickedCharacter !== this.state.lastPicked) {
            let currentIndex = characters.length;
            let temporaryValue, randomIndex;
            
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                
                // And swap it with the current element.
                temporaryValue = characters[currentIndex];
                characters[currentIndex] = characters[randomIndex];
                characters[randomIndex] = temporaryValue;
            }
            

            // if (this.score > this.topScore){
            //     this.topScore = this.score;
            // }
            // else {
            //     this.topScore = this.topScore;
            // }



            this.setState({ 
                score: this.state.score + 1,
                characters,
                topScore: this.state.score
            });



            
            // this.checkTopScore(this.state.score);




            console.log("Picked Character: " + this.state.pickedCharacter);
            
            this.state.lastPicked = this.state.pickedCharacter;
            console.log("Last Picked: " + this.state.lastPicked);
        }
        else {
            console.log("You already Picked that Character!!!");
            this.setState({score: 0});
        }
    };

    // checkTopScore = (score) => {
    //     console.log("function is working")
    //     if (score > this.state.topScore) {
    //         this.setState({topScore: score + 1});
    //     }
    // };

    render() {
        return (
            <div id="PageContainer">
                <NavBar 
                    score={this.state.score}
                    topScore={this.state.topScore} 
                />
                
                <Jumbotron />

                <div id="cardContainer" className="container">
                    {this.state.characters.map(character => (
                        <Card
                            id={character.id}
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            gameLogic={this.gameLogic}
                        />
                    ))}
                </div>
                
                <Footer />
            </div >
        );
    };
}

export default PageContainer;