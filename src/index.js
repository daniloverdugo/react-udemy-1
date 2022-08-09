// 1) librarias
import React from 'react';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.fullName({ sex: 'female' })}
          </a>
          <div className="metadata">
            <span className="date">Hoy a las 10:00</span>
          </div>
          <div className="text">{faker.lorem.sentence(6)}</div>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
