import React from 'react'
import { TroopsAtGoogleImage  } from '../../src/components/TroopsAtGoogle'
import { render, cleanup } from "react-testing-library"

afterEach(cleanup)

describe('<TroopsAtGoogle />', () => {
  let wrapper
  const data = {
    file: {
      childImageSharp: {
        fluid: {
          aspectRatio: 600,
          src: 'some-source-here',
          srcSet: 'some-source-here',
          sizes: '',
          base64: '',
        }
      },
    },
  }

  beforeEach(() => wrapper = render(<TroopsAtGoogleImage data={data}/>))

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})