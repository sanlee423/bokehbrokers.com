import React, {Component} from 'react';
import {connectInfiniteHits} from 'react-instantsearch-dom';
import FilmHit, {FilmHits} from '../hitFilm/FilmHit';

interface InfiniteHitsInterface {
  hits: FilmHits;
  hasMore: boolean;
  refineNext: any;
}

type SentinelEntry = {
  isIntersecting: boolean;
};

class FilmInfiniteHits extends Component<InfiniteHitsInterface> {
  observer: IntersectionObserver | undefined;
  sentinel: HTMLLIElement | null | undefined;

  onSentinelIntersection = (entries: SentinelEntry[]) => {
    const {hasMore, refineNext} = this.props;

    entries.forEach(entry => {
      if (entry.isIntersecting && hasMore) {
        refineNext();
      }
    });
  };

  componentDidMount() {
    this.observer = new IntersectionObserver(this.onSentinelIntersection);

    if (this.sentinel) {
      this.observer.observe(this.sentinel);
    }
  }

  componentWillUnmount() {
    this.observer?.disconnect();
  }

  render() {
    const {hits} = this.props;
    return (
      <div className="ais-InfiniteHits">
        <ul className="ais-InfiniteHits-list">
          {hits.map(hit => (
            <li key={hit.objectID} className="ais-InfiniteHits-item">
              <FilmHit hit={hit} />
            </li>
          ))}
          <li
            className="ais-InfiniteHits-sentinel"
            ref={c => (this.sentinel = c)}
          />
        </ul>
      </div>
    );
  }
}

export default connectInfiniteHits(FilmInfiniteHits);
