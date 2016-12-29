import React from 'react';
import * as deps from '../../deps';

const Content = () => (
  <div className="columns is-multiline">
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src="http://placehold.it/90x90" alt="Push Notifications icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Push Notifications</h2>
                <p>
                  WordPress out of the box is already technically quite a good platform for SEO, this was true when Joost wrote his original WordPress SEO article in 20 …
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src="http://placehold.it/90x90" alt="Ads icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Ads</h2>
                <p>
                  WordPress out of the box is already technically quite a good platform for SEO, this was true when Joost wrote his original WordPress SEO article in 20 …
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src="http://placehold.it/90x90" alt="Analytics icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Analytics</h2>
                <p>
                  WordPress out of the box is already technically quite a good platform for SEO, this was true when Joost wrote his original WordPress SEO article in 20 …
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
    <div className="column is-5 is-12-mobile is-half-tablet">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="columns is-mobile">
            <div className="column is-3">
              <img src="http://placehold.it/90x90" alt="Rate my App icon" />
            </div>
            <div className="column is-9">
              <div className="content">
                <h2>Rate my App</h2>
                <p>
                  WordPress out of the box is already technically quite a good platform for SEO, this was true when Joost wrote his original WordPress SEO article in 20 …
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          <span className=" card-footer-item"><strong><small>Coming soon</small></strong></span>
        </footer>
      </div>
    </div>
  </div>
);

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer>
      <h1>Extensions</h1>
      <hr />
      <Content />
    </RootContainer>
  );
};
