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
        lastPicked: "",
        prompt: "Click an image to begin!"
    };

   gameLogic = (name) => {

        console.log("Picked Character: " + name);
        console.log("Last Picked: " + this.state.lastPicked);

        if(name !== this.state.lastPicked) {

            this.shuffle(this.state.characters);

            let newTopScore = this.state.topScore;

            if (this.state.score + 1 > newTopScore) {
                newTopScore = this.state.score +1;
            }

            this.setState({ 
                prompt: "You Guessed Correctly!",
                score: this.state.score + 1,
                lastPicked: name,
                topScore: newTopScore });

        }
        else {
            this.setState({
                prompt: "You Guessed Incorrectly!",
                score: 0
            });
        }
    };

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.setState({characters: array});
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