import React, { Components } from 'react';
import {
  CCarouselItem, CImage, CCarouselCaption, CCarousel
} from '@coreui/react';

class Home extends Components {
  render() {
    return (
      <div>
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100 h-50" src="https://images.unsplash.com/photo-1634323026799-f2351f5f3a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80" alt="slide 1" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 h-50" src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80" alt="slide 2" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 h-50" src="https://images.unsplash.com/photo-1634461093847-de2660fc7caf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="slide 3" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
    );
  }
}

export default Home;
