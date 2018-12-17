import React, { Component } from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Card from './Card';
import characters from '../characters.json';

class PageContainer extends Component {

    state = {
        characters,
        score: 0,
        topScore: 0,
        pickedCharacter,
        lastPicked
    };

   gameLogic = () => {

    if(pickedCharacter !== lastPicked) {
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

        this.setState({ score: this.state.score + 1 });
        this.setState({ characters });
    }
    else {
        console.log("Its the same!!")
    }
    };


    render() {
        return (
            <div>
                <NavBar 
                    score={this.state.score}
                    topScore={this.state.topScore} 
                />
                
                <Jumbotron />

                <div className="container">
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