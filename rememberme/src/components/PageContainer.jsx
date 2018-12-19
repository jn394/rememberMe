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
        lastPicked: "",
        prompt: "Click an image to begin!"
    };

   gameLogic = (name) => {

        this.state.pickedCharacter = name
        console.log("Picked Character: " + this.state.pickedCharacter);
        console.log("Last Picked: " + this.state.lastPicked);

        if(this.state.pickedCharacter !== this.state.lastPicked) {
            this.shuffle();

            // Needed the first setState to change the score before the checkTopScore function to work 
            this.setState({ 
                prompt: "You Guessed Correctly!",
                score: this.state.score + 1,
                characters: this.state.characters }, () => {
                    this.checkTopScore(this.state.score);
            });

            console.log("Picked Character: " + this.state.pickedCharacter);
            
            this.state.lastPicked = this.state.pickedCharacter;
            console.log("Last Picked: " + this.state.lastPicked);
        }
        else {
            this.setState({
                prompt: "You Guseed Incorrectly!",
                score: 0
            });
        }
    };

    shuffle = () => {
        let currentIndex = this.state.characters.length;
        let temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            
            // And swap it with the current element.
            temporaryValue = this.state.characters[currentIndex];
            this.state.characters[currentIndex] = this.state.characters[randomIndex];
            this.state.characters[randomIndex] = temporaryValue;
        }
    };

    checkTopScore = (score) => {
        console.log("function is working");
        let newTopScore = this.state.topScore;
        (this.state.score > this.state.topScore) ? newTopScore = this.state.score : newTopScore = this.state.topScore;
        this.setState({topScore: newTopScore});
    };

    render() {
        return (
            <div id="PageContainer">
                <NavBar 
                    prompt={this.state.prompt}
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