import React, { Component } from 'react';
import Episode from './Episode/Episode';
import Spinner from '../Spinner/Spinner';
import './Episodes.scss';
import '../../index.scss';

export default class Episodes extends Component {

  state = {
    isLoading: true,
    episodes: [],
    error: null,
    activeEpisode: '',
    isShowing: false
  }

  fetchEpisodes() {
    fetch('https://feed.podbean.com/kryptopojkarna/feed.xml')
      .then(response => response.text())
      .then(data => {
        const parseString = require('xml2js').parseString;
        parseString(data, { compact: true }, function (err, result) {
          data = result.rss.channel[0].item;
        });
        this.setState({
          episodes: data,
          isLoading: false,
        })
      }).catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchEpisodes();
  }

  onPlay = title => {
    const { episodes } = this.state;
    const episode = episodes.filter( item => {
      return item.title === title && item
    }) 
    this.setState({
      activeEpisode: episode.map(item => {
        return item
      })
    })
    this.props.getEpisode(episode);
  }
  
  render() {
    const { isLoading, episodes, error } = this.state;
    return (
      <>
        <div className="episodes-info">
          <h1 className="section-heading">Avsnitt</h1>
          <p className="bread">Här hittar du alla avsnitt vi har spelat in. Nya avsnitt kommer allt eftersom.
          </p>
          {error ? <p>{error.message}</p> : null}
        </div>
        <div className="episodes">
          {!isLoading ? (
            episodes.map((episode, index) => {
              return (
                  <Episode
                    key={index}
                    title={episode.title}
                    image={episode["media:content"][0].$.url}
                    date={episode.pubDate}
                    description={episode["itunes:summary"]}
                    audio={episode.enclosure._attributes}
                    onPlay={this.onPlay}
                    />
              );
            })
          ) : <Spinner />}
        <div className="spacer"></div>
        </div>  
      </>
    );
  }
}