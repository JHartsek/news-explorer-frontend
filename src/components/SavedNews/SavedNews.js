import './SavedNews.css';

import NewsCard from '../NewsCard/NewsCard';
import sampleCardImg from '../../images/sample-card.jpg';

function SavedNews({ currentPage }) {
  return (
    <section className='saved-news'>
      <div className='saved-news__cards'>
        <NewsCard
          keyword='nature'
          date='November 4, 2020'
          imageUrl={sampleCardImg}
          title='Everyone Needs a Special "Sit Spot" in Nature'
          description={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
          source='treehugger'
          currentPage={currentPage}
        />
        <NewsCard
          keyword='nature'
          date='November 4, 2020'
          imageUrl={sampleCardImg}
          title='Everyone Needs a Special "Sit Spot" in Nature'
          description={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
          source='treehugger'
          currentPage={currentPage}
        />
        <NewsCard
          keyword='nature'
          date='November 4, 2020'
          imageUrl={sampleCardImg}
          title='Everyone Needs a Special "Sit Spot" in Nature'
          description={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
          source='treehugger'
          currentPage={currentPage}
        />
        <NewsCard
          keyword='nature'
          date='November 4, 2020'
          imageUrl={sampleCardImg}
          title='Everyone Needs a Special "Sit Spot" in Nature'
          description={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
          source='treehugger'
          currentPage={currentPage}
        />
        <NewsCard
          keyword='nature'
          date='November 4, 2020'
          imageUrl={sampleCardImg}
          title='Everyone Needs a Special "Sit Spot" in Nature'
          description={`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...`}
          source='treehugger'
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}

export default SavedNews;
