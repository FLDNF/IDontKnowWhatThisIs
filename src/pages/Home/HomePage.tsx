import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as styles from './HomePage.less';

const image_test = require('~/static/images/image_test.jpg');

const Abc = styled.div`
  width: 100px;
  height: 100px;
  background: url(${image_test}) center top no-repeat;
`;

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to="/about" className={styles.content}>
          aaa
        </Link>
        <div className={styles.image} />
        <Abc />
        <img height={100} src={image_test} />
      </div>
    );
  }
}

export default HomePage;
