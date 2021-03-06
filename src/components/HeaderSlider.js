import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import speakingPNG from '../images/speaking.png'
import thisIsUsPNG from '../images/this_is_us.png'

import CodeImage from './CodeImage'

class HeaderSlider extends Component {
  state = { mockWindowWidth: 0 }

  next = () => {
    this.slider.slickNext()
  }

  previous = () => {
    this.slider.slickPrev()
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }

    const { mockWindowWidth } = this.state

    return (
      <div>
        <Slider {...settings} ref={slider => (this.slider = slider)}>
          <div>
            <div style={{ position: 'relative' }}>
              <CodeImage width={mockWindowWidth} />
            </div>
            <div
              className="header-classic  wrapper-table overlay-01"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              <div className="valign-center">
                <div className="container">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="intro text-left">
                      <h1>Learn</h1>
                      <p className="subtitle">How To Code With Other Veterans.</p>
                      <div className="btn-cal-group">
                        {' '}
                        <Link to="/apply" className="btn btn-charity-default">
                          Apply
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ backgroundImage: `url(${speakingPNG})`, backgroundSize: 'cover' }}>
              <div className="header-classic  wrapper-table overlay-01">
                <div className="valign-center">
                  <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                      <div className="intro text-left">
                        <h1>Sign Up</h1>
                        <p className="subtitle">As A Mentor.</p>
                        <div className="btn-cal-group">
                          {' '}
                          <Link to="/mentor" className="btn btn-charity-default">
                            {' '}
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ backgroundImage: `url(${thisIsUsPNG})`, backgroundSize: 'cover' }}>
              <div className="header-classic wrapper-table overlay-01">
                <div className="valign-center">
                  <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                      <div className="intro text-right">
                        <h1 className="red">
                          <span className="red">Help Us</span>
                        </h1>
                        <p className="subtitle red">Teach More Veterans How To Code.</p>
                        <div className="btn-cal-group">
                          {' '}
                          <Link to="/donate" className="btn btn-charity-default">
                            Please Donate
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <ol className="flex-control-nav flex-control-paging">
          <li>
            <a className="">1</a>
          </li>
          <li>
            <a className="flex-active">2</a>
          </li>
          <li>
            <a className="">3</a>
          </li>
        </ol>
        <ul className="flex-direction-nav">
          <li className="flex-nav-prev" onClick={this.previous}>
            <a className="flex-prev" href="#">
              Previous
            </a>
          </li>
          <li className="flex-nav-next" onClick={this.next}>
            <a className="flex-next" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default HeaderSlider
