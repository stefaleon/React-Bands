import React, { Component } from 'react';
import Navbar from './Navbar';
import BandList from './BandList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      bands: [
        {
          name: "The Clash",
          members: [ 'Joe', 'Mick', 'Paul', 'Topper'],
          story: "The Clash were an English rock band formed in London in 1976 as part of the original wave of British punk rock.They have also contributed to the post-punk and new wave movements that emerged in the wake of punk and employed elements of a variety of genres including reggae, dub, funk, ska and rockabilly.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Clash_21051980_12_800.jpg/600px-Clash_21051980_12_800.jpg"
        },
        {
          name: "Ramones",
          members: [ 'Johnny', 'Dee Dee', 'Tommy', 'Joey'],
          story: "The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens, in 1974. They are often cited as the first band to define the punk rock sound. Despite achieving only limited commercial success, the band was vastly influential in both the United States and the United Kingdom, inspiring also the emergence of hardcore punk, pop punk, and alternative rock.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ramones_Toronto_1976.jpg/450px-Ramones_Toronto_1976.jpg"
        },
        {
          name: "Bad Religion",
          members: [ 'Greg', 'Brett', 'Jay', 'Jay'],
          story: "Bad Religion is an American punk rock band that formed in Los Angeles, California, in 1980. They make extensive use of three-part vocal harmonies (which they refer to in their album liner notes as the 'oozin' aahs') and guitar solos, and their lyrics cover many topics, including criticism of religion, political commentary, society in general, dark humor, anti-racism, drugs, freedom, death, personification and equal rights.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bad_Religion_2004-5-7.jpg/500px-Bad_Religion_2004-5-7.jpg"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <BandList bands={this.state.bands} />
      </div>
    );
  }
}

export default App;
