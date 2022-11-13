import { Header } from 'components/Header/Header';
import React, { Component } from 'react';
import { CardCreatorForm } from '../../components/Card_Creator_Form/Card_Creator_Form';

export class Forms extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="main-container">
          <div className="forms-page" data-testid="forms">
            <h1 className="forms-page__h1 h1">Forms page</h1>
            <CardCreatorForm />
          </div>
        </main>
      </>
    );
  }
}
