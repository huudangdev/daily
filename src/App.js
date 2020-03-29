import React, { Component } from 'react'
import './App.css'
import ReactCardFlip from 'react-card-flip'
import data from './text.json'
import Flexbox from 'flexbox-react'

const randomInt = (min, max) => {
  return min + Math.floor((max - min) * Math.random())
}

const initialFlipping = [false, false, false, false, false]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFlipped: initialFlipping,
      mockData: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  initMockData () {
    const numRan = []
    let i = 0
    while (i < 5) {
      const tmp = randomInt(0, data.length)
      let flag = 0
      for (let j = 0; j < i - 1; j++) {
        if (tmp === numRan[j]) {
          flag = 1
          break
        }
      }
      if (flag === 0) {
        numRan.push(tmp)
        i++
      }
    }
    const tmp = numRan.map((value) => {
      return data[value]
    })
    this.setState({ mockData: tmp })
  }

  handleClick (index) {
    const tmp = this.state.isFlipped
    tmp[index] = !tmp[index]
    this.setState({ isFlipped: tmp })
  }

  componentDidMount () {
    this.initMockData()
  }

  render () {
    return (
      <Flexbox flexDirection='column' minHeight='100vh'>
        <Flexbox element='header' height='100px'>
          <div className='fixed-top'>
            <nav className='navbar navbar-expand-lg navbar-dark mx-background-top-linear' style={{ backgroundColor: '#e3f2fd' }}>
              <div className='container'>
                <a className='navbar-brand' href='/'><h6 className='g-color-white-opacity-0_8 g-font-size-13'> VỒ CÁ BU LA RI CỦA CAM </h6></a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                  <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>

                  <ul className='navbar-nav ml-auto'>

                    <li className='nav-item active'>
                      <a className='nav-link' href='/'>Home
                        <span className='sr-only'>(current)</span>
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a className='nav-link' href='/'>About</a>
                    </li>

                    <li className='nav-item'>
                      <a className='nav-link' href='/'>Blog</a>
                    </li>

                    <li className='nav-item'>
                      <a className='nav-link' href='/'>Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </Flexbox>

        <Flexbox flexGrow={1}>
          <div className='container'>
            <div className='outer'>
              <div className='inner rotate'><h6 className='g-color-white-opacity-0_8 g-font-size-13'>S e e . m o r e ?. C l i c k . o n . t h e . c a r d</h6></div>
            </div>
            <div className='row justify-content-md-center'>
              {this.state.mockData.map((value, index) => {
                return (
                  <div className='col col-md-4' key={index}>
                    <ReactCardFlip
                      isFlipped={this.state.isFlipped[index]}
                      flipSpeedBackToFront={2}
                      flipSpeedFrontToBack={2}
                      key={index}
                    >
                      <div className='card text-center' style={{ width: 200, height: 220 }} onClick={() => this.handleClick(index)}>
                        <div className='card-header'>
                        W O R D {index + 1}
                        </div>
                        <div className='card-body'>
                          <h3 className='g-color-white-opacity-0_8 g-font-size-13'>{value['Tiếng Anh']}</h3>
                          <h6 className='card-subtitle mb-2 text-muted'>{value['Phiên âm']}</h6>
                          <h6 className='blockquote-footer'>Type: <cite title='Source Title' style={{ textTransform: 'uppercase' }}>{value['Loại từ']}</cite></h6>
                          {/* {value['Đồng nghĩa'] && <p className='card-text'><i>synonym:</i> {value['Đồng nghĩa']}</p>} */}
                        </div>
                      </div>

                      <div className='card text-center' style={{ width: 200, height: 220 }} onClick={() => this.handleClick(index)}>
                        <div className='card-header'>
                        W O R D {index + 1}
                        </div>
                        <div className='card-body'>
                          <h5 className='card-title'>{value['Tiếng Anh']}</h5>
                          <h6 className='card-subtitle mb-2 text-muted'>{value['Phiên âm']}</h6>
                          <p className='card-text'>{value['Tiếng Việt']}</p>
                        </div>
                      </div>
                    </ReactCardFlip>
                  </div>
                )
              })}
            </div>
          </div>
          <button type='button' className='btn btn-outline-info' href='/' onClick={() => this.initMockData()}>NEXT</button>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default App
