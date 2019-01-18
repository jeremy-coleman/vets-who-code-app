import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import thisIsUs from '../images/this_is_us.png'

export default class Mentor extends Component {
  state = {
    name: '',
    email: '',
    'branch-of-service': '',
    'technical-expertise': '',
    'github-portfolio-or-linkedin': '',
    location: '',
    'employer-restrictions': '',
    message:
      'Thank you for choosing to become a mentor for our veterans. ' +
      'Please fill out the form below and we will reach out to you.',
    formHeading: 'Mentor Application',
    loading: false,
    formSuccess: false,
    formError: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  resetForm = () => ({
    name: '',
    email: '',
    'branch-of-service': '',
    'technical-expertise': '',
    'github-portfolio-or-linkedin': '',
    location: '',
    'employer-restrictions': '',
  })

  handleSubmit = e => {
    e.preventDefault()
    //const gatewayUrl = 'https://eec3hqm275.execute-api.us-east-1.amazonaws.com/prod/mentor'
    const gatewayUrl = ''
    const options = {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        'branch-of-service': this.state['branch-of-service'],
        'technical-expertise': this.state['technical-expertise'],
        'github-portfolio-or-linkedin': this.state['github-portfolio-or-linkedin'],
        location: this.state.location,
        'employer-restrictions': this.state['employer-restrictions'],
      }),
    }
    fetch(gatewayUrl, options)
      .then(resp => {
        if (resp.ok) {
          const message =
            'Your application has been submitted successfully! ' +
            'We look forward to contacting you soon.'
          const formHeading = 'Thank You'
          this.setState({ message, formSuccess: true, formHeading })
        }
      })
      .catch(() => {
        const formHeading = 'OOPS Some thing went wrong'
        this.setState({ message, formError: true, formHeading })
      })

    this.setState(this.resetForm)
  }

  render() {
    const { formSuccess, message, formError, loading, formHeading } = this.state

    return (
      <Layout>
        <header
          className="inner-header overlay grey text-center slim-bg "
          style={{
            backgroundImage: `url(${thisIsUs})`,
            backgroundPositionY: 'bottom',
          }}
        >
          <div className="overlay-01" />
          <div className="container">
            <h2 className="text-center text-uppercase">Mentor</h2>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/mentor" className="page-active">
                Mentor
              </Link>
            </div>
          </div>
        </header>
        <div className="pad-regular bg-default">
          <section id="contact" className="section bg-default">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="contactus-brief">
                    <h3>Become A Mentor</h3>
                    <p className="section-description">
                      Thank you for your interest in mentoring with VetsWhocode. This document is
                      intended to share our philosophy on mentoring. We ask mentors to address the
                      technical, professional and personal needs of students. Here is more detail on
                      each of these areas:
                    </p>
                    <div className="container">
                      <h4>Our Philosophy</h4>
                      <div
                        className="panel-group faq_list"
                        id="main-guidelines"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="mentorHeadingOne">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#main-guidelines"
                                href="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                              >
                                {' '}
                                <b>Technical:</b> Mentors will assist students in understanding the
                                technical aspects of software development and coding.
                                <i className="fa fa-plus accordions-derective-icon pull-right" />
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseOne"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="mentorHeadingOne"
                          >
                            <div className="panel-body">
                              <ul>
                                <li>Code reviews</li>
                                <li>Best practices</li>
                                <li>Finding resources and tutorials for learning</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="mentorHeadingTwo">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#main-guidelines"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                {' '}
                                <b>Professional:</b> Mentors will help students understand the
                                professional aspects of working in the field of software
                                development.
                                <i className="fa fa-plus accordions-derective-icon pull-right" />
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseTwo"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="mentorHeadingTwo"
                          >
                            <div className="panel-body">
                              <ul>
                                <li>
                                  What it means to be a member of a team of software developers
                                </li>
                                <li>
                                  Building your virtual resume (GitHub, personal website, social
                                  media)
                                </li>
                                <li>Job application and interviewing</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="mentorHeadingThree">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#main-guidelines"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                {' '}
                                <b>Personal:</b> Get to know students on a personal level.
                                <i className="fa fa-plus accordions-derective-icon pull-right" />
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseThree"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="mentorHeadingThree"
                          >
                            <div className="panel-body">
                              <ul>
                                <li>
                                  Be sensitive to any personal/life needs a student may have. We are
                                  not mental health professionals so
                                </li>
                                <li>
                                  Be prepared to spot issues and involve VetsWhoCode leadership{' '}
                                </li>
                                <li>
                                  If there are signs a person might be a danger to themselves or
                                  others
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        In addition to the three areas addressed above here are a few other items to
                        consider.
                      </p>
                      <div
                        className="panel-group faq_list"
                        id="additional-guidelines"
                        role="tablist"
                        aria-multiselectable="true"
                      >
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="mentorHeadingFour">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#additional-guidelines"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                {' '}
                                <b>Establishing goals: </b> As a mentor, you should understand your
                                assigned mentee’s goals. Talk with them about how you can best help
                                them accomplish those goals.
                                <i className="fa fa-plus accordions-derective-icon pull-right" />
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseFour"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="mentorHeadingFour"
                          >
                            <div className="panel-body">
                              <ul>
                                <li>
                                  Assist with finding resources such as people, books, articles,
                                  tools and web-based information
                                </li>
                                <li>
                                  Imparting knowledge and skills by explaining, giving useful
                                  examples, demonstrating processes and asking thought-provoking
                                  questions{' '}
                                </li>
                                <li>
                                  Helping her or him gain broader perspectives of the field of
                                  software development and what area they might like to work in or
                                  focus on (front end, back end, devops ect)
                                </li>
                                <li>
                                  Discussing actions you’ve taken in your career and explaining your
                                  rationale
                                </li>
                                <li>
                                  Introduce him or her to your colleagues who can be additional
                                  useful contacts or inspiring models
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="mentorHeadingFive">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                role="button"
                                data-toggle="collapse"
                                data-parent="#additional-guidelines"
                                href="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                {' '}
                                <b>Your Role: </b> You will not be the expert on all your mentee’s needs. Many mentors find it
                                difficult when they do not have all the answers.
                                <i className="fa fa-plus accordions-derective-icon pull-right" />
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapseFive"
                            className="panel-collapse collapse"
                            role="tabpanel"
                            aria-labelledby="mentorHeadingFive"
                          >
                            <div className="panel-body">
                              <ul>
                                <li>
                                  Your role is that of a learning facilitator early in your
                                  relationship.
                                </li>
                                <li>
                                  Tell your mentee that you will not have all the answers, and you
                                  are looking forward to learning together as well as seeking help
                                  from others who are more expert on different topics.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4>Time Commitment</h4>
                      <p>
                        After being formally assigned a mentee we ask mentors to set up a time for
                        an initial chat with their mentee to discuss their needs and generally get
                        to know one another. After this initial meeting, we ask that our mentors
                        check in with their mentee at least once a week to inquire about their
                        progress and if the students have any issues.
                      </p>
                      VetsWhoCode is a virtual organization and Slack is the primary vehicle for
                      communication and activity. We ask mentors to be available in Slack to
                      students and to use slack as a way to check in with mentees on a weekly basis.
                      Mentors and students may also use email or video chat to communicate with one
                      another. Please work with your mentee to establish the best frequency and
                      method of communication for you both.
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="section bg-default">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="contactus-brief">
                    <h3>{formHeading}</h3>
                    <p className={formSuccess ? 'alert alert-success' : 'section-description'}>
                      {message}
                    </p>
                    {formError && (
                      <p className="alert alert-danger fade-in">
                        There was an error trying to submit your application. Please try again.
                    </p>
                    )}
                    {!formSuccess && (
                      <form id="s2do-form" onSubmit={this.handleSubmit}>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputName" className="dark-text">
                              Name
                            <sup>*</sup>
                            </label>
                            <input
                              className="form-control input-lg"
                              type="text"
                              placeholder="Name"
                              name="name"
                              id="name"
                              value={this.state.name}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputEmail" className="dark-text">
                              Email
                            <sup>*</sup>
                            </label>
                            <input
                              className="form-control input-lg"
                              type="email"
                              id="email"
                              placeholder="Email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputService" className="dark-text">
                              Military Branch Of Service
                            <sup>*</sup>
                            </label>
                            <input
                              className="form-control input-lg"
                              type="text"
                              placeholder="Thank you for your service"
                              name="branch-of-service"
                              value={this.state['branch-of-service']}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputTechnicalExpertise" className="dark-text">
                              Area Of Technical Expertise ( Javascript, Ruby, etc)
                            <sup>*</sup>
                            </label>
                            <input
                              className="form-control input-lg"
                              type="text"
                              placeholder="What languages you write in?"
                              name="technical-expertise"
                              value={this.state['technical-expertise']}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputPortfolio" className="dark-text">
                              Github, Portfolio or Linkedin
                            <sup>*</sup>
                            </label>
                            <input
                              className="form-control input-lg"
                              type="text"
                              placeholder="Share your work"
                              name="github-portfolio-or-linkedin"
                              value={this.state['github-portfolio-or-linkedin']}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputLocation" className="dark-text">
                              Location ( City and State )<sup>*</sup>
                            </label>
                            <input
                              className="form-control input-lg"
                              type="text"
                              placeholder="Location"
                              name="location"
                              value={this.state.location}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <label htmlFor="InputEmployerImplementedRestricted" className="dark-text">
                              Employer Implemented Restrictions, If Any.
                          </label>
                            <textarea
                              className="form-control"
                              rows="7"
                              placeholder="Please put here any employer restrictions about writing and reading code?"
                              name="employer-restrictions"
                              value={this.state['employer-restrictions']}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="form-group">
                            <input
                              type="submit"
                              name="submit"
                              value={loading ? 'loading...' : 'submit'}
                              href="#"
                              className="btn btn-charity-default"
                              title=""
                            />
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
