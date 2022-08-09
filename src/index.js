// 1) librarias
import React from 'react';
import './style/App.css';
import { createRoot } from 'react-dom/client';
import { faker } from '@faker-js/faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h1>seguro de este paso?</h1>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dan"
          timeAgo="Hoy a las 14:25"
          text="Mensaje de contenido"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Isa"
          timeAgo="Ayer a las 19:50"
          text="Mensaje de contenido 2"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sof"
          timeAgo="Hoy a las 10:05"
          text="Mensaje de contenido 3"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
