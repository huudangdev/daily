import React, { Component } from 'react'
import Flexbox from 'flexbox-react'

import Navbar from '../components/Navbar'
import Card from '../components/Card'

import data from '../text.json'
import { randomInt } from '../utils/randomInt'

const initialFlipping = [false, false, false, false, false]

class HomePage extends Component {
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
          <Navbar />
        </Flexbox>

        <Flexbox flexGrow={1}>
          <div className='container'>
            <div className='outer'>
              <div className='inner rotate'><h6 className='g-color-white-opacity-0_8 g-font-size-13'>S e e . m o r e ?. C l i c k . o n . t h e . c a r d</h6></div>
            </div>
            <div className='row justify-content-md-center'>
              {this.state.mockData.map((value, index) => {
                return (
                  <Card value={value} index={index} isFlipped={this.state.isFlipped[index]} key={index} handleClick={this.handleClick} />
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

export default HomePage
